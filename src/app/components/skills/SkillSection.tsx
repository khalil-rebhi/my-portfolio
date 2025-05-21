import React from 'react'
import { getSkillsByCategory } from './skillsData'
import SkillCard from './SkillCard';

interface SkillSectionProps{
    category: string;
}

const SkillSection = ({ category } : Readonly<SkillSectionProps>) => {
  return (
    <div>
    <h3 className="text-xl font-semibold mb-4 text-center">{ category }</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {getSkillsByCategory(category).map((skill) => (
        <SkillCard
          key={skill.name}
          name={skill.name}
          logo={skill.logo}
          category={skill.category}
        />
      ))}
    </div>
  </div>
  )
}

export default SkillSection