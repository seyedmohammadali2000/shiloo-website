import { ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container not-found">
      <span>۴۰۴</span>
      <h1>این مسیر به صفحه‌ای نمی‌رسد.</h1>
      <p>می‌توانید از صفحه اصلی، مسیر تازه‌ای را شروع کنید.</p>
      <ButtonLink href="/">بازگشت به صفحه اصلی</ButtonLink>
    </section>
  );
}
