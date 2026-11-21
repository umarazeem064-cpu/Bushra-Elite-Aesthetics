import { Currency, Language } from '../i18n/translations';

export const CLINIC_INFO = {
  exactName: 'Bushra Elite Aesthetics I Skin, Hair & laser Clinic',
  shortBrand: 'Bushra Elite Aesthetics',
  tagline: 'Skin & Hair rejuvenation, Anti-aging, and Personalized Treatments for your Natural Glow',
  address: 'Afzal Nusrat clinic, Allama Iqbal Rd, near Children park, Mian Channu, 58000, Pakistan',
  plusCode: 'C9V3+39 Mian Channu, Pakistan',
  coordinates: { lat: 30.4426827, lng: 72.3534982 },
  phoneDisplay: '+92 300 1181022',
  phoneLocal: '0300 1181022',
  telHref: 'tel:+923001181022',
  whatsappNumber: '923001181022',
  whatsappHref: 'https://wa.me/923001181022',
  mapsShareLink: 'https://maps.app.goo.gl/owNfDmUoaWotLeVx8',
  mapsDirectionsLink: 'https://www.google.com/maps/dir/?api=1&destination=30.4426827,72.3534982',
  facebookLink: 'https://www.facebook.com/share/1CvEpZjbYD/',
  instagramLink: 'https://www.instagram.com/bushraeliteaesthetics/',
  rating: 4.8,
  reviewCount: 161,
  dailyHours: '11:00 AM – 9:00 PM',
};

export type TreatmentCategory = 'skin' | 'hair' | 'laser';

export interface TreatmentItem {
  id: string;
  category: TreatmentCategory;
  image: string;
  durationMinutes: number;
  pricePkr: number;
  name: Record<Language, string>;
  categoryLabel: Record<Language, string>;
  description: Record<Language, string>;
  benefits: Record<Language, string[]>;
}

export const CURRENCY_RATES: Record<Currency, { symbol: string; rateFromPkr: number }> = {
  PKR: { symbol: 'PKR', rateFromPkr: 1 },
  USD: { symbol: 'USD $', rateFromPkr: 1 / 278 },
  AED: { symbol: 'AED', rateFromPkr: 3.67 / 278 },
};

export function formatPrice(pricePkr: number, currency: Currency): string {
  const { symbol, rateFromPkr } = CURRENCY_RATES[currency];
  if (currency === 'PKR') {
    return `${symbol} ${pricePkr.toLocaleString('en-US')}`;
  }
  const converted = Math.round(pricePkr * rateFromPkr);
  return `${symbol} ${converted.toLocaleString('en-US')}`;
}

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'face-prp',
    category: 'skin',
    image: '/src/assets/images/treatment_face_prp_1795254314544.jpg',
    durationMinutes: 45,
    pricePkr: 12000,
    name: {
      en: 'Face PRP / Mesotherapy',
      ur: 'فیس پی آر پی / میزوتھراپی',
      ar: 'بلازما الوجه / الميزوثيرابي',
    },
    categoryLabel: {
      en: 'Regenerative Dermatology',
      ur: 'ریجنریٹو ڈرماٹولوجی',
      ar: 'تجديد البشرة الطبي',
    },
    description: {
      en: 'Autologous platelet-rich plasma paired with micro-mesotherapy delivers concentrated growth factors into the dermis to stimulate collagen, refine acne scarring, and restore natural luminosity.',
      ur: 'مریض کے اپنے خون سے حاصل کردہ پی آر پی اور میزوتھراپی جلد میں کولیجن کی پیداوار بڑھا کر داغ دھبے کم کرتی ہے اور قدرتی چمک لوٹاتی ہے۔',
      ar: 'توصيل البلازما الغنية بالصفائح الدموية مع الميزوثيرابي إلى الأدمة لتحفيز الكولاجين وتخفيف آثار الندبات واستعادة الإشراقة.',
    },
    benefits: {
      en: ['Boosts endogenous collagen synthesis', 'Softens post-acne texture & fine lines', 'Zero synthetic fillers or downtime'],
      ur: ['کولیجن کی قدرتی افزائش', 'ایکنی کے نشانات اور باریک لکیروں میں کمی', 'محفوظ اور قدرتی طریقہ کار'],
      ar: ['تحفيز إنتاج الكولاجين الطبيعي', 'تحسين ملمس ندبات حب الشباب', 'إجراء آمن بدون مواد مالئة صناعية'],
    },
  },
  {
    id: 'led-therapy',
    category: 'laser',
    image: '/src/assets/images/treatment_led_therapy_1795254396827.jpg',
    durationMinutes: 30,
    pricePkr: 4500,
    name: {
      en: 'LED Therapy',
      ur: 'ایل ای ڈی لائٹ تھراپی',
      ar: 'العلاج الضوئي LED',
    },
    categoryLabel: {
      en: 'Photobiomodulation',
      ur: 'فوٹو بایوموڈولیشن',
      ar: 'العلاج الضوئي الخلوي',
    },
    description: {
      en: 'Medical-grade 630nm red and 850nm near-infrared phototherapy calms active skin inflammation, accelerates post-procedure healing, and supports cellular ATP repair.',
      ur: 'میڈیکل گریڈ ریڈ اور انفراریڈ ایل ای ڈی لائٹ جلد کی سوزش کم کرتی ہے اور علاج کے بعد جلد کی بحالی کو تیز کرتی ہے۔',
      ar: 'علاج ضوئي طبي بأطوال موجية دقيقة لتهدئة التهاب البشرة وتسريع التعافي الخلوي وتحفيز التجدد.',
    },
    benefits: {
      en: ['Calms redness & inflammatory acne', 'Accelerates recovery after PRP or peels', 'Non-thermal, painless relaxation'],
      ur: ['سرخی اور سوزش میں فوری آرام', 'پی آر پی یا پیل کے بعد تیز بحالی', 'مکمل طور پر بے درد سیشن'],
      ar: ['تهدئة الاحمرار وحب الشباب الملتهب', 'تسريع التعافي بعد البلازما والتقشير', 'جلسة مريحة وغير حرارية'],
    },
  },
  {
    id: 'hair-prp',
    category: 'hair',
    image: '/src/assets/images/treatment_hair_prp_1795254396378.jpg',
    durationMinutes: 50,
    pricePkr: 14500,
    name: {
      en: 'Hair PRP / Exosomes',
      ur: 'ہیئر پی آر پی / ایگزوسومز',
      ar: 'بلازما الشعر / الإكسوزوم',
    },
    categoryLabel: {
      en: 'Clinical Trichology',
      ur: 'کلینیکل ٹرائیکالوجی',
      ar: 'طب الشعر السريري',
    },
    description: {
      en: 'Targeted scalp micro-injections of double-spin autologous PRP enriched with follicular growth signaling reduce shedding and awaken dormant hair follicles.',
      ur: 'ڈبل اسپن پی آر پی اور گروتھ سگنلنگ کے ذریعے سر کی جڑوں کو مضبوط بنا کر بالوں کا گرنا روکا جاتا ہے اور نئی نشوونما ہوتی ہے۔',
      ar: 'حقن مجهري للبلازما المركزة وعوامل النمو في فروة الرأس لتقليل التساقط وتنشيط البصيلات الخاملة.',
    },
    benefits: {
      en: ['Strengthens miniaturized hair shafts', 'Reduces seasonal & androgenetic shedding', 'Sterile closed-tube preparation'],
      ur: ['کمزور بالوں کی جڑوں کی مضبوطی', 'بالوں کے گرنے میں واضح کمی', 'جراثیم سے پاک کلوزڈ ٹیوب سسٹم'],
      ar: ['تقوية البصيلات الضعيفة', 'تقليل التساقط الوراثي والموسمي', 'تحضير معقم بأنابيب مغلقة'],
    },
  },
  {
    id: 'melasma',
    category: 'skin',
    image: '/src/assets/images/treatment_melasma_1795254316033.jpg',
    durationMinutes: 40,
    pricePkr: 8500,
    name: {
      en: 'Melasma',
      ur: 'ملازما اور چھائیوں کا علاج',
      ar: 'علاج الكلف والتصبغات',
    },
    categoryLabel: {
      en: 'Pigment Dermatology',
      ur: 'پگمنٹ ڈرماٹولوجی',
      ar: 'علاج التصبغات الجلدية',
    },
    description: {
      en: 'Physician-supervised depigmentation combining gentle tyrosinase inhibitors, barrier repair serums, and Wood’s lamp pigment mapping designed safely for South Asian skin tones.',
      ur: 'ساؤتھ ایشین جلد کے لیے محفوظ میڈیکل پروٹوکول جو گہری چھائیوں اور دھوپ کے داغوں کو بتدریج صاف کرتا ہے۔',
      ar: 'بروتوكول طبي متخصص لتفتيح الكلف وتنظيم الميلانين مع حماية حاجز البشرة بما يناسب البشرة الشرقية.',
    },
    benefits: {
      en: ['Targets dermal & epidermal melanin safely', 'Prevents post-inflammatory rebound', 'Includes custom home barrier regimen'],
      ur: ['گہری اور سطحی چھائیوں کا محفوظ علاج', 'دوبارہ سیاہی آنے سے بچاؤ', 'گھر کے لیے مکمل سکن کیئر گائیڈ'],
      ar: ['استهداف آمن للتصبغات العميقة والسطحية', 'منع ارتداد التصبغات الالتهابية', 'خطة عناية منزلية مخصصة'],
    },
  },
  {
    id: 'chemical-peels',
    category: 'skin',
    image: '/src/assets/images/treatment_chemical_peels_1795254314229.jpg',
    durationMinutes: 35,
    pricePkr: 7500,
    name: {
      en: 'Chemical Peels',
      ur: 'کیمیکل پیلز',
      ar: 'التقشير الكيميائي الطبي',
    },
    categoryLabel: {
      en: 'Medical Resurfacing',
      ur: 'میڈیکل ری سرفیسنگ',
      ar: 'تجديد سطح البشرة',
    },
    description: {
      en: 'Controlled medical-grade mandelic, salicylic, or glycolic exfoliation applied by our dermatologist to decongest pores, fade dark marks, and smooth uneven tone.',
      ur: 'ماہر ڈرماٹولوجسٹ کے زیرِ نگرانی میڈیکل پیلز جو بند مسام کھولتی ہیں، داغ ہلکے کرتی ہیں اور جلد کو ہموار بناتی ہیں۔',
      ar: 'تقشير طبي مدروس بأحماض الماندليك والساليسيليك لتنقية المسام وتوحيد لون البشرة وتنعيم ملمسها.',
    },
    benefits: {
      en: ['Clears comedones & acne blemishes', 'Brightens dull, sun-damaged skin', 'Calibrated pH for zero harsh peeling'],
      ur: ['بلیک ہیڈز اور ایکنی کے داغوں کا خاتمہ', 'بے رونق جلد میں فوری نکھار', 'محفوظ اور متوازن پی ایچ فارمولا'],
      ar: ['تنقية المسام وآثار حب الشباب', 'إشراقة فورية للبشرة الباهتة', 'تركيز متوازن بدون تهيج شديد'],
    },
  },
  {
    id: 'carbon-facial',
    category: 'laser',
    image: '/src/assets/images/treatment_carbon_facial_1795254315385.jpg',
    durationMinutes: 45,
    pricePkr: 9000,
    name: {
      en: 'Carbon Facial',
      ur: 'کاربن لیزر فیشل',
      ar: 'فيشل الكربون بالليزر',
    },
    categoryLabel: {
      en: 'Q-Switched Laser Peel',
      ur: 'کیو سوئچڈ لیزر پیل',
      ar: 'تقشير الليزر الكربوني',
    },
    description: {
      en: 'A thin layer of medical activated carbon binds to excess sebum and impurities before being gently vaporized by Q-Switched laser pulses for tightened pores and instant radiance.',
      ur: 'میڈیکل کاربن ماسک اور کیو سوئچڈ لیزر کے امتزاج سے کھلے مسام تنگ ہوتے ہیں، اضافی چکنائی ختم ہوتی ہے اور جلد چمک اٹھتی ہے۔',
      ar: 'طبقة من الكربون الطبي النشط تُزال بنبضات ليزر كيو سويتشد لتقليص المسام وتنظيم الدهون ومنح نضارة فورية.',
    },
    benefits: {
      en: ['Visibly tightens enlarged pores', 'Balances oily & combination T-zones', 'Event-ready glow with zero downtime'],
      ur: ['کھلے مساموں کی فوری تنگی', 'چکنی جلد کا متوازن کنٹرول', 'بغیر کسی وقفے کے فوری گلو'],
      ar: ['تضييق المسام الواسعة بشكل ملحوظ', 'توازن إفرازات البشرة الدهنية', 'إشراقة فورية دون فترة نقاهة'],
    },
  },
  {
    id: 'hydrafacial',
    category: 'skin',
    image: '/src/assets/images/treatment_hydrafacial_1795254396147.jpg',
    durationMinutes: 50,
    pricePkr: 8000,
    name: {
      en: 'Medical HydraFacial',
      ur: 'میڈیکل ہائیڈرا فیشل',
      ar: 'هيدرافيشل طبي',
    },
    categoryLabel: {
      en: 'Vortex Hydro-Dermabrasion',
      ur: 'ہائیڈرو ڈرمابریشن',
      ar: 'تنظيف وترطيب عميق',
    },
    description: {
      en: 'Multi-step vortex cleansing, gentle extraction, and antioxidant peptide infusion frequently praised by our patients for deep hydration without irritation.',
      ur: 'کثیر المراحل صفائی، گہرے مساموں کی نکاسی اور اینٹی آکسیڈنٹ سیرم انفیوژن جو جلد کو نرم، صاف اور تر و تازہ بناتا ہے۔',
      ar: 'تنظيف عميق وتقشير لطيف وتغذية بمضادات الأكسدة والببتيدات لترطيب مكثف ونقاء فوري.',
    },
    benefits: {
      en: ['Painless blackhead & sebum extraction', 'Deep hyaluronic & peptide infusion', 'Suitable for sensitive skin before events'],
      ur: ['بے درد بلیک ہیڈز کی صفائی', 'ہائیلورونک ایسڈ سے گہری نمی', 'حساس جلد کے لیے بہترین انتخاب'],
      ar: ['إزالة الرؤوس السوداء دون ألم', 'ترطيب عميق بالهيالورونيك', 'مناسب للبشرة الحساسة والمناسبات'],
    },
  },
  {
    id: 'laser-removal',
    category: 'laser',
    image: '/src/assets/images/treatment_laser_removal_1795254396425.jpg',
    durationMinutes: 40,
    pricePkr: 6500,
    name: {
      en: 'Laser Hair Removal',
      ur: 'لیزر ہیئر ریموول',
      ar: 'إزالة الشعر بالليزر',
    },
    categoryLabel: {
      en: 'Sapphire-Cooled Diode Laser',
      ur: 'سیفائر کولڈ ڈائیوڈ لیزر',
      ar: 'ليزر الدايود المبرد',
    },
    description: {
      en: 'Physician-calibrated laser hair reduction featuring sapphire contact cooling for comfortable, long-term reduction of unwanted facial or body hair.',
      ur: 'جدید کولنگ سسٹم کے ساتھ محفوظ لیزر ہیئر ریموول جو چہرے اور جسم کے غیر ضروری بالوں میں دیرپا کمی لاتا ہے۔',
      ar: 'تقنية ليزر الدايود المزودة بتبريد الياقوت لتقليل الشعر غير المرغوب فيه بأمان وراحة طويلة الأمد.',
    },
    benefits: {
      en: ['Ice-cooled handpiece for patient comfort', 'Safe calibration for dark hair & olive skin', 'Eliminates razor bumps & ingrown hair'],
      ur: ['آئس کولڈ ہینڈ پیس سے آرام دہ سیشن', 'پاکستانی جلد کے مطابق محفوظ سیٹنگز', 'ان گرون ہیئرز سے نجات'],
      ar: ['تبريد فوري لراحة المريض أثناء الجلسة', 'آمن للبشرة القمحية والسمراء', 'يمنع التهاب البصيلات ونمو الشعر تحت الجلد'],
    },
  },
];

export interface PatientReview {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  reviewCountLabel: string;
  quote: string;
  treatmentTag: Record<Language, string>;
}

export const GOOGLE_MAPS_REVIEWS: PatientReview[] = [
  {
    id: 'hatib-malik',
    name: 'Hatib Malik',
    avatar: '/src/assets/images/avatar_hatib_1795254314828.jpg',
    rating: 5,
    timeAgo: '2 months ago',
    reviewCountLabel: '1 review · Google Maps',
    quote:
      'I had a wonderful experience with Dr. Bushra Afzal. She is very professional, kind, and understanding. She listened carefully to my skin concerns and guided me properly. I’m really satisfied with the treatment and results. Highly recommended Dr. Bushra Afzal for skin-related concerns!',
    treatmentTag: {
      en: 'Skin Consultation & Treatment',
      ur: 'سکن کنسلٹیشن و علاج',
      ar: 'استشارة وعلاج البشرة',
    },
  },
  {
    id: 'amara-khaan',
    name: 'amara khaan2020',
    avatar: '/src/assets/images/avatar_amara_1795254314729.jpg',
    rating: 5,
    timeAgo: 'a month ago',
    reviewCountLabel: '1 review · Google Maps',
    quote:
      'Hmny yha s treatment krwaya mdcn di s very effective...staff is very cooperative.. ...highly recommended',
    treatmentTag: {
      en: 'Dermatology & Medication Care',
      ur: 'ڈرماٹولوجی و میڈیکیشن',
      ar: 'رعاية جلدية وعلاجية',
    },
  },
  {
    id: 'zulfiqar-ali',
    name: 'Zulfiqar Ali',
    avatar: '/src/assets/images/avatar_zulfiqar_1795254397374.jpg',
    rating: 5,
    timeAgo: 'a month ago',
    reviewCountLabel: '2 reviews · Google Maps',
    quote:
      'Excellent experience and remarkable performance as well as dealing. Once you may visit for skin care and relevant treatment. Behavior of the staff is very good.',
    treatmentTag: {
      en: 'Skincare & Clinical Experience',
      ur: 'سکن کیئر و کلینیکل تجربہ',
      ar: 'العناية بالبشرة',
    },
  },
];

export const RESULT_IMAGES = [
  '/src/assets/images/results_pigmentation_1795254314040.jpg',
  '/src/assets/images/results_hair_skin_prp_1795254396814.jpg',
];

export const SPECIALIST_IMAGES = [
  '/src/assets/images/specialist_dr_bushra_1795254314997.jpg',
  '/src/assets/images/specialist_laser_director_1795254396135.jpg',
];

export const HERO_IMAGE = '/src/assets/images/hero_clinic_consultation_1795254315440.jpg';

export const TIME_SLOTS = [
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:30 PM',
  '04:30 PM',
  '05:30 PM',
  '06:30 PM',
  '07:30 PM',
  '08:15 PM',
];
