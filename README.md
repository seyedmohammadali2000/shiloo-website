# شیلو | شيلو | SHILOO

[فارسی](#فارسی) · [العربية](#العربية)

**[مشاهده سایت / عرض الموقع](https://shiloo-website.lonarddasi.chatgpt.site)**

## فارسی

وب‌سایت فارسی RTL با Next.js App Router، TypeScript، Tailwind CSS و Framer Motion. فونت Vazirmatn از بسته محلی بارگذاری می‌شود.

### اجرا

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

### بررسی مرورگر

```sh
npx playwright install chromium
npm run test:e2e
```

تست‌ها سرور توسعه را روی پورت 3100 اجرا می‌کنند و مسیرها، فرم، منوی موبایل، لینک دوره‌ها و سرریز افقی را می‌سنجند.

### محتوا و تحویل

تمام اطلاعات تماس از `src/data/site-config.ts` خوانده می‌شود. برای جایگزینی محتوا، [CONTENT-REPLACEMENT-GUIDE.md](./CONTENT-REPLACEMENT-GUIDE.md) را بخوانید.

فرم در حالت پیش‌فرض دمو است: اعتبارسنجی و ثبت در کنسول مرورگر انجام می‌شود؛ هیچ ایمیل یا درخواست واقعی ارسال نمی‌شود. راه‌های تماس مستقیم فعال هستند. برای فعال‌سازی ارسال واقعی، API لازم است؛ صرف تغییر mode بدون API کافی نیست.

### نسخه آنلاین و انتشار

آدرس سایت برای ارسال به مشتری: **https://shiloo-website.lonarddasi.chatgpt.site**

سایت بدون ورود قابل مشاهده است؛ مخزن [GitHub](https://github.com/seyedmohammadali2000/shiloo-website) خصوصی می‌ماند. انتشار سایت با Sites انجام می‌شود و push به GitHub به‌تنهایی نسخه آنلاین را تغییر نمی‌دهد.

برای تولید خروجی استاتیک قابل میزبانی:

```sh
npm run build:static
```

خروجی در `out/` ایجاد می‌شود. تنظیمات میزبانی و شناسه سایت در `.openai/hosting.json` هستند. `npm start` برای خروجی معمول `npm run build` است؛ خروجی استاتیک به میزبان فایل‌های استاتیک نیاز دارد.

برای دامنه اختصاصی، `.env.example` را به `.env.local` کپی کرده و `NEXT_PUBLIC_SITE_URL` را با دامنه واقعی بدون اسلش انتهایی تنظیم کنید؛ سپس دوباره build و منتشر کنید. آدرس پیش‌فرض فعلی در `src/data/site-config.ts` ثبت شده است. نقشه سایت و آدرس پایه Open Graph از همین تنظیم استفاده می‌کنند.

تصاویر و لوگوتایپ فعلی اختصاصی و موقت‌اند. نمونه‌کارهای دمو هیچ ادعای اجرای پروژه یا نتیجه واقعی ندارند. زمان، مدرس و قیمت دوره‌ها اعلام نشده‌اند.

### ساختار فایل‌ها / هيكل الملفات

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
.openai/hosting.json            تنظیمات میزبانی / إعدادات الاستضافة
```

فایل‌های `AGENTS.md` و `CLAUDE.md` را نسخه نصب‌شده Next.js هنگام اجرای سرور توسعه تولید می‌کند. `node_modules`، `.next` و `test-results` خروجی ابزارها هستند و در کنترل نسخه قرار نمی‌گیرند.

برای بازسازی تصویر اشتراک‌گذاری: `node scripts/render-brand-assets.mjs`. برای بررسی بصری روی سرور روشن: `INSPECT_URL=http://localhost:3100 node scripts/inspect-site.mjs`. گزارش و تصاویر در `test-results/visual/` قرار می‌گیرند. بررسی خودکار دسترس‌پذیری شامل قواعد WCAG A/AA است و جایگزین بررسی انسانی کامل نیست.

## العربية

موقع **شيلو | SHILOO** باللغة الفارسية، باتجاه من اليمين إلى اليسار، مبني باستخدام Next.js App Router وTypeScript وTailwind CSS وFramer Motion. يُحمَّل خط Vazirmatn محليًا. هذا الدليل متاح بالفارسية والعربية؛ واجهة الموقع الحالية بالفارسية.

**رابط الموقع لإرساله إلى العميل: https://shiloo-website.lonarddasi.chatgpt.site**

يمكن لأي شخص لديه الرابط مشاهدة الموقع دون تسجيل الدخول. يبقى مستودع [GitHub](https://github.com/seyedmohammadali2000/shiloo-website) خاصًا. تتم الاستضافة عبر Sites؛ رفع التغييرات إلى GitHub وحده لا يحدّث النسخة المنشورة.

### التشغيل المحلي

المتطلبات: Node.js بالإصدار 20.9 أو أحدث. استُخدم الإصدار 20.19.5 عند إعداد المشروع.

```sh
npm ci
npm run dev
```

افتح http://localhost:3000. إذا كان المنفذ مشغولًا:

```sh
npm run dev -- --port 3100
```

ثم افتح http://localhost:3100. اترك الطرفية مفتوحة أثناء العمل، واضغط `Ctrl + C` لإيقاف الخادم.

### البناء والتحقق

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

لإنشاء ملفات ثابتة جاهزة للاستضافة:

```sh
npm run build:static
```

تُنشأ الملفات داخل `out/`. يحتوي `.openai/hosting.json` على إعدادات الاستضافة ومعرّف الموقع. أمر `npm start` مخصص لبناء Next.js المعتاد، ولا يشغّل التصدير الثابت.

عند ربط نطاق جديد، انسخ `.env.example` إلى `.env.local` واضبط `NEXT_PUBLIC_SITE_URL` على عنوان النطاق دون شرطة مائلة في النهاية، ثم أعد البناء والنشر. يُحدَّد العنوان الافتراضي في `src/data/site-config.ts`، وتستخدمه خريطة الموقع وبيانات Open Graph.

### اختبارات المتصفح وإمكانية الوصول

```sh
npx playwright install chromium
npm run test:e2e
```

تتحقق الاختبارات من الصفحات، والنموذج، وقائمة الهاتف، وروابط الدورات، وعدم وجود تمرير أفقي في أحجام الشاشات المختلفة. تشمل أيضًا فحوصًا آلية لقواعد WCAG A/AA، ولا تُغني عن المراجعة البشرية الكاملة.

لتنسيق الشيفرة والتحقق منها:

```sh
npm run format
npm run format:check
```

### المحتوى التجريبي وبيانات التواصل

- تُدار بيانات التواصل الحقيقية والشعار وروابط الشبكات الاجتماعية في `src/data/site-config.ts`، وتستخدمها مكونات الموقع المشتركة.
- نموذج التواصل في الوضع التجريبي: يتحقق من المدخلات ويسجّلها في وحدة تحكم المتصفح فقط؛ لا يرسل بريدًا أو طلبًا فعليًا. تظل روابط الهاتف والبريد وواتساب متاحة للتواصل المباشر.
- لتفعيل الإرسال الحقيقي، يجب تنفيذ API أولًا ثم ضبط `contactForm.mode` و`contactForm.endpoint`. تغيير الوضع وحده لا يكفي.
- دراسات الحالة أمثلة واضحة للبنية المقترحة، ولا تدّعي تنفيذ مشاريع أو تحقيق نتائج. لا توجد أسماء عملاء أو شهادات أو أرقام نجاح مختلقة.
- الدورات ومجالات التنفيذ المقترحة قابلة للتعديل. لم تُعلن مواعيد الدورات أو أسماء المدرّسين أو الأسعار.
- الشعار النصي الحالي مؤقت، والرسومات التجريدية قابلة للاستبدال. رابط تلغرام فارغ إلى حين توفير رابط مؤكّد.

### تعديل المحتوى

| المحتوى                                | الملف                      |
| -------------------------------------- | -------------------------- |
| بيانات التواصل والشعار وروابط الحسابات | `src/data/site-config.ts`  |
| الخدمات                                | `src/data/services.ts`     |
| الدورات                                | `src/data/courses.ts`      |
| دراسات الحالة وصورها ونتائجها          | `src/data/case-studies.ts` |
| مراحل المنهج والأسئلة التشخيصية        | `src/data/method.ts`       |
| قصة العلامة ورسالتها وقيمها            | `src/data/about.ts`        |
| الصور وأغلفة دراسات الحالة             | `public/images/`           |
| المظهر والتجاوب مع الشاشات             | `src/app/globals.css`      |
| إعدادات الاستضافة                      | `.openai/hosting.json`     |

هيكل الملفات الكامل مذكور أعلاه. يتضمن [دليل استبدال المحتوى](./CONTENT-REPLACEMENT-GUIDE.md) إرشادات تفصيلية باللغة الفارسية.

تُنشئ نسخة Next.js المثبتة الملفين `AGENTS.md` و`CLAUDE.md` عند تشغيل خادم التطوير. لا تُرفع مجلدات `node_modules` و`.next` و`out` و`test-results` إلى المستودع.

لإعادة إنشاء صورة مشاركة الرابط:

```sh
node scripts/render-brand-assets.mjs
```

للمراجعة البصرية وفحص إمكانية الوصول أثناء تشغيل الخادم:

```sh
INSPECT_URL=http://localhost:3100 node scripts/inspect-site.mjs
```

تُحفظ التقارير والصور في `test-results/visual/`.
