import { useTranslations } from "next-intl";
import SkillCard from "./skills/SkillCard";
import { skills } from "./skills/skillsData";

export default function Skills() {

  const t = useTranslations('Navbar');
  return (
    <section id="skills" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 animate-rgb-text">🚀 {t('skills')}</h2>
      <div className="flex overflow-x-auto gap-6 px-4 mb-4 pb-16 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            category={skill.category}
            logo={skill.logo}
          />
        ))}
      </div>
    </section>
  );
}