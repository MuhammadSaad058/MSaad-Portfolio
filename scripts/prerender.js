import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html does not exist. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf-8");

// Import projectsData from compiled or parse it directly
const projects = [
  {
    id: "talk2learn",
    title: "Talk2Learn",
    roleSubtitle: "Lead Mobile Engineer • Live Streaming & EdTech",
    liveStoreType: "both",
    image: "/talk2learn-screen.webp",
    summary: "High-performance cross-platform language learning application featuring multi-user live audio and video streaming rooms powered by Agora WebRTC SFU and Riverpod.",
    problem: "Language learners needed a spontaneous, low-latency mobile environment to practice conversational speaking with native speakers worldwide without scheduling formal calendar calls.",
    solution: "Architected an Agora WebRTC SFU multi-user streaming pipeline inside Flutter with Riverpod state management. Implemented speaker stages, dynamic hand-raising queue, and Apple/Google Single Sign-On.",
    challenges: "Minimizing audio packet loss and acoustic feedback on low-bandwidth mobile networks while synchronizing active speaker indicators across dozens of concurrent room participants.",
    roleAndContribution: "Designed real-time streaming state engine, integrated Agora RTC Engine SDK, implemented Firebase Authentication, and managed App Store and Google Play releases.",
    techStack: ["Flutter", "Dart", "Agora WebRTC", "Firebase Firestore", "Riverpod", "GoRouter", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/ma/app/talk2learn/id6795451031",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.saadTech.talk2learn",
    webUrl: "https://talk2learn-app-landing.vercel.app/",
  },
  {
    id: "quit-puffing",
    title: "Quit Puffing",
    roleSubtitle: "Creator & Lead Developer (Own Product) • Habit Recovery",
    liveStoreType: "googlePlay",
    image: "/quit-puffing-screen.webp",
    summary: "Comprehensive, interactive Flutter application designed to assist smokers in breaking nicotine dependency through positive reinforcement, gamification, and evidence-based biological recovery timelines.",
    problem: "Individuals attempting to quit smoking suffer from high relapse rates during acute cravings due to lack of immediate dopamine-replacing interventions and absent recovery feedback.",
    solution: "Architected a responsive Flutter Material 3 application featuring real-time smoke-free duration tracking, savings calculations, 5-minute guided SOS craving battles, and a local-first virtual XP economy.",
    challenges: "Ensuring 100% offline-first reliability and sub-second calculation of progressive health milestone percentages across background cycles without draining battery.",
    roleAndContribution: "Conceived, designed, and programmed the application from scratch. Built custom animation loops, local storage schema, and executed Google Play Store deployment.",
    techStack: ["Flutter", "Dart", "Material 3", "Local Storage", "Gamification", "State Management", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mubbits.quit_puffing",
    webUrl: "https://quit-puffing.netlify.app/",
  },
  {
    id: "medroof",
    title: "Medroof",
    roleSubtitle: "Lead Mobile Engineer • Telemedicine & Spa Platform",
    liveStoreType: "both",
    image: "/medroof-screen.webp",
    summary: "Comprehensive on-demand telemedicine and wellness mobile application connecting patients with licensed physicians for live Agora WebRTC consultations, digital prescriptions, and on-demand spa/hydration treatments.",
    problem: "Patients face long clinic queues, cumbersome appointment booking, and fragmented health records when seeking prompt virtual healthcare or scheduling wellness treatments.",
    solution: "Engineered a secure cross-platform mobile application with low-latency Agora WebRTC video/audio telemedicine consults, HIPAA-ready patient records, interactive spa treatment scheduling, automated reminders, and instant card payments.",
    challenges: "Maintaining encrypted video channels and reliable call signaling across varying cellular connection qualities, ensuring seamless reconnects when switching networks.",
    roleAndContribution: "Engineered the core React Native application, implemented WebRTC audio/video call flows, structured patient booking state, and coordinated App Store and Play Console release compliance.",
    techStack: ["React Native", "TypeScript", "Agora WebRTC", "Firebase", "Stripe API", "REST APIs", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/es/app/medroof-telemedicine-spa/id6739805332",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.medroof&hl=en",
  },
  {
    id: "propermech",
    title: "ProperMech",
    roleSubtitle: "Lead React Native Developer • Automotive Marketplace",
    liveStoreType: "googlePlay",
    image: "/propermech-screen.webp",
    summary: "Complete automotive service mobile platform where vehicle owners manage car maintenance records, locate nearby certified mechanics, request repair quotes, and monitor job progress live.",
    problem: "Car owners struggle with opaque repair pricing, unverified mechanic credentials, and absent visibility during multi-stage vehicle servicing and parts replacements.",
    solution: "Built a dual-role React Native marketplace with real-time Firestore synchronization, Apple/Google single sign-on, camera image diagnostics, and background FCM push alerts.",
    challenges: "Managing complex real-time work-order state transitions (quote requested -> inspection -> parts approved -> servicing -> completed) with immediate push notifications and offline fallbacks.",
    roleAndContribution: "Developed client-facing application from scratch using React Native, TypeScript, and Redux Toolkit. Built real-time Firestore listeners, camera inspection upload pipelines, and geolocation discovery.",
    techStack: ["React Native", "Firebase Firestore", "SSO Authentication", "FCM Notifications", "React Navigation", "TypeScript"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bayworks.customer",
    webUrl: "https://propermech.com/",
  },
  {
    id: "propermech-pro",
    title: "ProperMech Pro",
    roleSubtitle: "Lead Mobile & AI Developer • Field Technician Dispatch",
    liveStoreType: "googlePlay",
    image: "/propermech-pro-screen.webp",
    summary: "Professional mobile application for automotive technicians and workshops to manage daily schedules, accept dispatch jobs, track order parts, and generate repair reports via an AI Service Writer.",
    problem: "Automotive technicians spent hours writing repetitive manual repair estimates, leading to dispatch delays, inaccurate labor estimates, and administrative overhead in busy repair shops.",
    solution: "Engineered an AI Service Writer powered by Firebase Cloud Functions that generates comprehensive repair work orders, parts checklists, and customer quotes in seconds.",
    challenges: "Structuring prompt pipelines and response formatting inside mobile views so technicians can review, tweak, and approve AI-generated work orders with one touch.",
    roleAndContribution: "Architected technician interface, integrated Cloud Functions AI pipelines, implemented real-time order acceptance, and optimized offline job logging for remote technicians.",
    techStack: ["React Native", "TypeScript", "AI Cloud Functions", "Firestore", "Redux Toolkit", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bayworks.pro&hl=en",
    webUrl: "https://propermech.com/",
  },
  {
    id: "souvenir-store",
    title: "Souvenir Store",
    roleSubtitle: "Full Stack Mobile Developer • E-Commerce & Retail",
    liveStoreType: "appStore",
    image: "/souvenir-screen.webp",
    summary: "Premium shopping mobile application on iOS designed for discovering bespoke souvenirs, personalized gifts, seamless cart checkout with Stripe, and real-time delivery status.",
    problem: "Shoppers faced high cart abandonment and slow page transitions on mobile web when attempting to personalize gift items and purchase with payment cards.",
    solution: "Engineered a React Native iOS application with native Stripe SDK integration, animated gift packaging selectors, and persistent Redux Toolkit offline cart caching for instant zero-latency checkout.",
    challenges: "Ensuring flawless compliance with Apple App Store Human Interface Guidelines, handling payment intent webhooks gracefully, and maintaining cart integrity across app updates.",
    roleAndContribution: "Built iOS React Native frontend, integrated Stripe Mobile SDK, structured offline cart persistence with Redux Persist, and managed Apple App Store submission and approval.",
    techStack: ["React Native", "TypeScript", "Stripe API", "Redux Toolkit", "REST APIs", "iOS"],
    appStoreUrl: "https://apps.apple.com/ma/app/souvenir-store/id6788327287",
    webUrl: "https://www.souvenir.live/",
  },
  {
    id: "activity-maps",
    title: "Activity Maps",
    roleSubtitle: "Lead Mobile Architect • Geolocation & Local Discovery",
    liveStoreType: "both",
    image: "/activity-maps-screen.webp",
    summary: "Comprehensive local events and venue discovery application where contributors submit locations and users explore interactive maps, make reservations, and check in with digital barcodes.",
    problem: "Users struggled to find authentic local community gatherings and make instant table or ticket reservations directly from an interactive map interface without switching apps.",
    solution: "Combined Google Maps SDK clustering with local device geolocation, biometric authentication, and in-app reservation barcodes for seamless physical admissions.",
    challenges: "Optimizing map marker clustering algorithms to render hundreds of nearby event pins smoothly without dropping below 60fps on both iOS and Android hardware.",
    roleAndContribution: "Designed geolocation architecture, integrated Google Maps SDK, built biometric authentication flows (FaceID/Fingerprint), and implemented barcode scanner integration.",
    techStack: ["React Native", "Google Maps API", "Biometric Auth", "Redux", "Payment Gateway", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/us/app/activity-maps/id6757748665",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.activitymaps",
  },
  {
    id: "tapwars",
    title: "Tap Wars",
    roleSubtitle: "Creator & Lead Developer • 60 FPS Realtime Gaming",
    liveStoreType: "googlePlay",
    image: "/tapwars-screen.webp",
    summary: "High-adrenaline tap-based mobile game featuring real-time multiplayer tournaments, animated theme switcher, global leaderboards, achievements, and low-latency Supabase state sync.",
    problem: "Multiplayer mobile games frequently suffer from input lag, UI stutter, and delayed score updates over cellular connections, ruining competitive gameplay.",
    solution: "Utilized Reanimated 3 on the native UI thread to guarantee 60fps micro-animations, while Supabase Realtime websocket channels broadcast score states under 80ms latency.",
    challenges: "Decoupling rapid user touch events from network websocket emissions to avoid throttling while maintaining strict anti-cheat verification on the backend.",
    roleAndContribution: "Conceived game mechanics, programmed gesture handlers with React Native Reanimated, established Supabase Realtime websocket listeners, and published to Google Play.",
    techStack: ["React Native", "Supabase Realtime", "Reanimated 3", "TypeScript", "Tailwind CSS", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tapwarsApp&hl=en",
    webUrl: "https://tap-wars-react.vercel.app/",
  },
  {
    id: "savorconnect",
    title: "SavorConnect",
    roleSubtitle: "Mobile Application Developer • On-Demand Food Delivery",
    liveStoreType: "both",
    image: "/savorconnect-screen.webp",
    summary: "Intuitive food delivery mobile application designed for seamless restaurant discovery, item customization, real-time GPS courier tracking, and smooth checkout via Stripe.",
    problem: "Customers demanded live courier location updates on Google Maps and extensive order customization without confusing multi-step checkout friction.",
    solution: "Engineered live courier GPS polling with interactive driver markers, integrated Stripe credit card/wallet SDK, and designed a streamlined 3-step checkout flow.",
    challenges: "Accurate courier route drawing and live icon rotation based on driver heading without jumping or jittering during cellular network re-routing.",
    roleAndContribution: "Engineered React Native ordering flows, integrated Google Maps Directions API, built item modifier logic, and connected Stripe payment processing.",
    techStack: ["React Native", "Stripe SDK", "Google Maps API", "TypeScript", "Redux Toolkit", "iOS", "Android"],
    appStoreUrl: "https://apps.apple.com/us/app/savorconnect/id6736651275",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.savour_kitchen&hl=en",
  },
  {
    id: "vcrow",
    title: "VCROW",
    roleSubtitle: "Lead Full Stack Developer • EdTech & Parental Control",
    liveStoreType: "googlePlay",
    image: "/vcrow-screen.webp",
    summary: "Comprehensive dual-portal education ecosystem connecting parents and schools with real-time academic charts, device restriction management, and curriculum question sets.",
    problem: "Parents lacked insight into their children's real-time academic performance and struggled to manage device screen time while encouraging educational quiz exercises.",
    solution: "Built a dual-portal mobile architecture where school tests and quizzes appear seamlessly on student devices, with parent analytics dashboards powered by Firestore.",
    challenges: "Creating performant interactive academic progress graphs that display smoothly across low-spec Android devices without memory leaks.",
    roleAndContribution: "Designed dual-role state management, built dynamic chart rendering components, and integrated Firebase Cloud messaging for parental alerts.",
    techStack: ["React Native", "Firebase", "Performance Analytics", "Payment Gateway", "Redux Toolkit", "Android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.vcrow_edu",
  },
];

console.log(`Prerendering static HTML for ${projects.length} project routes...`);

for (const project of projects) {
  const projectDir = path.join(distDir, "projects", project.id);
  fs.mkdirSync(projectDir, { recursive: true });

  const projectUrl = `https://m-saad-portfolio-six.vercel.app/projects/${project.id}`;
  const pageTitle = `${project.title} — React Native & Mobile App Case Study | Muhammad Saad`;
  const metaDescription = `${project.title} Case Study: ${project.summary}`;
  const ogImage = `https://m-saad-portfolio-six.vercel.app${project.image}`;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://m-saad-portfolio-six.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://m-saad-portfolio-six.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": projectUrl
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "operatingSystem": project.liveStoreType === "appStore" ? "iOS" : project.liveStoreType === "googlePlay" ? "Android" : "iOS, Android",
    "applicationCategory": "MobileApplication",
    "description": project.summary,
    "author": {
      "@type": "Person",
      "name": "Muhammad Saad",
      "url": "https://m-saad-portfolio-six.vercel.app/"
    },
    "url": projectUrl,
    ...(project.appStoreUrl && { "downloadUrl": project.appStoreUrl }),
    ...(project.playStoreUrl && { "downloadUrl": project.playStoreUrl })
  };

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${pageTitle}</title>`);

  // Replace Description
  html = html.replace(
    /<meta name="description"\s+content=".*?" \/>/s,
    `<meta name="description" content="${metaDescription}" />`
  );

  // Replace Canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/s,
    `<link rel="canonical" href="${projectUrl}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/s,
    `<meta property="og:title" content="${pageTitle}" />`
  );
  html = html.replace(
    /<meta property="og:description"\s+content=".*?" \/>/s,
    `<meta property="og:description" content="${metaDescription}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/s,
    `<meta property="og:url" content="${projectUrl}" />`
  );
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/s,
    `<meta property="og:image" content="${ogImage}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/s,
    `<meta name="twitter:title" content="${pageTitle}" />`
  );
  html = html.replace(
    /<meta name="twitter:description"\s+content=".*?" \/>/s,
    `<meta name="twitter:description" content="${metaDescription}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/s,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  // Injected schemas
  const injectedJsonLd = `
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbsSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(softwareSchema, null, 2)}
  </script>
  `;
  html = html.replace("</head>", `${injectedJsonLd}</head>`);

  // Replace #root crawler content with project detail semantic HTML
  const preRenderedContent = `
  <div id="root">
    <header style="padding: 1rem; text-align: center;">
      <nav>
        <a href="/">← Return to Muhammad Saad Portfolio</a> |
        <a href="/#projects">All Shipped Apps</a> |
        <a href="/#contact">Contact</a>
      </nav>
    </header>

    <article style="max-width: 900px; margin: 0 auto; padding: 2rem 1rem;">
      <nav aria-label="Breadcrumb">
        <p><a href="/">Home</a> / <a href="/#projects">Projects</a> / <strong>${project.title}</strong></p>
      </nav>

      <h1>${project.title} — ${project.roleSubtitle}</h1>
      <p style="font-size: 1.2rem; color: #94a3b8;">${project.summary}</p>

      <section>
        <h2>The Challenge &amp; Problem</h2>
        <p>${project.problem}</p>
      </section>

      <section>
        <h2>Engineered Solution &amp; Architecture</h2>
        <p>${project.solution}</p>
      </section>

      <section>
        <h2>Technical Challenges Solved</h2>
        <p>${project.challenges}</p>
      </section>

      <section>
        <h2>My Role &amp; Contribution</h2>
        <p>${project.roleAndContribution}</p>
      </section>

      <section>
        <h2>Technologies &amp; Frameworks Used</h2>
        <ul>
          ${project.techStack.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </section>

      <section>
        <h2>Store &amp; Platform Availability</h2>
        <p>
          ${project.appStoreUrl ? `<a href="${project.appStoreUrl}" target="_blank">Apple App Store</a> ` : ""}
          ${project.playStoreUrl ? `<a href="${project.playStoreUrl}" target="_blank">Google Play Store</a> ` : ""}
          ${project.webUrl ? `<a href="${project.webUrl}" target="_blank">Live Web Application</a>` : ""}
        </p>
      </section>

      <section style="margin-top: 2rem; padding: 1.5rem; background: #0c1222; border: 1px solid #06b6d4; border-radius: 12px;">
        <h3>Need a Similar Mobile Application Engineered?</h3>
        <p>Get in touch directly with Muhammad Saad for React Native and Flutter mobile development:</p>
        <p>
          <a href="https://wa.me/923346664252">Discuss on WhatsApp (+92 334 6664252)</a> |
          <a href="mailto:msaadi252gb@gmail.com">Send Email (msaadi252gb@gmail.com)</a>
        </p>
      </section>
    </article>
  </div>`;

  html = html.replace(/<div id="root">.*?<\/div>\s*<noscript>/s, `${preRenderedContent}\n  <noscript>`);

  fs.writeFileSync(path.join(projectDir, "index.html"), html, "utf-8");
}

console.log("Successfully generated prerendered static pages for all projects.");

