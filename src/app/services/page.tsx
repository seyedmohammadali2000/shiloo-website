import type { Metadata } from "next";
import { services } from "@/data/services";
import { PageHero, FinalCTA, ButtonLink } from "@/components/ui";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/motion";
export const metadata: Metadata = {
  title: "خدمات",
  description:
    "خدمات شیلو در طراحی رفتار، طراحی بازی، حل مسئله، منابع انسانی، آموزش و تجربه رویداد.",
};
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="حوزه‌های خدمت"
        title="راه‌حل از مسئله شما شروع می‌شود."
      >
        از تشخیص تا طراحی و اجرا، ترکیب ابزارها را متناسب با انسان، هدف و سیستم
        انتخاب می‌کنیم. گیمیفیکیشن یکی از این ابزارهاست.
      </PageHero>
      <section className="container page-section">
        <div className="editorial-note">
          <Icon name="scan" />
          <p>
            این حوزه‌ها، مسیرهای پیشنهادی همکاری‌اند. جزئیات و خروجی هر پروژه پس
            از شناخت مسئله و توافق مشترک مشخص می‌شود.
          </p>
        </div>
        <div className="service-details">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <article className="service-detail" id={s.id}>
                <div className="service-detail-heading">
                  <span className="detail-number">0{i + 1}</span>
                  <Icon name={s.icon} size={36} />
                  <span className="card-english" lang="en">
                    {s.english}
                  </span>
                  <h2>{s.title}</h2>
                  <p>{s.short}</p>
                  <ButtonLink
                    href={`/contact?area=${encodeURIComponent(s.title)}`}
                    secondary
                  >
                    گفت‌وگو درباره این خدمت
                  </ButtonLink>
                </div>
                <div className="service-detail-body">
                  <h3>برای چه مسئله‌ای مناسب است؟</h3>
                  <p>{s.problem}</p>
                  <h3>خروجی احتمالی چیست؟</h3>
                  <ul className="check-list">
                    {s.deliverables.map((d) => (
                      <li key={d}>
                        <Icon name="check" size={17} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <h3>مسیر اجرای پیشنهادی</h3>
                  <p className="service-path">{s.path}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
