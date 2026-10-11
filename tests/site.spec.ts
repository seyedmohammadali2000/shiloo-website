import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/services",
  "/method",
  "/case-studies",
  "/academy",
  "/about",
  "/contact",
  "/case-studies/learning-experience",
  "/case-studies/organizational-engagement",
  "/case-studies/interactive-event",
];

test("pages and mobile menu pass automated accessibility checks", async ({
  page,
}) => {
  test.setTimeout(90000);
  for (const route of routes) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      route,
    ).toEqual([]);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "باز کردن منو" }).click();
  const menuResult = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    menuResult.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
});
test("all pages render accessible landmarks, metadata and real contact details", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "fa");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
    await expect(page.locator('footer a[href="tel:+989361167048"]')).toHaveText(
      "00989361167048",
    );
    await expect(
      page.locator('footer a[href="mailto:sma.altaha.2000@gmail.com"]'),
    ).toBeVisible();
    for (const image of await page.locator("img").all()) {
      await expect(image).toHaveAttribute("alt", /.+/);
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
          ),
        )
        .toBeTruthy();
    }
  }
  expect(errors).toEqual([]);
});

for (const width of [360, 768, 1440]) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        route,
      ).toBeTruthy();
    }
  });
}

test("mobile menu closes on navigation and Escape and traps keyboard focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "باز کردن منو" });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  for (let i = 0; i < 15; i++) await page.keyboard.press("Tab");
  expect(
    await page.evaluate(() => !!document.activeElement?.closest("dialog")),
  ).toBeTruthy();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await dialog.getByRole("link", { name: "خدمات", exact: false }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(dialog).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
});

test("contact validates required fields and Persian phone, and honestly confirms demo mode", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "ارسال درخواست" }).click();
  await expect(page.getByLabel("نام و نام خانوادگی")).toBeFocused();
  await expect(
    page.getByText("نام و نام خانوادگی را کامل وارد کنید."),
  ).toBeVisible();
  await page.getByLabel("نام و نام خانوادگی").fill("کاربر آزمایشی");
  await page.getByLabel("شماره تماس", { exact: false }).fill("۰۹۳۶۱۱۶۷۰۴۸");
  await page.getByLabel("حوزه مسئله").selectOption("آزمایشگاه مسئله");
  await page
    .getByLabel("توضیح کوتاه درباره مسئله")
    .fill("می‌خواهم مسئله مشارکت اعضای تیم را بهتر بفهمم.");
  await page.getByRole("radio", { name: "ایمیل", exact: true }).check();
  await page.getByRole("button", { name: "ارسال درخواست" }).click();
  await expect(
    page.getByText("برای دریافت پاسخ از طریق ایمیل، نشانی ایمیل را وارد کنید."),
  ).toBeVisible();
  await page.locator('input[name="email"]').fill("test@example.com");
  let submittedToNetwork = false;
  page.on("request", (request) => {
    if (request.method() === "POST") submittedToNetwork = true;
  });
  const consoleMessage = page.waitForEvent("console", (msg) =>
    msg.text().includes("demo contact request"),
  );
  await page.getByRole("button", { name: "ارسال درخواست" }).click();
  await consoleMessage;
  await expect(page.getByRole("status")).toContainText(
    "برای شیلو ارسال نشده است",
  );
  await expect(page.getByRole("status")).toBeFocused();
  expect(submittedToNetwork).toBe(false);
  await page.getByRole("button", { name: "تکمیل فرم جدید" }).click();
  await expect(page.getByLabel("نام و نام خانوادگی")).toHaveValue("");
});

test("academy and services preserve enquiry context", async ({ page }) => {
  await page.goto("/academy");
  await page
    .getByRole("link", { name: "اطلاع از برگزاری دوره" })
    .first()
    .click();
  await expect(page.getByLabel("حوزه مسئله")).toHaveValue("آکادمی شیلو");
  await expect(page.getByLabel("توضیح کوتاه درباره مسئله")).toHaveValue(
    /مبانی گیمیفیکیشن/,
  );
  await page.goto("/services");
  await page
    .getByRole("link", { name: "گفت‌وگو درباره این خدمت" })
    .first()
    .click();
  await expect(page.getByLabel("حوزه مسئله")).toHaveValue(
    "گیمیفیکیشن و طراحی رفتار",
  );
});

test("case studies show demo status and no fabricated evidence", async ({
  page,
}) => {
  await page.goto("/case-studies");
  await expect(
    page.getByText("نمونه ساختار Case Study", { exact: true }),
  ).toHaveCount(4);
  await page
    .getByRole("link", { name: /طراحی تجربه یادگیری برای یک مجموعه آموزشی/ })
    .click();
  await expect(page).toHaveURL(/learning-experience$/);
  await expect(
    page.getByText(/هنوز شواهدی برای انتشار ثبت نشده است/),
  ).toBeVisible();
  await expect(page.locator("blockquote")).toHaveCount(0);
});

test("diagram controls work with keyboard and unknown pages return 404", async ({
  page,
}) => {
  await page.goto("/");
  const control = page.getByRole("button", { name: "سیستم SYSTEM" });
  await control.focus();
  await expect(control).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".concept-detail")).toHaveText(
    "فرایند، شاخص، ابزار، محیط",
  );
  const response = await page.goto("/case-studies/not-a-case-study");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "این مسیر به صفحه‌ای نمی‌رسد.",
  );
});
