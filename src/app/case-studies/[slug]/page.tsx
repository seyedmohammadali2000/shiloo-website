import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { PageHero, FinalCTA } from "@/components/ui";
import { Icon } from "@/components/icon";
export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = caseStudies.find((s) => s.id === slug);
  return { title: s?.title || "نمونه‌کار پیدا نشد", description: s?.challenge };
}
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = caseStudies.find((s) => s.id === slug);
  if (!s) notFound();
  return (
    <>
      <PageHero eyebrow={s.category} title={s.title}>
        {s.status === "demo"
          ? "نمونه ساختار Case Study · در حال تکمیل مستندات"
          : s.clientName}
      </PageHero>
      <section className="container page-section case-detail">
        <Image
          className="case-detail-cover"
          src={s.coverImage}
          alt={`تصویر انتزاعی ${s.category}`}
          width={1200}
          height={560}
          loading="eager"
        />
        <div className="case-detail-content">
          <aside>
            <span className="eyebrow">روایت یک مسئله</span>
            <p>
              {s.status === "demo"
                ? "این متن یک سناریوی پیشنهادی برای نمایش ساختار مستندات است و نتیجه یک پروژه واقعی را گزارش نمی‌کند."
                : s.clientName}
            </p>
            <Link href="/case-studies" className="text-link">
              همه نمونه‌کارها
              <Icon name="left" size={18} />
            </Link>
          </aside>
          <div>
            {[
              { title: "مسئله", text: s.challenge },
              { title: "رفتار هدف", text: s.targetBehavior },
              { title: "مداخله", text: s.intervention },
            ].map((item, i) => (
              <article key={item.title}>
                <span className="case-section-number">0{i + 1}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
            <article>
              <span className="case-section-number">04</span>
              <h2>خروجی‌های پیشنهادی</h2>
              <ul className="check-list">
                {s.deliverables.map((d) => (
                  <li key={d}>
                    <Icon name="check" size={18} />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <span className="case-section-number">05</span>
              <h2>پایلوت</h2>
              <p>{s.pilot}</p>
            </article>
            <article>
              <span className="case-section-number">06</span>
              <h2>شواهد و نتیجه</h2>
              {s.results.length ? (
                <ul>
                  {s.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              ) : (
                <p className="empty-evidence">
                  هنوز شواهدی برای انتشار ثبت نشده است. نتایج فقط پس از اجرای
                  واقعی و تأیید مستندات منتشر می‌شوند.
                </p>
              )}
            </article>
            <article>
              <span className="case-section-number">07</span>
              <h2>یادگیری پروژه</h2>
              <p>{s.learning}</p>
            </article>
            {s.testimonial && <blockquote>{s.testimonial}</blockquote>}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
