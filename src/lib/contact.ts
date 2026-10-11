import { siteConfig } from "@/data/site-config";
export type ContactRequest = {
  name: string;
  organization: string;
  phone: string;
  email: string;
  area: string;
  message: string;
  preference: string;
};
export function normalizeDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}
export function validateContact(
  data: ContactRequest,
): Partial<Record<keyof ContactRequest, string>> {
  const errors: Partial<Record<keyof ContactRequest, string>> = {};
  if (data.name.trim().length < 3)
    errors.name = "نام و نام خانوادگی را کامل وارد کنید.";
  const phone = normalizeDigits(data.phone).replace(/[\s()\-]/g, "");
  if (!/^(?:\+\d{10,15}|00\d{10,15}|0\d{10})$/.test(phone))
    errors.phone = "شماره تماس را با صفر یا کد کشور وارد کنید.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "نشانی ایمیل معتبر وارد کنید.";
  if (!data.area) errors.area = "حوزه مسئله را انتخاب کنید.";
  if (data.message.trim().length < 10)
    errors.message = "مسئله را دست‌کم در ۱۰ نویسه توضیح دهید.";
  if (data.preference === "ایمیل" && !data.email.trim())
    errors.email = "برای دریافت پاسخ از طریق ایمیل، نشانی ایمیل را وارد کنید.";
  return errors;
}
/** API mode expects a successful HTTP response with JSON { success: true }. */
export async function submitContact(
  data: ContactRequest,
): Promise<{ demo: boolean }> {
  const payload = {
    ...data,
    name: data.name.trim(),
    email: data.email.trim(),
    phone: normalizeDigits(data.phone).replace(/[\s()\-]/g, ""),
    message: data.message.trim(),
  };
  if (siteConfig.contactForm.mode === "demo") {
    console.info("[SHILOO · demo contact request · not sent]", payload);
    return { demo: true };
  }
  const response = await fetch(siteConfig.contactForm.endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(
      "درخواست ارسال نشد. لطفاً دوباره تلاش کنید یا مستقیم تماس بگیرید.",
    );
  const result = await response.json();
  if (result.success !== true)
    throw new Error(
      "ثبت درخواست تأیید نشد. لطفاً از راه‌های تماس مستقیم استفاده کنید.",
    );
  return { demo: false };
}
