import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import type { CaseStudy } from "@/data/case-studies";
import { Icon } from "./icon";
import { Reveal } from "./motion";

export function ServiceCards() {
  return (
    <div className="service-grid">
      {services.map((service, i) => (
        <Reveal key={service.id} delay={(i % 3) * 0.06}>
          <Link className="service-card" href={`/services#${service.id}`}>
            <div className="card-top">
              <span className="service-icon">
                <Icon name={service.icon} size={30} />
              </span>
              <span className="card-number">0{i + 1}</span>
            </div>
            <span className="card-english" lang="en">
              {service.english}
            </span>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <span className="card-link">
              کشف این مسیر
              <Icon name="arrow" size={20} />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
export function CaseCard({
  study,
  eager = false,
}: {
  study: CaseStudy;
  eager?: boolean;
}) {
  return (
    <Link className="case-card" href={`/case-studies/${study.id}`}>
      <div className="case-image">
        <Image
          src={study.coverImage}
          alt={`تصویرسازی انتزاعی ${study.category}`}
          width={720}
          height={480}
          loading={eager ? "eager" : "lazy"}
        />
        <span className="status-tag">
          {study.status === "demo" ? "نمونه ساختار Case Study" : study.category}
        </span>
        <span className="case-arrow">
          <Icon name="arrow" size={22} />
        </span>
      </div>
      <div className="case-copy">
        <span className="case-category">{study.category}</span>
        <h3>{study.title}</h3>
        <span className="case-caption">
          {study.status === "demo"
            ? "در حال تکمیل مستندات"
            : "مشاهده مطالعه موردی"}
          <Icon name="left" size={17} />
        </span>
      </div>
    </Link>
  );
}
