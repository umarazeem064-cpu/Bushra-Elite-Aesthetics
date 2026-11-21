/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Clock,
  ExternalLink,
  Calendar,
  ArrowUpRight,
} from 'lucide-react';
import { Currency, Language, TRANSLATIONS } from './i18n/translations';
import {
  CLINIC_INFO,
  GOOGLE_MAPS_REVIEWS,
  HERO_IMAGE,
  RESULT_IMAGES,
  SPECIALIST_IMAGES,
  TREATMENTS,
} from './data/clinicData';
import { Header } from './components/Header';
import { TreatmentsSection } from './components/TreatmentsSection';
import { BookingSection } from './components/BookingSection';
import { ClinicalImage } from './components/ClinicalImage';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('PKR');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(TREATMENTS[0].id);
  const [preloaderState, setPreloaderState] = useState<'visible' | 'fading' | 'gone'>('visible');

  const t = TRANSLATIONS[language];

  // Smooth preloader fade on initial load
  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setPreloaderState('fading'), 400);
    const removeTimer = window.setTimeout(() => setPreloaderState('gone'), 850);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  // Sync RTL / LTR direction and language on <html>
  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = language;
  }, [t.dir, language]);

  // Sync Tailwind v4 .dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTreatment = (treatmentId: string) => {
    setSelectedTreatmentId(treatmentId);
    scrollToSection('booking');
  };

  return (
    <div
      dir={t.dir}
      className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B1113] dark:text-slate-100 transition-colors duration-200"
    >
      {/* Initial Page Preloader */}
      {preloaderState !== 'gone' && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#0B1113] ${
            preloaderState === 'fading' ? 'preloader-hidden pointer-events-none' : ''
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              className="text-teal-800 dark:text-teal-400"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M12 6.5C13.8 9.2 15.2 10.6 17.5 12C15.2 13.4 13.8 14.8 12 17.5C10.2 14.8 8.8 13.4 6.5 12C8.8 10.6 10.2 9.2 12 6.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {CLINIC_INFO.shortBrand}
            </p>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <Header
        t={t}
        language={language}
        onLanguageChange={setLanguage}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        onBookClick={() => scrollToSection('booking')}
      />

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Hero Narrative */}
              <div className="lg:col-span-6 flex flex-col justify-center py-2">
                <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-4">
                  {t.hero.eyebrow}
                </p>

                <h1
                  className="font-display font-semibold text-slate-900 dark:text-slate-50 tracking-tight leading-[1.08] text-balance"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
                >
                  {t.hero.title}
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  {t.hero.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection('booking')}
                    className="h-12 px-6 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                  >
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>{t.hero.primaryCta}</span>
                  </button>

                  <a
                    href={CLINIC_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 px-5 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                  >
                    <MessageCircle className="w-4 h-4 text-teal-700 dark:text-teal-400" aria-hidden="true" />
                    <span>{t.hero.secondaryCta}</span>
                  </a>

                  <a
                    href={CLINIC_INFO.telHref}
                    className="h-12 px-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-teal-800 dark:text-teal-400 hover:underline underline-offset-4 whitespace-nowrap shrink-0 tabular-nums"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>{t.hero.callCta}</span>
                  </a>
                </div>
              </div>

              {/* Hero Clinical Consultation Suite Image */}
              <div className="lg:col-span-6">
                <div className="h-full min-h-[280px] lg:min-h-[440px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-900">
                  <ClinicalImage
                    src={HERO_IMAGE}
                    alt={`${CLINIC_INFO.exactName} consultation room in Mian Channu`}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Clinic Verification Strip */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t.hero.stats.ratingLabel}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-lg font-semibold text-slate-900 dark:text-slate-50 tabular-nums">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" aria-hidden="true" />
                  <span>
                    {CLINIC_INFO.rating} / 5.0 · {CLINIC_INFO.reviewCount} Reviews
                  </span>
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t.hero.stats.hoursLabel}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50 tabular-nums">
                  {t.hero.stats.hoursValue}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t.hero.stats.specialistLabel}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {t.hero.stats.specialistValue}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t.hero.stats.locationLabel}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {t.hero.stats.locationValue}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us / Clinical Philosophy */}
        <section
          id="about"
          className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0B1113]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-3">
                  {t.about.eyebrow}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight text-balance">
                  {t.about.title}
                </h2>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.about.body}
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
                {t.about.pillars.map((pillar, index) => (
                  <div key={pillar.title} className="py-6 first:pt-2 last:pb-2 flex gap-5">
                    <span className="font-display text-2xl font-semibold text-teal-800 dark:text-teal-400 tabular-nums shrink-0">
                      0{index + 1}.
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signature Treatments Menu */}
        <TreatmentsSection
          t={t}
          language={language}
          currency={currency}
          onCurrencyChange={setCurrency}
          onSelectTreatment={handleSelectTreatment}
        />

        {/* Before & After Clinical Results Gallery */}
        <section
          id="results"
          className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0B1113]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-3">
                {t.results.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight text-balance">
                {t.results.title}
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.results.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {t.results.cases.map((item, idx) => (
                <article
                  key={item.title}
                  className="bg-white dark:bg-[#121C1F] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-900 overflow-hidden">
                    <ClinicalImage
                      src={RESULT_IMAGES[idx]}
                      alt={`${item.title} before and after clinical result`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 py-3 flex items-center justify-between text-xs font-semibold text-white">
                      <span>{t.results.beforeLabel}</span>
                      <span>{t.results.afterLabel}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                      <span>{item.protocol}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{item.timeline}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Aesthetic Specialists */}
        <section
          id="specialists"
          className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0E1619]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-3">
                {t.specialists.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight text-balance">
                {t.specialists.title}
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.specialists.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {t.specialists.profiles.map((doctor, idx) => (
                <article
                  key={doctor.name}
                  className="grid grid-cols-1 sm:grid-cols-12 bg-slate-50 dark:bg-[#121C1F] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
                >
                  <div className="sm:col-span-5 aspect-[3/4] sm:aspect-auto bg-slate-200 dark:bg-slate-900 overflow-hidden">
                    <ClinicalImage
                      src={SPECIALIST_IMAGES[idx]}
                      alt={`${doctor.name} — ${doctor.role}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-center">
                    <p className="text-xs font-medium text-teal-800 dark:text-teal-400 mb-1.5">
                      {doctor.experience}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-50">
                      {doctor.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                      {doctor.role}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {doctor.credentials}
                    </p>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {doctor.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Verified Google Maps Patient Reviews */}
        <section
          id="reviews"
          className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0B1113]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-3">
                  {t.reviews.eyebrow}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight text-balance">
                  {t.reviews.title}
                </h2>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.reviews.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50 tabular-nums">
                  <div className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span>{t.reviews.ratingSummary}</span>
                </div>
                <a
                  href={CLINIC_INFO.mapsShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800 dark:text-teal-400 hover:underline underline-offset-4"
                >
                  <span>{t.reviews.viewOnMaps}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {GOOGLE_MAPS_REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="bg-white dark:bg-[#121C1F] border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-500" />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {review.timeAgo}
                      </span>
                    </div>

                    <blockquote className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      “{review.quote}”
                    </blockquote>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                      <ClinicalImage
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50 truncate">
                        {review.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {review.treatmentTag[language]} · {t.reviews.verifiedBadge}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Appointment Booking & WhatsApp Dispatch */}
        <BookingSection
          t={t}
          language={language}
          currency={currency}
          selectedTreatmentId={selectedTreatmentId}
          onTreatmentChange={setSelectedTreatmentId}
        />

        {/* Location, Timings & Direct Contact */}
        <section
          id="contact"
          className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0E1619]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-3">
                {t.contact.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight text-balance">
                {t.contact.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Clinic Details & Hours */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-[#121C1F] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-800 dark:text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {t.contact.addressLabel}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                        {t.contact.addressValue}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                        {CLINIC_INFO.plusCode}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0" />
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {t.contact.hoursLabel}
                      </p>
                    </div>
                    <dl className="space-y-1.5 text-sm">
                      {t.contact.days.map((entry) => (
                        <div key={entry.day} className="flex justify-between gap-4">
                          <dt className="text-slate-600 dark:text-slate-300">{entry.day}</dt>
                          <dd className="font-medium text-slate-900 dark:text-slate-100 tabular-nums">
                            {entry.time}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <a
                    href={CLINIC_INFO.mapsDirectionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 px-4 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-sm font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>{t.contact.directionsBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={CLINIC_INFO.telHref}
                      className="h-11 px-4 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-medium transition-colors tabular-nums"
                    >
                      <Phone className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0" />
                      <span className="truncate">{t.contact.callBtn}</span>
                    </a>

                    <a
                      href={CLINIC_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-teal-800 dark:text-teal-400 shrink-0" />
                      <span className="truncate">{t.contact.whatsappBtn}</span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                    <span className="font-medium">{t.contact.socialLabel}</span>
                    <div className="flex items-center gap-4">
                      <a
                        href={CLINIC_INFO.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-800 dark:text-slate-200 hover:text-teal-800 dark:hover:text-teal-400 hover:underline underline-offset-4"
                      >
                        Facebook
                      </a>
                      <a
                        href={CLINIC_INFO.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-800 dark:text-slate-200 hover:text-teal-800 dark:hover:text-teal-400 hover:underline underline-offset-4"
                      >
                        Instagram
                      </a>
                      <a
                        href={CLINIC_INFO.mapsShareLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-800 dark:text-slate-200 hover:text-teal-800 dark:hover:text-teal-400 hover:underline underline-offset-4"
                      >
                        Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="lg:col-span-7 min-h-[380px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <iframe
                  title="Bushra Elite Aesthetics I Skin, Hair & laser Clinic Google Map"
                  src={`https://maps.google.com/maps?q=${CLINIC_INFO.coordinates.lat},${CLINIC_INFO.coordinates.lng}&z=16&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px] border-0"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B1113] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
              {CLINIC_INFO.exactName}
            </p>
            <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {t.footer.tagline}
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 md:text-end">
            <p>{t.footer.rights}</p>
            <p>{t.footer.credit}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
