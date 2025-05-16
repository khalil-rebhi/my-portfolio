'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import CustomLink from './navbar/CustomLink';
import LanguageSwitcher from './navbar/LanguageSwitcher';
import Name from './navbar/Name';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const locales = ['en', 'fr', 'ar'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (isMobile = false) => (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 ${scrolled ? 'justify-end' : 'justify-center'} flex-1 mr-2`}>
      <CustomLink href="about" onClick={() => setMenuOpen(false)}>{t('about')}</CustomLink>
      <CustomLink href="skills" onClick={() => setMenuOpen(false)}>{t('skills')}</CustomLink>
      <CustomLink href="education" onClick={() => setMenuOpen(false)}>{t('education')}</CustomLink>
      <CustomLink href="projects" onClick={() => setMenuOpen(false)}>{t('projects')}</CustomLink>
      <CustomLink href="contact" onClick={() => setMenuOpen(false)}>{t('contact')}</CustomLink>
    </div>
  );

  return (
    <nav className={`w-full sticky top-0 left-0 px-6 py-4 border-b border-gray-200 ${scrolled ? 'bg-black' : 'bg-transparent'} transition-all duration-300 z-50`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {scrolled && (
            <Name locale={locale} />
        )}

        <div className={`hidden md:flex items-center w-full ${scrolled ? 'justify-between' : 'justify-center'}`}>
          {navLinks(false)}
          <LanguageSwitcher locale={locale} locales={locales} />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col items-center gap-3 text-sm font-medium bg-black px-4 py-2 rounded">
          {navLinks(true)}
          <LanguageSwitcher locale={locale} locales={locales} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
