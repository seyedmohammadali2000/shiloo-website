import type { Metadata } from "next";
import { about } from "@/data/about";
import { PageHero, FinalCTA, Eyebrow, SectionHeading } from "@/components/ui";
import { SystemVisual } from "@/components/system-visual";
export const metadata: Metadata = {
  title: "درباره شیلو",
  description:
    "داستان، مأموریت و ارزش‌های شیلو؛ فهم مسئله و طراحی تغییر با نگاه انسانی و تفکر سیستمی.",
};
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="درباره شیلو"
        title="کنجکاو درباره انسان. دقیق درباره تغییر."
      >
        ما به نقطه تلاقی انسان، سیستم و مسئله نگاه می‌کنیم؛ جایی که پرسیدن یک
        سؤال بهتر، می‌تواند مسیر طراحی را تغییر دهد.
      </PageHero>
      <section className="container about-story">
        <div>
          <Eyebrow>داستان شیلو</Eyebrow>
          <h2>
            تلاقی نگاه‌ها،
            <br />
            برای فهمی عمیق‌تر.
          </h2>
          <p>{about.story}</p>
          <p>
            پیش از انتخاب ابزار، برای فهمیدن وقت می‌گذاریم. راه‌حل را با توجه به
            زمینه طراحی می‌کنیم و با مشاهده و سنجش، آن را بازبینی می‌کنیم.
          </p>
        </div>
        <SystemVisual compact />
      </section>
      <section className="section about-purpose">
        <div className="container purpose-grid">
          <article>
            <Eyebrow>چرایی کار ما</Eyebrow>
            <h2>مأموریت</h2>
            <p>{about.mission}</p>
          </article>
          <article>
            <Eyebrow>مسیری که می‌بینیم</Eyebrow>
            <h2>چشم‌انداز</h2>
            <p>{about.vision}</p>
          </article>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="اصول مشترک ما"
          title="ارزش‌هایی که در تصمیم‌ها دیده می‌شوند."
        />
        <div className="values-grid">
          {about.values.map((v, i) => (
            <div key={v}>
              <span>0{i + 1}</span>
              <h3>{v}</h3>
            </div>
          ))}
        </div>
        <div className="founder-note">
          <Eyebrow>نگاه بنیان‌گذار</Eyebrow>
          <p>{about.founder}</p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
