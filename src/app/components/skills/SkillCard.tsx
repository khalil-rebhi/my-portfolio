'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillCardProps {
  name: string;
  category: string;
  logo: string;
}

export default function SkillCard({ name, category, logo }: Readonly<SkillCardProps>) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-32 h-32 md:w-36 md:h-36 bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-3 overflow-hidden group transition-all cursor-pointer"
    >
      <Image
        src={logo}
        alt={name}
        width={48}
        height={48}
        className="object-contain"
      />
      <motion.div
        initial={{ y: '100%' }}
        whileHover={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-500 to-transparent text-black text-xs p-2 text-center rounded-b-xl group-hover:visible"
      >
        <div className="font-semibold">{name}</div>
        <div className="opacity-80 text-[10px]">{category}</div>
      </motion.div>
    </motion.div>
  );
}
