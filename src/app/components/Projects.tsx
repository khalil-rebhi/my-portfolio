"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectCard from "./projects/ProjectCard";
import { projectData } from "./projects/projectsData";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <section className="py-16 text-center" id="projects">
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
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projectData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} tasks={project.tasks} id={project.id} technologies={project.technologies} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
