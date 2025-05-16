"use client";

import Image from "next/image";
import { useState } from "react";

interface SkillCardProps {
  name: string;
  category: string;
  logo: string;
}

export default function SkillCard({
  name,
  category,
  logo,
}: Readonly<SkillCardProps>) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-32 h-32 md:w-36 md:h-36 hover:scale-125 bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-3 mb-4 overflow-hidden group transition-all cursor-pointer"
    >
      <Image
        src={logo}
        alt={name}
        width={48}
        height={48}
        className="object-contain"
      />
        <div className={`block ${ hovered ? 'md:block' : 'md:hidden'} absolute bottom-0 left-0 w-full bg-gradient-to-t from-tertiary-glow to-transparent text-secondary text-xs p-2 text-center rounded-b-xl group-hover:visible`}>
          <div className="font-semibold">{name}</div>
          <div className="opacity-80 text-[10px]">{category}</div>
        </div>
    </div>
  );
}
