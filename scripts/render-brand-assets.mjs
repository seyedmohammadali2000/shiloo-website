import { chromium } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Rebuild the share image from local fonts and original vector artwork.
// Run: node scripts/render-brand-assets.mjs
const font = await readFile(
  new URL(
    "../node_modules/@fontsource/vazirmatn/files/vazirmatn-arabic-700-normal.woff2",
    import.meta.url,
  ),
);
const art = await readFile(
  new URL("../public/images/case-learning.svg", import.meta.url),
  "utf8",
);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(`<!doctype html><html lang="fa" dir="rtl"><head><style>
    @font-face{font-family:Vazir;src:url(data:font/woff2;base64,${font.toString("base64")}) format('woff2');font-weight:700}
    *{box-sizing:border-box}body{margin:0;background:#f8f7f3;color:#182b2d;font-family:Vazir,Arial,sans-serif;width:1200px;height:630px;padding:58px 65px;position:relative;overflow:hidden}
    .top{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #d9ded1;padding-bottom:22px}.brand{font-size:38px;color:#285c61}.brand small{font-family:Arial,sans-serif;font-size:12px;letter-spacing:5px;margin-right:20px}.note{font-size:13px;color:#728370}h1{font-size:64px;line-height:1.7;margin:55px 0 15px;position:relative;z-index:1}h1 span{color:#285c61}h1 i{font-style:normal;color:#b89865}.text{font-size:19px;color:#69806c}.art{position:absolute;left:-28px;top:150px;width:650px;z-index:0}.art svg{width:100%;height:auto}.bottom{position:absolute;bottom:40px;right:65px;left:65px;font:10px Arial,sans-serif;letter-spacing:3px;border-top:1px solid #d9ded1;padding-top:20px;color:#7d8c77;direction:ltr}
  </style></head><body><div class="top"><div class="brand">شیلو<small>SHILOO</small></div><div class="note">انسان × سیستم × مسئله × بازی</div></div><div class="art">${art}</div><h1>فهم رفتار،<br/><span>طراحی تغییر<i>.</i></span></h1><div class="text">معماری رفتار | گیمیفیکیشن | حل مسئله</div><div class="bottom">HUMAN-CENTERED. SYSTEM-MINDED.</div></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: fileURLToPath(new URL("../public/images/og.png", import.meta.url)),
  });
  console.log("Created public/images/og.png (1200 × 630)");
} finally {
  await browser.close();
}
