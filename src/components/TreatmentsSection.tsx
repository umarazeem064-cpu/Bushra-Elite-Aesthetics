import { useState } from 'react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { Currency, Language, TranslationBundle } from '../i18n/translations';
import { TREATMENTS, TreatmentCategory, formatPrice } from '../data/clinicData';
import { ClinicalImage } from './ClinicalImage';

interface TreatmentsSectionProps {
  t: TranslationBundle;
  language: Language;
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onSelectTreatment: (treatmentId: string) => void;
}

export function TreatmentsSection({
  t,
  language,
  currency,
  onCurrencyChange,
  onSelectTreatment,
}: TreatmentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | TreatmentCategory>('all');

  const filteredTreatments =
    activeCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((item) => item.category === activeCategory);

  const filterTabs: { id: 'all' | TreatmentCategory; label: string }[] = [
    { id: 'all', label: t.treatments.filterAll },
    { id: 'skin', label: t.treatments.filterSkin },
    { id: 'hair', label: t.treatments.filterHair },
    { id: 'laser', label: t.treatments.filterLaser },
  ];

  const currencies: Currency[] = ['PKR', 'USD', 'AED'];

  return (
    <section
      id="treatments"
      className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#0E1619]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-3">
              {t.treatments.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight text-balance">
              {t.treatments.title}
            </h2>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.treatments.subtitle}
            </p>
          </div>

          {/* Filter Tabs + Multi-Currency Segmented Control */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div
              role="tablist"
              aria-label="Treatment categories"
              className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-white dark:bg-slate-800 text-teal-900 dark:text-teal-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              role="group"
              aria-label={t.treatments.currencyLabel}
              className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              {currencies.map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-2.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    currency === curr
                      ? 'bg-teal-800 dark:bg-teal-600 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredTreatments.map((item, idx) => (
            <article
              key={item.id}
              className="group flex flex-col bg-slate-50 dark:bg-[#121C1F] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-colors duration-200 hover:border-teal-700/50 dark:hover:border-teal-500/50"
            >
              {/* Unique 4:3 Clinical Procedure Photo */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
                <ClinicalImage
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Zero-pill unboxed metadata */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                  <span className="tabular-nums">0{idx + 1}.</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.categoryLabel[language]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 tabular-nums">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {item.durationMinutes}m {t.treatments.durationSuffix}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight">
                  {item.name[language]}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description[language]}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {item.benefits[language].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Check
                        className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & Direct Booking Action */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {t.treatments.durationSuffix} Fee
                    </span>
                    <span className="text-lg font-bold text-slate-900 dark:text-slate-50 tabular-nums">
                      {formatPrice(item.pricePkr, currency)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTreatment(item.id)}
                    className="inline-flex items-center gap-1.5 h-10 px-4 text-xs sm:text-sm font-medium text-white bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                  >
                    <span>{t.treatments.bookTreatment}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
