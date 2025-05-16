import { routing } from "@/i18n/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Formation from "../components/Formation";
import Skills from "../components/Skills";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <Navbar />
      <About />
      <Skills />
      <Formation />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      {children}
    </NextIntlClientProvider>
  );
}
