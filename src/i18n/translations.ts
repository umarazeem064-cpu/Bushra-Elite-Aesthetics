export type Language = 'en' | 'ur' | 'ar';
export type Currency = 'PKR' | 'USD' | 'AED';

export interface TranslationBundle {
  dir: 'ltr' | 'rtl';
  langLabel: string;
  nav: {
    home: string;
    treatments: string;
    about: string;
    results: string;
    reviews: string;
    bookNow: string;
    bookConsultation: string;
    callNow: string;
    whatsapp: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    callCta: string;
    stats: {
      ratingLabel: string;
      hoursLabel: string;
      hoursValue: string;
      specialistLabel: string;
      specialistValue: string;
      locationLabel: string;
      locationValue: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: {
      title: string;
      detail: string;
    }[];
  };
  treatments: {
    eyebrow: string;
    title: string;
    subtitle: string;
    currencyLabel: string;
    filterAll: string;
    filterSkin: string;
    filterHair: string;
    filterLaser: string;
    bookTreatment: string;
    durationSuffix: string;
  };
  results: {
    eyebrow: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    cases: {
      title: string;
      protocol: string;
      timeline: string;
      summary: string;
    }[];
  };
  specialists: {
    eyebrow: string;
    title: string;
    subtitle: string;
    profiles: {
      name: string;
      role: string;
      credentials: string;
      experience: string;
      bio: string;
    }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    verifiedBadge: string;
    ratingSummary: string;
    viewOnMaps: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    date: string;
    timeSlot: string;
    selectTime: string;
    treatment: string;
    selectTreatment: string;
    notes: string;
    notesPlaceholder: string;
    submitBtn: string;
    whatsappBtn: string;
    validationError: string;
    modalTitle: string;
    modalSubtitle: string;
    modalClose: string;
    summaryLabels: {
      patient: string;
      phone: string;
      treatment: string;
      schedule: string;
      notes: string;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    addressValue: string;
    hoursLabel: string;
    hoursValue: string;
    phoneLabel: string;
    whatsappLabel: string;
    directionsBtn: string;
    callBtn: string;
    whatsappBtn: string;
    socialLabel: string;
    days: { day: string; time: string }[];
  };
  footer: {
    tagline: string;
    rights: string;
    credit: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationBundle> = {
  en: {
    dir: 'ltr',
    langLabel: 'English',
    nav: {
      home: 'Home',
      treatments: 'Treatments',
      about: 'About Us',
      results: 'Results',
      reviews: 'Reviews',
      bookNow: 'Book Now',
      bookConsultation: 'Book Consultation',
      callNow: 'Call Now',
      whatsapp: 'WhatsApp',
    },
    hero: {
      eyebrow: 'Afzal Nusrat Clinic · Allama Iqbal Rd, Mian Channu',
      title: 'Clinical Precision for Radiant Skin, Hair & Laser Care.',
      subtitle:
        'Led by Dr. Bushra Afzal, Bushra Elite Aesthetics combines evidence-based dermatology, sterile regenerative PRP protocols, and medical-grade laser systems for natural, lasting results.',
      primaryCta: 'Book Appointment',
      secondaryCta: 'Chat on WhatsApp',
      callCta: 'Call +92 300 1181022',
      stats: {
        ratingLabel: 'Verified Google Rating',
        hoursLabel: 'Daily Clinic Hours',
        hoursValue: '11:00 AM – 9:00 PM',
        specialistLabel: 'Lead Physician',
        specialistValue: 'Dr. Bushra Afzal',
        locationLabel: 'Location',
        locationValue: 'Near Children Park, Mian Channu',
      },
    },
    about: {
      eyebrow: 'Clinical Philosophy',
      title: 'Thoughtful Dermatology Tailored to Your Skin Biology.',
      body: 'Every consultation begins with a thorough diagnostic assessment of skin barrier health, pigment depth, and follicular vitality. Rather than one-size-fits-all packages, Dr. Bushra Afzal designs measured treatment plans focused on natural clarity, safety, and compassionate clinical care.',
      pillars: [
        {
          title: 'Sterile Single-Use Protocols',
          detail: 'Hospital-grade sterilization and closed-system PRP kits ensure complete procedural safety on every visit.',
        },
        {
          title: 'Humble, Attentive Guidance',
          detail: 'Unrushed one-on-one consultations where every concern is heard, explained, and tracked across sessions.',
        },
        {
          title: 'Natural-Looking Outcomes',
          detail: 'Balanced cellular renewal and medical laser calibration engineered to enhance—never over-treat—your features.',
        },
      ],
    },
    treatments: {
      eyebrow: 'Signature Clinical Menu',
      title: 'Our Signature Treatments',
      subtitle:
        'Evidence-driven aesthetic dermatology, regenerative hair restoration, and precision laser procedures performed in a serene, hygienic clinical environment.',
      currencyLabel: 'Currency',
      filterAll: 'All Treatments',
      filterSkin: 'Skin & Renewal',
      filterHair: 'Hair & Scalp',
      filterLaser: 'Laser & Light',
      bookTreatment: 'Book This Treatment',
      durationSuffix: 'Session',
    },
    results: {
      eyebrow: 'Clinical Outcomes',
      title: 'Before & After Patient Results',
      subtitle:
        'Consistent, documented improvements achieved through structured medical protocols, sun-protection coaching, and scheduled follow-ups.',
      beforeLabel: 'Baseline',
      afterLabel: 'Post-Protocol',
      cases: [
        {
          title: 'Epidermal Melasma & Sun Pigmentation Clearance',
          protocol: 'Melasma Depigmentation + Chemical Peel Series',
          timeline: '10 Weeks · 4 Clinical Sessions',
          summary:
            'Targeted tyrosinase modulation paired with controlled mandelic-glycolic resurfacing visibly lifted patchy cheek hyperpigmentation while preserving skin barrier integrity.',
        },
        {
          title: 'Crown Density & Follicular Thickness Restoration',
          protocol: 'Autologous Hair PRP + Exosome Growth Protocol',
          timeline: '16 Weeks · 4 Clinical Sessions',
          summary:
            'High-concentration platelet growth factors delivered directly to the dermal papilla reduced shedding by week 4 and improved crown density across 4 months.',
        },
      ],
    },
    specialists: {
      eyebrow: 'Medical Leadership',
      title: 'Meet Our Aesthetic Specialists',
      subtitle:
        'Trusted by patients across Mian Channu and South Punjab for compassionate diagnostics and ethical aesthetic medicine.',
      profiles: [
        {
          name: 'Dr. Bushra Afzal',
          role: 'Lead Dermatologist & Aesthetic Physician',
          credentials: 'MBBS · Aesthetic Dermatology & Laser Medicine',
          experience: '9+ Years Clinical Practice',
          bio: 'Recognized by patients for her humble demeanor and meticulous diagnostic listening, Dr. Bushra Afzal leads all facial PRP, melasma management, chemical peel, and laser protocols with strict focus on natural results.',
        },
        {
          name: 'Dr. Kamran Haider',
          role: 'Senior Trichology & Laser Specialist',
          credentials: 'MBBS · Clinical Trichology & Energy-Based Devices',
          experience: '7+ Years Clinical Practice',
          bio: 'Specializes in autologous Hair PRP, exosome scalp therapy, diode laser calibration, and acne-scar remodeling using evidence-based clinical parameters tailored for South Asian skin phototypes.',
        },
      ],
    },
    reviews: {
      eyebrow: 'Google Maps Verified Feedback',
      title: 'Trusted by 160+ Patients in Mian Channu',
      subtitle:
        'Real patient experiences shared publicly on our Google Maps listing—highlighting Dr. Bushra Afzal’s attentive care and cooperative clinical team.',
      verifiedBadge: 'Google Maps Review',
      ratingSummary: '4.8 out of 5 · 161 Verified Reviews',
      viewOnMaps: 'Read All Reviews on Google Maps',
    },
    booking: {
      eyebrow: 'Direct Clinic Scheduling',
      title: 'Reserve Your Consultation',
      subtitle:
        'Select your preferred treatment and time between 11:00 AM and 9:00 PM. Receive instant on-screen confirmation and dispatch directly to our clinic WhatsApp desk.',
      fullName: 'Patient Full Name',
      fullNamePlaceholder: 'e.g., Ayesha Siddiqui',
      phone: 'Phone / WhatsApp Number',
      phonePlaceholder: 'e.g., 0300 1234567',
      date: 'Preferred Date',
      timeSlot: 'Preferred Time Slot',
      selectTime: 'Choose a time slot',
      treatment: 'Select Treatment',
      selectTreatment: 'Choose a procedure',
      notes: 'Skin / Hair Notes or Symptoms',
      notesPlaceholder: 'Describe your primary concern, allergies, or preferred doctor...',
      submitBtn: 'Confirm Appointment',
      whatsappBtn: 'Send Booking on WhatsApp',
      validationError: 'Please complete your full name, valid phone number, date, time slot, and treatment selection.',
      modalTitle: 'Appointment Request Confirmed',
      modalSubtitle:
        'Your booking summary is ready. Click below to send it directly to Bushra Elite Aesthetics on WhatsApp (+92 300 1181022) for immediate slot lock.',
      modalClose: 'Close Window',
      summaryLabels: {
        patient: 'Patient',
        phone: 'Contact',
        treatment: 'Treatment',
        schedule: 'Requested Slot',
        notes: 'Notes',
      },
    },
    contact: {
      eyebrow: 'Visit the Clinic',
      title: 'Location, Timings & Direct Contact',
      addressLabel: 'Clinic Address',
      addressValue: 'Afzal Nusrat clinic, Allama Iqbal Rd, near Children park, Mian Channu, 58000, Pakistan',
      hoursLabel: 'Opening Hours',
      hoursValue: 'Open Daily · 11:00 AM – 9:00 PM',
      phoneLabel: 'Phone & Appointments',
      whatsappLabel: 'WhatsApp Desk',
      directionsBtn: 'Get Directions on Google Maps',
      callBtn: 'Call +92 300 1181022',
      whatsappBtn: 'Message on WhatsApp',
      socialLabel: 'Official Channels',
      days: [
        { day: 'Monday', time: '11:00 AM – 9:00 PM' },
        { day: 'Tuesday', time: '11:00 AM – 9:00 PM' },
        { day: 'Wednesday', time: '11:00 AM – 9:00 PM' },
        { day: 'Thursday', time: '11:00 AM – 9:00 PM' },
        { day: 'Friday', time: '11:00 AM – 9:00 PM' },
        { day: 'Saturday', time: '11:00 AM – 9:00 PM' },
        { day: 'Sunday', time: '11:00 AM – 9:00 PM' },
      ],
    },
    footer: {
      tagline: 'Skin & Hair rejuvenation, Anti-aging, and Personalized Treatments for your Natural Glow.',
      rights: '© 2026 Bushra Elite Aesthetics I Skin, Hair & laser Clinic. All rights reserved.',
      credit: 'Afzal Nusrat Clinic, Allama Iqbal Rd, Mian Channu · Clinical Web Platform',
    },
  },
  ur: {
    dir: 'rtl',
    langLabel: 'اردو',
    nav: {
      home: 'ہوم',
      treatments: 'علاج',
      about: 'ہمارے بارے میں',
      results: 'نتائج',
      reviews: 'آراء',
      bookNow: 'بکنگ کریں',
      bookConsultation: 'اپائنٹمنٹ بک کریں',
      callNow: 'ابھی کال کریں',
      whatsapp: 'واٹس ایپ',
    },
    hero: {
      eyebrow: 'افضل نصرت کلینک · علامہ اقبال روڈ، میاں چنوں',
      title: 'خوبصورت جلد، بالوں اور لیزر کیئر کے لیے مستند کلینیکل علاج۔',
      subtitle:
        'ڈاکٹر بشریٰ افضل کی زیرِ نگرانی بشریٰ ایلیٹ ایستھیٹکس جدید ڈرماٹولوجی، جراثیم سے پاک پی آر پی تھراپی اور میڈیکل گریڈ لیزر کے ذریعے قدرتی اور پائیدار نتائج فراہم کرتا ہے۔',
      primaryCta: 'اپائنٹمنٹ بک کریں',
      secondaryCta: 'واٹس ایپ پر رابطہ کریں',
      callCta: 'کال کریں +92 300 1181022',
      stats: {
        ratingLabel: 'گوگل میپس ریٹنگ',
        hoursLabel: 'کلینک کے اوقات',
        hoursValue: 'صبح 11:00 تا رات 9:00',
        specialistLabel: 'سربراہ معالج',
        specialistValue: 'ڈاکٹر بشریٰ افضل',
        locationLabel: 'مقام',
        locationValue: 'نزد چلڈرن پارک، میاں چنوں',
      },
    },
    about: {
      eyebrow: 'ہمارا طبی منہج',
      title: 'آپ کی جلد کی نوعیت کے مطابق ماہرانہ تشخیص اور علاج۔',
      body: 'ہر مشورے کا آغاز جلد کے بیریئر، پگمنٹیشن کی گہرائی اور بالوں کی جڑوں کے تفصیلی معائنے سے ہوتا ہے۔ ڈاکٹر بشریٰ افضل ہر مریض کے لیے محفوظ اور قدرتی نتائج پر مبنی منصوبہ ترتیب دیتی ہیں۔',
      pillars: [
        {
          title: 'مکمل جراثیم کش طریقہ کار',
          detail: 'ہر سیشن میں سنگل یوز اسٹیرائل کٹس اور عالمی معیار کی کلینیکل صفائی کا خاص خیال رکھا جاتا ہے۔',
        },
        {
          title: 'توجہ اور شائستہ رہنمائی',
          detail: 'ہر مریض کی بات اطمینان سے سنی جاتی ہے اور علاج کے تمام مراحل کی واضح وضاحت کی جاتی ہے۔',
        },
        {
          title: 'قدرتی اور متوازن نتائج',
          detail: 'غیر ضروری مداخلت کے بغیر جلد اور بالوں کی قدرتی چمک اور صحت کی بحالی۔',
        },
      ],
    },
    treatments: {
      eyebrow: 'خصوصی کلینیکل سروسز',
      title: 'ہمارے نمایاں علاج',
      subtitle:
        'جدید سکن ریجوینیشن، ہیئر پی آر پی اور لیزر تھراپی کے مستند سیشنز پرسکون اور معیاری ماحول میں۔',
      currencyLabel: 'کرنسی',
      filterAll: 'تمام علاج',
      filterSkin: 'جلد اور نکھار',
      filterHair: 'بال اور سر',
      filterLaser: 'لیزر اور لائٹ',
      bookTreatment: 'یہ علاج بک کریں',
      durationSuffix: 'سیشن',
    },
    results: {
      eyebrow: 'کلینیکل نتائج',
      title: 'علاج سے پہلے اور بعد کے نتائج',
      subtitle:
        'مستند طبی طریقہ کار اور باقاعدہ فالو اپ کے ذریعے حاصل ہونے والی واضح بہتری۔',
      beforeLabel: 'علاج سے پہلے',
      afterLabel: 'علاج کے بعد',
      cases: [
        {
          title: 'ملازما اور چھائیوں کا مؤثر خاتمہ',
          protocol: 'ملازما ڈیپگمنٹیشن + کیمیکل پیل سیریز',
          timeline: '10 ہفتے · 4 سیشنز',
          summary:
            'ہدف شدہ میلانن کنٹرول اور میڈیکل پیلنگ کے ذریعے گالوں کی گہری چھائیاں نمایاں طور پر کم ہوئیں اور جلد صاف ہوئی۔',
        },
        {
          title: 'بالوں کی کثافت اور جڑوں کی بحالی',
          protocol: 'ہیئر پی آر پی + ایگزوسوم گروتھ تھراپی',
          timeline: '16 ہفتے · 4 سیشنز',
          summary:
            'پلیٹلیٹ گروتھ فیکٹرز کے براہِ راست استعمال سے چوتھے ہفتے میں بال گرنا کم ہوئے اور بالوں کا گھنا پن بہتر ہوا۔',
        },
      ],
    },
    specialists: {
      eyebrow: 'ماہرینِ طب',
      title: 'ہمارے ماہر ڈاکٹرز سے ملیں',
      subtitle: 'میاں چنوں اور جنوبی پنجاب میں قابلِ اعتماد ڈرماٹولوجی اور ایستھیٹک کیئر۔',
      profiles: [
        {
          name: 'ڈاکٹر بشریٰ افضل',
          role: 'لیڈ ڈرماٹولوجسٹ اور ایستھیٹک فزیشن',
          credentials: 'MBBS · ایستھیٹک ڈرماٹولوجی و لیزر میڈیسن',
          experience: '9+ سال کلینیکل تجربہ',
          bio: 'مریضوں میں اپنی نرم گفتاری اور باریک بینی سے تشخیص کے لیے معروف، ڈاکٹر بشریٰ افضل فیس پی آر پی، ملازما، کیمیکل پیلز اور لیزر علاج کی نگرانی کرتی ہیں۔',
        },
        {
          name: 'ڈاکٹر کامران حیدر',
          role: 'سینئر ٹرائیکالوجی و لیزر اسپیشلسٹ',
          credentials: 'MBBS · کلینیکل ٹرائیکالوجی اور لیزر سسٹمز',
          experience: '7+ سال کلینیکل تجربہ',
          bio: 'ہیئر پی آر پی، ایگزوسوم تھیراپی، ڈائیوڈ لیزر ہیئر ریموول اور ایکنی اسکارز کے جدید علاج میں مہارت رکھتے ہیں۔',
        },
      ],
    },
    reviews: {
      eyebrow: 'گوگل میپس تصدیق شدہ آراء',
      title: '160+ مطمئن مریضوں کا اعتماد',
      subtitle:
        'گوگل میپس پر موجود حقیقی مریضوں کے تاثرات جو ڈاکٹر بشریٰ افضل اور عملے کے بہترین رویے کی گواہی دیتے ہیں۔',
      verifiedBadge: 'گوگل میپس ریویو',
      ratingSummary: '4.8 / 5 ستارے · 161 تصدیق شدہ آراء',
      viewOnMaps: 'گوگل میپس پر تمام آراء دیکھیں',
    },
    booking: {
      eyebrow: 'آن لائن شیڈولنگ',
      title: 'اپنی اپائنٹمنٹ محفوظ کریں',
      subtitle:
        'صبح 11:00 سے رات 9:00 بجے تک اپنا پسندیدہ وقت اور علاج منتخب کریں اور فوری واٹس ایپ تصدیق حاصل کریں۔',
      fullName: 'مریض کا مکمل نام',
      fullNamePlaceholder: 'مثلاً عائشہ صدیقی',
      phone: 'فون / واٹس ایپ نمبر',
      phonePlaceholder: 'مثلاً 0300 1234567',
      date: 'مطلوبہ تاریخ',
      timeSlot: 'مطلوبہ وقت',
      selectTime: 'وقت منتخب کریں',
      treatment: 'علاج منتخب کریں',
      selectTreatment: 'پروسیجر منتخب کریں',
      notes: 'جلد یا بالوں کی تفصیل / علامات',
      notesPlaceholder: 'اپنا مسئلہ یا ترجیحی ڈاکٹر تحریر کریں...',
      submitBtn: 'اپائنٹمنٹ کی تصدیق کریں',
      whatsappBtn: 'واٹس ایپ پر بکنگ بھیجیں',
      validationError: 'براہِ کرم مکمل نام، درست فون نمبر، تاریخ، وقت اور علاج منتخب کریں۔',
      modalTitle: 'اپائنٹمنٹ کی درخواست موصول ہوگئی',
      modalSubtitle:
        'اپنے منتخب کردہ وقت کو فوری پکا کرنے کے لیے نیچے دیے گئے بٹن سے واٹس ایپ (+92 300 1181022) پر تفصیل بھیجیں۔',
      modalClose: 'بند کریں',
      summaryLabels: {
        patient: 'مریض',
        phone: 'رابطہ نمبر',
        treatment: 'علاج',
        schedule: 'وقت و تاریخ',
        notes: 'تفصیل',
      },
    },
    contact: {
      eyebrow: 'کلینک کا پتہ',
      title: 'مقام، اوقات اور براہِ راست رابطہ',
      addressLabel: 'کلینک کا پتہ',
      addressValue: 'افضل نصرت کلینک، علامہ اقبال روڈ، نزد چلڈرن پارک، میاں چنوں، 58000، پاکستان',
      hoursLabel: 'کلینک کے اوقات',
      hoursValue: 'روزانہ کھلا ہے · صبح 11:00 تا رات 9:00',
      phoneLabel: 'فون اور اپائنٹمنٹس',
      whatsappLabel: 'واٹس ایپ ڈیسک',
      directionsBtn: 'گوگل میپس پر راستہ دیکھیں',
      callBtn: 'کال کریں +92 300 1181022',
      whatsappBtn: 'واٹس ایپ پر میسج کریں',
      socialLabel: 'آفیشل سوشل میڈیا',
      days: [
        { day: 'پیر', time: '11:00 AM – 9:00 PM' },
        { day: 'منگل', time: '11:00 AM – 9:00 PM' },
        { day: 'بدھ', time: '11:00 AM – 9:00 PM' },
        { day: 'جمعرات', time: '11:00 AM – 9:00 PM' },
        { day: 'جمعہ', time: '11:00 AM – 9:00 PM' },
        { day: 'ہفتہ', time: '11:00 AM – 9:00 PM' },
        { day: 'اتوار', time: '11:00 AM – 9:00 PM' },
      ],
    },
    footer: {
      tagline: 'آپ کی قدرتی دلکشی کے لیے جلد، بالوں اور اینٹی ایجنگ کے مستند اور شخصی علاج۔',
      rights: '© 2026 بشریٰ ایلیٹ ایستھیٹکس | سکن، ہیئر اینڈ لیزر کلینک۔ جملہ حقوق محفوظ ہیں۔',
      credit: 'افضل نصرت کلینک، علامہ اقبال روڈ، میاں چنوں',
    },
  },
  ar: {
    dir: 'rtl',
    langLabel: 'العربية',
    nav: {
      home: 'الرئيسية',
      treatments: 'العلاجات',
      about: 'عن العيادة',
      results: 'النتائج',
      reviews: 'التقييمات',
      bookNow: 'احجز الآن',
      bookConsultation: 'احجز استشارة',
      callNow: 'اتصل الآن',
      whatsapp: 'واتساب',
    },
    hero: {
      eyebrow: 'عيادة أفضل نصرت · طريق علامة إقبال، ميان تشانو',
      title: 'دقة طبية متقدمة للعناية بالبشرة والشعر والليزر.',
      subtitle:
        'تحت إشراف الدكتورة بشرى أفضل، تجمع عيادة بشرى إيليت للتجميل بين طب الأمراض الجلدية القائم على الأدلة وبروتوكولات البلازما المعقمة وأجهزة الليزر الطبية لنتائج طبيعية ومستدامة.',
      primaryCta: 'احجز موعداً',
      secondaryCta: 'تواصل عبر واتساب',
      callCta: 'اتصل +92 300 1181022',
      stats: {
        ratingLabel: 'تقييم خرائط جوجل',
        hoursLabel: 'ساعات العمل اليومية',
        hoursValue: '11:00 ص – 9:00 م',
        specialistLabel: 'الطبيبة المشرفة',
        specialistValue: 'د. بشرى أفضل',
        locationLabel: 'الموقع',
        locationValue: 'بالقرب من حديقة الأطفال، ميان تشانو',
      },
    },
    about: {
      eyebrow: 'الفلسفة الطبية',
      title: 'رعاية جلدية دقيقة مصممة لبيولوجيا بشرتك.',
      body: 'تبدأ كل استشارة بتقييم تشخيصي شامل لصحة حاجز البشرة وعمق التصبغات وحيوية البصيلات. تصمم الدكتورة بشرى أفضل خطط علاج مدروسة تركز على النقاء الطبيعي والأمان الكامل.',
      pillars: [
        {
          title: 'بروتوكولات تعقيم أحادية الاستخدام',
          detail: 'تعقيم بمستوى المستشفيات وأطقم بلازما مغلقة لضمان أقصى درجات الأمان في كل جلسة.',
        },
        {
          title: 'إرشاد طبي هادئ ومهتم',
          detail: 'استشارات فردية متأنية يتم فيها الاستماع لكل استفسار وشرح الخطوات بوضوح تام.',
        },
        {
          title: 'نتائج طبيعية متوازنة',
          detail: 'تجديد خلوي مدروس ومعايرة دقيقة لأجهزة الليزر لإبراز جمالك الطبيعي دون مبالغة.',
        },
      ],
    },
    treatments: {
      eyebrow: 'قائمة العلاجات المعتمدة',
      title: 'علاجاتنا المتميزة',
      subtitle:
        'إجراءات تجميلية طبية وعلاجات تجديد الشعر والليزر الدقيقة في بيئة سريرية هادئة ومعقمة.',
      currencyLabel: 'العملة',
      filterAll: 'جميع العلاجات',
      filterSkin: 'البشرة والنضارة',
      filterHair: 'الشعر وفروة الرأس',
      filterLaser: 'الليزر والضوء',
      bookTreatment: 'احجز هذا العلاج',
      durationSuffix: 'جلسة',
    },
    results: {
      eyebrow: 'النتائج السريرية',
      title: 'نتائج المرضى قبل وبعد',
      subtitle:
        'تحسنات موثقة تحققت عبر بروتوكولات طبية منظمة ومتابعة دقيقة للحماية من الشمس.',
      beforeLabel: 'قبل العلاج',
      afterLabel: 'بعد البروتوكول',
      cases: [
        {
          title: 'علاج الكلف والتصبغات الشمسية',
          protocol: 'إزالة تصبغات الكلف + جلسات التقشير الكيميائي',
          timeline: '10 أسابيع · 4 جلسات سريرية',
          summary:
            'تنظيم إنتاج الميلانين مع التقشير الطبي اللطيف أدى إلى تفتيح التصبغات بشكل واضح مع الحفاظ على صحة البشرة.',
        },
        {
          title: 'استعادة كثافة الشعر وتقوية البصيلات',
          protocol: 'بلازما الشعر PRP + الإكسوزوم المحفز للنمو',
          timeline: '16 أسبوعاً · 4 جلسات سريرية',
          summary:
            'عوامل النمو المركزة الموجهة لبصيلات الرأس قللت التساقط من الأسبوع الرابع وزادت الكثافة خلال أربعة أشهر.',
        },
      ],
    },
    specialists: {
      eyebrow: 'القيادة الطبية',
      title: 'تعرف على أطبائنا المتخصصين',
      subtitle: 'موثوقون من قبل المرضى في ميان تشانو وجنوب البنجاب للتشخيص الدقيق والطب التجميلي الآمن.',
      profiles: [
        {
          name: 'د. بشرى أفضل',
          role: 'استشارية الأمراض الجلدية والطب التجميلي',
          credentials: 'بكالوريوس طب وجراحة · الأمراض الجلدية والليزر التجميلي',
          experience: 'خبرة سريرية تزيد عن 9 سنوات',
          bio: 'معروفة بين مرضاها بتواضعها ودقة استماعها التشخيصي، تشرف الدكتورة بشرى أفضل على جميع جلسات بلازما الوجه وعلاج الكلف والتقشير والليزر.',
        },
        {
          name: 'د. كامران حيدر',
          role: 'أخصائي علاج الشعر والليزر الطبي',
          credentials: 'بكالوريوس طب وجراحة · طب الشعر والأجهزة الطبية',
          experience: 'خبرة سريرية تزيد عن 7 سنوات',
          bio: 'متخصص في علاجات بلازما الشعر والإكسوزوم وإزالة الشعر بالليزر الدايود وإعادة تأهيل ندبات حب الشباب بمعايير آمنة للبشرة الآسيوية.',
        },
      ],
    },
    reviews: {
      eyebrow: 'تقييمات موثقة من خرائط جوجل',
      title: 'ثقة أكثر من 160 مريضاً في ميان تشانو',
      subtitle:
        'تجارب مرضى حقيقية منشورة على صفحة عيادتنا في خرائط جوجل تشيد باهتمام الدكتورة بشرى أفضل وتعاون الطاقم الطبي.',
      verifiedBadge: 'تقييم خرائط جوجل',
      ratingSummary: '4.8 من 5 · 161 تقييماً موثقاً',
      viewOnMaps: 'اقرأ جميع التقييمات على خرائط جوجل',
    },
    booking: {
      eyebrow: 'الحجز المباشر',
      title: 'احجز استشارتك الآن',
      subtitle:
        'اختر العلاج والوقت المناسب بين الساعة 11:00 صباحاً و9:00 مساءً واحصل على تأكيد فوري وإرسال مباشر إلى واتساب العيادة.',
      fullName: 'الاسم الكامل للمريض',
      fullNamePlaceholder: 'مثال: عائشة صديقي',
      phone: 'رقم الهاتف / واتساب',
      phonePlaceholder: 'مثال: 0300 1234567',
      date: 'التاريخ المفضل',
      timeSlot: 'الفترة الزمنية المفضلة',
      selectTime: 'اختر الوقت',
      treatment: 'اختر العلاج',
      selectTreatment: 'اختر الإجراء الطبي',
      notes: 'ملاحظات البشرة / الشعر أو الأعراض',
      notesPlaceholder: 'اذكر مشكلتك الأساسية أو أي حساسية...',
      submitBtn: 'تأكيد الموعد',
      whatsappBtn: 'إرسال الحجز عبر واتساب',
      validationError: 'يرجى إدخال الاسم الكامل ورقم هاتف صحيح والتاريخ والوقت والعلاج.',
      modalTitle: 'تم تأكيد طلب الموعد',
      modalSubtitle:
        'ملخص الحجز جاهز. اضغط أدناه لإرساله مباشرة إلى واتساب عيادة بشرى إيليت (+92 300 1181022) لتثبيت الموعد فوراً.',
      modalClose: 'إغلاق النافذة',
      summaryLabels: {
        patient: 'المريض',
        phone: 'الهاتف',
        treatment: 'العلاج',
        schedule: 'الموعد المطلوب',
        notes: 'ملاحظات',
      },
    },
    contact: {
      eyebrow: 'زيارة العيادة',
      title: 'الموقع، ساعات العمل والتواصل المباشر',
      addressLabel: 'عنوان العيادة',
      addressValue: 'عيادة أفضل نصرت، طريق علامة إقبال، بالقرب من حديقة الأطفال، ميان تشانو، 58000، باكستان',
      hoursLabel: 'ساعات العمل',
      hoursValue: 'مفتوح يومياً · 11:00 صباحاً – 9:00 مساءً',
      phoneLabel: 'الهاتف والمواعيد',
      whatsappLabel: 'مكتب واتساب',
      directionsBtn: 'احصل على الاتجاهات في خرائط جوجل',
      callBtn: 'اتصل +92 300 1181022',
      whatsappBtn: 'راسلنا على واتساب',
      socialLabel: 'القنوات الرسمية',
      days: [
        { day: 'الإثنين', time: '11:00 AM – 9:00 PM' },
        { day: 'الثلاثاء', time: '11:00 AM – 9:00 PM' },
        { day: 'الأربعاء', time: '11:00 AM – 9:00 PM' },
        { day: 'الخميس', time: '11:00 AM – 9:00 PM' },
        { day: 'الجمعة', time: '11:00 AM – 9:00 PM' },
        { day: 'السبت', time: '11:00 AM – 9:00 PM' },
        { day: 'الأحد', time: '11:00 AM – 9:00 PM' },
      ],
    },
    footer: {
      tagline: 'تجديد البشرة والشعر، ومكافحة علامات التقدم في السن، وعلاجات مخصصة لإشراقة طبيعية.',
      rights: '© 2026 عيادة بشرى إيليت للتجميل | البشرة والشعر والليزر. جميع الحقوق محفوظة.',
      credit: 'عيادة أفضل نصرت، طريق علامة إقبال، ميان تشانو',
    },
  },
};
