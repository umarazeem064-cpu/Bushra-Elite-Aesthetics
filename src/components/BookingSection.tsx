import { useEffect, useState, FormEvent } from 'react';
import { Calendar, Clock, Phone, MessageCircle, CheckCircle2, X, AlertCircle } from 'lucide-react';
import { Currency, Language, TranslationBundle } from '../i18n/translations';
import { CLINIC_INFO, TIME_SLOTS, TREATMENTS, formatPrice } from '../data/clinicData';

interface BookingSectionProps {
  t: TranslationBundle;
  language: Language;
  currency: Currency;
  selectedTreatmentId: string;
  onTreatmentChange: (id: string) => void;
}

interface BookingSummary {
  fullName: string;
  phone: string;
  date: string;
  timeSlot: string;
  treatmentName: string;
  notes: string;
}

export function BookingSection({
  t,
  language,
  currency,
  selectedTreatmentId,
  onTreatmentChange,
}: BookingSectionProps) {
  const todayIso = new Date().toISOString().split('T')[0];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(todayIso);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0]);
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSummary | null>(null);

  useEffect(() => {
    if (selectedTreatmentId) {
      setErrorMsg('');
    }
  }, [selectedTreatmentId]);

  const activeTreatment = TREATMENTS.find((item) => item.id === selectedTreatmentId);

  const buildWhatsAppUrl = (summary: BookingSummary) => {
    const message = [
      `Hello ${CLINIC_INFO.shortBrand},`,
      `I would like to book an appointment:`,
      `- Patient Name: ${summary.fullName}`,
      `- Phone / WhatsApp: ${summary.phone}`,
      `- Treatment: ${summary.treatmentName}`,
      `- Preferred Date: ${summary.date}`,
      `- Preferred Time: ${summary.timeSlot}`,
      summary.notes ? `- Notes / Concerns: ${summary.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    return `${CLINIC_INFO.whatsappHref}?text=${encodeURIComponent(message)}`;
  };

  const validateAndBuildSummary = (): BookingSummary | null => {
    const cleanName = fullName.trim();
    const cleanPhone = phone.trim();
    const digitCount = cleanPhone.replace(/\D/g, '').length;

    if (!cleanName || digitCount < 7 || !date || !timeSlot || !selectedTreatmentId) {
      setErrorMsg(t.booking.validationError);
      return null;
    }

    setErrorMsg('');
    const treatmentName = activeTreatment
      ? `${activeTreatment.name[language]} (${formatPrice(activeTreatment.pricePkr, currency)})`
      : selectedTreatmentId;

    return {
      fullName: cleanName,
      phone: cleanPhone,
      date,
      timeSlot,
      treatmentName,
      notes: notes.trim(),
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const summary = validateAndBuildSummary();
    if (!summary) return;
    setConfirmedBooking(summary);
  };

  const handleDirectWhatsApp = () => {
    const summary = validateAndBuildSummary();
    if (!summary) return;
    setConfirmedBooking(summary);
  };

  return (
    <section
      id="booking"
      className="py-20 sm:py-24 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#0B1113]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Consultation Desk Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-teal-800 dark:text-teal-400 mb-3">
                {t.booking.eyebrow}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50 tracking-tight text-balance">
                {t.booking.title}
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.booking.subtitle}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-5">
              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-teal-800 dark:text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {t.contact.hoursLabel}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 tabular-nums">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-teal-800 dark:text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href={CLINIC_INFO.telHref}
                    className="text-sm font-medium text-teal-800 dark:text-teal-400 hover:underline tabular-nums"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MessageCircle className="w-5 h-5 text-teal-800 dark:text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {t.contact.whatsappLabel}
                  </p>
                  <a
                    href={CLINIC_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-teal-800 dark:text-teal-400 hover:underline tabular-nums"
                  >
                    wa.me/{CLINIC_INFO.whatsappNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121C1F] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {errorMsg && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 p-3.5 rounded-lg border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 text-sm"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                  >
                    {t.booking.fullName}
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.booking.fullNamePlaceholder}
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                  >
                    {t.booking.phone}
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.booking.phonePlaceholder}
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                  >
                    {t.booking.date}
                  </label>
                  <div className="relative">
                    <input
                      id="booking-date"
                      type="date"
                      required
                      min={todayIso}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 tabular-nums"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                  >
                    {t.booking.timeSlot}
                  </label>
                  <select
                    id="booking-time"
                    required
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 tabular-nums"
                  >
                    <option value="">{t.booking.selectTime}</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-treatment"
                  className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                >
                  {t.booking.treatment}
                </label>
                <select
                  id="booking-treatment"
                  required
                  value={selectedTreatmentId}
                  onChange={(e) => onTreatmentChange(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700"
                >
                  <option value="">{t.booking.selectTreatment}</option>
                  {TREATMENTS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name[language]} — {item.durationMinutes}m ·{' '}
                      {formatPrice(item.pricePkr, currency)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5"
                >
                  {t.booking.notes}
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.booking.notesPlaceholder}
                  className="w-full p-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 resize-y"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="h-11 px-6 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>{t.booking.submitBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="h-11 px-5 inline-flex items-center justify-center gap-2 rounded-lg border border-teal-800 dark:border-teal-500 text-teal-900 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{t.booking.whatsappBtn}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-confirmed-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
        >
          <div className="w-full max-w-lg bg-white dark:bg-[#121C1F] border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-teal-700 dark:text-teal-400 shrink-0" />
                <h3
                  id="booking-confirmed-title"
                  className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-50"
                >
                  {t.booking.modalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                aria-label={t.booking.modalClose}
                className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.booking.modalSubtitle}
            </p>

            <dl className="mt-5 divide-y divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg text-sm">
              <div className="px-4 py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryLabels.patient}</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100">{confirmedBooking.fullName}</dd>
              </div>
              <div className="px-4 py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryLabels.phone}</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100 tabular-nums">
                  {confirmedBooking.phone}
                </dd>
              </div>
              <div className="px-4 py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryLabels.treatment}</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100 text-end">
                  {confirmedBooking.treatmentName}
                </dd>
              </div>
              <div className="px-4 py-3 flex justify-between gap-4">
                <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryLabels.schedule}</dt>
                <dd className="font-medium text-slate-900 dark:text-slate-100 tabular-nums">
                  {confirmedBooking.date} · {confirmedBooking.timeSlot}
                </dd>
              </div>
              {confirmedBooking.notes && (
                <div className="px-4 py-3 flex justify-between gap-4">
                  <dt className="text-slate-500 dark:text-slate-400">{t.booking.summaryLabels.notes}</dt>
                  <dd className="font-medium text-slate-900 dark:text-slate-100 text-end">
                    {confirmedBooking.notes}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppUrl(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-11 px-5 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.booking.whatsappBtn}</span>
              </a>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                className="h-11 px-5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors cursor-pointer"
              >
                {t.booking.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
