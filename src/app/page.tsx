import Link from "next/link";
import { ButtonLink, Eyebrow, FinalCTA, SectionHeading } from "@/components/ui";
import { SystemVisual } from "@/components/system-visual";
import { ServiceCards, CaseCard } from "@/components/cards";
import { MethodTimeline } from "@/components/method-timeline";
import { Reveal } from "@/components/motion";
import { Icon, type IconName } from "@/components/icon";
import { caseStudies } from "@/data/case-studies";

const audiences: { icon: IconName; title: string; problem: string }[] = [
  {
    icon: "building",
    title: "سازمان‌ها و منابع انسانی",
    problem: "مشارکت کارکنان",
  },
  {
    icon: "people",
    title: "کسب‌وکارها و تجربه مشتری",
    problem: "وفاداری و تجربه مشتری",
  },
  {
    icon: "school",
    title: "مدارس و مجموعه‌های آموزشی",
    problem: "درگیری و یادگیری دانش‌آموز",
  },
  {
    icon: "spark",
    title: "مؤسسات فرهنگی و رویدادها",
    problem: "تعامل مخاطب در رویداد",
  },
];
const collaboration = [
  "جلسه اولیه و شناخت مسئله",
  "کارگاه صورت‌بندی مسئله",
  "طراحی و ساخت نمونه اولیه",
  "اجرای پایلوت و اندازه‌گیری",
  "توسعه، آموزش و مقیاس‌پذیری",
];
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <Eyebrow>معماری رفتار، طراحی تجربه</Eyebrow>
          <h1>
            فهم رفتار،
            <br />
            <span>
              طراحی تغییر<span className="heading-dot">.</span>
            </span>
          </h1>
          <p className="hero-description">
            شیلو به سازمان‌ها کمک می‌کند مسئله‌های رفتاری و سازمانی را دقیق‌تر
            ببینند، رفتار هدف را تعریف کنند و راه‌حل‌هایی طراحی کنند که در دنیای
            واقعی قابل اجرا و قابل سنجش باشند.
          </p>
          <div className="hero-buttons">
            <ButtonLink />
            <ButtonLink href="/method" secondary>
              متد شیلو را ببینید
            </ButtonLink>
          </div>
          <div className="hero-footnote">
            <span className="tiny-orbit" aria-hidden="true" />
            <p>
              قبل از ساختن راه‌حل،
              <br />
              <strong>مسئله و رفتار واقعی را می‌فهمیم.</strong>
            </p>
          </div>
        </div>
        <SystemVisual />
      </section>
      <div className="hero-bottom container">
        <span>انسان در مرکز. سیستم در نگاه. تغییر در عمل.</span>
        <a href="#approach">
          کمی عمیق‌تر ببینیم <span aria-hidden="true">↓</span>
        </a>
        <span lang="en" dir="ltr">
          HUMAN-CENTERED. SYSTEM-MINDED.
        </span>
      </div>
      <section className="approach-section section" id="approach">
        <div className="container">
          <Reveal className="approach-intro">
            <div>
              <Eyebrow>نقطه شروع ما</Eyebrow>
              <h2>
                هر مسئله‌ای
                <br />
                با یک بازی حل نمی‌شود<span className="gold-dot">.</span>
              </h2>
            </div>
            <div>
              <p>
                وقتی مشارکت پایین است، همیشه مشکل کمبود انگیزه نیست. ممکن است
                اصطکاک فرایند، ابهام نقش، بازخورد ضعیف، تضاد شاخص‌ها یا تجربه
                نامناسب، رفتار فعلی را شکل داده باشد.
              </p>
              <p className="strong-text">
                شیلو از تشخیص شروع می‌کند؛ نه از نسخه آماده.
              </p>
              <Link href="/method" className="text-link">
                نگاه ما به حل مسئله
                <Icon name="left" size={18} />
              </Link>
            </div>
          </Reveal>
          <div className="diagnosis-flow" aria-label="مسیر تشخیص تا بهبود">
            {[
              "نشانه ظاهری",
              "تشخیص مسئله",
              "تعریف رفتار هدف",
              "طراحی مداخله",
              "پایلوت",
              "سنجش و بهبود",
            ].map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <div className={`flow-step ${i === 1 ? "flow-highlight" : ""}`}>
                  <span className="flow-node">
                    {i === 1 ? (
                      <Icon name="scan" size={22} />
                    ) : (
                      String(i + 1).padStart(2, "0")
                    )}
                  </span>
                  <span>{step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="حوزه‌های تخصص ما"
          title="از فهم مسئله تا طراحی تجربه و تغییر"
          text="یک جعبه‌ابزار متنوع، با یک نقطه شروع مشترک: مسئله شما."
          href="/services"
          linkLabel="همه خدمات"
        />
        <ServiceCards />
      </section>
      <section className="method-section section">
        <div className="container">
          <SectionHeading
            eyebrow="متد SHILOO"
            title="یک روش روشن برای مسئله‌های پیچیده"
            text="راه‌حل را از پیش انتخاب نمی‌کنیم؛ ابتدا رفتار، سیستم و مسئله را می‌فهمیم."
            href="/method"
            linkLabel="آشنایی با متد شیلو"
          />
          <MethodTimeline />
          <div className="method-footer">
            <span className="method-line" />
            <p>
              مشاهده می‌کنیم. طراحی می‌کنیم. می‌آموزیم. دوباره بهتر می‌کنیم.
            </p>
            <span className="method-line" />
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="برای چه کسانی؟"
          title="هر جا انسان هست، رفتار هم هست."
          text="با تیم‌هایی همراه می‌شویم که می‌خواهند مسئله را از زاویه‌ای تازه ببینند."
        />
        <div className="audience-grid">
          {audiences.map((a) => (
            <Link
              href={`/contact?area=${encodeURIComponent(a.title)}`}
              className="audience-card"
              key={a.title}
            >
              <Icon name={a.icon} size={30} />
              <h3>{a.title}</h3>
              <p>
                <span>یک مسئله نمونه</span>
                {a.problem}
              </p>
              <Icon name="arrow" size={19} />
            </Link>
          ))}
        </div>
      </section>
      <section className="model-section">
        <div className="container model-inner">
          <div className="model-copy">
            <Eyebrow light>چهار نگاه، یک تصویر کامل‌تر</Eyebrow>
            <h2>
              انسان × سیستم
              <br />
              مسئله × بازی
            </h2>
            <p>
              رفتار در خلأ اتفاق نمی‌افتد. انسان را در بستر سیستم می‌بینیم،
              مسئله را دقیق تعریف می‌کنیم و اگر متناسب بود، از قدرت بازی کمک
              می‌گیریم.
            </p>
            <span className="model-conclusion">
              <span />
              تغییر قابل‌اجرا و قابل‌سنجش
            </span>
          </div>
          <div className="model-circles">
            {[
              { title: "انسان", text: "انگیزه، توجه، یادگیری، عادت" },
              { title: "سیستم", text: "فرایند، KPI، ابزار، محیط" },
              { title: "مسئله", text: "تعریف دقیق، شواهد، فرضیه" },
              { title: "بازی", text: "تجربه، چالش، بازخورد، تعامل" },
            ].map((c) => (
              <div key={c.title} className="model-circle" tabIndex={0}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
            <span className="model-center">
              تغییر قابل‌اجرا
              <br />و قابل‌سنجش
            </span>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="مسیر همکاری"
          title="همکاری از یک سؤال خوب شروع می‌شود."
          text="از اولین گفت‌وگو تا اجرای یک تغییر؛ قدم‌به‌قدم و با تصویری روشن از مسیر."
        />
        <div className="collaboration-steps">
          {collaboration.map((s, i) => (
            <div key={s}>
              <span>۰{(i + 1).toLocaleString("fa-IR")}</span>
              <h3>{s}</h3>
            </div>
          ))}
        </div>
        <div className="center-action">
          <ButtonLink href="/contact" secondary>
            مسئله‌تان را با ما مطرح کنید
          </ButtonLink>
        </div>
      </section>
      <section className="cases-section section">
        <div className="container">
          <SectionHeading
            eyebrow="از مسئله تا اثر"
            title="نمونه‌کار باید از اثر حرف بزند، نه فقط از ظاهر."
            text="مستندات پروژه‌ها در حال تکمیل‌اند. این نمونه‌ها ساختار روایت مسئله، مداخله و شواهد را نشان می‌دهند."
            href="/case-studies"
            linkLabel="مشاهده نمونه‌کارها"
          />
          <div className="case-grid">
            {caseStudies.map((study) => (
              <CaseCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
