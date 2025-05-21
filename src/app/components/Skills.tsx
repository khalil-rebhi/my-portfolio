"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SkillSection from "./skills/SkillSection";

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <section id="skills" className="py-16 px-6 text-center">
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
      <motion.div
        className="space-y-8 md:space-x-8 flex flex-col md:flex-row items-start justify-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <SkillSection category="Frontend" />

        <hr className="border-gray-300" />

        <SkillSection category="Backend" />

        <hr className="border-gray-300" />

        <SkillSection category="Tools" />
      </motion.div>
    </section>
  );
}
