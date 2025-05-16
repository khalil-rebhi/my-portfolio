'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function AnimatedTitle() {
  const t = useTranslations('About');
  const text = t('title');
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
        setTimeout(type, 70);
      }
    };
    type();
    return () => {
      i = text.length;
    };
  }, [text]);

  return (
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-tertiary-glow mb-4 text-center md:text-left whitespace-pre">
      {displayed}
    </h2>
  );
}
