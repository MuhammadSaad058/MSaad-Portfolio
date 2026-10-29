export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  roleSubtitle: string;
  category: "all" | "liveInStores" | "mobileApp" | "webApp";
  badgeType: string;
  liveStoreType: "googlePlay" | "appStore" | "both" | "production";
  iconImage: string;
  fullImage: string;
  imageAlt: string;
  summary: string;
  problem: string;
  solution: string;
  challenges: string;
  roleAndContribution: string;
  metrics: ProjectMetric[];
  highlights: string[];
  techStack: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "talk2learn",
    title: "Talk2Learn",
    roleSubtitle: "Lead Mobile Engineer • Live Streaming & EdTech",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "both",
    iconImage: "/talk2learn-logo.webp",
    fullImage: "/talk2learn-screen.webp",
    imageAlt: "Talk2Learn mobile app interface displaying live audio video conversation rooms powered by Agora WebRTC",
    summary:
      "High-performance cross-platform language learning application featuring multi-user live audio and video streaming rooms, real-time presence indicators, and low-latency interactive discussion channels.",
    problem:
      "Language learners needed a spontaneous, low-latency mobile environment to practice conversational speaking with native speakers worldwide without the scheduling overhead and awkwardness of formal video calendar appointments.",
    solution:
      "Architected an Agora WebRTC SFU multi-user streaming pipeline inside Flutter with Riverpod state management. Implemented speaker stages, dynamic hand-raising queue, active audio visualizers, and streamlined Apple/Google Single Sign-On.",
    challenges:
      "Minimizing audio packet loss and acoustic feedback on lower-bandwidth mobile networks while synchronizing active speaker indicators across dozens of concurrent room participants.",
    roleAndContribution:
      "Designed the entire real-time streaming state engine, integrated Agora RTC Engine SDK, implemented Firebase Authentication, and managed App Store and Google Play compliance and release pipelines.",
    metrics: [
      { label: "Architecture", value: "Flutter & Dart" },
      { label: "Voice / Video", value: "Agora WebRTC SFU" },
      { label: "State Engine", value: "Riverpod Reactive" },
      { label: "Store Status", value: "iOS & Android Live" },
    ],
    highlights: [
      "Architected multi-user voice and video language rooms with Agora WebRTC SFU streaming",
      "Configured Google and Apple Single Sign-On (SSO) with Firebase Authentication",
      "Real-time user presence, active speaker indicators, and dynamic room moderation controls",
      "Low-latency Riverpod reactive state management with clean GoRouter navigation flows",
      "Sub-second room join times with automatic network reconnection and fallback to audio-only mode",
    ],
    techStack: ["Flutter", "Dart", "Agora WebRTC", "Firebase Firestore", "Riverpod", "GoRouter", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/ma/app/talk2learn/id6795451031",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.saadTech.talk2learn",
    webUrl: "https://talk2learn-app-landing.vercel.app/",
  },
  {
    id: "quit-puffing",
    title: "Quit Puffing",
    roleSubtitle: "Creator & Lead Developer (Own Product) • Habit Recovery",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "googlePlay",
    iconImage: "/quit-puffing-icon.webp",
    fullImage: "/quit-puffing-screen.webp",
    imageAlt: "Quit Puffing smoking cessation mobile application UI showing health recovery milestones and craving timer",
    summary:
      "A comprehensive, interactive Flutter application designed to assist smokers in breaking nicotine dependency through positive psychology, gamification, and evidence-based biological recovery timelines.",
    problem:
      "Individuals attempting to quit smoking suffer from high relapse rates during sudden acute cravings due to lack of immediate dopamine-replacing interventions, privacy concerns with cloud tracking, and absent real-time biological recovery feedback.",
    solution:
      "Architected a responsive Flutter Material 3 application featuring real-time smoke-free duration tracking, dynamic financial savings calculations, 5-minute guided SOS craving battles, and a local-first virtual XP economy with progression trophies.",
    challenges:
      "Ensuring 100% offline-first reliability and sub-second calculation of progressive health milestone percentages across background app cycles without consuming excessive battery life.",
    roleAndContribution:
      "Conceived, designed, and programmed the application from scratch. Built custom animation loops, local storage schema, and executed Google Play Store deployment and user rating acquisition.",
    metrics: [
      { label: "Platform", value: "Google Play Live" },
      { label: "Rating", value: "4.9 ★" },
      { label: "Framework", value: "Flutter & Material 3" },
      { label: "Data Model", value: "Local Storage Offline" },
    ],
    highlights: [
      "Real-time tracking of smoke-free duration, cigarettes avoided, and monetary savings",
      "Evidence-based biological recovery timelines with interactive physical health repair stages",
      "Immediate 'SOS' craving interventions & 5-minute interactive distraction battles",
      "Virtual XP economy with cosmetic unlocks, level milestones, and progression trophies",
      "Robust local-first architecture for secure, 100% private offline data persistence",
    ],
    techStack: ["Flutter", "Dart", "Material 3", "Local Storage", "Gamification", "State Management", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mubbits.quit_puffing",
    webUrl: "https://quit-puffing.netlify.app/",
  },
  {
    id: "medroof",
    title: "Medroof",
    roleSubtitle: "Lead Mobile Engineer • Telemedicine & Spa Platform",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "both",
    iconImage: "/medroof-icon.webp",
    fullImage: "/medroof-screen.webp",
    imageAlt: "Medroof telemedicine mobile app consultation booking and doctor video consultation screen",
    summary:
      "Comprehensive on-demand telemedicine and wellness mobile application connecting patients with licensed physicians for live Agora WebRTC consultations, digital prescriptions, and on-demand spa/hydration treatments.",
    problem:
      "Patients face long clinic queues, cumbersome appointment booking, and fragmented health records when seeking prompt virtual healthcare or scheduling in-person wellness treatments.",
    solution:
      "Engineered a secure cross-platform mobile application with low-latency Agora WebRTC video/audio telemedicine consults, HIPAA-ready patient records, interactive spa treatment scheduling, automated reminders, and instant card payments.",
    challenges:
      "Maintaining encrypted video channels and reliable call signaling across varying cellular connection qualities, ensuring seamless reconnects if network switches occur between Wi-Fi and LTE.",
    roleAndContribution:
      "Engineered the core React Native application, implemented WebRTC audio/video call flows, structured patient booking state, and coordinated App Store Connect and Play Console release compliance.",
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Telemedicine", value: "Agora WebRTC" },
      { label: "Architecture", value: "React Native" },
      { label: "Security", value: "HIPAA-Ready" },
    ],
    highlights: [
      "High-definition Agora WebRTC video & audio telemedicine consultations with certified physicians",
      "Secure electronic prescriptions, patient medical records, and digital consultation history",
      "On-demand spa, IV hydration therapy, and wellness appointment booking with interactive scheduling",
      "Integrated secure payment checkout, automated appointment reminders, and instant in-app clinician chat",
    ],
    techStack: ["React Native", "TypeScript", "Agora WebRTC", "Firebase", "Stripe API", "REST APIs", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/es/app/medroof-telemedicine-spa/id6739805332",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.medroof&hl=en",
  },
  {
    id: "propermech",
    title: "ProperMech",
    roleSubtitle: "Lead React Native Developer • Automotive Marketplace",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "googlePlay",
    iconImage: "/propermech-screen.webp",
    fullImage: "/propermech-screen.webp",
    imageAlt: "ProperMech car repair marketplace app customer screen displaying vehicle diagnostic booking",
    summary:
      "Complete automotive service mobile platform where vehicle owners manage car maintenance records, locate nearby certified mechanics, request repair quotes, and monitor job progress live.",
    problem:
      "Car owners struggle with opaque repair pricing, unverified mechanic credentials, and absent visibility during multi-stage vehicle servicing and parts replacements.",
    solution:
      "Built a dual-role React Native marketplace with real-time Firestore synchronization, Apple/Google single sign-on, camera image diagnostics, and background FCM push alerts.",
    challenges:
      "Managing complex real-time work-order state transitions (quote requested -> inspection -> parts approved -> servicing -> completed) with immediate push notifications and offline fallbacks.",
    roleAndContribution:
      "Developed client-facing application from scratch using React Native, TypeScript, and Redux Toolkit. Built real-time Firestore listeners, camera inspection upload pipelines, and geolocation discovery.",
    metrics: [
      { label: "Platform", value: "Google Play Live" },
      { label: "Cloud DB", value: "Firestore Realtime" },
      { label: "Auth", value: "Apple & Google SSO" },
      { label: "Push Alerts", value: "FCM Push" },
    ],
    highlights: [
      "Real-time database syncing with Firestore for instant job status notifications",
      "Integrated camera and media library for car inspection photo uploads",
      "Google and Apple Single Sign-On (SSO) with biometrics security",
      "Streamlined navigation flows optimized with React Navigation and Redux state",
    ],
    techStack: ["React Native", "Firebase Firestore", "SSO Authentication", "FCM Notifications", "React Navigation", "TypeScript"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bayworks.customer",
    webUrl: "https://propermech.com/",
  },
  {
    id: "propermech-pro",
    title: "ProperMech Pro",
    roleSubtitle: "Lead Mobile & AI Developer • Field Technician Dispatch",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "googlePlay",
    iconImage: "/propermech-pro-screen.webp",
    fullImage: "/propermech-pro-screen.webp",
    imageAlt: "ProperMech Pro mechanic dispatch interface showing AI service writer repair estimates",
    summary:
      "Professional mobile application for automotive technicians and workshops to manage daily schedules, accept dispatch jobs, track order parts, and generate repair reports via an AI Service Writer.",
    problem:
      "Automotive technicians spent hours writing repetitive manual repair estimates, leading to dispatch delays, inaccurate labor estimates, and administrative overhead in busy repair shops.",
    solution:
      "Engineered an AI Service Writer powered by Firebase Cloud Functions that generates comprehensive repair work orders, parts checklists, and customer quotes in seconds.",
    challenges:
      "Structuring prompt pipelines and response formatting inside mobile views so technicians can review, tweak, and approve AI-generated work orders with one touch.",
    roleAndContribution:
      "Architected the technician interface, integrated Cloud Functions AI pipelines, implemented real-time order acceptance, and optimized offline job logging for remote technicians.",
    metrics: [
      { label: "Platform", value: "Google Play Live" },
      { label: "AI Backend", value: "Firebase Cloud Functions" },
      { label: "Target Audience", value: "Automotive Technicians" },
      { label: "Order Sync", value: "Realtime Live Dispatch" },
    ],
    highlights: [
      "Integrated AI Service Writer via Firebase Cloud Functions for diagnostic estimates",
      "Mechanic daily dispatch queue with interactive acceptance and route tracking",
      "Cloud-synced parts inventory and labor cost calculator with automated invoices",
      "Comprehensive offline job logging with automatic sync upon reconnection",
    ],
    techStack: ["React Native", "TypeScript", "AI Cloud Functions", "Firestore", "Redux Toolkit", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bayworks.pro&hl=en",
    webUrl: "https://propermech.com/",
  },
  {
    id: "souvenir-store",
    title: "Souvenir Store",
    roleSubtitle: "Full Stack Mobile Developer • E-Commerce & Retail",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "appStore",
    iconImage: "/souvenir-screen.webp",
    fullImage: "/souvenir-screen.webp",
    imageAlt: "Souvenir Store iOS mobile shopping application product catalog and cart screen",
    summary:
      "Premium shopping mobile application on iOS designed for discovering bespoke souvenirs, personalized gifts, seamless cart checkout with Stripe, and real-time delivery status.",
    problem:
      "Shoppers faced high cart abandonment and slow page transitions on mobile web when attempting to personalize gift items and purchase with local or international payment cards.",
    solution:
      "Engineered a React Native iOS application with native Stripe SDK integration, animated gift packaging selectors, and persistent Redux Toolkit offline cart caching for instant zero-latency checkout.",
    challenges:
      "Ensuring flawless compliance with Apple App Store Human Interface Guidelines, handling payment intent webhooks gracefully, and maintaining cart integrity across app updates.",
    roleAndContribution:
      "Built the iOS React Native frontend, integrated the official Stripe Mobile SDK, structured offline cart persistence with Redux Persist, and managed Apple App Store submission and approval.",
    metrics: [
      { label: "Platform", value: "Apple App Store Live" },
      { label: "Payments", value: "Stripe Mobile SDK" },
      { label: "Framework", value: "React Native & TypeScript" },
      { label: "State", value: "Redux Toolkit Persist" },
    ],
    highlights: [
      "Implemented smooth, friction-free catalog browsing with sub-second product search",
      "Integrated secure Stripe mobile SDK supporting credit/debit cards and Apple Pay",
      "Engineered persistent shopping cart and wishlist synchronization across sessions",
      "100% compliant with Apple App Store Human Interface Guidelines and privacy manifests",
    ],
    techStack: ["React Native", "TypeScript", "Stripe API", "Redux Toolkit", "REST APIs", "iOS"],
    appStoreUrl: "https://apps.apple.com/ma/app/souvenir-store/id6788327287",
    webUrl: "https://www.souvenir.live/",
  },
  {
    id: "activity-maps",
    title: "Activity Maps",
    roleSubtitle: "Lead Mobile Architect • Geolocation & Local Discovery",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "both",
    iconImage: "/activity-maps-screen.webp",
    fullImage: "/activity-maps-screen.webp",
    imageAlt: "Activity Maps mobile app interface showing Google Maps pin clustering and venue reservations",
    summary:
      "Comprehensive local events and venue discovery application where contributors submit locations and users explore interactive maps, make reservations, and check in with digital barcodes.",
    problem:
      "Users struggled to find authentic local community gatherings and make instant table or ticket reservations directly from an interactive map interface without switching apps.",
    solution:
      "Combined Google Maps SDK clustering with local device geolocation, biometric authentication, and in-app reservation barcodes for seamless physical admissions.",
    challenges:
      "Optimizing map marker clustering algorithms to render hundreds of nearby event pins smoothly without dropping below 60fps on both iOS and Android hardware.",
    roleAndContribution:
      "Designed the geolocation architecture, integrated Google Maps SDK, built biometric authentication flows (FaceID/Fingerprint), and implemented barcode scanner integration.",
    metrics: [
      { label: "Stores", value: "iOS & Android Live" },
      { label: "Mapping", value: "Google Maps SDK" },
      { label: "Security", value: "Biometric Auth (FaceID)" },
      { label: "Scanner", value: "QR / Barcode Engine" },
    ],
    highlights: [
      "Interactive Google Maps pin clustering with live GPS radius search and filter presets",
      "Biometric authentication (FaceID & Fingerprint) for rapid account security",
      "QR and barcode scanning engine for event admissions and reservations",
      "Subscription handling with secure digital payments and instant booking receipts",
    ],
    techStack: ["React Native", "Google Maps API", "Biometric Auth", "Redux", "Payment Gateway", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/us/app/activity-maps/id6757748665",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.activitymaps",
  },
  {
    id: "tapwars",
    title: "Tap Wars",
    roleSubtitle: "Creator & Lead Developer • 60 FPS Realtime Gaming",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "googlePlay",
    iconImage: "/tapwars-screen.webp",
    fullImage: "/tapwars-screen.webp",
    imageAlt: "Tap Wars mobile game screen showing fast-paced multiplayer tapping arena and leaderboard",
    summary:
      "High-adrenaline tap-based mobile game featuring real-time multiplayer tournaments, animated theme switcher, global leaderboards, achievements, and low-latency Supabase state sync.",
    problem:
      "Multiplayer mobile games frequently suffer from input lag, UI stutter, and delayed score updates over cellular mobile connections, ruining competitive gameplay.",
    solution:
      "Utilized Reanimated 3 on the native UI thread to guarantee 60fps micro-animations, while Supabase Realtime websocket channels broadcast score states under 80ms latency.",
    challenges:
      "Decoupling rapid user touch events from network websocket emissions to avoid throttling while maintaining strict anti-cheat verification on the backend.",
    roleAndContribution:
      "Conceived game mechanics, programmed gesture handlers with React Native Reanimated, established Supabase Realtime backend websocket listeners, and published to Google Play.",
    metrics: [
      { label: "Frame Rate", value: "60 FPS Fluid" },
      { label: "Backend", value: "Supabase Realtime" },
      { label: "Animations", value: "Reanimated 3 Native" },
      { label: "Store Status", value: "Google Play Live" },
    ],
    highlights: [
      "Engineered buttery 60fps micro-animations with Reanimated and gesture handlers",
      "Supabase Realtime websockets for sub-100ms global leaderboards and player matches",
      "Interactive animated theme switcher with smooth transition shaders",
      "Offline achievement tracking with cloud synchronization upon game finish",
    ],
    techStack: ["React Native", "Supabase Realtime", "Reanimated 3", "TypeScript", "Tailwind CSS", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tapwarsApp&hl=en",
    webUrl: "https://tap-wars-react.vercel.app/",
  },
  {
    id: "savorconnect",
    title: "SavorConnect",
    roleSubtitle: "Mobile Application Developer • On-Demand Food Delivery",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "both",
    iconImage: "/savorconnect-screen.webp",
    fullImage: "/savorconnect-screen.webp",
    imageAlt: "SavorConnect food delivery application UI displaying menu customization and live driver tracking",
    summary:
      "Intuitive food delivery mobile application designed for seamless restaurant discovery, item customization, real-time GPS courier tracking, and smooth checkout via Stripe.",
    problem:
      "Customers demanded live courier location updates on Google Maps and extensive order customization without confusing multi-step checkout friction.",
    solution:
      "Engineered live courier GPS polling with interactive driver markers, integrated Stripe credit card/wallet SDK, and designed a streamlined 3-step checkout flow.",
    challenges:
      "Accurate courier route drawing and live icon rotation based on driver heading without jumping or jittering during cellular network re-routing.",
    roleAndContribution:
      "Engineered React Native ordering flows, integrated Google Maps Directions API, built item modifier logic, and connected Stripe payment processing.",
    metrics: [
      { label: "Stores", value: "iOS & Android Live" },
      { label: "Tracking", value: "Live GPS Maps" },
      { label: "Checkout", value: "Stripe & Digital Wallets" },
      { label: "Engine", value: "React Native" },
    ],
    highlights: [
      "Integrated Google Maps API for restaurant geofencing and live courier tracking",
      "Full Stripe payment gateway integration supporting cards, Apple Pay & Google Pay",
      "Custom item modifiers, combo builders, and dietary requirement filters",
      "Push notification alerts for kitchen status, driver dispatch, and doorstep arrival",
    ],
    techStack: ["React Native", "Stripe SDK", "Google Maps API", "TypeScript", "Redux Toolkit", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/us/app/savorconnect/id6736651275",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.savour_kitchen&hl=en",
  },
  {
    id: "vcrow",
    title: "VCROW",
    roleSubtitle: "Lead Full Stack Developer • EdTech & Parental Control",
    category: "mobileApp",
    badgeType: "Mobile App",
    liveStoreType: "googlePlay",
    iconImage: "/vcrow-screen.webp",
    fullImage: "/vcrow-screen.webp",
    imageAlt: "VCROW educational app screen showing parent analytics charts and student quiz modules",
    summary:
      "Comprehensive dual-portal education ecosystem connecting parents and schools with real-time academic charts, device restriction management, and curriculum question sets.",
    problem:
      "Parents lacked insight into their children's real-time academic performance and struggled to manage device screen time while encouraging educational quiz exercises.",
    solution:
      "Built a dual-portal mobile architecture where school tests and quizzes appear seamlessly on student devices, with parent analytics dashboards powered by Firestore.",
    challenges:
      "Creating performant interactive academic progress graphs that display smoothly across low-spec Android devices without memory leaks.",
    roleAndContribution:
      "Designed dual-role state management, built dynamic chart rendering components, and integrated Firebase Cloud messaging for parental alerts.",
    metrics: [
      { label: "Platform", value: "Google Play Live" },
      { label: "Analytics", value: "Dynamic Performance Graphs" },
      { label: "Backend", value: "Firebase Cloud Sync" },
      { label: "Portals", value: "Parent & Student Roles" },
    ],
    highlights: [
      "Dual-portal architecture for teachers and parents with role-based permissions",
      "Interactive academic performance charts with subject-wise progress analytics",
      "In-app question set purchases and curriculum unlocking modules",
      "Device restriction rules and scheduled study notifications via Firebase",
    ],
    techStack: ["React Native", "Firebase", "Performance Analytics", "Payment Gateway", "Redux Toolkit", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vcrow_edu",
  },
];

