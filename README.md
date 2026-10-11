# شیلو | SHILOO

وب‌سایت فارسی RTL با Next.js App Router، TypeScript، Tailwind CSS و Framer Motion. فونت Vazirmatn از بسته محلی بارگذاری می‌شود.

## اجرا

نیازمندی: Node.js نسخه 20.9 یا بالاتر (Node 20.19.5 در زمان ساخت استفاده شد).

```sh
npm ci
npm run dev
```

آدرس توسعه: http://localhost:3000

اگر پورت ۳۰۰۰ در محیط شما اشغال است، از `npm run dev -- --port 3100` و آدرس http://localhost:3100 استفاده کنید.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## بررسی مرورگر

```sh
npx playwright install chromium
npm run test:e2e
```

تست‌ها سرور توسعه را روی پورت 3100 اجرا می‌کنند و مسیرها، فرم، منوی موبایل، لینک دوره‌ها و سرریز افقی را می‌سنجند.

## محتوا و تحویل

تمام اطلاعات تماس از `src/data/site-config.ts` خوانده می‌شود. برای جایگزینی محتوا، [CONTENT-REPLACEMENT-GUIDE.md](./CONTENT-REPLACEMENT-GUIDE.md) را بخوانید.

فرم در حالت پیش‌فرض دمو است: اعتبارسنجی و ثبت در کنسول مرورگر انجام می‌شود؛ هیچ ایمیل یا درخواست واقعی ارسال نمی‌شود. راه‌های تماس مستقیم فعال هستند. برای فعال‌سازی ارسال واقعی، API لازم است؛ صرف تغییر mode بدون API کافی نیست.

پیش از استقرار، `.env.example` را به `.env.local` کپی کرده و `NEXT_PUBLIC_SITE_URL` را با دامنه واقعی بدون اسلش انتهایی تنظیم کنید. نقشه سایت و آدرس پایه Open Graph از همین مقدار استفاده می‌کنند. سپس دوباره build کنید.

تصاویر و لوگوتایپ فعلی اختصاصی و موقت‌اند. نمونه‌کارهای دمو هیچ ادعای اجرای پروژه یا نتیجه واقعی ندارند. زمان، مدرس و قیمت دوره‌ها اعلام نشده‌اند.

## فایل‌های ساخته‌شده

```text
src/
  app/
    layout.tsx                  پوسته مشترک و metadata
    globals.css                 طراحی بصری و قواعد موبایل
    page.tsx                    صفحه اصلی
    services/page.tsx           خدمات
    method/page.tsx             متد شیلو
    case-studies/page.tsx       فهرست نمونه‌کارها
    case-studies/[slug]/page.tsx جزئیات هر Case Study
    academy/page.tsx            آکادمی
    about/page.tsx              درباره
    contact/page.tsx            تماس
    not-found.tsx               صفحه ۴۰۴
    icon.svg                    آیکون موقت برند
    robots.ts                   تنظیمات ربات‌ها
    sitemap.ts                  نقشه سایت
  components/
    header.tsx                  هدر و منوی موبایل
    footer.tsx                  فوتر و شبکه‌های اجتماعی
    ui.tsx                      لوگوتایپ، دکمه و تیترهای مشترک
    icon.tsx                    آیکون‌ها
    cards.tsx                   کارت خدمات و نمونه‌کار
    motion.tsx                  ورود ملایم بخش‌ها
    system-visual.tsx           تصویرسازی تعاملی
    method-timeline.tsx         مراحل متد شیلو
    contact-form.tsx            فرم و بازخورد اعتبارسنجی
  data/
    site-config.ts              تنظیمات برند و تماس
    services.ts                 خدمات
    case-studies.ts             نمونه‌کارها
    courses.ts                  دوره‌ها
    method.ts                   مراحل و پرسش‌های متد
    about.ts                    محتوای درباره
  lib/contact.ts                اعتبارسنجی و ارسال فرم
public/images/
  case-learning.svg
  case-organization.svg
  case-event.svg
  og.png
scripts/
  render-brand-assets.mjs       تولید تصویر Open Graph
  inspect-site.mjs              بررسی بصری و دسترس‌پذیری
tests/site.spec.ts              تست‌های مرورگر
playwright.config.ts
next.config.ts
tsconfig.json
next-env.d.ts
postcss.config.mjs
eslint.config.mjs
package.json
package-lock.json
.env.example
.gitignore
.prettierignore
CONTENT-REPLACEMENT-GUIDE.md
README.md
```

فایل‌های `AGENTS.md` و `CLAUDE.md` را نسخه نصب‌شده Next.js هنگام اجرای سرور توسعه تولید می‌کند. `node_modules`، `.next` و `test-results` خروجی ابزارها هستند و در کنترل نسخه قرار نمی‌گیرند.

برای بازسازی تصویر اشتراک‌گذاری: `node scripts/render-brand-assets.mjs`. برای بررسی بصری روی سرور روشن: `INSPECT_URL=http://localhost:3100 node scripts/inspect-site.mjs`. گزارش و تصاویر در `test-results/visual/` قرار می‌گیرند. بررسی خودکار دسترس‌پذیری شامل قواعد WCAG A/AA است و جایگزین بررسی انسانی کامل نیست.
