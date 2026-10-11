"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/data/site-config";
import { Brand, ButtonLink } from "./ui";
import { Icon } from "./icon";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    dialog.current?.close();
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="منوی اصلی">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="header-phone"
            href={siteConfig.phoneHref}
            aria-label={`تماس با شیلو: ${siteConfig.phone}`}
          >
            <Icon name="phone" size={17} />
            <span dir="ltr">{siteConfig.phone}</span>
          </a>
          <ButtonLink />
          <button
            type="button"
            className="menu-toggle"
            aria-label="باز کردن منو"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
        <dialog
          id="mobile-navigation"
          ref={dialog}
          className="mobile-drawer"
          aria-label="منوی موبایل شیلو"
          onCancel={() => setOpen(false)}
          onClose={() => setOpen(false)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="drawer-inner">
            <div className="drawer-heading">
              <Brand />
              <button
                autoFocus
                className="icon-button"
                onClick={() => setOpen(false)}
                aria-label="بستن منو"
              >
                <Icon name="close" />
              </button>
            </div>
            <nav aria-label="منوی موبایل">
              {[
                { href: "/", label: "صفحه اصلی" },
                ...navigation,
                { href: "/contact", label: "تماس با شیلو" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                    {item.label}
                  </span>
                  <Icon name="arrow" size={20} />
                </Link>
              ))}
            </nav>
            <div className="drawer-contact">
              <p>یک گفت‌وگو، شروع یک تغییر.</p>
              <a href={siteConfig.phoneHref} dir="ltr">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} dir="ltr">
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                گفت‌وگو در واتساپ <Icon name="external" size={16} />
              </a>
            </div>
          </div>
        </dialog>
      </div>
    </header>
  );
}
