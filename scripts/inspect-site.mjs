import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";

const origin = process.env.INSPECT_URL || "http://localhost:3000";
const browser = await chromium.launch();
await mkdir("test-results/visual", { recursive: true });
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => console.log("PAGE ERROR:", error.message));
  page.on("console", (message) => {
    if (message.type() === "error")
      console.log("CONSOLE ERROR:", message.text());
  });
  const audits = [];
  for (const route of [
    "/",
    "/services",
    "/method",
    "/case-studies",
    "/academy",
    "/about",
    "/contact",
  ]) {
    await page.goto(`${origin}${route}`);
    await page.evaluate(() => document.fonts.ready);
    // Load all lazy images before capturing the complete page.
    for (const image of await page.locator("img").all())
      await image.scrollIntoViewIfNeeded();
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    audits.push({
      route,
      violations: results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    if (route === "/" || route === "/contact") {
      await page.screenshot({
        path: `test-results/visual/${route === "/" ? "home" : "contact"}-desktop.png`,
        fullPage: true,
      });
      await page.screenshot({
        path: `test-results/visual/${route === "/" ? "home" : "contact"}-viewport.png`,
      });
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: "test-results/visual/home-mobile.png",
    fullPage: true,
  });
  await page.screenshot({
    path: "test-results/visual/home-mobile-viewport.png",
  });
  await page.getByRole("button", { name: "باز کردن منو" }).click();
  console.log(
    "Mobile menu open:",
    await page.locator("dialog").evaluate((d) => d.open),
  );
  await page.screenshot({ path: "test-results/visual/menu-mobile.png" });
  await writeFile(
    "test-results/visual/accessibility.json",
    JSON.stringify(audits, null, 2),
  );
  console.log(
    JSON.stringify(
      audits.map((a) => ({
        route: a.route,
        violations: a.violations.map((v) => ({
          id: v.id,
          count: v.nodes.length,
        })),
      })),
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
