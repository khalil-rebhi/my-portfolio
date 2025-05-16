"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedTitle from "./about/AnimatedTitle";

export default function About() {
  const t = useTranslations("About");

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="relative w-60 h-60 rounded-full p-2 border-4 border-tertiary-glow">
          <div className="rounded-full overflow-hidden w-full h-full">
            <Image
              src="/profile.jpg"
              alt="Khalil Rebhi"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="text-center md:text-left flex-1">
  <AnimatedTitle />
  <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 cursor-none">
    {t("description")}
  </p>
  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    <a
      href="mailto:khalilrebhi5@gmail.com"
      className="px-6 py-2 bg-primary text-white rounded-full font-semibold shadow-md hover:bg-primary/80 transition"
    >
      {t("hireMe")}
    </a>
    <button
      onClick={scrollToContact}
      className="px-6 py-2 bg-secondary text-white rounded-full cursor-pointer font-semibold shadow-md hover:bg-secondary/80 transition"
    >
      {t("contact")}
    </button>
  </div>
</div>

      </div>
    </section>
  );
}
