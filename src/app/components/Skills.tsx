"use client";

import { useTranslations } from "next-intl";
import SkillCard from "./skills/SkillCard";
import { skills } from "./skills/skillsData";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function Skills() {
  const t = useTranslations("Navbar");
  return (
    <section id="skills" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-tertiary-glow">
        🚀 {t("skills")}
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          waitForTransition: true,
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
    </section>
  );
}
