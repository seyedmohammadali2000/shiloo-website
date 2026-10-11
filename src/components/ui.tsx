import Link from "next/link";
import Image from "next/image";
import { Icon } from "./icon";
import { siteConfig } from "@/data/site-config";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${light ? "brand-light" : ""}`}
      aria-label="شیلو، صفحه اصلی"
    >
      {siteConfig.logo.src ? (
        <Image
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
        />
      ) : (
        <>
          {/* Temporary wordmark. Set siteConfig.logo.src to the official brand asset. */}
          <span className="brand-fa">
            {siteConfig.name}
            <i />
          </span>
          <span className="brand-en" lang="en">
            {siteConfig.englishName}
          </span>
        </>
      )}
    </Link>
  );
}
export function ButtonLink({
  href = "/contact",
  children = "درخواست جلسه تشخیصی",
  secondary = false,
  className = "",
}: {
  href?: string;
  children?: React.ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  text,
  href,
  linkLabel = "بیشتر بدانید",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {href && (
        <Link href={href} className="text-link">
          {linkLabel}
          <Icon name="left" size={19} />
        </Link>
      )}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero container">
      <div className="breadcrumb">
        <Link href="/">شیلو</Link>
        <span>/</span>
        <span>{eyebrow}</span>
      </div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {children && <p>{children}</p>}
      <span className="page-hero-mark" aria-hidden="true">
        ✳
      </span>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <Eyebrow light>گام بعدی، یک گفت‌وگو</Eyebrow>
          <h2>مسئله را دقیق‌تر ببینیم.</h2>
          <p>
            اگر با چالش مشارکت، یادگیری، تجربه مشتری یا رفتار سازمانی روبه‌رو
            هستید، از یک جلسه تشخیصی شروع کنیم.
          </p>
        </div>
        <ButtonLink className="button-cream" />
      </div>
      <div className="cta-rings" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </section>
  );
}
