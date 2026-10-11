export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  clientName: string;
  coverImage: string;
  challenge: string;
  targetBehavior: string;
  intervention: string;
  deliverables: string[];
  pilot: string;
  results: string[];
  testimonial: string;
  learning: string;
  status: "demo" | "published";
};

/** Illustrative structures only. No actual client, delivery, or result is claimed. */
export const caseStudies: CaseStudy[] = [
  {
    id: "learning-experience",
    title: "طراحی تجربه یادگیری برای یک مجموعه آموزشی",
    category: "یادگیری و آموزش",
    clientName: "",
    coverImage: "/images/case-learning.svg",
    challenge:
      "در این سناریوی نمونه، پرسش این است: چه عواملی فاصله میان حضور در کلاس و مشارکت فعال در یادگیری را شکل می‌دهند؟",
    targetBehavior:
      "مشارکت داوطلبانه در تمرین و دریافت بازخورد در طول مسیر یادگیری.",
    intervention:
      "پیشنهاد اولیه: تقسیم مسیر یادگیری به چالش‌های کوتاه همراه با انتخاب و بازخورد روشن.",
    deliverables: [
      "نقشه تجربه یادگیرنده",
      "نمونه یک فعالیت تعاملی",
      "چارچوب مشاهده مشارکت",
    ],
    pilot:
      "ساختار پیشنهادی: آزمایش یک فعالیت با گروهی محدود، با رضایت شرکت‌کنندگان و مشاهده تجربه آن‌ها.",
    results: [],
    testimonial: "",
    learning:
      "پس از اجرای واقعی، آموخته‌ها، محدودیت‌ها و تصمیم‌های بعدی در این بخش مستند می‌شود.",
    status: "demo",
  },
  {
    id: "organizational-engagement",
    title: "افزایش مشارکت در یک برنامه سازمانی",
    category: "رفتار سازمانی",
    clientName: "",
    coverImage: "/images/case-organization.svg",
    challenge:
      "در این سناریوی نمونه، مشارکت محدود در یک برنامه داخلی نقطه شروع بررسی فرایند، زمان و وضوح نقش‌هاست.",
    targetBehavior:
      "انتخاب آگاهانه برای حضور و مشارکت معنادار در برنامه داخلی.",
    intervention:
      "پیشنهاد اولیه: ساده‌سازی ورود به برنامه، روشن کردن نقش افراد و طراحی حلقه بازخورد.",
    deliverables: [
      "نقشه اصطکاک فرایند",
      "نمونه مسیر مشارکت",
      "پروتکل گفت‌وگو و مشاهده",
    ],
    pilot:
      "ساختار پیشنهادی: آزمون مسیر بازطراحی‌شده در یک تیم و مقایسه با وضعیت اولیه، با توجه به عوامل زمینه‌ای.",
    results: [],
    testimonial: "",
    learning:
      "در نسخه واقعی، تفاوت میان فرضیه اولیه و آنچه از تجربه کارکنان آموخته‌ایم ثبت خواهد شد.",
    status: "demo",
  },
  {
    id: "interactive-event",
    title: "طراحی تجربه تعاملی برای یک رویداد",
    category: "بازی و تجربه تعاملی",
    clientName: "",
    coverImage: "/images/case-event.svg",
    challenge:
      "در این سناریوی نمونه، می‌پرسیم چگونه می‌توان برای مخاطب رویداد مسیری روشن از کنجکاوی تا تعامل فراهم کرد؟",
    targetBehavior:
      "کشف داوطلبانه فضا، آغاز تعامل و بیان بازخورد درباره تجربه.",
    intervention:
      "پیشنهاد اولیه: طراحی یک مسیر اکتشاف با انتخاب‌های ساده و تعامل‌های مرتبط با محتوای رویداد.",
    deliverables: [
      "نقشه سفر مخاطب",
      "نمونه ایستگاه تعاملی",
      "راهنمای تسهیل تجربه",
    ],
    pilot:
      "ساختار پیشنهادی: شبیه‌سازی یک بخش از مسیر پیش از رویداد و بررسی خوانایی و دسترس‌پذیری آن.",
    results: [],
    testimonial: "",
    learning:
      "پس از اجرای واقعی، نقاط سردرگمی مخاطب و اصلاحات تجربه در این بخش توضیح داده می‌شود.",
    status: "demo",
  },
];
