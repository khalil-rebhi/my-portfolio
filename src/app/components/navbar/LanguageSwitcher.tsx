"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Flag from "react-world-flags";

const localeMeta: Record<string, { label: string; countryCode: string }> = {
  en: { label: "English", countryCode: "US" },
  fr: { label: "Français", countryCode: "FR" },
  ar: { label: "العربية", countryCode: "TN" },
};

interface LanguageSwitcherProps {
  locale: string;
  locales: string[];
}

export default function LanguageSwitcher({
  locale,
  locales,
}: Readonly<LanguageSwitcherProps>) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`;
    router.push(newPath, { scroll: true });
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 bg-primary hover:bg-secondary-hover rounded text-sm cursor-pointer"
      >
        <Flag
          code={localeMeta[locale].countryCode}
          style={{ width: "20px", height: "15px" }}
        />
        <span>{localeMeta[locale].label}</span>
        <svg className="w-3 h-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-36 bg-white border border-gray-400 rounded-xl shadow-lg">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`flex items-center gap-2 w-full px-3 py-2 text-sm text-left rounded-xl hover:bg-secondary-hover cursor-pointer ${
                loc === locale ? "bg-secondary-glow" : ""
              }`}
            >
              <Flag
                code={localeMeta[loc].countryCode}
                style={{ width: "20px", height: "15px" }}
              />
              <span>{localeMeta[loc].label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
