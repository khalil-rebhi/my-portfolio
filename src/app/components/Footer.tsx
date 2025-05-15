'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import CustomLink from './navbar/CustomLink';

export default function Footer() {
  const t = useTranslations('Navbar');
  const locale = useLocale();

  const navLinks = [
    { label: t('about'), href: 'about' },
    { label: t('education'), href: 'education' },
    { label: t('projects'), href: 'projects' },
    { label: t('contact'), href: 'contact' }
  ];

  return (
    <footer className="w-full mt-20 border-t border-gray-300  text-black  transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <Link href={`/${locale}`} className="text-xl font-bold tracking-wide hover:text-primary transition-all">
          Khalil Rebhi
        </Link>

        <div className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <CustomLink key={link.href} href={link.href}>
              {link.label}
            </CustomLink>
          ))}
        </div>

        <div className="flex gap-4 text-lg">
          <a href="https://www.facebook.com/2khalilrebhi" target='_blank' rel='noopener noreferrer' className="hover:text-[#1877F2]">
            <FaFacebook />
          </a>
          <a href="https://github.com/khalil-rebhi" target="_blank" rel="noopener noreferrer" className="hover:text-[#181717]">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rebhi-khalil/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2]">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 pb-6">
        © {new Date().getFullYear()} Khalil Rebhi. All rights reserved.
      </div>
    </footer>
  );
}
