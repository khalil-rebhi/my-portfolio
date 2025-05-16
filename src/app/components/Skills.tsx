"use client";

import { useTranslations } from "next-intl";
import SkillCard from "./skills/SkillCard";
import { skills } from "./skills/skillsData";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

export default function Skills() {
  const t = useTranslations("Skills");
  return (
    <section id="skills" className="py-16 px-6 text-center">
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.name}>
              <SkillCard
                name={skill.name}
                logo={skill.logo}
                category={skill.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
