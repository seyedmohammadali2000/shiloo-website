"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { methodSteps } from "@/data/method";

export function MethodTimeline({ detailed = false }: { detailed?: boolean }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  return (
    <div className={`method-timeline ${detailed ? "detailed" : ""}`}>
      {methodSteps.map((step, i) => (
        <motion.article
          key={step.english}
          className={`method-step ${active === i ? "is-active" : ""}`}
          onViewportEnter={() => setActive(i)}
          viewport={{ amount: 0.8, once: false }}
          initial={{ y: reduced ? 0 : 12 }}
          whileInView={{ y: 0 }}
          transition={{ duration: reduced ? 0 : 0.5 }}
          onMouseEnter={() => setActive(i)}
        >
          <div className="method-letter" aria-hidden="true">
            {step.letter}
            <span>0{i + 1}</span>
          </div>
          <div className="method-text">
            <span lang="en">{step.english}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {detailed && (
              <>
                <div className="method-example">{step.example}</div>
                <div className="method-output">
                  <small>خروجی این مرحله</small>
                  {step.output}
                </div>
              </>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
