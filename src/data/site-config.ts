/** All public contact details and brand assets are managed here. */
export const siteConfig = {
  name: "شیلو",
  englishName: "SHILOO",
  tagline: "فهم رفتار، طراحی تغییر",
  description:
    "شیلو؛ معماری رفتار، گیمیفیکیشن و حل مسئله. از شناخت انسان و سیستم تا طراحی مداخله‌های قابل اجرا و قابل سنجش.",
  // Set the production origin before deployment (e.g. https://your-domain.ir).
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  // Temporary wordmark is used until an original logo path is provided.
  logo: { src: "", alt: "شیلو | SHILOO", width: 140, height: 52 },
  phone: "00989361167048",
  phoneHref: "tel:+989361167048",
  whatsappUrl: "https://wa.me/989361167048",
  email: "sma.altaha.2000@gmail.com",
  socialHandle: "sma-altaha",
  socials: {
    instagram: {
      label: "اینستاگرام",
      handle: "sma-altaha",
      url: "https://instagram.com/sma-altaha",
    },
    linkedin: {
      label: "لینکدین",
      handle: "sma-altaha",
      url: "https://www.linkedin.com/in/sma-altaha/",
    },
    // The supplied handle contains a hyphen. Do not invent a t.me destination.
    // Replace this empty URL with the verified Telegram link when available.
    telegram: { label: "تلگرام", handle: "sma-altaha", url: "" },
  },
  address: "", // No unverified office address is published.
  contactForm: {
    mode: "demo" as "demo" | "api",
    endpoint: "/api/contact",
    successMessage:
      "درخواست شما ثبت شد. به‌زودی برای هماهنگی با شما تماس می‌گیریم.",
  },
};

export const navigation = [
  { href: "/services", label: "خدمات" },
  { href: "/method", label: "متد شیلو" },
  { href: "/case-studies", label: "نمونه‌کارها" },
  { href: "/academy", label: "آکادمی" },
  { href: "/about", label: "درباره ما" },
];
