/**
 * ==========================================================================
 * NEXORA BUSINESS DIRECTORY PLATFORM — CORE ENGINE
 * Brand: Nexora Directory
 * Tagline: Discover Local. Connect Better. Grow Together.
 * Architecture: High Performance, Zero CDN Dependencies, LocalStorage State
 * ==========================================================================
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DEFAULT DATASET & LOCALSTORAGE KEYS
  // ==========================================================================
  const STORAGE_KEYS = {
    BUSINESSES: 'nexora_businesses_v1',
    FAVORITES: 'nexora_favorites_v1',
    REVIEWS: 'nexora_reviews_v1',
    HISTORY: 'nexora_history_v1',
    DEALS: 'nexora_deals_v1',
    SAVED_DEALS: 'nexora_saved_deals_v1',
    NOTIFICATIONS: 'nexora_notifs_v1',
    MESSAGES: 'nexora_messages_v1',
    USER: 'nexora_auth_user_v1',
    THEME: 'nexora_theme_v1'
  };

  // Seed 16 Industry Categories
  const CATEGORIES = [
    { id: 'Restaurants', name: 'Restaurants & Cafes', count: 184, icon: '☕' },
    { id: 'Technology', name: 'Technology & IT', count: 142, icon: '💻' },
    { id: 'Healthcare', name: 'Healthcare & Clinics', count: 96, icon: '🏥' },
    { id: 'Hotels', name: 'Hotels & Hospitality', count: 68, icon: '🏨' },
    { id: 'Shopping', name: 'Shopping & Retail', count: 210, icon: '🛍️' },
    { id: 'Education', name: 'Education & Academies', count: 75, icon: '🎓' },
    { id: 'Automotive', name: 'Automotive & Tuning', count: 88, icon: '🚗' },
    { id: 'Real Estate', name: 'Real Estate & Land', count: 114, icon: '🏢' },
    { id: 'Beauty & Wellness', name: 'Beauty & Wellness', count: 92, icon: '✨' },
    { id: 'Professional Services', name: 'Legal & Accounting', count: 84, icon: '⚖️' },
    { id: 'Home Services', name: 'Home Services & Solar', count: 130, icon: '⚡' },
    { id: 'Finance', name: 'Finance & Banking', count: 54, icon: '📈' },
    { id: 'Entertainment', name: 'Entertainment & Gaming', count: 48, icon: '🎭' },
    { id: 'Fitness', name: 'Fitness & Gyms', count: 62, icon: '💪' },
    { id: 'Travel', name: 'Travel & Tourism', count: 40, icon: '✈️' },
    { id: 'Local Services', name: 'Logistics & Trades', count: 105, icon: '🛠️' }
  ];

  // Seed Metropolitan Hubs
  const LOCATIONS = [
    { name: 'Peshawar', region: 'Khyber Pakhtunkhwa', businesses: 1248, categories: 86, verified: 320, icon: '🏛️' },
    { name: 'Islamabad', region: 'Federal Capital', businesses: 1840, categories: 94, verified: 512, icon: '🌲' },
    { name: 'Lahore', region: 'Punjab Hub', businesses: 2410, categories: 98, verified: 780, icon: '🏰' },
    { name: 'Karachi', region: 'Sindh Mega-City', businesses: 3620, categories: 110, verified: 1040, icon: '🌊' },
    { name: 'Dubai', region: 'United Arab Emirates', businesses: 4280, categories: 120, verified: 1650, icon: '🏙️' },
    { name: 'London', region: 'United Kingdom', businesses: 5120, categories: 135, verified: 2100, icon: '🎡' }
  ];

  // Seed Seeded Enterprises Data
  const INITIAL_BUSINESSES = [
    {
      id: 'biz-1',
      name: 'Shiraz Arena & Fine Dining',
      category: 'Restaurants',
      city: 'Peshawar',
      address: 'University Road, Opp. University of Peshawar, Peshawar',
      rating: 4.9,
      reviewCount: 236,
      price: '$$$',
      verified: true,
      openHour: 11,
      closeHour: 23,
      hoursText: '11:00 AM - 11:30 PM',
      phone: '+92 91 5842100',
      email: 'reservations@shirazarena.pk',
      website: 'https://shirazarena.pk',
      description: 'Peshawar’s premier fine dining venue renowned for authentic Shinwari karahi, continental grill, and banquet excellence.',
      coverTheme: 'ruby',
      services: [
        { name: 'Executive Shinwari Dinner', price: '$45', duration: '1-2 hrs', desc: 'Charcoal roasted organic lamb ribs and traditional green tea.' },
        { name: 'Corporate Banquet Booking', price: '$350', duration: 'Full Evening', desc: 'Private VIP lounge setup with dedicated catering staff.' },
        { name: 'Artisan Continental Buffet', price: '$28 / person', duration: 'Buffet Hours', desc: 'Extensive multi-cuisine spread with gourmet desserts.' }
      ],
      coords: { x: 48, y: 52 },
      featured: true,
      ownerId: 'demo-owner'
    },
    {
      id: 'biz-2',
      name: 'Apex Cloud Solutions',
      category: 'Technology',
      city: 'Islamabad',
      address: 'Evacuee Trust Complex, Blue Area, Islamabad',
      rating: 4.9,
      reviewCount: 148,
      price: '$$$$',
      verified: true,
      openHour: 9,
      closeHour: 19,
      hoursText: '09:00 AM - 07:00 PM',
      phone: '+92 51 2894500',
      email: 'enterprise@apexcloud.io',
      website: 'https://apexcloud.io',
      description: 'Enterprise software development, AWS cloud infrastructure orchestration, and AI automation systems for global brands.',
      coverTheme: 'sapphire',
      services: [
        { name: 'Full-Stack Web Architecture', price: 'Starting from $800', duration: '4-6 weeks', desc: 'Scalable Next.js, microservices, and reactive databases.' },
        { name: 'Cloud Migration & DevOps', price: 'Starting from $1,200', duration: 'Custom Scope', desc: 'Zero-downtime AWS / Azure infrastructure migration.' },
        { name: 'AI Workflow Integration', price: 'Starting from $650', duration: '2 weeks', desc: 'Automated document processing and intelligence bots.' }
      ],
      coords: { x: 55, y: 38 },
      featured: true,
      ownerId: 'demo-owner'
    },
    {
      id: 'biz-3',
      name: 'Hayatabad Medical Specialty Clinic',
      category: 'Healthcare',
      city: 'Peshawar',
      address: 'Phase 4, Commercial Complex, Hayatabad, Peshawar',
      rating: 4.8,
      reviewCount: 192,
      price: '$$',
      verified: true,
      openHour: 8,
      closeHour: 22,
      hoursText: '08:00 AM - 10:00 PM',
      phone: '+92 91 5817200',
      email: 'care@hayatabadclinic.com',
      website: 'https://hayatabadclinic.com',
      description: 'State-of-the-art diagnostic imaging, cardiology consultations, dental surgery, and preventive wellness checkups.',
      coverTheme: 'emerald',
      services: [
        { name: 'Comprehensive Health Audit', price: '$85', duration: '90 mins', desc: 'Full blood profile, ECG, vitals, and physician review.' },
        { name: 'Cosmetic Dentistry & Whitening', price: '$120', duration: '60 mins', desc: 'Laser enamel brightening and protective enamel sealant.' },
        { name: 'Pediatric Consultant Review', price: '$35', duration: '45 mins', desc: 'Growth monitoring, vaccination, and diet analysis.' }
      ],
      coords: { x: 38, y: 64 },
      featured: true,
      ownerId: 'user-med'
    },
    {
      id: 'biz-4',
      name: 'The Serena Grand Hotel & Suites',
      category: 'Hotels',
      city: 'Islamabad',
      address: 'Khayaban-e-Suhrawardy, Sector G-5/1, Islamabad',
      rating: 4.9,
      reviewCount: 310,
      price: '$$$$',
      verified: true,
      openHour: 0,
      closeHour: 24,
      hoursText: '24 Hours / 7 Days Open',
      phone: '+92 51 2874000',
      email: 'reservations@serenagrand.com',
      website: 'https://serenahotels.com',
      description: 'Five-star heritage hospitality situated alongside Margalla Hills featuring rooftop dining, health club, and diplomatic suites.',
      coverTheme: 'gold',
      services: [
        { name: 'Diplomatic Luxury Suite', price: '$260 / night', duration: '24 hrs', desc: 'Panoramic Margalla view, butler service, and spa pass.' },
        { name: 'Executive Conference Hall', price: '$600 / day', duration: 'Full Day', desc: 'Accommodates 120 delegates with 4K AV gear.' },
        { name: 'Maisha Luxury Spa Session', price: '$75', duration: '75 mins', desc: 'Aromatherapy massage, steam sauna, and body scrub.' }
      ],
      coords: { x: 62, y: 32 },
      featured: true,
      ownerId: 'user-hotel'
    },
    {
      id: 'biz-5',
      name: 'Khyber Solar & Renewable Energy',
      category: 'Home Services',
      city: 'Peshawar',
      address: 'Saddar Road, Cantonment Commercial Plaza, Peshawar',
      rating: 4.7,
      reviewCount: 114,
      price: '$$$',
      verified: true,
      openHour: 9,
      closeHour: 18,
      hoursText: '09:00 AM - 06:00 PM',
      phone: '+92 91 5271890',
      email: 'info@khybersolar.pk',
      website: 'https://khybersolar.pk',
      description: 'Tier-1 bifacial solar systems, hybrid lithium storage, net-metering licensing, and commercial energy audits across KPK.',
      coverTheme: 'gold',
      services: [
        { name: '10kW Hybrid Home Solar Setup', price: '$4,200', duration: '3 Days', desc: 'Longi Tier 1 panels, Growatt Inverter, and net metering.' },
        { name: 'Commercial Energy Audit', price: '$200', duration: '1 Day', desc: 'Detailed thermal report and power efficiency modeling.' },
        { name: 'Lithium Battery Storage Upgrade', price: '$1,800', duration: '1 Day', desc: '15kWh long-life smart LiFePO4 battery pack.' }
      ],
      coords: { x: 52, y: 44 },
      featured: false,
      ownerId: 'user-solar'
    },
    {
      id: 'biz-6',
      name: 'Aura Luxe Wellness Sanctuary',
      category: 'Beauty & Wellness',
      city: 'Lahore',
      address: 'MM Alam Road, Gulberg III, Lahore',
      rating: 4.9,
      reviewCount: 165,
      price: '$$$',
      verified: true,
      openHour: 10,
      closeHour: 21,
      hoursText: '10:00 AM - 09:00 PM',
      phone: '+92 42 3578900',
      email: 'glow@auraluxe.pk',
      website: 'https://auraluxe.pk',
      description: 'High-end aesthetic skin clinic, organic spa treatments, Moroccan bath therapy, and luxury bridal grooming.',
      coverTheme: 'emerald',
      services: [
        { name: 'Hydra-Facial MD Glow', price: '$90', duration: '60 mins', desc: 'Deep pore vacuum extraction and peptide serum infusion.' },
        { name: 'Royal Moroccan Hammam', price: '$110', duration: '90 mins', desc: 'Eucalyptus steam, black soap scrub, and rose water rinse.' },
        { name: 'Artisan Hair Restyling', price: '$45', duration: '45 mins', desc: 'Master stylist consultation, cut, and conditioning wash.' }
      ],
      coords: { x: 70, y: 60 },
      featured: true,
      ownerId: 'user-aura'
    },
    {
      id: 'biz-7',
      name: 'Velocity Motors Tuning & Service',
      category: 'Automotive',
      city: 'Karachi',
      address: 'Khayaban-e-Ittehad, Phase 6 DHA, Karachi',
      rating: 4.8,
      reviewCount: 98,
      price: '$$$',
      verified: true,
      openHour: 9,
      closeHour: 20,
      hoursText: '09:00 AM - 08:00 PM',
      phone: '+92 21 3584120',
      email: 'service@velocitymotors.pk',
      website: 'https://velocitymotors.pk',
      description: 'Computerized ECU tuning, German vehicle diagnostic inspections, high-performance brakes, and ceramic paint armor.',
      coverTheme: 'ruby',
      services: [
        { name: 'Stage 1 ECU Performance Tune', price: '$350', duration: '3 hrs', desc: 'Dyno tested horsepower gain and torque optimization.' },
        { name: '9H Ceramic Coating Protection', price: '$280', duration: '2 Days', desc: 'Multi-layer hydrophobic gloss shield with 3-year warranty.' },
        { name: 'Comprehensive 120-Point Inspection', price: '$65', duration: '90 mins', desc: 'OBD2 scanning, suspension testing, and brake pad check.' }
      ],
      coords: { x: 30, y: 78 },
      featured: false,
      ownerId: 'user-velo'
    },
    {
      id: 'biz-8',
      name: 'Falcon Real Estate & Investments',
      category: 'Real Estate',
      city: 'Dubai',
      address: 'Floor 24, Boulevard Plaza Tower 1, Downtown Dubai',
      rating: 4.9,
      reviewCount: 220,
      price: '$$$$',
      verified: true,
      openHour: 9,
      closeHour: 18,
      hoursText: '09:00 AM - 06:00 PM',
      phone: '+971 4 3998100',
      email: 'invest@falconrealestate.ae',
      website: 'https://falconrealestate.ae',
      description: 'Luxury penthouses, off-plan residential developments, Golden Visa advisory, and commercial property asset management.',
      coverTheme: 'gold',
      services: [
        { name: 'Golden Visa Property Portfolio', price: '$2M+ Capital', duration: 'Consultation', desc: 'End-to-end investment advisory and residency processing.' },
        { name: 'Downtown Luxury Penthouse Tour', price: 'Complimentary', duration: '2 hrs', desc: 'Chauffeured viewing of prime Burj Khalifa view units.' },
        { name: 'Rental Yield Asset Optimization', price: '8% Mgmt Fee', duration: 'Annual', desc: 'Tenant screening, maintenance, and revenue collection.' }
      ],
      coords: { x: 82, y: 45 },
      featured: true,
      ownerId: 'user-falcon'
    },
    {
      id: 'biz-9',
      name: 'Frontier Legal & Corporate Advisors',
      category: 'Professional Services',
      city: 'Peshawar',
      address: 'Dean’s Trade Center, Islamia Road, Peshawar Cantt',
      rating: 4.7,
      reviewCount: 84,
      price: '$$$',
      verified: true,
      openHour: 9,
      closeHour: 17,
      hoursText: '09:00 AM - 05:00 PM',
      phone: '+92 91 5278100',
      email: 'counsel@frontierlegal.com',
      website: 'https://frontierlegal.com',
      description: 'Corporate law, cross-border commercial contracts, intellectual property protection, and tax dispute litigation.',
      coverTheme: 'sapphire',
      services: [
        { name: 'Enterprise Incorporation & Filing', price: '$300', duration: '5 Days', desc: 'SECP registration, NTN filing, and corporate structuring.' },
        { name: 'Trademark & Patent Registration', price: '$220', duration: '14 Days', desc: 'IPO Pakistan trademark verification and filing.' },
        { name: 'Commercial Contract Drafting', price: '$150', duration: '48 hrs', desc: 'NDA, partnership deeds, and vendor SLA agreements.' }
      ],
      coords: { x: 44, y: 49 },
      featured: false,
      ownerId: 'user-legal'
    },
    {
      id: 'biz-10',
      name: 'Mayfair Financial Advisory Ltd',
      category: 'Finance',
      city: 'London',
      address: '25 Berkeley Square, Mayfair, London W1J 6HN',
      rating: 4.9,
      reviewCount: 178,
      price: '$$$$',
      verified: true,
      openHour: 8,
      closeHour: 18,
      hoursText: '08:30 AM - 06:00 PM',
      phone: '+44 20 7946 0192',
      email: 'partners@mayfairadvisory.co.uk',
      website: 'https://mayfairadvisory.co.uk',
      description: 'Private wealth stewardship, venture funding syndication, tax structuring, and institutional mergers & acquisitions.',
      coverTheme: 'emerald',
      services: [
        { name: 'Family Office Wealth Blueprint', price: 'By Consultation', duration: 'Dedicated', desc: 'Bespoke global asset diversification and trust setup.' },
        { name: 'Venture Capital Readiness Review', price: '$1,500', duration: '1 Week', desc: 'Financial modeling, pitch deck audit, and cap table design.' },
        { name: 'UK Corporate Tax Structuring', price: '$850', duration: '3 Days', desc: 'HMRC compliant R&D tax credit claims and VAT auditing.' }
      ],
      coords: { x: 18, y: 28 },
      featured: true,
      ownerId: 'user-mayfair'
    }
  ];

  // Seed Deals & Coupons
  const INITIAL_DEALS = [
    {
      id: 'deal-1',
      bizId: 'biz-1',
      bizName: 'Shiraz Arena & Fine Dining',
      title: '20% Off Weekend Family Banquets',
      discount: '20% OFF',
      code: 'SHIRAZ20',
      expiry: '2026-10-31',
      terms: 'Applicable on tables of 4 or more on Friday and Saturday evenings.'
    },
    {
      id: 'deal-2',
      bizId: 'biz-2',
      bizName: 'Apex Cloud Solutions',
      title: 'Free Cloud Architecture & Security Audit',
      discount: '100% FREE',
      code: 'APEXFREEAUDIT',
      expiry: '2026-11-15',
      terms: 'Complimentary 2-hour assessment for high-traffic web startups.'
    },
    {
      id: 'deal-3',
      bizId: 'biz-6',
      bizName: 'Aura Luxe Wellness Sanctuary',
      title: 'Flat Rs. 2,000 Off Royal Moroccan Hammam',
      discount: 'SAVE RS. 2000',
      code: 'AURAGLOW',
      expiry: '2026-10-20',
      terms: 'Advance booking required. Cannot be combined with other spa vouchers.'
    }
  ];

  // Seed Reviews
  const INITIAL_REVIEWS = [
    {
      id: 'rev-1',
      bizId: 'biz-1',
      userName: 'Kamran Bangash',
      userAvatar: 'K',
      rating: 5,
      title: 'Unrivaled Shinwari Karahi & Hospitality',
      text: 'Visited with guests from Islamabad. The charcoal grill quality was exceptional, staff was courteous, and parking was hassle-free. Five stars!',
      date: '2 days ago',
      likes: 14
    },
    {
      id: 'rev-2',
      bizId: 'biz-2',
      userName: 'Sara Danish',
      userAvatar: 'S',
      rating: 5,
      title: 'Flawless Cloud Migration Execution',
      text: 'Apex handled our e-commerce migration to AWS with zero second downtime. Their DevOps engineers are truly top-tier.',
      date: '1 week ago',
      likes: 22
    },
    {
      id: 'rev-3',
      bizId: 'biz-3',
      userName: 'Dr. Zeeshan Khattak',
      userAvatar: 'Z',
      rating: 5,
      title: 'Modern Clinic with Accurate Diagnostics',
      text: 'The hygiene, digital appointment system, and lab turnaround time in Hayatabad are unmatched.',
      date: '2 weeks ago',
      likes: 9
    }
  ];

  // Seed Notifications
  const INITIAL_NOTIFICATIONS = [
    { id: 'notif-1', icon: '★', title: 'New 5-Star Review', text: 'Kamran posted a 5-star review on Shiraz Arena.', time: '10m ago', unread: true },
    { id: 'notif-2', icon: '✓', title: 'Enterprise Verified', text: 'Apex Cloud Solutions credentials confirmed.', time: '1h ago', unread: true },
    { id: 'notif-3', icon: '🏷️', title: 'Special Deal Claimed', text: 'Your coupon SHIRAZ20 was saved by 18 visitors.', time: '4h ago', unread: false }
  ];

  // ==========================================================================
  // 2. STATE MANAGER & PERSISTENCE
  // ==========================================================================
  class StateManager {
    constructor() {
      this.init();
    }

    init() {
      if (!localStorage.getItem(STORAGE_KEYS.BUSINESSES)) {
        localStorage.setItem(STORAGE_KEYS.BUSINESSES, JSON.stringify(INITIAL_BUSINESSES));
      }
      if (!localStorage.getItem(STORAGE_KEYS.DEALS)) {
        localStorage.setItem(STORAGE_KEYS.DEALS, JSON.stringify(INITIAL_DEALS));
      }
      if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
        localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(INITIAL_REVIEWS));
      }
      if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
        localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
      }
      if (!localStorage.getItem(STORAGE_KEYS.FAVORITES)) {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(['biz-1', 'biz-2']));
      }
      if (!localStorage.getItem(STORAGE_KEYS.SAVED_DEALS)) {
        localStorage.setItem(STORAGE_KEYS.SAVED_DEALS, JSON.stringify(['deal-1']));
      }
      if (!localStorage.getItem(STORAGE_KEYS.HISTORY)) {
        localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(['biz-1', 'biz-2']));
      }
      if (!localStorage.getItem(STORAGE_KEYS.USER)) {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify({
          name: 'Tariq Khan',
          email: 'owner@nexora.com',
          role: 'owner', // 'owner' or 'customer'
          avatar: 'T'
        }));
      }
      if (!localStorage.getItem(STORAGE_KEYS.MESSAGES)) {
        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify({
          'biz-2': [
            { sender: 'them', text: 'Welcome to Apex Cloud Solutions! How can our engineering team assist you today?', time: '10:30 AM' },
            { sender: 'me', text: 'Hello, looking for a quote regarding our cloud migration from on-prem to AWS.', time: '10:32 AM' },
            { sender: 'them', text: 'Certainly! Our senior architect is available for a 20-minute scoping call tomorrow.', time: '10:34 AM' }
          ],
          'biz-1': [
            { sender: 'them', text: 'Hello from Shiraz Arena! We have availability for executive dining this weekend.', time: 'Yesterday' }
          ]
        }));
      }
    }

    getBusinesses() {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.BUSINESSES)) || [];
    }

    saveBusinesses(data) {
      localStorage.setItem(STORAGE_KEYS.BUSINESSES, JSON.stringify(data));
    }

    getFavorites() {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES)) || [];
    }

    toggleFavorite(bizId) {
      let favs = this.getFavorites();
      const index = favs.indexOf(bizId);
      let isSaved = false;
      if (index > -1) {
        favs.splice(index, 1);
      } else {
        favs.push(bizId);
        isSaved = true;
      }
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
      return isSaved;
    }

    getReviews(bizId = null) {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.REVIEWS)) || [];
      if (bizId) {
        return all.filter(r => r.bizId === bizId);
      }
      return all;
    }

    addReview(review) {
      const all = this.getReviews();
      all.unshift(review);
      localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(all));

      // Recalculate business average rating & review count
      const businesses = this.getBusinesses();
      const b = businesses.find(item => item.id === review.bizId);
      if (b) {
        const bRevs = all.filter(r => r.bizId === review.bizId);
        const sum = bRevs.reduce((acc, curr) => acc + curr.rating, 0);
        b.rating = parseFloat((sum / bRevs.length).toFixed(1));
        b.reviewCount = bRevs.length;
        this.saveBusinesses(businesses);
      }
    }

    getDeals() {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.DEALS)) || [];
    }

    saveDeal(deal) {
      const deals = this.getDeals();
      deals.unshift(deal);
      localStorage.setItem(STORAGE_KEYS.DEALS, JSON.stringify(deals));
    }

    getSavedDeals() {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED_DEALS)) || [];
    }

    toggleSaveDeal(dealId) {
      let saved = this.getSavedDeals();
      const idx = saved.indexOf(dealId);
      let isSaved = false;
      if (idx > -1) {
        saved.splice(idx, 1);
      } else {
        saved.push(dealId);
        isSaved = true;
      }
      localStorage.setItem(STORAGE_KEYS.SAVED_DEALS, JSON.stringify(saved));
      return isSaved;
    }

    getHistory() {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY)) || [];
    }

    addHistory(bizId) {
      let history = this.getHistory();
      history = history.filter(id => id !== bizId);
      history.unshift(bizId);
      if (history.length > 12) history.pop();
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    }

    clearHistory() {
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify([]));
    }

    getUser() {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
    }

    setUser(user) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    }

    getNotifications() {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) || [];
    }

    markAllNotificationsRead() {
      const notifs = this.getNotifications().map(n => ({ ...n, unread: false }));
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifs));
    }

    getMessages(bizId) {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES)) || {};
      return all[bizId] || [];
    }

    sendMessage(bizId, text) {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES)) || {};
      if (!all[bizId]) all[bizId] = [];
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      all[bizId].push({ sender: 'me', text, time: timeStr });
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(all));
      return timeStr;
    }

    receiveReply(bizId, text) {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES)) || {};
      if (!all[bizId]) all[bizId] = [];
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      all[bizId].push({ sender: 'them', text, time: timeStr });
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(all));
    }
  }

  const State = new StateManager();

  // ==========================================================================
  // 3. TOAST NOTIFICATION ENGINE
  // ==========================================================================
  function showToast(message, icon = '✓', duration = 3200) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  // ==========================================================================
  // 4. THEME & HEADER MANAGEMENT
  // ==========================================================================
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem(STORAGE_KEYS.THEME, next);
        showToast(`Switched to ${next === 'dark' ? 'Emerald Dark' : 'Clean Pearl Light'} mode`, '🌓');
        drawAnalyticsChart(); // Redraw chart for theme colors
      });
    }

    // Header scroll background effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('mainHeader');
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });

    // Close announcement ticker
    const closeAnnouncement = document.getElementById('closeAnnouncementBtn');
    if (closeAnnouncement) {
      closeAnnouncement.addEventListener('click', () => {
        const topAnn = document.getElementById('topAnnouncement');
        if (topAnn) topAnn.style.display = 'none';
      });
    }
  }

  // ==========================================================================
  // 5. RENDER CATEGORIES & LOCATIONS
  // ==========================================================================
  function renderCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
      <div class="category-card" data-category="${cat.id}">
        <div class="category-icon-wrap">
          <span style="font-size: 1.5rem;">${cat.icon}</span>
        </div>
        <h4 class="category-title">${cat.name}</h4>
        <span class="category-count">${cat.count}+ Verified</span>
      </div>
    `).join('');

    // Attach click filter
    container.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        const filterCatSelect = document.getElementById('filterCategory');
        if (filterCatSelect) {
          filterCatSelect.value = cat;
          applyDirectoryFilters();
          scrollToSection('explore');
          showToast(`Filtered for ${cat}`, '🔍');
        }
      });
    });
  }

  function renderLocations() {
    const container = document.getElementById('locationsGrid');
    if (!container) return;

    container.innerHTML = LOCATIONS.map(loc => `
      <div class="location-card" data-location="${loc.name}">
        <div class="location-card-header">
          <div>
            <h4 class="loc-name">${loc.name}</h4>
            <span class="loc-region">${loc.region}</span>
          </div>
          <div class="loc-icon-badge">
            <span style="font-size: 1.3rem;">${loc.icon}</span>
          </div>
        </div>
        <div class="loc-stats-row">
          <div class="loc-stat">
            <strong>${loc.businesses.toLocaleString()}</strong>
            <span>Listings</span>
          </div>
          <div class="loc-stat">
            <strong>${loc.categories}</strong>
            <span>Industries</span>
          </div>
          <div class="loc-stat">
            <strong>${loc.verified}</strong>
            <span>Verified</span>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.location-card').forEach(card => {
      card.addEventListener('click', () => {
        const loc = card.getAttribute('data-location');
        const locSelect = document.getElementById('filterLocation');
        const heroLocSelect = document.getElementById('heroLocationSelect');
        const headerCityLabel = document.getElementById('headerCityLabel');
        if (locSelect) locSelect.value = loc;
        if (heroLocSelect) heroLocSelect.value = loc;
        if (headerCityLabel) headerCityLabel.textContent = `${loc}, Hub`;
        applyDirectoryFilters();
        scrollToSection('explore');
        showToast(`Browsing directory for ${loc}`, '📍');
      });
    });
  }

  // ==========================================================================
  // 6. BUSINESS CARDS & DIRECTORY FILTER ENGINE
  // ==========================================================================
  let activeFilters = {
    keyword: '',
    category: 'All',
    location: 'All',
    minRating: 0,
    price: 'All',
    openNow: false,
    verifiedOnly: false,
    hasOffers: false,
    distance: 25,
    sort: 'recommended'
  };

  let selectedForCompare = [];

  function isBusinessOpen(b) {
    if (b.openHour === 0 && b.closeHour === 24) return true;
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= b.openHour && currentHour < b.closeHour;
  }

  function getCoverGradient(theme) {
    switch (theme) {
      case 'gold': return 'linear-gradient(135deg, #1f1b0a 0%, #3d3312 50%, #151206 100%)';
      case 'sapphire': return 'linear-gradient(135deg, #091a2e 0%, #10335e 50%, #06111f 100%)';
      case 'ruby': return 'linear-gradient(135deg, #2b0c10 0%, #541720 50%, #170608 100%)';
      case 'emerald':
      default: return 'linear-gradient(135deg, #0d261c 0%, #184734 50%, #081711 100%)';
    }
  }

  function renderBusinessCard(b, isFavorited) {
    const openStatus = isBusinessOpen(b);
    const bgGradient = getCoverGradient(b.coverTheme);
    const isCompared = selectedForCompare.includes(b.id);

    return `
      <article class="business-card" data-id="${b.id}">
        <div class="card-media-banner" style="background: ${bgGradient};">
          <div class="card-media-overlay"></div>
          <div class="card-badge-row">
            <span class="badge-status ${openStatus ? 'open' : 'closed'}">
              ${openStatus ? 'Open Now' : 'Closed'}
            </span>
            ${b.verified ? `
              <span class="badge-verified">
                <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Verified
              </span>
            ` : ''}
          </div>

          <button class="card-favorite-btn ${isFavorited ? 'favorited' : ''}" data-fav-id="${b.id}" title="${isFavorited ? 'Remove Favorite' : 'Save Favorite'}" aria-label="Favorite">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>

        <div class="card-body">
          <div class="card-category-row">
            <span class="card-category">${b.category}</span>
            <span class="card-price">${b.price}</span>
          </div>

          <h3 class="card-title" data-view-profile="${b.id}">${b.name}</h3>

          <div class="card-rating-row">
            <span class="rating-stars">★★★★★</span>
            <span class="rating-score">${b.rating}</span>
            <span class="review-count">(${b.reviewCount} reviews)</span>
          </div>

          <p class="card-description">${b.description}</p>

          <div class="card-location-row">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${b.city} • ${b.hoursText}</span>
          </div>

          <div class="card-actions-row">
            <button class="btn btn-gold btn-sm card-btn-view" data-view-profile="${b.id}">
              <span>View Profile</span>
            </button>
            <button class="card-action-icon-btn" data-call="${b.phone}" title="Call ${b.name}">
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call</span>
            </button>
            <button class="card-action-icon-btn" data-direct="${b.id}" title="Directions & Map">
              <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
              <span>Locate</span>
            </button>
          </div>

          <label class="card-compare-label">
            <input type="checkbox" class="compare-checkbox" data-compare-id="${b.id}" ${isCompared ? 'checked' : ''}>
            <span>Compare listing</span>
          </label>
        </div>
      </article>
    `;
  }

  function applyDirectoryFilters() {
    const all = State.getBusinesses();
    const favs = State.getFavorites();
    const deals = State.getDeals();

    let filtered = all.filter(b => {
      // Keyword
      if (activeFilters.keyword) {
        const q = activeFilters.keyword.toLowerCase();
        const matchName = b.name.toLowerCase().includes(q);
        const matchDesc = b.description.toLowerCase().includes(q);
        const matchCat = b.category.toLowerCase().includes(q);
        const matchServ = (b.services || []).some(s => s.name.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchCat && !matchServ) return false;
      }
      // Category
      if (activeFilters.category !== 'All' && b.category !== activeFilters.category) {
        return false;
      }
      // Location
      if (activeFilters.location !== 'All' && b.city !== activeFilters.location) {
        return false;
      }
      // Min Rating
      if (activeFilters.minRating > 0 && b.rating < activeFilters.minRating) {
        return false;
      }
      // Price
      if (activeFilters.price !== 'All' && b.price !== activeFilters.price) {
        return false;
      }
      // Open now
      if (activeFilters.openNow && !isBusinessOpen(b)) {
        return false;
      }
      // Verified only
      if (activeFilters.verifiedOnly && !b.verified) {
        return false;
      }
      // Has special offers
      if (activeFilters.hasOffers) {
        const hasDeal = deals.some(d => d.bizId === b.id);
        if (!hasDeal) return false;
      }
      return true;
    });

    // Sorting
    filtered.sort((a, b) => {
      switch (activeFilters.sort) {
        case 'highest-rated':
          return b.rating - a.rating;
        case 'most-reviewed':
          return b.reviewCount - a.reviewCount;
        case 'newest':
          return b.id.localeCompare(a.id);
        case 'price-asc':
          return a.price.length - b.price.length;
        case 'recommended':
        default:
          return (b.verified ? 1 : 0) - (a.verified ? 1 : 0) || b.rating - a.rating;
      }
    });

    // Render cards
    const grid = document.getElementById('businessCardsGrid');
    const emptyState = document.getElementById('emptyStateCard');
    const countText = document.getElementById('resultsCountText');

    if (countText) {
      countText.innerHTML = `Showing <strong>${filtered.length}</strong> Businesses`;
    }

    if (!grid) return;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'flex';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      grid.innerHTML = filtered.map(b => renderBusinessCard(b, favs.includes(b.id))).join('');
    }

    // Render active chips
    renderActiveFilterChips();
    // Update Map Pins
    renderMapRadarPins(filtered);
    // Update Compare Launcher
    updateCompareLauncher();
  }

  function renderActiveFilterChips() {
    const container = document.getElementById('activeFilterChips');
    if (!container) return;

    const chips = [];
    if (activeFilters.keyword) {
      chips.push({ key: 'keyword', label: `"${activeFilters.keyword}"` });
    }
    if (activeFilters.category !== 'All') {
      chips.push({ key: 'category', label: activeFilters.category });
    }
    if (activeFilters.location !== 'All') {
      chips.push({ key: 'location', label: activeFilters.location });
    }
    if (activeFilters.minRating > 0) {
      chips.push({ key: 'rating', label: `${activeFilters.minRating}+ ★` });
    }
    if (activeFilters.price !== 'All') {
      chips.push({ key: 'price', label: activeFilters.price });
    }
    if (activeFilters.openNow) {
      chips.push({ key: 'openNow', label: 'Open Now' });
    }
    if (activeFilters.verifiedOnly) {
      chips.push({ key: 'verifiedOnly', label: 'Verified Only' });
    }
    if (activeFilters.hasOffers) {
      chips.push({ key: 'hasOffers', label: 'Has Deals' });
    }

    container.innerHTML = chips.map(c => `
      <span class="filter-chip">
        ${c.label}
        <button data-remove-chip="${c.key}">&times;</button>
      </span>
    `).join('');

    container.querySelectorAll('button[data-remove-chip]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.getAttribute('data-remove-chip');
        resetSpecificFilter(key);
      });
    });
  }

  function resetSpecificFilter(key) {
    switch (key) {
      case 'keyword':
        activeFilters.keyword = '';
        const kwInput = document.getElementById('filterKeyword');
        if (kwInput) kwInput.value = '';
        break;
      case 'category':
        activeFilters.category = 'All';
        const catSelect = document.getElementById('filterCategory');
        if (catSelect) catSelect.value = 'All';
        break;
      case 'location':
        activeFilters.location = 'All';
        const locSelect = document.getElementById('filterLocation');
        if (locSelect) locSelect.value = 'All';
        break;
      case 'rating':
        activeFilters.minRating = 0;
        document.querySelectorAll('#ratingPillsGroup .rating-pill').forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-rating') === '0');
        });
        break;
      case 'price':
        activeFilters.price = 'All';
        document.querySelectorAll('#pricePillsGroup .price-pill').forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-price') === 'All');
        });
        break;
      case 'openNow':
        activeFilters.openNow = false;
        const openNow = document.getElementById('filterOpenNow');
        if (openNow) openNow.checked = false;
        break;
      case 'verifiedOnly':
        activeFilters.verifiedOnly = false;
        const ver = document.getElementById('filterVerifiedOnly');
        if (ver) ver.checked = false;
        break;
      case 'hasOffers':
        activeFilters.hasOffers = false;
        const off = document.getElementById('filterHasOffers');
        if (off) off.checked = false;
        break;
    }
    applyDirectoryFilters();
  }

  function resetAllFilters() {
    activeFilters = {
      keyword: '',
      category: 'All',
      location: 'All',
      minRating: 0,
      price: 'All',
      openNow: false,
      verifiedOnly: false,
      hasOffers: false,
      distance: 25,
      sort: 'recommended'
    };

    const kw = document.getElementById('filterKeyword');
    if (kw) kw.value = '';
    const cat = document.getElementById('filterCategory');
    if (cat) cat.value = 'All';
    const loc = document.getElementById('filterLocation');
    if (loc) loc.value = 'All';
    const heroKw = document.getElementById('heroKeywordInput');
    if (heroKw) heroKw.value = '';
    const heroLoc = document.getElementById('heroLocationSelect');
    if (heroLoc) heroLoc.value = 'All';
    const heroCat = document.getElementById('heroCategorySelect');
    if (heroCat) heroCat.value = 'All';

    const openNow = document.getElementById('filterOpenNow');
    if (openNow) openNow.checked = false;
    const ver = document.getElementById('filterVerifiedOnly');
    if (ver) ver.checked = false;
    const off = document.getElementById('filterHasOffers');
    if (off) off.checked = false;

    document.querySelectorAll('#ratingPillsGroup .rating-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-rating') === '0');
    });

    document.querySelectorAll('#pricePillsGroup .price-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-price') === 'All');
    });

    applyDirectoryFilters();
    showToast('Filters reset to default', '🔄');
  }

  // ==========================================================================
  // 7. EVENT LISTENERS & FILTER WIDGETS
  // ==========================================================================
  function initFilterWidgets() {
    // Hero Search Console Submit
    const heroBtn = document.getElementById('heroSearchSubmitBtn');
    if (heroBtn) {
      heroBtn.addEventListener('click', () => {
        const kw = document.getElementById('heroKeywordInput').value.trim();
        const loc = document.getElementById('heroLocationSelect').value;
        const cat = document.getElementById('heroCategorySelect').value;

        activeFilters.keyword = kw;
        activeFilters.location = loc;
        activeFilters.category = cat;

        // Sync left filter panel
        const fKw = document.getElementById('filterKeyword');
        if (fKw) fKw.value = kw;
        const fLoc = document.getElementById('filterLocation');
        if (fLoc) fLoc.value = loc;
        const fCat = document.getElementById('filterCategory');
        if (fCat) fCat.value = cat;

        applyDirectoryFilters();
        scrollToSection('explore');
        showToast(`Searching for "${kw || 'All'}" in ${loc}`, '🔍');
      });
    }

    // Hero Quick Tags
    document.querySelectorAll('#heroQuickTags .quick-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const cat = tag.getAttribute('data-category');
        activeFilters.category = cat;
        const fCat = document.getElementById('filterCategory');
        if (fCat) fCat.value = cat;
        applyDirectoryFilters();
        scrollToSection('explore');
        showToast(`Category: ${cat}`, '⚡');
      });
    });

    // Left Panel Filter Inputs
    const fKw = document.getElementById('filterKeyword');
    if (fKw) {
      fKw.addEventListener('input', (e) => {
        activeFilters.keyword = e.target.value.trim();
        applyDirectoryFilters();
      });
    }

    const fCat = document.getElementById('filterCategory');
    if (fCat) {
      fCat.addEventListener('change', (e) => {
        activeFilters.category = e.target.value;
        applyDirectoryFilters();
      });
    }

    const fLoc = document.getElementById('filterLocation');
    if (fLoc) {
      fLoc.addEventListener('change', (e) => {
        activeFilters.location = e.target.value;
        applyDirectoryFilters();
      });
    }

    // Rating Pills
    document.querySelectorAll('#ratingPillsGroup .rating-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#ratingPillsGroup .rating-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilters.minRating = parseFloat(pill.getAttribute('data-rating')) || 0;
        applyDirectoryFilters();
      });
    });

    // Price Pills
    document.querySelectorAll('#pricePillsGroup .price-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#pricePillsGroup .price-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilters.price = pill.getAttribute('data-price');
        applyDirectoryFilters();
      });
    });

    // Toggles
    const openNow = document.getElementById('filterOpenNow');
    if (openNow) {
      openNow.addEventListener('change', (e) => {
        activeFilters.openNow = e.target.checked;
        applyDirectoryFilters();
      });
    }

    const verOnly = document.getElementById('filterVerifiedOnly');
    if (verOnly) {
      verOnly.addEventListener('change', (e) => {
        activeFilters.verifiedOnly = e.target.checked;
        applyDirectoryFilters();
      });
    }

    const hasOff = document.getElementById('filterHasOffers');
    if (hasOff) {
      hasOff.addEventListener('change', (e) => {
        activeFilters.hasOffers = e.target.checked;
        applyDirectoryFilters();
      });
    }

    // Distance Slider
    const distSlider = document.getElementById('filterDistance');
    const distDisplay = document.getElementById('distanceValDisplay');
    if (distSlider && distDisplay) {
      distSlider.addEventListener('input', (e) => {
        distDisplay.textContent = `${e.target.value} km`;
        activeFilters.distance = parseInt(e.target.value, 10);
      });
    }

    // Sort By Selector
    const sortSelect = document.getElementById('sortBySelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        activeFilters.sort = e.target.value;
        applyDirectoryFilters();
      });
    }

    // Grid / List Mode Switcher
    document.querySelectorAll('#viewModeToggle .view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#viewModeToggle .view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.getAttribute('data-view');
        const grid = document.getElementById('businessCardsGrid');
        if (grid) {
          grid.classList.toggle('grid-mode', view === 'grid');
          grid.classList.toggle('list-mode', view === 'list');
        }
      });
    });

    // Reset All Buttons
    const resetBtn = document.getElementById('resetAllFiltersBtn');
    if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);

    const emptyClear = document.getElementById('emptyClearFiltersBtn');
    if (emptyClear) emptyClear.addEventListener('click', resetAllFilters);

    // Mobile Filter Drawer Toggle
    const mobileFilterBtn = document.getElementById('mobileFilterToggleBtn');
    const filtersSidebar = document.getElementById('filtersSidebar');
    const applyMobileFilters = document.getElementById('applyMobileFiltersBtn');

    if (mobileFilterBtn && filtersSidebar) {
      mobileFilterBtn.addEventListener('click', () => {
        filtersSidebar.classList.add('active');
      });
    }

    if (applyMobileFilters && filtersSidebar) {
      applyMobileFilters.addEventListener('click', () => {
        filtersSidebar.classList.remove('active');
      });
    }
  }

  // ==========================================================================
  // 8. CARD DELEGATED ACTIONS (PROFILE, FAVORITE, CALL, DIRECTIONS, COMPARE)
  // ==========================================================================
  function initCardActions() {
    const grid = document.getElementById('businessCardsGrid');
    if (!grid) return;

    grid.addEventListener('click', (e) => {
      // Favorite Button
      const favBtn = e.target.closest('[data-fav-id]');
      if (favBtn) {
        e.stopPropagation();
        const bizId = favBtn.getAttribute('data-fav-id');
        const isSaved = State.toggleFavorite(bizId);
        favBtn.classList.toggle('favorited', isSaved);
        favBtn.querySelector('svg').setAttribute('fill', isSaved ? 'currentColor' : 'none');
        updateHeaderBadges();
        renderUserFavoritesTab();
        showToast(isSaved ? 'Listing saved to My Favorites' : 'Removed from Favorites', isSaved ? '❤️' : '🗑️');
        return;
      }

      // View Profile Click
      const profileTrigger = e.target.closest('[data-view-profile]');
      if (profileTrigger) {
        e.preventDefault();
        const bizId = profileTrigger.getAttribute('data-view-profile');
        openBusinessProfileModal(bizId);
        return;
      }

      // Call Phone
      const callBtn = e.target.closest('[data-call]');
      if (callBtn) {
        e.stopPropagation();
        const phone = callBtn.getAttribute('data-call');
        showToast(`Dialing verified phone: ${phone}`, '📞');
        window.location.href = `tel:${phone}`;
        return;
      }

      // Directions / Locate
      const directBtn = e.target.closest('[data-direct]');
      if (directBtn) {
        e.stopPropagation();
        const bizId = directBtn.getAttribute('data-direct');
        scrollToSection('map-discovery');
        highlightMapPin(bizId);
        showToast('Located on spatial radar map', '📍');
        return;
      }

      // Compare Checkbox
      const compareBox = e.target.closest('.compare-checkbox');
      if (compareBox) {
        const bizId = compareBox.getAttribute('data-compare-id');
        if (compareBox.checked) {
          if (selectedForCompare.length >= 4) {
            compareBox.checked = false;
            showToast('You can compare a maximum of 4 businesses at once.', '⚠️');
            return;
          }
          selectedForCompare.push(bizId);
        } else {
          selectedForCompare = selectedForCompare.filter(id => id !== bizId);
        }
        updateCompareLauncher();
      }
    });
  }

  function updateCompareLauncher() {
    const launcher = document.getElementById('compareLauncher');
    const countDisplay = document.getElementById('compareSelectedCount');
    if (!launcher || !countDisplay) return;

    countDisplay.textContent = selectedForCompare.length;
    launcher.style.display = selectedForCompare.length > 0 ? 'flex' : 'none';
  }

  // ==========================================================================
  // 9. BUSINESS PROFILE MODAL & TABS
  // ==========================================================================
  function openBusinessProfileModal(bizId) {
    const businesses = State.getBusinesses();
    const b = businesses.find(item => item.id === bizId);
    if (!b) return;

    // Track recently viewed
    State.addHistory(b.id);
    renderUserHistoryTab();

    const backdrop = document.getElementById('businessProfileModalBackdrop');
    const content = document.getElementById('profileModalContent');
    const isFav = State.getFavorites().includes(b.id);
    const reviews = State.getReviews(b.id);
    const deals = State.getDeals().filter(d => d.bizId === b.id);
    const isOpen = isBusinessOpen(b);
    const gradient = getCoverGradient(b.coverTheme);

    if (!content || !backdrop) return;

    content.innerHTML = `
      <div class="profile-hero-banner" style="background: ${gradient};">
        <div class="profile-banner-overlay"></div>
        <div class="profile-header-info">
          <div class="profile-avatar-box">
            ${b.name.charAt(0)}
          </div>
          <div class="profile-meta-title">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span class="card-category">${b.category}</span>
              <span class="card-price">${b.price}</span>
              <span class="badge-status ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Open Now' : 'Closed'}</span>
              ${b.verified ? '<span class="badge-verified">✓ Verified</span>' : ''}
            </div>
            <h2>${b.name}</h2>
            <div class="card-rating-row" style="margin-top:0.35rem;">
              <span class="rating-stars">★★★★★</span>
              <span class="rating-score">${b.rating}</span>
              <span class="review-count">(${b.reviewCount} customer reviews) • ${b.city}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Action CTA Bar -->
      <div style="display:flex; align-items:center; justify-content:space-between; padding:1rem 2rem; background:var(--bg-tertiary); border-bottom:1px solid var(--border-subtle); flex-wrap:wrap; gap:0.75rem;">
        <div style="display:flex; gap:0.65rem; flex-wrap:wrap;">
          <a href="tel:${b.phone}" class="btn btn-gold btn-sm">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Call ${b.phone}</span>
          </a>
          <button class="btn btn-outline btn-sm" id="modalDirectionsBtn" data-biz-loc="${b.city}">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            <span>Get Directions</span>
          </button>
          <a href="${b.website}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>Website</span>
          </a>
          <button class="btn btn-outline btn-sm" id="modalMessageBizBtn" data-biz-id="${b.id}">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>Inquire / Message</span>
          </button>
        </div>

        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-outline btn-sm" id="modalFavBtn" data-biz-id="${b.id}">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span>${isFav ? 'Saved' : 'Save'}</span>
          </button>
          <button class="btn btn-outline btn-sm" id="modalShareBtn" data-biz-name="${b.name}">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            <span>Share</span>
          </button>
        </div>
      </div>

      <!-- Tabs Bar -->
      <div class="profile-tabs-bar">
        <button class="profile-tab-btn active" data-tab="overview">Overview</button>
        <button class="profile-tab-btn" data-tab="services">Services & Pricing (${b.services ? b.services.length : 0})</button>
        <button class="profile-tab-btn" data-tab="reviews">Reviews & Ratings (${reviews.length})</button>
        <button class="profile-tab-btn" data-tab="offers">Special Offers (${deals.length})</button>
        <button class="profile-tab-btn" data-tab="hours">Hours & Location</button>
      </div>

      <!-- Tab Panes -->
      <div class="profile-tab-content-area">
        <!-- 1. Overview -->
        <div class="modal-tab-pane active" id="tabOverview">
          <h4 style="font-size:1.15rem; margin-bottom:0.75rem;">About the Enterprise</h4>
          <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:1.5rem;">${b.description}</p>

          <h5 style="font-size:1rem; margin-bottom:0.85rem;">Key Amenities & Business Highlights</h5>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:0.75rem; margin-bottom:1.5rem;">
            <div style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-tertiary); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.85rem;">
              <span style="color:var(--accent-emerald);">✓</span> High-Speed Wi-Fi
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-tertiary); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.85rem;">
              <span style="color:var(--accent-emerald);">✓</span> Dedicated Valet Parking
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-tertiary); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.85rem;">
              <span style="color:var(--accent-emerald);">✓</span> Visa / Mastercard / POS
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-tertiary); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.85rem;">
              <span style="color:var(--accent-emerald);">✓</span> Wheelchair Accessible
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-tertiary); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.85rem;">
              <span style="color:var(--accent-emerald);">✓</span> Air Conditioned / Climate Control
            </div>
            <div style="display:flex; align-items:center; gap:0.5rem; background:var(--bg-tertiary); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); font-size:0.85rem;">
              <span style="color:var(--accent-emerald);">✓</span> Licensed & Chamber Verified
            </div>
          </div>

          <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <h5 style="margin-bottom:0.5rem;">Direct Inquiries & Corporate Support</h5>
            <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:0.75rem;">Need formal quotation, contract partnership, or group booking?</p>
            <button class="btn btn-gold btn-sm" id="modalTriggerInquireBtn" data-biz-id="${b.id}">Start Direct Inquiry</button>
          </div>
        </div>

        <!-- 2. Services -->
        <div class="modal-tab-pane" id="tabServices" style="display:none;">
          <h4 style="font-size:1.15rem; margin-bottom:1rem;">Available Services & Pricing Tiers</h4>
          <div style="display:flex; flex-direction:column; gap:1rem;">
            ${(b.services || []).map(s => `
              <div style="background:var(--bg-tertiary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.2rem; display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap;">
                <div style="flex:1;">
                  <h5 style="font-size:1.05rem; font-weight:700; margin-bottom:0.25rem;">${s.name}</h5>
                  <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:0.5rem;">${s.desc}</p>
                  <span style="font-size:0.78rem; color:var(--text-muted);">Duration: ${s.duration}</span>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:1.25rem; font-weight:800; color:var(--accent-gold); margin-bottom:0.5rem;">${s.price}</div>
                  <button class="btn btn-gold btn-xs" data-book-service="${s.name}">Book / Inquire</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Reviews -->
        <div class="modal-tab-pane" id="tabReviews" style="display:none;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
            <div>
              <h4 style="font-size:1.25rem; font-weight:700;">Customer Reviews</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">Verified feedback from patrons and business clients</p>
            </div>
            <button class="btn btn-gold btn-sm" id="modalOpenWriteReviewBtn" data-biz-id="${b.id}">Write a Review</button>
          </div>

          <!-- Star Breakdown -->
          <div style="display:grid; grid-template-columns:180px 1fr; gap:2rem; background:var(--bg-tertiary); padding:1.5rem; border-radius:var(--radius-lg); margin-bottom:1.8rem; align-items:center;">
            <div style="text-align:center;">
              <div style="font-size:3rem; font-weight:800; color:var(--accent-gold); line-height:1;">${b.rating}</div>
              <div class="rating-stars" style="margin:0.35rem 0;">★★★★★</div>
              <span style="font-size:0.8rem; color:var(--text-muted);">${b.reviewCount} total ratings</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.82rem;">
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span>5★</span>
                <div style="flex:1; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden;"><div style="width:85%; height:100%; background:var(--accent-gold);"></div></div>
                <span>85%</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span>4★</span>
                <div style="flex:1; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden;"><div style="width:12%; height:100%; background:var(--accent-gold);"></div></div>
                <span>12%</span>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span>3★</span>
                <div style="flex:1; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden;"><div style="width:3%; height:100%; background:var(--accent-gold);"></div></div>
                <span>3%</span>
              </div>
            </div>
          </div>

          <!-- Reviews List -->
          <div style="display:flex; flex-direction:column; gap:1rem;">
            ${reviews.length === 0 ? '<p class="text-muted">No reviews yet for this listing. Be the first to leave one!</p>' : reviews.map(r => `
              <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
                  <div style="display:flex; align-items:center; gap:0.65rem;">
                    <div class="avatar-circle">${r.userAvatar || 'U'}</div>
                    <div>
                      <h5 style="font-size:0.95rem; font-weight:700;">${r.userName}</h5>
                      <span style="font-size:0.75rem; color:var(--text-muted);">${r.date}</span>
                    </div>
                  </div>
                  <div class="rating-stars">${'★'.repeat(r.rating)}</div>
                </div>
                <h6 style="font-size:0.95rem; font-weight:600; margin-bottom:0.35rem;">${r.title}</h6>
                <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">${r.text}</p>
                <div style="margin-top:0.75rem; display:flex; gap:0.5rem;">
                  <button class="btn btn-outline btn-xs" data-like-review="${r.id}">
                    👍 Helpful (${r.likes || 0})
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. Offers -->
        <div class="modal-tab-pane" id="tabOffers" style="display:none;">
          <h4 style="font-size:1.15rem; margin-bottom:1rem;">Active Promotions & Deals</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:1rem;">
            ${deals.length === 0 ? '<p class="text-muted">No active promotional vouchers right now.</p>' : deals.map(d => `
              <div class="deal-card">
                <div class="deal-tag-row">
                  <span class="deal-discount-pill">${d.discount}</span>
                  <span class="deal-expiry">Expires ${d.expiry}</span>
                </div>
                <h4 class="deal-title">${d.title}</h4>
                <p class="deal-terms">${d.terms}</p>
                <div class="deal-voucher-box">
                  <span class="voucher-code">${d.code}</span>
                  <button class="btn btn-gold btn-xs" data-copy-code="${d.code}">Copy</button>
                </div>
                <button class="btn btn-outline btn-sm" data-claim-deal="${d.id}">Claim Voucher</button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 5. Hours & Location -->
        <div class="modal-tab-pane" id="tabHours" style="display:none;">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">
            <div>
              <h4 style="font-size:1.15rem; margin-bottom:0.75rem;">Operating Hours</h4>
              <table style="width:100%; font-size:0.88rem; border-collapse:collapse;">
                <tr style="border-bottom:1px solid var(--border-subtle); padding:0.5rem 0;"><td style="padding:0.4rem 0;">Monday</td><td style="text-align:right; color:var(--accent-gold);">${b.hoursText}</td></tr>
                <tr style="border-bottom:1px solid var(--border-subtle); padding:0.5rem 0;"><td style="padding:0.4rem 0;">Tuesday</td><td style="text-align:right; color:var(--accent-gold);">${b.hoursText}</td></tr>
                <tr style="border-bottom:1px solid var(--border-subtle); padding:0.5rem 0;"><td style="padding:0.4rem 0;">Wednesday</td><td style="text-align:right; color:var(--accent-gold);">${b.hoursText}</td></tr>
                <tr style="border-bottom:1px solid var(--border-subtle); padding:0.5rem 0;"><td style="padding:0.4rem 0;">Thursday</td><td style="text-align:right; color:var(--accent-gold);">${b.hoursText}</td></tr>
                <tr style="border-bottom:1px solid var(--border-subtle); padding:0.5rem 0;"><td style="padding:0.4rem 0;">Friday</td><td style="text-align:right; color:var(--accent-gold);">${b.hoursText}</td></tr>
                <tr style="border-bottom:1px solid var(--border-subtle); padding:0.5rem 0;"><td style="padding:0.4rem 0;">Saturday</td><td style="text-align:right; color:var(--accent-gold);">${b.hoursText}</td></tr>
                <tr><td style="padding:0.4rem 0;">Sunday</td><td style="text-align:right; color:var(--accent-gold);">${b.hoursText}</td></tr>
              </table>
            </div>

            <div>
              <h4 style="font-size:1.15rem; margin-bottom:0.75rem;">Address & Physical Presence</h4>
              <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:1rem;">${b.address}</p>
              <div style="background:var(--bg-tertiary); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
                <div style="font-size:0.85rem; margin-bottom:0.4rem;"><strong>Phone:</strong> ${b.phone}</div>
                <div style="font-size:0.85rem; margin-bottom:0.4rem;"><strong>Email:</strong> ${b.email}</div>
                <div style="font-size:0.85rem;"><strong>Website:</strong> <a href="${b.website}" target="_blank" style="color:var(--accent-gold);">${b.website}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    backdrop.classList.add('active');

    // Attach Tab Handlers
    content.querySelectorAll('.profile-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        content.querySelectorAll('.profile-tab-btn').forEach(tb => tb.classList.remove('active'));
        tabBtn.classList.add('active');
        const target = tabBtn.getAttribute('data-tab');

        content.querySelectorAll('.modal-tab-pane').forEach(pane => pane.style.display = 'none');
        if (target === 'overview') content.querySelector('#tabOverview').style.display = 'block';
        if (target === 'services') content.querySelector('#tabServices').style.display = 'block';
        if (target === 'reviews') content.querySelector('#tabReviews').style.display = 'block';
        if (target === 'offers') content.querySelector('#tabOffers').style.display = 'block';
        if (target === 'hours') content.querySelector('#tabHours').style.display = 'block';
      });
    });

    // Save Favorite inside modal
    const modalFavBtn = content.querySelector('#modalFavBtn');
    if (modalFavBtn) {
      modalFavBtn.addEventListener('click', () => {
        const isSaved = State.toggleFavorite(b.id);
        modalFavBtn.querySelector('span').textContent = isSaved ? 'Saved' : 'Save';
        modalFavBtn.querySelector('svg').setAttribute('fill', isSaved ? 'currentColor' : 'none');
        updateHeaderBadges();
        applyDirectoryFilters();
        showToast(isSaved ? 'Added to My Favorites' : 'Removed from Favorites', isSaved ? '❤️' : '🗑️');
      });
    }

    // Share Modal trigger
    const modalShareBtn = content.querySelector('#modalShareBtn');
    if (modalShareBtn) {
      modalShareBtn.addEventListener('click', () => {
        openShareModal(b.name);
      });
    }

    // Directions
    const modalDirectionsBtn = content.querySelector('#modalDirectionsBtn');
    if (modalDirectionsBtn) {
      modalDirectionsBtn.addEventListener('click', () => {
        backdrop.classList.remove('active');
        scrollToSection('map-discovery');
        highlightMapPin(b.id);
        showToast(`Route mapped for ${b.name}`, '🗺️');
      });
    }

    // Message / Inquire
    const modalMessageBizBtn = content.querySelector('#modalMessageBizBtn');
    const modalTriggerInquireBtn = content.querySelector('#modalTriggerInquireBtn');
    const openChat = () => {
      backdrop.classList.remove('active');
      openMessengerDrawer(b.id, b.name);
    };
    if (modalMessageBizBtn) modalMessageBizBtn.addEventListener('click', openChat);
    if (modalTriggerInquireBtn) modalTriggerInquireBtn.addEventListener('click', openChat);

    // Book Service
    content.querySelectorAll('button[data-book-service]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sName = btn.getAttribute('data-book-service');
        backdrop.classList.remove('active');
        openMessengerDrawer(b.id, b.name, `Hi! I would like to book or inquire about "${sName}". Please let me know available slots.`);
      });
    });

    // Write review button inside profile
    const openReviewBtn = content.querySelector('#modalOpenWriteReviewBtn');
    if (openReviewBtn) {
      openReviewBtn.addEventListener('click', () => {
        openWriteReviewModal(b.id, b.name);
      });
    }
  }

  // ==========================================================================
  // 10. WRITE REVIEW MODAL
  // ==========================================================================
  let selectedReviewRating = 5;

  function openWriteReviewModal(bizId, bizName) {
    const backdrop = document.getElementById('reviewModalBackdrop');
    const title = document.getElementById('reviewModalBizName');
    const targetInput = document.getElementById('reviewTargetBizId');
    if (!backdrop) return;

    if (title) title.textContent = `Reviewing: ${bizName}`;
    if (targetInput) targetInput.value = bizId;

    selectedReviewRating = 5;
    updateStarRatingDisplay(5);

    backdrop.classList.add('active');
  }

  function updateStarRatingDisplay(stars) {
    selectedReviewRating = stars;
    const picker = document.getElementById('starRatingPicker');
    const label = document.getElementById('ratingLabelDisplay');
    if (!picker) return;

    picker.querySelectorAll('.star-btn').forEach(btn => {
      const s = parseInt(btn.getAttribute('data-star'), 10);
      btn.classList.toggle('active', s <= stars);
    });

    if (label) {
      const texts = {
        1: '1.0 - Poor / Unsatisfactory',
        2: '2.0 - Below Average',
        3: '3.0 - Satisfactory / Standard',
        4: '4.0 - Very Good Service',
        5: '5.0 - Outstanding Experience'
      };
      label.textContent = texts[stars] || `${stars}.0 Stars`;
    }
  }

  function initReviewForm() {
    // Star picker clicks
    const picker = document.getElementById('starRatingPicker');
    if (picker) {
      picker.querySelectorAll('.star-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const s = parseInt(btn.getAttribute('data-star'), 10);
          updateStarRatingDisplay(s);
        });
      });
    }

    const form = document.getElementById('writeReviewForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const bizId = document.getElementById('reviewTargetBizId').value;
        const name = document.getElementById('reviewerNameInput').value.trim();
        const title = document.getElementById('reviewTitleInput').value.trim();
        const text = document.getElementById('reviewTextInput').value.trim();

        if (!name || !title || !text) {
          showToast('Please complete all review fields.', '⚠️');
          return;
        }

        const newReview = {
          id: 'rev-' + Date.now(),
          bizId,
          userName: name,
          userAvatar: name.charAt(0).toUpperCase(),
          rating: selectedReviewRating,
          title,
          text,
          date: 'Just now',
          likes: 0
        };

        State.addReview(newReview);
        document.getElementById('reviewModalBackdrop').classList.remove('active');
        form.reset();

        applyDirectoryFilters();
        renderUserReviewsTab();
        showToast('Review submitted and verified successfully!', '🎉');
      });
    }

    const cancelBtn = document.getElementById('cancelReviewBtn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        document.getElementById('reviewModalBackdrop').classList.remove('active');
      });
    }
  }

  // ==========================================================================
  // 11. ADD YOUR BUSINESS SUBMISSION FORM
  // ==========================================================================
  function initAddBusinessForm() {
    const form = document.getElementById('addBusinessForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('bizNameInput').value.trim();
        const category = document.getElementById('bizCategoryInput').value;
        const desc = document.getElementById('bizDescriptionInput').value.trim();
        const city = document.getElementById('bizCityInput').value;
        const address = document.getElementById('bizAddressInput').value.trim();
        const price = document.getElementById('bizPriceInput').value;
        const phone = document.getElementById('bizPhoneInput').value.trim();
        const email = document.getElementById('bizEmailInput').value.trim();
        const website = document.getElementById('bizWebsiteInput').value.trim() || 'https://' + name.toLowerCase().replace(/\s+/g, '') + '.com';
        const hoursText = document.getElementById('bizHoursInput').value.trim() || '09:00 AM - 09:00 PM';
        const servicesInput = document.getElementById('bizServicesInput').value.trim();

        // Selected cover preset
        const checkedPreset = document.querySelector('input[name="bizCoverPreset"]:checked');
        const coverTheme = checkedPreset ? checkedPreset.value : 'emerald';

        // Parse services
        const servicesArr = servicesInput.split(',').filter(s => s.trim().length > 0).map(s => ({
          name: s.trim(),
          price: 'Standard Quote',
          duration: '1 hr',
          desc: `Professional ${s.trim()} provided with full quality guarantee.`
        }));

        if (servicesArr.length === 0) {
          servicesArr.push({ name: 'Standard Consultation', price: '$50', duration: '45m', desc: 'Direct discovery and assessment session.' });
        }

        const newBiz = {
          id: 'biz-' + Date.now(),
          name,
          category,
          city,
          address,
          rating: 5.0,
          reviewCount: 1,
          price,
          verified: true,
          openHour: 9,
          closeHour: 21,
          hoursText,
          phone,
          email,
          website,
          description: desc,
          coverTheme,
          services: servicesArr,
          coords: { x: Math.floor(Math.random() * 60) + 20, y: Math.floor(Math.random() * 60) + 20 },
          featured: false,
          ownerId: 'demo-owner'
        };

        const current = State.getBusinesses();
        current.unshift(newBiz);
        State.saveBusinesses(current);

        document.getElementById('addBusinessModalBackdrop').classList.remove('active');
        form.reset();

        applyDirectoryFilters();
        renderOwnerDashboard();
        showToast(`Congratulations! "${name}" has been published to the directory.`, '🚀');
        scrollToSection('explore');
      });
    }

    const cancelBtn = document.getElementById('cancelAddBizBtn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        document.getElementById('addBusinessModalBackdrop').classList.remove('active');
      });
    }
  }

  // ==========================================================================
  // 12. BUSINESS COMPARISON MATRIX
  // ==========================================================================
  function initComparisonMatrix() {
    const openBtn = document.getElementById('openCompareModalBtn');
    const backdrop = document.getElementById('compareModalBackdrop');
    const wrapper = document.getElementById('comparisonTableWrapper');
    const clearBtn = document.getElementById('clearCompareBtn');

    if (openBtn && backdrop && wrapper) {
      openBtn.addEventListener('click', () => {
        if (selectedForCompare.length < 2) {
          showToast('Please select at least 2 businesses to compare.', 'ℹ️');
          return;
        }

        const businesses = State.getBusinesses().filter(b => selectedForCompare.includes(b.id));

        wrapper.innerHTML = `
          <table class="comparison-table">
            <thead>
              <tr>
                <th style="min-width:180px;">Metric / Feature</th>
                ${businesses.map(b => `
                  <th style="min-width:220px; text-align:center;">
                    <div style="font-size:1.1rem; font-weight:700;">${b.name}</div>
                    <span style="font-size:0.75rem; color:var(--accent-gold);">${b.category}</span>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rating & Score</strong></td>
                ${businesses.map(b => `
                  <td style="text-align:center;">
                    <span style="color:var(--accent-gold); font-weight:800;">${b.rating} ★</span>
                    <div style="font-size:0.75rem; color:var(--text-muted);">${b.reviewCount} reviews</div>
                  </td>
                `).join('')}
              </tr>
              <tr>
                <td><strong>Price Tier</strong></td>
                ${businesses.map(b => `<td style="text-align:center; font-weight:700;">${b.price}</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Current Status</strong></td>
                ${businesses.map(b => {
                  const open = isBusinessOpen(b);
                  return `<td style="text-align:center;"><span class="badge-status ${open ? 'open' : 'closed'}">${open ? 'Open Now' : 'Closed'}</span></td>`;
                }).join('')}
              </tr>
              <tr>
                <td><strong>Location Hub</strong></td>
                ${businesses.map(b => `<td style="text-align:center;">${b.city}</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Verified Credentials</strong></td>
                ${businesses.map(b => `<td style="text-align:center;">${b.verified ? '<span style="color:var(--accent-emerald);">✓ Verified Enterprise</span>' : 'Standard'}</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Hours</strong></td>
                ${businesses.map(b => `<td style="text-align:center; font-size:0.8rem;">${b.hoursText}</td>`).join('')}
              </tr>
              <tr>
                <td><strong>Services Offered</strong></td>
                ${businesses.map(b => `
                  <td>
                    <ul style="font-size:0.8rem; padding-left:1rem; list-style:disc;">
                      ${(b.services || []).slice(0, 3).map(s => `<li>${s.name}</li>`).join('')}
                    </ul>
                  </td>
                `).join('')}
              </tr>
              <tr>
                <td><strong>Direct Action</strong></td>
                ${businesses.map(b => `
                  <td style="text-align:center;">
                    <button class="btn btn-gold btn-xs btn-block" onclick="window.viewBizProfile('${b.id}')">
                      View Profile
                    </button>
                  </td>
                `).join('')}
              </tr>
            </tbody>
          </table>
        `;

        backdrop.classList.add('active');
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        selectedForCompare = [];
        document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
        updateCompareLauncher();
        showToast('Comparison cleared', '🔄');
      });
    }

    window.viewBizProfile = function (id) {
      if (backdrop) backdrop.classList.remove('active');
      openBusinessProfileModal(id);
    };
  }

  // ==========================================================================
  // 13. SPATIAL RADAR & MAP PANEL
  // ==========================================================================
  let activeMapCity = 'Peshawar';

  function renderMapRadarPins(businesses) {
    const container = document.getElementById('mapPinsContainer');
    if (!container) return;

    const cityBusinesses = businesses.filter(b => b.city === activeMapCity || activeMapCity === 'All');

    container.innerHTML = cityBusinesses.map(b => {
      const coords = b.coords || { x: 50, y: 50 };
      return `
        <div class="map-pin" data-pin-id="${b.id}" style="left: ${coords.x}%; top: ${coords.y}%;">
          <div class="pin-bubble">
            <span>${b.name.split(' ')[0]}</span>
            <span style="color:var(--accent-gold);">★${b.rating}</span>
          </div>
          <div class="pin-pointer"></div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.map-pin').forEach(pin => {
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        const bizId = pin.getAttribute('data-pin-id');
        highlightMapPin(bizId);
      });
    });
  }

  function highlightMapPin(bizId) {
    const businesses = State.getBusinesses();
    const b = businesses.find(item => item.id === bizId);
    const popover = document.getElementById('mapPinPopover');
    if (!b || !popover) return;

    // Switch map city tab if necessary
    if (b.city !== activeMapCity) {
      activeMapCity = b.city;
      document.querySelectorAll('#mapCityTabs .map-city-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-mapcity') === b.city);
      });
      renderMapRadarPins(businesses);
    }

    // Highlight pin element
    document.querySelectorAll('.map-pin').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-pin-id') === bizId);
    });

    // Populate popover
    popover.style.display = 'block';
    popover.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
        <div>
          <span style="font-size:0.75rem; color:var(--accent-gold); font-weight:700;">${b.category}</span>
          <h4 style="font-size:1.05rem; font-weight:700;">${b.name}</h4>
        </div>
        <button id="closeMapPopoverBtn" style="font-size:1.2rem; color:var(--text-muted); line-height:1;">&times;</button>
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.6rem;">${b.address}</p>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
        <span style="font-size:0.85rem; font-weight:700;">${b.rating} ★ (${b.reviewCount})</span>
        <span class="badge-status ${isBusinessOpen(b) ? 'open' : 'closed'}">${isBusinessOpen(b) ? 'Open Now' : 'Closed'}</span>
      </div>
      <button class="btn btn-gold btn-xs btn-block" id="popoverViewProfileBtn" data-biz-id="${b.id}">
        View Full Profile
      </button>
    `;

    popover.querySelector('#closeMapPopoverBtn').addEventListener('click', () => {
      popover.style.display = 'none';
    });

    popover.querySelector('#popoverViewProfileBtn').addEventListener('click', () => {
      openBusinessProfileModal(b.id);
    });
  }

  function initMapCityTabs() {
    document.querySelectorAll('#mapCityTabs .map-city-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('#mapCityTabs .map-city-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeMapCity = tab.getAttribute('data-mapcity');
        applyDirectoryFilters();
      });
    });
  }

  // ==========================================================================
  // 14. DEALS & COUPONS HUB
  // ==========================================================================
  function renderDeals() {
    const container = document.getElementById('dealsGrid');
    if (!container) return;

    const deals = State.getDeals();
    const saved = State.getSavedDeals();

    container.innerHTML = deals.map(d => `
      <div class="deal-card" data-deal-id="${d.id}">
        <div class="deal-tag-row">
          <span class="deal-discount-pill">${d.discount}</span>
          <span class="deal-expiry">Valid until ${d.expiry}</span>
        </div>
        <h4 class="deal-title">${d.title}</h4>
        <span class="deal-biz-name">${d.bizName}</span>
        <p class="deal-terms">${d.terms}</p>
        <div class="deal-voucher-box">
          <span class="voucher-code">${d.code}</span>
          <button class="btn btn-gold btn-xs" data-copy-deal="${d.code}">Copy Code</button>
        </div>
        <div class="deal-actions">
          <button class="btn btn-outline btn-sm btn-block ${saved.includes(d.id) ? 'active' : ''}" data-claim-deal="${d.id}">
            ${saved.includes(d.id) ? '✓ Saved to Portal' : 'Claim Voucher'}
          </button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('button[data-copy-deal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = btn.getAttribute('data-copy-deal');
        navigator.clipboard.writeText(code).then(() => {
          showToast(`Coupon code ${code} copied to clipboard!`, '📋');
        }).catch(() => {
          showToast(`Coupon code: ${code}`, '📋');
        });
      });
    });

    container.querySelectorAll('button[data-claim-deal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dealId = btn.getAttribute('data-claim-deal');
        const isSaved = State.toggleSaveDeal(dealId);
        btn.textContent = isSaved ? '✓ Saved to Portal' : 'Claim Voucher';
        renderUserSavedDealsTab();
        showToast(isSaved ? 'Deal claimed and stored in Member Portal' : 'Deal removed from saved', isSaved ? '🎉' : '🗑️');
      });
    });
  }

  function initPostOfferModal() {
    const openBtn = document.getElementById('dealCreateOfferBtn');
    const backdrop = document.getElementById('postOfferModalBackdrop');
    const select = document.getElementById('offerBizSelect');
    const form = document.getElementById('postOfferForm');

    if (openBtn && backdrop && select) {
      openBtn.addEventListener('click', () => {
        const businesses = State.getBusinesses();
        select.innerHTML = businesses.map(b => `<option value="${b.id}">${b.name} (${b.city})</option>`).join('');
        backdrop.classList.add('active');
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const bizId = document.getElementById('offerBizSelect').value;
        const biz = State.getBusinesses().find(b => b.id === bizId);
        const title = document.getElementById('offerTitleInput').value.trim();
        const discount = document.getElementById('offerDiscountInput').value.trim();
        const code = document.getElementById('offerCodeInput').value.trim().toUpperCase();
        const expiry = document.getElementById('offerExpiryInput').value;
        const terms = document.getElementById('offerTermsInput').value.trim() || 'Terms and conditions apply.';

        const newDeal = {
          id: 'deal-' + Date.now(),
          bizId,
          bizName: biz ? biz.name : 'Verified Enterprise',
          title,
          discount,
          code,
          expiry,
          terms
        };

        State.saveDeal(newDeal);
        backdrop.classList.remove('active');
        form.reset();
        renderDeals();
        showToast(`Offer "${title}" published live!`, '🎁');
      });
    }

    const cancel = document.getElementById('cancelOfferBtn');
    if (cancel && backdrop) {
      cancel.addEventListener('click', () => backdrop.classList.remove('active'));
    }
  }

  // ==========================================================================
  // 15. DUAL DASHBOARD ENGINE (BUSINESS OWNER & USER MEMBER)
  // ==========================================================================
  let activeMetric = 'views';
  let activeChartRange = '30d';

  function initDashboard() {
    const btnOwner = document.getElementById('btnModeOwner');
    const btnUser = document.getElementById('btnModeUser');
    const viewOwner = document.getElementById('ownerDashboardView');
    const viewUser = document.getElementById('userDashboardView');

    if (btnOwner && btnUser && viewOwner && viewUser) {
      btnOwner.addEventListener('click', () => {
        btnOwner.classList.add('active');
        btnUser.classList.remove('active');
        viewOwner.style.display = 'block';
        viewUser.style.display = 'none';
        drawAnalyticsChart();
      });

      btnUser.addEventListener('click', () => {
        btnUser.classList.add('active');
        btnOwner.classList.remove('active');
        viewUser.style.display = 'block';
        viewOwner.style.display = 'none';
        renderUserDashboardTabs();
      });
    }

    // Chart Controls
    document.querySelectorAll('.metric-toggles .metric-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.metric-toggles .metric-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeMetric = btn.getAttribute('data-metric');
        drawAnalyticsChart();
      });
    });

    document.querySelectorAll('#chartTimeRange .time-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#chartTimeRange .time-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeChartRange = btn.getAttribute('data-range');
        drawAnalyticsChart();
      });
    });

    renderOwnerDashboard();
    renderUserDashboardTabs();
  }

  function renderOwnerDashboard() {
    const businesses = State.getBusinesses();
    const myListingsContainer = document.getElementById('dashMyListingsList');
    const leadsContainer = document.getElementById('dashLeadsList');

    if (myListingsContainer) {
      myListingsContainer.innerHTML = businesses.slice(0, 4).map(b => `
        <div class="listing-row-item">
          <div>
            <h5>${b.name}</h5>
            <span>${b.category} • ${b.city} • Rating: ${b.rating} ★</span>
          </div>
          <div style="display:flex; gap:0.4rem;">
            <button class="btn btn-outline btn-xs" onclick="window.viewBizProfile('${b.id}')">View</button>
          </div>
        </div>
      `).join('');
    }

    if (leadsContainer) {
      leadsContainer.innerHTML = `
        <div class="listing-row-item">
          <div>
            <h5>Asim Munir (Enterprise Inquiry)</h5>
            <span>Requested Cloud Migration Quote • 20 mins ago</span>
          </div>
          <button class="btn btn-gold btn-xs" onclick="window.quickReplyLead('Asim Munir')">Reply</button>
        </div>
        <div class="listing-row-item">
          <div>
            <h5>Dr. Fatima Shah (VIP Reservation)</h5>
            <span>Private Dining Table for 8 Persons • 2 hours ago</span>
          </div>
          <button class="btn btn-gold btn-xs" onclick="window.quickReplyLead('Dr. Fatima')">Confirm</button>
        </div>
        <div class="listing-row-item">
          <div>
            <h5>Shahid Afridi (Solar Assessment)</h5>
            <span>Commercial 50kW Net-Metering Audit • Today</span>
          </div>
          <button class="btn btn-gold btn-xs" onclick="window.quickReplyLead('Shahid')">Contact</button>
        </div>
      `;
    }

    window.quickReplyLead = function (name) {
      showToast(`Contacting client ${name} via secure lead channel...`, '💬');
    };

    const addListBtn = document.getElementById('dashAddListingBtn');
    if (addListBtn) {
      addListBtn.addEventListener('click', () => {
        document.getElementById('addBusinessModalBackdrop').classList.add('active');
      });
    }

    drawAnalyticsChart();
  }

  // HTML5 Interactive Canvas Analytics Chart
  function drawAnalyticsChart() {
    const canvas = document.getElementById('analyticsChartCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Dynamic data generator based on range and metric
    const dataPointsMap = {
      views: {
        '7d': [120, 140, 180, 220, 310, 290, 420],
        '30d': [110, 160, 210, 280, 340, 410, 380, 450, 520, 610, 590, 680],
        '3m': [2400, 3100, 4200, 5100, 6400, 7800],
        '1y': [12000, 15000, 19000, 24000, 31000, 38000, 46000]
      },
      calls: {
        '7d': [14, 18, 22, 35, 42, 38, 55],
        '30d': [15, 24, 32, 45, 52, 68, 62, 75, 88, 95, 90, 110],
        '3m': [340, 450, 610, 740, 920, 1150],
        '1y': [1200, 1600, 2200, 3100, 4400, 5600, 7200]
      },
      clicks: {
        '7d': [45, 60, 85, 110, 145, 130, 180],
        '30d': [50, 80, 110, 140, 180, 220, 205, 260, 310, 350, 340, 410],
        '3m': [1100, 1500, 2100, 2800, 3600, 4500],
        '1y': [4500, 6800, 9200, 12500, 16800, 22000, 28500]
      }
    };

    const dataset = dataPointsMap[activeMetric][activeChartRange] || dataPointsMap.views['30d'];
    const max = Math.max(...dataset) * 1.2;
    const min = 0;

    // Grid lines
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = height - 40 - (i * (height - 80) / 4);
      ctx.beginPath();
      ctx.moveTo(60, y);
      ctx.lineTo(width - 30, y);
      ctx.stroke();

      // Y-axis labels
      ctx.fillStyle = '#8b9ea0';
      ctx.font = '11px Outfit, sans-serif';
      ctx.textAlign = 'right';
      const labelVal = Math.round(min + (i * (max - min) / 4));
      ctx.fillText(labelVal >= 1000 ? (labelVal / 1000).toFixed(1) + 'k' : labelVal, 50, y + 4);
    }

    // Plot Points & Line
    const stepX = (width - 100) / (dataset.length - 1);
    const points = dataset.map((val, idx) => ({
      x: 60 + (idx * stepX),
      y: height - 40 - ((val / max) * (height - 80))
    }));

    // Area Gradient Fill
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, 'rgba(212, 175, 55, 0.35)');
    grad.addColorStop(1, 'rgba(212, 175, 55, 0.0)');

    ctx.beginPath();
    ctx.moveTo(points[0].x, height - 40);
    points.forEach((p, idx) => {
      if (idx === 0) ctx.lineTo(p.x, p.y);
      else {
        const prev = points[idx - 1];
        const cx = (prev.x + p.x) / 2;
        ctx.bezierCurveTo(cx, prev.y, cx, p.y, p.x, p.y);
      }
    });
    ctx.lineTo(points[points.length - 1].x, height - 40);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line Path
    ctx.beginPath();
    points.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else {
        const prev = points[idx - 1];
        const cx = (prev.x + p.x) / 2;
        ctx.bezierCurveTo(cx, prev.y, cx, p.y, p.x, p.y);
      }
    });
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Circles at data points
    points.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#08120e';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#d4af37';
      ctx.stroke();
    });
  }

  // User Dashboard Tabs & Sub-panes
  function renderUserDashboardTabs() {
    renderUserFavoritesTab();
    renderUserReviewsTab();
    renderUserHistoryTab();
    renderUserSavedDealsTab();

    document.querySelectorAll('.user-dash-tabs .user-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.user-dash-tabs .user-tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('data-usertab');

        document.querySelectorAll('.user-tab-pane').forEach(p => p.style.display = 'none');
        if (target === 'favorites') document.getElementById('userTabFavorites').style.display = 'block';
        if (target === 'reviews') document.getElementById('userTabReviews').style.display = 'block';
        if (target === 'history') document.getElementById('userTabHistory').style.display = 'block';
        if (target === 'savedDeals') document.getElementById('userTabSavedDeals').style.display = 'block';
      });
    });

    const clearHistBtn = document.getElementById('clearHistoryBtn');
    if (clearHistBtn) {
      clearHistBtn.addEventListener('click', () => {
        State.clearHistory();
        renderUserHistoryTab();
        showToast('Browsing history cleared', '🗑️');
      });
    }
  }

  function renderUserFavoritesTab() {
    const container = document.getElementById('dashFavoritesGrid');
    const countBadge = document.getElementById('userDashFavCount');
    const favIds = State.getFavorites();
    const businesses = State.getBusinesses().filter(b => favIds.includes(b.id));

    if (countBadge) countBadge.textContent = businesses.length;
    if (!container) return;

    if (businesses.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card" style="grid-column:1/-1;">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
          <h3>No Saved Businesses Yet</h3>
          <p>Bookmark high-reputation restaurants, clinics, and software partners to access them anytime.</p>
          <button class="btn btn-gold" onclick="window.exploreAllListings()">Explore Directory</button>
        </div>
      `;
      return;
    }

    container.innerHTML = businesses.map(b => renderBusinessCard(b, true)).join('');
  }

  function renderUserReviewsTab() {
    const container = document.getElementById('dashReviewsList');
    const countBadge = document.getElementById('userDashRevCount');
    const reviews = State.getReviews();

    if (countBadge) countBadge.textContent = reviews.length;
    if (!container) return;

    if (reviews.length === 0) {
      container.innerHTML = `<p class="text-muted">You have not submitted any reviews yet.</p>`;
      return;
    }

    container.innerHTML = reviews.map(r => `
      <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.25rem; margin-bottom:1rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <h5 style="font-size:1rem; font-weight:700;">${r.title}</h5>
          <span style="color:var(--accent-gold); font-weight:700;">${'★'.repeat(r.rating)}</span>
        </div>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:0.5rem;">${r.text}</p>
        <span style="font-size:0.75rem; color:var(--text-muted);">${r.date}</span>
      </div>
    `).join('');
  }

  function renderUserHistoryTab() {
    const container = document.getElementById('dashHistoryGrid');
    const historyIds = State.getHistory();
    const businesses = State.getBusinesses().filter(b => historyIds.includes(b.id));

    if (!container) return;

    if (businesses.length === 0) {
      container.innerHTML = `<p class="text-muted">No recently viewed businesses found.</p>`;
      return;
    }

    const favs = State.getFavorites();
    container.innerHTML = businesses.map(b => renderBusinessCard(b, favs.includes(b.id))).join('');
  }

  function renderUserSavedDealsTab() {
    const container = document.getElementById('dashSavedDealsGrid');
    const savedIds = State.getSavedDeals();
    const deals = State.getDeals().filter(d => savedIds.includes(d.id));

    if (!container) return;

    if (deals.length === 0) {
      container.innerHTML = `<p class="text-muted">No coupons claimed yet. Head to Deals & Offers to clip vouchers!</p>`;
      return;
    }

    container.innerHTML = deals.map(d => `
      <div class="deal-card">
        <div class="deal-tag-row">
          <span class="deal-discount-pill">${d.discount}</span>
          <span class="deal-expiry">Expires ${d.expiry}</span>
        </div>
        <h4 class="deal-title">${d.title}</h4>
        <span class="deal-biz-name">${d.bizName}</span>
        <div class="deal-voucher-box">
          <span class="voucher-code">${d.code}</span>
          <button class="btn btn-gold btn-xs" data-copy-deal="${d.code}">Copy</button>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 16. MESSAGING & DIRECT INQUIRY SYSTEM
  // ==========================================================================
  let activeChatBizId = 'biz-2';

  function openMessengerDrawer(bizId = 'biz-2', bizName = 'Apex Cloud Solutions', initialPrompt = null) {
    activeChatBizId = bizId;
    const backdrop = document.getElementById('messagesDrawerBackdrop');
    const nameEl = document.getElementById('activeChatName');
    const avatarEl = document.getElementById('activeChatAvatar');
    const body = document.getElementById('chatMessagesBody');

    if (nameEl) nameEl.textContent = bizName;
    if (avatarEl) avatarEl.textContent = bizName.charAt(0);

    renderConversationPills();
    renderChatMessages(bizId);

    if (initialPrompt) {
      State.sendMessage(bizId, initialPrompt);
      renderChatMessages(bizId);
      setTimeout(() => {
        State.receiveReply(bizId, `Thank you for reaching out to ${bizName}! Our enterprise manager will review your request immediately.`);
        renderChatMessages(bizId);
      }, 1000);
    }

    if (backdrop) backdrop.classList.add('active');
  }

  function renderConversationPills() {
    const list = document.getElementById('conversationList');
    if (!list) return;

    const businesses = State.getBusinesses();
    list.innerHTML = businesses.slice(0, 5).map(b => `
      <button class="conv-pill ${b.id === activeChatBizId ? 'active' : ''}" data-conv-id="${b.id}" data-conv-name="${b.name}">
        ${b.name.split(' ')[0]}
      </button>
    `).join('');

    list.querySelectorAll('.conv-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-conv-id');
        const name = btn.getAttribute('data-conv-name');
        openMessengerDrawer(id, name);
      });
    });
  }

  function renderChatMessages(bizId) {
    const body = document.getElementById('chatMessagesBody');
    if (!body) return;

    const messages = State.getMessages(bizId);
    if (messages.length === 0) {
      body.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.85rem;">No previous correspondence. Start conversation below!</div>`;
      return;
    }

    body.innerHTML = messages.map(m => `
      <div class="chat-bubble ${m.sender === 'me' ? 'outgoing' : 'incoming'}">
        <div>${m.text}</div>
        <div class="chat-bubble-time">${m.time}</div>
      </div>
    `).join('');

    body.scrollTop = body.scrollHeight;
  }

  function initMessenger() {
    const form = document.getElementById('chatSendMessageForm');
    const input = document.getElementById('chatMessageInput');

    if (form && input) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        State.sendMessage(activeChatBizId, text);
        input.value = '';
        renderChatMessages(activeChatBizId);

        // Realistic automated enterprise simulation reply
        setTimeout(() => {
          const autoReplies = [
            "Thank you for contacting us! Our team has received your message and will get back to you shortly.",
            "Understood! Would you like us to schedule a direct call or send our brochure?",
            "Thanks for your inquiry. We'll be pleased to assist with your requirements."
          ];
          const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
          State.receiveReply(activeChatBizId, reply);
          renderChatMessages(activeChatBizId);
        }, 900);
      });
    }

    const openBtn = document.getElementById('messagesDrawerBtn');
    const backdrop = document.getElementById('messagesDrawerBackdrop');
    const closeBtn = document.getElementById('closeMessagesDrawerBtn');

    if (openBtn) openBtn.addEventListener('click', () => openMessengerDrawer());
    if (closeBtn && backdrop) closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));
  }

  // ==========================================================================
  // 17. SAVED FAVORITES DRAWER
  // ==========================================================================
  function initFavoritesDrawer() {
    const openBtn = document.getElementById('favoritesDrawerBtn');
    const mobileBtn = document.getElementById('mobileFavoritesBtn');
    const backdrop = document.getElementById('favoritesDrawerBackdrop');
    const closeBtn = document.getElementById('closeFavoritesDrawerBtn');
    const body = document.getElementById('favoritesDrawerBody');
    const exploreBtn = document.getElementById('favExploreMoreBtn');

    const openDrawer = () => {
      renderFavoritesDrawerContent();
      if (backdrop) backdrop.classList.add('active');
    };

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
    if (closeBtn && backdrop) closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));

    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        if (backdrop) backdrop.classList.remove('active');
        scrollToSection('explore');
      });
    }
  }

  function renderFavoritesDrawerContent() {
    const body = document.getElementById('favoritesDrawerBody');
    if (!body) return;

    const favIds = State.getFavorites();
    const businesses = State.getBusinesses().filter(b => favIds.includes(b.id));

    if (businesses.length === 0) {
      body.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">❤️</div>
          <h4 style="font-size:1.1rem; font-weight:700; color:var(--text-primary);">No Saved Businesses</h4>
          <p style="font-size:0.85rem; margin-top:0.35rem;">Click the heart icon on any card to save your favorite businesses here.</p>
        </div>
      `;
      return;
    }

    body.innerHTML = businesses.map(b => `
      <div style="background:var(--bg-tertiary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1rem; display:flex; gap:0.85rem; align-items:center;">
        <div class="avatar-circle" style="width:40px; height:40px; font-size:1rem;">${b.name.charAt(0)}</div>
        <div style="flex:1;">
          <h5 style="font-size:0.95rem; font-weight:700; cursor:pointer;" onclick="window.viewBizProfile('${b.id}')">${b.name}</h5>
          <span style="font-size:0.75rem; color:var(--accent-gold);">${b.category} • ${b.city}</span>
        </div>
        <button class="btn btn-outline btn-xs" style="color:var(--accent-ruby);" data-remove-fav="${b.id}" title="Remove">✕</button>
      </div>
    `).join('');

    body.querySelectorAll('button[data-remove-fav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-fav');
        State.toggleFavorite(id);
        updateHeaderBadges();
        renderFavoritesDrawerContent();
        applyDirectoryFilters();
      });
    });
  }

  // ==========================================================================
  // 18. SPOTLIGHT GLOBAL SEARCH MODAL (⌘K / Ctrl+K)
  // ==========================================================================
  function initSpotlightSearch() {
    const trigger = document.getElementById('globalSearchBtn');
    const backdrop = document.getElementById('globalSearchModalBackdrop');
    const input = document.getElementById('spotlightInput');
    const clearBtn = document.getElementById('spotlightClearBtn');
    const results = document.getElementById('spotlightResultsList');

    const openSpotlight = () => {
      if (!backdrop || !input) return;
      backdrop.classList.add('active');
      input.value = '';
      input.focus();
      renderSpotlightSuggestions('');
    };

    const closeSpotlight = () => {
      if (backdrop) backdrop.classList.remove('active');
    };

    if (trigger) trigger.addEventListener('click', openSpotlight);
    if (clearBtn) clearBtn.addEventListener('click', closeSpotlight);

    // Keyboard shortcut (Ctrl + K or Cmd + K, and Esc)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSpotlight();
      } else if (e.key === 'Escape') {
        closeSpotlight();
      }
    });

    if (input) {
      input.addEventListener('input', (e) => {
        renderSpotlightSuggestions(e.target.value.trim());
      });
    }
  }

  function renderSpotlightSuggestions(query) {
    const list = document.getElementById('spotlightResultsList');
    if (!list) return;

    const businesses = State.getBusinesses();
    const q = query.toLowerCase();

    let matches = businesses;
    if (q) {
      matches = businesses.filter(b => 
        b.name.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        (b.services || []).some(s => s.name.toLowerCase().includes(q))
      );
    }

    if (matches.length === 0) {
      list.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.9rem;">No results found for "${query}"</div>`;
      return;
    }

    list.innerHTML = matches.slice(0, 6).map(b => `
      <div class="spotlight-item" data-spotlight-biz="${b.id}">
        <div class="spotlight-item-left">
          <div class="avatar-circle small">${b.name.charAt(0)}</div>
          <div>
            <div style="font-weight:700; font-size:0.95rem;">${b.name}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${b.city} • ${b.hoursText}</div>
          </div>
        </div>
        <span class="spotlight-pill">${b.category}</span>
      </div>
    `).join('');

    list.querySelectorAll('.spotlight-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-spotlight-biz');
        document.getElementById('globalSearchModalBackdrop').classList.remove('active');
        openBusinessProfileModal(id);
      });
    });
  }

  // ==========================================================================
  // 19. AUTH LOGIN & PROFILE DROPDOWN SYSTEM
  // ==========================================================================
  function initAuthSystem() {
    renderUserAuthSlot();

    const authTrigger = document.getElementById('authLoginBtn');
    const backdrop = document.getElementById('authModalBackdrop');
    const form = document.getElementById('authForm');
    const tabLogin = document.getElementById('tabAuthLogin');
    const tabSignup = document.getElementById('tabAuthSignup');
    const signupName = document.getElementById('signupNameGroup');
    const accountRole = document.getElementById('accountTypeGroup');
    const modalTitle = document.getElementById('authModalTitle');
    const submitBtn = document.getElementById('authSubmitBtn');

    if (tabLogin && tabSignup) {
      tabLogin.addEventListener('click', (e) => {
        e.preventDefault();
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        signupName.style.display = 'none';
        accountRole.style.display = 'none';
        modalTitle.textContent = 'Sign in to Nexora';
        submitBtn.textContent = 'Sign In';
      });

      tabSignup.addEventListener('click', (e) => {
        e.preventDefault();
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        signupName.style.display = 'flex';
        accountRole.style.display = 'flex';
        modalTitle.textContent = 'Create Nexora Account';
        submitBtn.textContent = 'Create Account';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('authEmailInput').value;
        const isSignup = tabSignup.classList.contains('active');
        const name = isSignup ? (document.getElementById('authNameInput').value || 'Member') : 'Tariq Khan';
        const role = isSignup ? (document.querySelector('input[name="accountRole"]:checked').value) : 'owner';

        State.setUser({
          name,
          email,
          role,
          avatar: name.charAt(0).toUpperCase()
        });

        backdrop.classList.remove('active');
        renderUserAuthSlot();
        showToast(`Welcome back, ${name}! (${role === 'owner' ? 'Business Owner' : 'Member'})`, '👋');
      });
    }

    // Demo role buttons
    const demoOwner = document.getElementById('demoOwnerBtn');
    const demoCust = document.getElementById('demoCustomerBtn');

    if (demoOwner) {
      demoOwner.addEventListener('click', () => {
        State.setUser({ name: 'Tariq Khan', email: 'owner@nexora.com', role: 'owner', avatar: 'T' });
        backdrop.classList.remove('active');
        renderUserAuthSlot();
        showToast('Logged in as Enterprise Owner Demo', '💼');
      });
    }

    if (demoCust) {
      demoCust.addEventListener('click', () => {
        State.setUser({ name: 'Ayesha Bibi', email: 'ayesha@consumer.pk', role: 'customer', avatar: 'A' });
        backdrop.classList.remove('active');
        renderUserAuthSlot();
        showToast('Logged in as Member / Customer Demo', '👤');
      });
    }
  }

  function renderUserAuthSlot() {
    const slot = document.getElementById('userAuthSlot');
    const user = State.getUser();
    if (!slot) return;

    if (user) {
      slot.innerHTML = `
        <div class="popover-wrapper">
          <button class="user-avatar-btn" id="userMenuTrigger">
            <div class="avatar-circle">${user.avatar || 'U'}</div>
            <span class="avatar-name">${user.name}</span>
          </button>
          <div class="popover-dropdown" id="userMenuDropdown" style="width:200px;">
            <div class="popover-header">
              <div>
                <h5 style="font-size:0.9rem;">${user.name}</h5>
                <span style="font-size:0.75rem; color:var(--text-muted); text-transform:capitalize;">${user.role}</span>
              </div>
            </div>
            <div style="padding:0.5rem; display:flex; flex-direction:column; gap:0.25rem;">
              <button class="mobile-link" style="font-size:0.85rem;" onclick="window.navigateTo('dashboard')">Dashboard</button>
              <button class="mobile-link" style="font-size:0.85rem;" onclick="window.openFavDrawer()">Saved Favorites</button>
              <button class="mobile-link" style="font-size:0.85rem; color:var(--accent-ruby);" id="authLogoutBtn">Sign Out</button>
            </div>
          </div>
        </div>
      `;

      const trigger = slot.querySelector('#userMenuTrigger');
      const dropdown = slot.querySelector('#userMenuDropdown');
      if (trigger && dropdown) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          dropdown.classList.toggle('active');
        });
      }

      const logoutBtn = slot.querySelector('#authLogoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          State.setUser(null);
          renderUserAuthSlot();
          showToast('Signed out successfully.', '🚪');
        });
      }
    } else {
      slot.innerHTML = `
        <button class="btn btn-outline btn-sm" id="authLoginBtn">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Sign In</span>
        </button>
      `;
      slot.querySelector('#authLoginBtn').addEventListener('click', () => {
        document.getElementById('authModalBackdrop').classList.add('active');
      });
    }
  }

  // ==========================================================================
  // 20. SHARE MODAL & NOTIFICATIONS
  // ==========================================================================
  function openShareModal(bizName) {
    const backdrop = document.getElementById('shareModalBackdrop');
    const text = document.getElementById('shareBizNameText');
    const linkInput = document.getElementById('shareLinkInput');

    if (text) text.textContent = `Share "${bizName}" with friends and clients:`;
    if (linkInput) linkInput.value = `${window.location.origin}/#biz-${encodeURIComponent(bizName.toLowerCase().replace(/\s+/g, '-'))}`;
    if (backdrop) backdrop.classList.add('active');
  }

  function initShareModal() {
    const copyBtn = document.getElementById('copyShareLinkBtn');
    const linkInput = document.getElementById('shareLinkInput');
    const whatsApp = document.getElementById('shareWhatsAppBtn');
    const twitter = document.getElementById('shareTwitterBtn');
    const linkedin = document.getElementById('shareLinkedInBtn');

    if (copyBtn && linkInput) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(linkInput.value).then(() => {
          showToast('Share link copied to clipboard!', '📋');
        }).catch(() => {
          showToast(`Link: ${linkInput.value}`, '📋');
        });
      });
    }

    if (whatsApp) {
      whatsApp.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this verified business on Nexora: ' + linkInput.value)}`, '_blank');
      });
    }

    if (twitter) {
      twitter.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('Discovering top enterprises on Nexora Directory: ' + linkInput.value)}`, '_blank');
      });
    }

    if (linkedin) {
      linkedin.addEventListener('click', () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(linkInput.value)}`, '_blank');
      });
    }
  }

  function initNotifications() {
    const trigger = document.getElementById('notifTriggerBtn');
    const dropdown = document.getElementById('notificationDropdown');
    const list = document.getElementById('notificationList');
    const badge = document.getElementById('notifBadge');
    const markAll = document.getElementById('markAllReadBtn');

    const renderNotifs = () => {
      const notifs = State.getNotifications();
      const unreadCount = notifs.filter(n => n.unread).length;
      if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
      }

      if (list) {
        list.innerHTML = notifs.map(n => `
          <div class="notif-item ${n.unread ? 'unread' : ''}" data-notif-id="${n.id}">
            <div class="notif-icon-box">${n.icon}</div>
            <div class="notif-content">
              <h5>${n.title}</h5>
              <p>${n.text}</p>
              <div class="notif-time">${n.time}</div>
            </div>
          </div>
        `).join('');
      }
    };

    renderNotifs();

    if (trigger && dropdown) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('active');
      });
    }

    if (markAll) {
      markAll.addEventListener('click', () => {
        State.markAllNotificationsRead();
        renderNotifs();
        showToast('All notifications marked as read', '✓');
      });
    }
  }

  function updateHeaderBadges() {
    const favBadge = document.getElementById('favoritesCountBadge');
    const favCount = State.getFavorites().length;
    if (favBadge) favBadge.textContent = favCount;

    const mobileFavCount = document.getElementById('mobileFavCount');
    if (mobileFavCount) mobileFavCount.textContent = favCount;
  }

  // ==========================================================================
  // 21. MOBILE NAVIGATION & GLOBAL UTILITIES
  // ==========================================================================
  function initMobileDrawer() {
    const toggle = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileDrawer');
    const backdrop = document.getElementById('mobileDrawerBackdrop');
    const closeBtn = document.getElementById('closeMobileDrawerBtn');

    const open = () => {
      drawer.classList.add('active');
      backdrop.classList.add('active');
    };

    const close = () => {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
    };

    if (toggle) toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) backdrop.addEventListener('click', close);

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', close);
    });

    const mobileAddBtn = document.getElementById('mobileAddBusinessBtn');
    if (mobileAddBtn) {
      mobileAddBtn.addEventListener('click', () => {
        close();
        document.getElementById('addBusinessModalBackdrop').classList.add('active');
      });
    }
  }

  function initHeaderButtons() {
    const headerAddBtn = document.getElementById('headerAddBusinessBtn');
    if (headerAddBtn) {
      headerAddBtn.addEventListener('click', () => {
        document.getElementById('addBusinessModalBackdrop').classList.add('active');
      });
    }

    // Modal Close buttons (common)
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
      });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove('active');
        }
      });
    });

    // Close on drawer backdrop click
    document.querySelectorAll('.drawer-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.remove('active');
        }
      });
    });

    // Close popovers on click outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.popover-dropdown').forEach(d => d.classList.remove('active'));
    });

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletterEmail').value;
        newsletterForm.reset();
        showToast(`Thank you! Newsletter confirmation sent to ${email}`, '📬');
      });
    }

    // Footer Links
    const footerAdd = document.getElementById('footerAddListingLink');
    if (footerAdd) {
      footerAdd.addEventListener('click', () => {
        document.getElementById('addBusinessModalBackdrop').classList.add('active');
      });
    }

    const footerOwner = document.getElementById('footerOwnerPortalLink');
    if (footerOwner) {
      footerOwner.addEventListener('click', () => {
        scrollToSection('dashboard');
        document.getElementById('btnModeOwner').click();
      });
    }

    // Nav Links Scroll Sync
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href').replace('#', '');
        scrollToSection(target);
      });
    });
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Global window helpers
  window.navigateTo = function (sectionId) {
    scrollToSection(sectionId);
  };

  window.openFavDrawer = function () {
    renderFavoritesDrawerContent();
    document.getElementById('favoritesDrawerBackdrop').classList.add('active');
  };

  window.exploreAllListings = function () {
    resetAllFilters();
    scrollToSection('explore');
  };

  // ==========================================================================
  // 22. APPLICATION BOOTSTRAPPER
  // ==========================================================================
  function bootstrap() {
    initTheme();
    renderCategories();
    renderLocations();
    initFilterWidgets();
    initCardActions();
    initComparisonMatrix();
    initMapCityTabs();
    renderDeals();
    initPostOfferModal();
    initDashboard();
    initMessenger();
    initFavoritesDrawer();
    initSpotlightSearch();
    initAuthSystem();
    initShareModal();
    initNotifications();
    initReviewForm();
    initAddBusinessForm();
    initMobileDrawer();
    initHeaderButtons();
    updateHeaderBadges();

    // Initial render of directory listings
    applyDirectoryFilters();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }

})();
