import Link from "next/link";
import { navigation, siteConfig } from "@/data/site-config";
import { Brand } from "./ui";
import { Icon } from "./icon";

export function SocialLinks() {
  return (
    <div className="social-links">
      {Object.entries(siteConfig.socials).map(([key, social]) =>
        social.url ? (
          <a
            key={key}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label}؛ ${social.handle}`}
          >
            <Icon
              name={
                key === "instagram"
                  ? "instagram"
                  : key === "linkedin"
                    ? "linkedin"
                    : "send"
              }
              size={18}
            />
            <span>{social.label}</span>
          </a>
        ) : (
          <span
            className="social-pending"
            key={key}
            title="لینک این حساب پس از تأیید اضافه می‌شود"
          >
            <Icon name="send" size={18} />
            {social.label}: <bdi>{social.handle}</bdi>
          </span>
        ),
      )}
    </div>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <h2>{siteConfig.tagline}</h2>
            <p>معماری رفتار | گیمیفیکیشن | حل مسئله</p>
            <span className="footer-note">
              از یک سؤال بهتر، به یک تغییر معنادار.
            </span>
          </div>
          <div className="footer-nav">
            <h3>مسیرهای شیلو</h3>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">تماس با شیلو</Link>
          </div>
          <div className="footer-contact">
            <h3>گفت‌وگو را شروع کنیم</h3>
            <a href={siteConfig.phoneHref}>
              <Icon name="phone" size={17} />
              <bdi>{siteConfig.phone}</bdi>
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <Icon name="mail" size={17} />
              <bdi>{siteConfig.email}</bdi>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat" size={17} />
              گفت‌وگو در واتساپ
              <Icon name="external" size={15} />
            </a>
            {siteConfig.address && <p>{siteConfig.address}</p>}
            <SocialLinks />
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <bdi>SHILOO.</bdi> تمامی حقوق محفوظ است.
          </span>
          <span>با نگاه انسانی. با تفکر سیستمی.</span>
          <a href="#main" className="back-top">
            بازگشت به بالا <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
