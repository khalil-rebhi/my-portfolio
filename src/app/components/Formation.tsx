"use client";

import { useTranslations } from "next-intl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { formations } from "./formation/FormationData";
import { motion } from "framer-motion";

export default function Formation() {
  const t = useTranslations("Formation");



  return (
    <section id="formation" className="py-16 text-center">
      <motion.h2
        className="text-3xl font-bold mb-4 text-secondary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📬 {t("title")}
      </motion.h2>

      <motion.p
        className="text-secondary max-w-xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t("subtitle")}
      </motion.p>
      <VerticalTimeline lineColor="var(--secondary)">
        {formations.map((formation) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: formation.color, borderTop: `7px solid ${formation.color}` }}
            contentArrowStyle={{ borderRight: `10px solid ${formation.color}` }}
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
