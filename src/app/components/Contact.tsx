"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { contactItems } from "./contact/contactData";



export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-16 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold mb-4 text-tertiary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📬 {t("title")}
      </motion.h2>

      <motion.p
        className="text-tertiary-glow max-w-xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t("subtitle")}
      </motion.p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {contactItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white  shadow-md rounded-xl px-6 py-4 flex items-center gap-4 transition-colors hover:bg-primary-glow hover:text-tertiary w-full md:w-auto"
          >
            <span className="text-xl" style={{ color: item.iconColor }}>{item.icon}</span>
            <div className="text-left">
              <div className="font-semibold">{item.label}</div>
              <div className="text-sm text-gray-600  break-all">{item.value}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
