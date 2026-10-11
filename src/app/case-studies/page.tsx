import type { Metadata } from "next";
import { PageHero, FinalCTA } from "@/components/ui";
import { CaseCard } from "@/components/cards";
import { caseStudies } from "@/data/case-studies";
import { Icon } from "@/components/icon";
export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description:
    "ساختار مطالعات موردی شیلو؛ روایت مسئله، رفتار هدف، طراحی مداخله، پایلوت و شواهد. مستندات در حال تکمیل است.",
};
export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="نمونه‌کارها" title="از صورت مسئله تا شواهد تغییر.">
        برای ما، روایت یک پروژه با ظاهر راه‌حل تمام نمی‌شود. می‌خواهیم روشن باشد
        چه مسئله‌ای دیدیم، چه چیزی آزمودیم و چه آموختیم.
      </PageHero>
      <section className="container page-section">
        <div className="editorial-note">
          <Icon name="book" />
          <p>
            مطالعات زیر <strong>نمونه ساختار Case Study</strong> هستند و پروژه
            اجراشده محسوب نمی‌شوند. نام مشتری، نتایج و مستندات پس از دریافت
            اطلاعات واقعی اضافه خواهند شد.
          </p>
        </div>
        <div className="case-grid">
          {caseStudies.map((s) => (
            <CaseCard study={s} key={s.id} eager />
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
