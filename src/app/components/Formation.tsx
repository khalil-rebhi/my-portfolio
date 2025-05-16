"use client";

import { useTranslations } from "next-intl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { formations } from "./formation/FormationData";

export default function Formation() {
  const t = useTranslations("Formation");



  return (
    <section id="formation" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10 text-tertiary-glow">
        🎓 {t("title")}
      </h2>
      <VerticalTimeline lineColor="var(--secondary)">
        {formations.map((formation) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: formation.color, borderTop: `7px solid ${formation.color}` }}
            contentArrowStyle={{ borderRight: "7px solid #000" }}
            date={formation.duration}
            iconStyle={{ background: formation.color, color: "#fff" }}
            icon={formation.icon}
            key={formation.id}
            position={formation.position}
          >
            <h3 className="vertical-timeline-element-title">
              {t(formation.institution)}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-primary">{ t(formation.degree) }</h4>
            <p className="text-black">
              {t(formation.description)}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
