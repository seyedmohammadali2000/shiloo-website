import type { Metadata } from "next";
import { courses } from "@/data/courses";
import { PageHero, FinalCTA, ButtonLink } from "@/components/ui";
import { Icon } from "@/components/icon";
export const metadata: Metadata = {
  title: "آکادمی",
  description:
    "مسیرهای پیشنهادی یادگیری گیمیفیکیشن، معماری رفتار، حل مسئله و طراحی بازی در آکادمی شیلو.",
};
export default function AcademyPage() {
  return (
    <>
      <PageHero eyebrow="آکادمی شیلو" title="یادگیری برای اجرا، نه فقط دانستن.">
        از فهم مفاهیم تا تمرین روی مسئله؛ یادگیری وقتی ارزشمند می‌شود که به یک
        نگاه تازه و یک اقدام روشن برسد.
      </PageHero>
      <section className="container page-section">
        <div className="editorial-note">
          <Icon name="book" />
          <p>
            این دوره‌ها، نمونه مسیرهای آموزشی پیشنهادی‌اند. زمان برگزاری، مدرس و
            جزئیات نهایی هنوز اعلام نشده است؛ می‌توانید علاقه‌مندی خود را با ما
            مطرح کنید.
          </p>
        </div>
        <div className="course-grid">
          {courses.map((c, i) => (
            <article className="course-card" key={c.id}>
              <div className={`course-art course-art-${i}`} aria-hidden="true">
                <span>0{i + 1}</span>
                <div className="course-shape" />
                <small>SHILOO ACADEMY</small>
              </div>
              <div className="course-body">
                <div className="course-meta">
                  <span>{c.category}</span>
                  <span className="status-tag">محتوای دمو</span>
                </div>
                <h2>{c.title}</h2>
                <h3>مناسب چه کسی است؟</h3>
                <p>{c.audience}</p>
                <h3>چه چیزی یاد می‌گیرید؟</h3>
                <p>{c.outcome}</p>
                <div className="course-topics">
                  {c.topics.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <ButtonLink
                  href={`/contact?course=${encodeURIComponent(c.title)}`}
                  secondary
                >
                  اطلاع از برگزاری دوره
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
