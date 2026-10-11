import type { Metadata } from "next";
import { PageHero, FinalCTA, SectionHeading } from "@/components/ui";
import { MethodTimeline } from "@/components/method-timeline";
import { diagnosticQuestions } from "@/data/method";
export const metadata: Metadata = {
  title: "متد شیلو",
  description:
    "شش مرحله متد SHILOO؛ از مشاهده رفتار واقعی و شناخت سیستم تا آزمایش، سنجش و بهینه‌سازی.",
};
export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="متد SHILOO"
        title="از مشاهده رفتار واقعی شروع می‌کنیم، نه فرض‌های مدیریتی."
      >
        یک مسیر منظم برای کاهش ابهام؛ از دیدن سیستم و شنیدن انسان‌ها تا طراحی
        آزمایش و تصمیم‌گیری بر اساس شواهد.
      </PageHero>
      <section className="container page-section">
        <div className="method-manifesto">
          <span lang="en">S H I L O O</span>
          <p>
            شش گام به‌هم‌پیوسته؛ با امکان بازگشت، یادگیری و اصلاح در هر مرحله.
          </p>
        </div>
        <MethodTimeline detailed />
      </section>
      <section className="section questions-section">
        <div className="container">
          <SectionHeading
            eyebrow="قبل از هر راه‌حل"
            title="سؤال‌هایی که در مرحله تشخیص می‌پرسیم"
            text="کیفیت پاسخ، از دقت سؤال شروع می‌شود. این پرسش‌ها کمک می‌کنند روی مسئله‌ای مشترک توافق کنیم."
          />
          <div className="questions-grid">
            {diagnosticQuestions.map((q, i) => (
              <div key={q}>
                <span>{(i + 1).toLocaleString("fa-IR")}</span>
                <h3>{q}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
