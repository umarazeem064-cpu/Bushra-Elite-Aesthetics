import { useState } from 'react';
import { Moon, Sun, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Language, TranslationBundle } from '../i18n/translations';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  t: TranslationBundle;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onBookClick: () => void;
}

export function Header({
  t,
  language,
  onLanguageChange,
  isDark,
  onToggleTheme,
  onBookClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#treatments', label: t.nav.treatments },
    { href: '#about', label: t.nav.about },
    { href: '#results', label: t.nav.results },
    { href: '#reviews', label: t.nav.reviews },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/95 dark:bg-[#0B1113]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Title */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 rounded-md"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-teal-800 dark:text-teal-400 shrink-0"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M12 6.5C13.8 9.2 15.2 10.6 17.5 12C15.2 13.4 13.8 14.8 12 17.5C10.2 14.8 8.8 13.4 6.5 12C8.8 10.6 10.2 9.2 12 6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
            {CLINIC_INFO.shortBrand}
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Text Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-teal-800 dark:hover:text-teal-400 hover:underline underline-offset-8 decoration-1 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language, Theme & Primary Consultation Action */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <label htmlFor="lang-select" className="sr-only">
            Language
          </label>
          <select
            id="lang-select"
            value={language}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="h-10 px-2.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 cursor-pointer"
          >
            <option value="en">EN</option>
            <option value="ur">اردو</option>
            <option value="ar">العربية</option>
          </select>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 text-xs sm:text-sm font-medium text-white bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
          >
            {t.nav.bookConsultation}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B1113] border-b border-slate-200 dark:border-slate-800 px-4 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-800 dark:text-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-1.5 hover:text-teal-800 dark:hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={handleNavClick}
              className="py-1.5 text-teal-800 dark:text-teal-400 font-semibold"
            >
              {t.nav.bookNow}
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-3">
            <a
              href={CLINIC_INFO.telHref}
              className="h-11 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-100"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callNow}</span>
            </a>
            <a
              href={CLINIC_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 dark:bg-teal-600 text-white text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
