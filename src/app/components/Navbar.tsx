'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomLink from './navbar/CustomLink';
import LanguageSwitcher from './navbar/LanguageSwitcher';
import Name from './navbar/Name';

const Navbar = () => {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const locales = ['en', 'fr', 'ar'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // You can fine-tune the threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <div className={`flex gap-6 ${scrolled ? 'justify-end' : 'justify-center'} flex-1 mr-2`}>
      <CustomLink href="about" onClick={() => setMenuOpen(false)}>{t('about')}</CustomLink>
      <CustomLink href="education" onClick={() => setMenuOpen(false)}>{t('education')}</CustomLink>
      <CustomLink href="projects" onClick={() => setMenuOpen(false)}>{t('projects')}</CustomLink>
      <CustomLink href="contact" onClick={() => setMenuOpen(false)}>{t('contact')}</CustomLink>
    </div>
  );

  return (
    <nav className="w-full sticky top-0 left-0 px-6 py-4 border-b border-gray-200 bg-tertiary-background text-black transition-all duration-300 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {scrolled && (
            <Name locale={locale} />
        )}

        {/* Desktop */}
        <div className={`hidden md:flex items-center w-full ${scrolled ? 'justify-between' : 'justify-center'}`}>
          {navLinks}
          <LanguageSwitcher locale={locale} locales={locales} />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 text-sm font-medium bg-white px-4 py-2 rounded shadow">
          {navLinks}
          <div className="flex gap-2">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}${pathname.replace(/^\/[a-z]{2}/, '')}`}
                onClick={() => setMenuOpen(false)}
                className={`text-xs px-2 py-1 rounded ${loc === locale ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
