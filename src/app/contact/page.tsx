import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/footer";
import { Icon } from "@/components/icon";
import { siteConfig } from "@/data/site-config";
export const metadata: Metadata = {
  title: "تماس و درخواست جلسه تشخیصی",
  description:
    "برای گفت‌وگو درباره یک مسئله رفتاری، مشارکتی یا سازمانی با شیلو تماس بگیرید و درخواست جلسه تشخیصی کنید.",
};
export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="تماس با شیلو" title="از مسئله شروع کنیم.">
        برای درخواست جلسه تشخیصی یا گفت‌وگو درباره یک پروژه، اطلاعاتتان را ثبت
        کنید. لازم نیست از قبل راه‌حل را بدانید.
      </PageHero>
      <section className="container contact-layout page-section">
        <Suspense
          fallback={<div className="contact-form">در حال آماده‌سازی فرم…</div>}
        >
          <ContactForm />
        </Suspense>
        <aside className="contact-sidebar">
          <span className="eyebrow">راه‌های ارتباطی</span>
          <h2>
            یک گفت‌وگوی خوب،
            <br />
            نقطه شروع ماست.
          </h2>
          <p>
            اگر ترجیح می‌دهید مستقیم صحبت کنیم، از این مسیرها در دسترس هستیم.
          </p>
          <a className="contact-channel" href={siteConfig.phoneHref}>
            <span className="channel-icon">
              <Icon name="phone" />
            </span>
            <span>
              <small>تماس تلفنی</small>
              <bdi>{siteConfig.phone}</bdi>
            </span>
            <Icon name="arrow" size={18} />
          </a>
          <a className="contact-channel" href={`mailto:${siteConfig.email}`}>
            <span className="channel-icon">
              <Icon name="mail" />
            </span>
            <span>
              <small>ایمیل</small>
              <bdi>{siteConfig.email}</bdi>
            </span>
            <Icon name="arrow" size={18} />
          </a>
          <a
            className="contact-channel"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="channel-icon">
              <Icon name="chat" />
            </span>
            <span>
              <small>واتساپ</small>
              <bdi>{siteConfig.phone}</bdi>
            </span>
            <Icon name="external" size={18} />
          </a>
          <SocialLinks />
          {siteConfig.address && <p>{siteConfig.address}</p>}
          <div className="contact-question">
            <Icon name="scan" size={26} />
            <h3>برای جلسه اول چه چیزی آماده کنیم؟</h3>
            <p>
              یک توضیح کوتاه از وضعیت فعلی، افرادی که با مسئله درگیرند و تغییری
              که انتظار دارید. از همین‌جا شروع می‌کنیم.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
