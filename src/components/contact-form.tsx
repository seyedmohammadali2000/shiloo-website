"use client";
import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import {
  submitContact,
  validateContact,
  type ContactRequest,
} from "@/lib/contact";
import { Icon } from "./icon";

const areas = [
  ...services.map((s) => s.title),
  "سازمان‌ها و منابع انسانی",
  "کسب‌وکارها و تجربه مشتری",
  "مدارس و مجموعه‌های آموزشی",
  "مؤسسات فرهنگی و رویدادها",
  "سایر موضوع‌ها",
];
export function ContactForm() {
  const searchParams = useSearchParams();
  const course = searchParams.get("course");
  const requestedArea = searchParams.get("area");
  const initial: ContactRequest = {
    name: "",
    organization: "",
    phone: "",
    email: "",
    area: course
      ? "آکادمی شیلو"
      : requestedArea && areas.includes(requestedArea)
        ? requestedArea
        : "",
    message: course
      ? `مایلم از برگزاری دوره «${course.slice(0, 180)}» مطلع شوم.`
      : "",
    preference: "تماس تلفنی",
  };
  const [values, setValues] = useState<ContactRequest>(initial);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactRequest, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState("");
  const [isDemo, setIsDemo] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  function update(key: keyof ContactRequest, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const validation = validateContact(values);
    setErrors(validation);
    if (Object.keys(validation).length) {
      const first = Object.keys(validation)[0];
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    setServerError("");
    try {
      const result = await submitContact(values);
      setIsDemo(result.demo);
      setStatus("success");
      requestAnimationFrame(() => confirmation.current?.focus());
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "ارتباط برقرار نشد. دوباره تلاش کنید.",
      );
      setStatus("error");
    }
  }
  if (status === "success")
    return (
      <div
        ref={confirmation}
        tabIndex={-1}
        className="form-confirmation"
        role="status"
      >
        <span className="confirmation-icon">
          <Icon name="check" size={32} />
        </span>
        <h2>{isDemo ? "فرم آزمایشی تکمیل شد." : "درخواست شما ثبت شد."}</h2>
        <p>
          {isDemo
            ? "اطلاعات فقط در کنسول همین مرورگر ثبت شد و برای شیلو ارسال نشده است. برای هماهنگی واقعی از واتساپ، ایمیل یا تماس تلفنی استفاده کنید."
            : siteConfig.contactForm.successMessage}
        </p>
        <a
          className="button button-primary"
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          گفت‌وگو در واتساپ
          <Icon name="external" size={18} />
        </a>
        <button
          type="button"
          className="text-link"
          onClick={() => {
            setValues(initial);
            setStatus("idle");
          }}
        >
          تکمیل فرم جدید
          <Icon name="left" size={17} />
        </button>
      </div>
    );
  const error = (key: keyof ContactRequest) =>
    errors[key] && (
      <span id={`${key}-error`} className="field-error">
        {errors[key]}
      </span>
    );
  return (
    <form
      ref={form}
      className="contact-form"
      noValidate
      onSubmit={onSubmit}
      aria-busy={status === "sending"}
    >
      <div className="form-heading">
        <h2>کمی از مسئله‌تان بگویید.</h2>
        <p>فیلدهای ستاره‌دار برای شروع گفت‌وگو ضروری‌اند.</p>
      </div>
      {siteConfig.contactForm.mode === "demo" && (
        <div className="form-demo-note">
          <span>نسخه نمایشی فرم</span>در این نسخه، اطلاعات ارسال نمی‌شود. برای
          ارتباط واقعی از راه‌های تماس کنار فرم استفاده کنید.
        </div>
      )}
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">
            نام و نام خانوادگی <span>*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            maxLength={100}
            placeholder="نام کامل شما"
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {error("name")}
        </div>
        <div className="field">
          <label htmlFor="organization">نام سازمان یا کسب‌وکار</label>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            maxLength={180}
            value={values.organization}
            placeholder="نام مجموعه شما"
            onChange={(e) => update("organization", e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">
            شماره تماس <span>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            maxLength={25}
            placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰"
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {error("phone")}
        </div>
        <div className="field">
          <label htmlFor="email">
            ایمیل {values.preference === "ایمیل" && <span>*</span>}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required={values.preference === "ایمیل"}
            value={values.email}
            maxLength={254}
            placeholder="you@example.com"
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {error("email")}
        </div>
        <div className="field field-wide">
          <label htmlFor="area">
            حوزه مسئله <span>*</span>
          </label>
          <select
            id="area"
            name="area"
            required
            value={values.area}
            onChange={(e) => update("area", e.target.value)}
            aria-invalid={!!errors.area}
            aria-describedby={errors.area ? "area-error" : undefined}
          >
            <option value="">حوزه نزدیک به مسئله‌تان را انتخاب کنید</option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {error("area")}
        </div>
        <div className="field field-wide">
          <label htmlFor="message">
            توضیح کوتاه درباره مسئله <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={4000}
            value={values.message}
            placeholder="با چه چالشی روبه‌رو هستید و چه تغییری را دنبال می‌کنید؟"
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {error("message")}
        </div>
      </div>
      <fieldset className="contact-preference">
        <legend>ترجیح شما برای تماس</legend>
        {["تماس تلفنی", "واتساپ", "ایمیل"].map((p) => (
          <label key={p}>
            <input
              type="radio"
              name="preference"
              value={p}
              checked={values.preference === p}
              onChange={() => update("preference", p)}
            />
            <span>{p}</span>
          </label>
        ))}
      </fieldset>
      {serverError && (
        <p className="field-error" role="alert">
          {serverError}
        </p>
      )}
      <div className="form-submit">
        <button
          className="button button-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : "ارسال درخواست"}
          <Icon name="arrow" size={19} />
        </button>
        <span>
          {siteConfig.contactForm.mode === "demo"
            ? "ثبت آزمایشی در مرورگر شما"
            : "شروع یک گفت‌وگو درباره مسئله شما"}
        </span>
      </div>
    </form>
  );
}
