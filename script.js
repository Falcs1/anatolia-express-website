// Anatolia Express - Interactive Website Script with Working Translations

// Translation data
const translations = {
    en: {
        // Loading Screen
        loading_text: "Loading...",
        
        // Navigation
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_achievements: "Achievements", 
        nav_testimonials: "Testimonials",
        nav_contact: "CONTACT US",
        
        // Header
        header_tagline: "Professional Global Consulting",
        
        // Hero section
        hero_badge: "Trusted Since 2020",
        hero_title: "Leading Global<br>Consulting Solutions<br>for Your Business",
        hero_subtitle: "Empowering businesses across the Balkans and Europe with strategic consulting services that drive growth, ensure compliance, and unlock global opportunities.",
        hero_cta_primary: "Contact Us",
        hero_cta_secondary: "Explore Services",
        hero_feature_1: "Expert Consultants",
        hero_feature_2: "Proven Track Record", 
        hero_feature_3: "24/7 Support",
        
        // Statistics
        stat_clients: "Satisfied Clients",
        stat_success: "Success Rate",
        stat_countries: "Countries Served",
        stat_experience: "Years Experience",
        
        // About section
        about_badge: "About Anatolia Express",
        about_title: "Your Trusted Global Consulting Partner",
        about_subtitle: "Bridging businesses across the Balkans and Europe with strategic consulting excellence",
        about_feature_1_title: "Excellence in Service",
        about_feature_1_desc: "We deliver exceptional consulting services with a focus on quality, reliability, and measurable results for our clients.",
        about_feature_2_title: "Expert Team",
        about_feature_2_desc: "Our team consists of seasoned professionals with extensive experience in their respective fields and deep market knowledge.",
        about_feature_3_title: "Proven Results",
        about_feature_3_desc: "We have a track record of helping businesses achieve their goals through strategic consulting and innovative solutions.",
        
        // Services section
        services_badge: "Our Expertise",
        services_title: "Professional Consulting Services",
        services_subtitle: "Comprehensive solutions tailored to drive your business success across global markets",
        service_popular: "Most Popular",
        service_hr_title: "Human Resources Consulting",
        service_hr_desc: "Strategic talent acquisition, workforce planning, and HR optimization solutions to build high-performing teams.",
        service_hr_feature_1: "Talent Acquisition & Recruitment",
        service_hr_feature_2: "Performance Management Systems",
        service_hr_feature_3: "Employee Training & Development",
        service_hr_feature_4: "Compensation & Benefits Strategy",
        service_legal_title: "Legal Consulting",
        service_legal_desc: "Expert legal guidance for business operations, compliance, and strategic legal planning across jurisdictions.",
        service_legal_feature_1: "Corporate Law & Governance",
        service_legal_feature_2: "Contract Negotiation & Review",
        service_legal_feature_3: "Regulatory Compliance",
        service_legal_feature_4: "International Business Law",
        service_finance_title: "Financial Consulting", 
        service_finance_desc: "Strategic financial planning, analysis, and advisory services to optimize your business financial performance.",
        service_finance_feature_1: "Financial Planning & Analysis",
        service_finance_feature_2: "Investment Strategy Advisory",
        service_finance_feature_3: "Risk Management Solutions",
        service_finance_feature_4: "Mergers & Acquisitions Support",
        service_global_title: "Global Business Solutions",
        service_global_desc: "International market entry strategies, cross-border partnerships, and global expansion consulting services.",
        service_global_feature_1: "Market Entry Strategies",
        service_global_feature_2: "International Partnerships",
        service_global_feature_3: "Cross-Border Transactions",
        service_global_feature_4: "Cultural Integration Support",
        service_learn_more: "Learn More",
        
        // Global section
        global_title: "GLOBAL SOLUTIONS",
        global_text: "Anatolia Express develops strategic<br>partnerships to provide solutions<br>in global markets.",
        
        // Testimonials section
        testimonials_badge: "Client Success Stories",
        testimonials_title: "What Our Clients Say",
        testimonials_subtitle: "Trusted by businesses across the Balkans and Europe",
        testimonial_1_text: "Anatolia Express transformed our HR processes completely. Their expertise in talent acquisition helped us build a world-class team that drove our company to new heights.",
        testimonial_1_name: "Marko Petrović",
        testimonial_1_title: "CEO, TechVision Solutions",
        testimonial_2_text: "The legal consulting services provided by Anatolia Express were exceptional. They guided us through complex international regulations with professionalism and expertise.",
        testimonial_2_name: "Sarah Mitchell",
        testimonial_2_title: "Legal Director, Global Ventures Ltd",
        testimonial_3_text: "Their financial consulting expertise helped us optimize our operations and achieve 40% cost reduction while maintaining quality. Highly recommended!",
        testimonial_3_name: "Ahmed Krasniqi",
        testimonial_3_title: "CFO, Balkan Industries",
        client_1: "TechVision",
        client_2: "Global Ventures",
        client_3: "Balkan Industries",
        client_4: "EuroTrade",
        client_5: "Innovation Hub",
        
        // Contact
        contact_badge: "Get In Touch",
        contact_title: "Start Your Business Transformation",
        contact_subtitle: "Ready to take your business to the next level? Our expert consultants are here to help you succeed.",
        contact_office: "Head Office",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_hours: "Business Hours",
        contact_weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
        contact_weekend: "Sat: 10:00 AM - 2:00 PM",
        form_title: "Contact Us",
        form_subtitle: "Fill out the form below and we'll get back to you within 24 hours",
        form_name_label: "Full Name *",
        form_email_label: "Email Address *",
        form_phone_label: "Phone Number",
        form_message_label: "Message *",
        form_name: "Your Full Name",
        form_email: "your.email@example.com", 
        form_phone: "+383 XX XXX XXX",
        form_message: "Tell us how we can help you...",
        form_privacy: "I agree to the privacy policy and terms of service *",
        form_submit: "Send Message",
        select_service: "Select Service",
        service_hr: "Human Resources Consulting",
        service_legal: "Legal Consulting",
        service_finance: "Financial Consulting", 
        service_global: "Global Business Solutions",
        service_multiple: "Multiple Services",
        
        // Footer
        footer_description: "Your trusted global consulting partner, bridging businesses from the Balkans to Europe with strategic excellence and proven results.",
        footer_cert_1: "ISO 9001:2015",
        footer_cert_2: "Data Protected",
        footer_services: "Our Services",
        footer_quick_links: "Quick Links",
        footer_about: "About Us",
        footer_testimonials: "Testimonials",
        footer_careers: "Careers",
        footer_blog: "Blog",
        footer_privacy: "Privacy Policy",
        footer_contact_title: "Contact Info",
        footer_terms: "Terms of Service",
        footer_cookies: "Cookie Policy",
        footer_rights: "All rights reserved.",
        
        // WhatsApp
        whatsapp_text: "Chat with us"
    },
    
    al: {
        // Loading Screen
        loading_text: "Duke u ngarkuar...",
        
        // Navigation
        nav_home: "Kryefaqja",
        nav_about: "Rreth Nesh",
        nav_services: "Shërbimet",
        nav_achievements: "Arritjet",
        nav_testimonials: "Dëshmi",
        nav_contact: "NA KONTAKTONI",
        
        // Header
        header_tagline: "Këshillim Global Profesional",
        
        // Hero section
        hero_badge: "I Besueshëm që nga 2020",
        hero_title: "Udhëheqës Global<br>Zgjidhje Këshillimi<br>për Biznesin Tuaj",
        hero_subtitle: "Duke fuqizuar bizneset në Ballkan dhe Evropë me shërbime këshillimi strategjik që nxisin rritjen, sigurojnë përputhshmërinë dhe hapin mundësi globale.",
        hero_cta_primary: "Na Kontaktoni",
        hero_cta_secondary: "Eksploro Shërbimet",
        hero_feature_1: "Këshillues Ekspertë",
        hero_feature_2: "Rekord i Vërtetuar",
        hero_feature_3: "Mbështetje 24/7",
        
        // Statistics
        stat_clients: "Klientë të Kënaqur",
        stat_success: "Shkalla e Suksesit",
        stat_countries: "Vende të Shërbyera",
        stat_experience: "Vite Përvojë",
        
        // About section
        about_badge: "Rreth Anatolia Express",
        about_title: "Partneri Juaj i Besueshëm Global i Këshillimit",
        about_subtitle: "Duke lidhur bizneset në Ballkan dhe Evropë me përsosmëri strategjike këshillimi",
        about_feature_1_title: "Përsosmëri në Shërbim",
        about_feature_1_desc: "Ne ofrojmë shërbime këshillimi të jashtëzakonshme me fokus në cilësi, besueshmëri dhe rezultate të matshme për klientët tanë.",
        about_feature_2_title: "Ekip Ekspert",
        about_feature_2_desc: "Ekipi ynë përbëhet nga profesionistë të përvojshëm me përvojë të gjerë në fushat e tyre përkatëse dhe njohuri të thella të tregut.",
        about_feature_3_title: "Rezultate të Vërtetuara",
        about_feature_3_desc: "Ne kemi një histori të vërtetuar për të ndihmuar bizneset të arrijnë qëllimet e tyre përmes këshillimit strategjik dhe zgjidhjeve novatore.",
        
        // Services section
        services_badge: "Ekspertiza Jonë",
        services_title: "Shërbime Këshillimi Profesional",
        services_subtitle: "Zgjidhje gjithëpërfshirëse të personalizuara për të nxitur suksesin e biznesit tuaj në tregjet globale",
        service_popular: "Më i Popullarizuari",
        service_hr_title: "Këshillim Burimesh Njerëzore",
        service_hr_desc: "Fitimi strategjik i talenteve, planifikimi i fuqisë punëtore dhe zgjidhje optimizimi të BN për të ndërtuar ekipe me performancë të lartë.",
        service_hr_feature_1: "Fitimi i Talenteve dhe Rekrutimi",
        service_hr_feature_2: "Sisteme Menaxhimi të Performancës",
        service_hr_feature_3: "Trajnimi dhe Zhvillimi i Punonjësve",
        service_hr_feature_4: "Strategjia e Kompensimeve dhe Përfitimeve",
        service_legal_title: "Këshillim Ligjor",
        service_legal_desc: "Udhëzim ekspert ligjor për operacionet e biznesit, përputhshmërinë dhe planifikimin strategjik ligjor në juridiksione të ndryshme.",
        service_legal_feature_1: "E Drejta Korporative dhe Qeverisja",
        service_legal_feature_2: "Negocimi dhe Rishikimi i Kontratave",
        service_legal_feature_3: "Përputhshmëria Rregullatore",
        service_legal_feature_4: "E Drejta Ndërkombëtare e Biznesit",
        service_finance_title: "Këshillim Financiar",
        service_finance_desc: "Planifikimi strategjik financiar, analiza dhe shërbime këshilluese për të optimizuar performancën financiare të biznesit tuaj.",
        service_finance_feature_1: "Planifikimi dhe Analiza Financiare",
        service_finance_feature_2: "Këshillim Strategjie Investimi",
        service_finance_feature_3: "Zgjidhje Menaxhimi Rreziku",
        service_finance_feature_4: "Mbështetje Bashkimi dhe Blerje",
        service_global_title: "Zgjidhje Biznesi Global",
        service_global_desc: "Strategji hyrjeje në tregjet ndërkombëtare, partneritete ndërkufitare dhe shërbime këshillimi për zgjerimin global.",
        service_global_feature_1: "Strategji Hyrjeje në Treg",
        service_global_feature_2: "Partneritete Ndërkombëtare",
        service_global_feature_3: "Transaksione Ndërkufitare",
        service_global_feature_4: "Mbështetje Integrimi Kulturor",
        service_learn_more: "Mëso Më Shumë",
        
        // Global section
        global_title: "ZGJIDHJE GLOBALE",
        global_text: "Anatolia Express zhvillon partneritete<br>strategjike për të ofruar zgjidhje<br>në tregjet globale.",
        
        // Testimonials section
        testimonials_badge: "Histori Suksesi të Klientëve",
        testimonials_title: "Çfarë Thonë Klientët Tanë",
        testimonials_subtitle: "I besuar nga bizneset në Ballkan dhe Evropë",
        testimonial_1_text: "Anatolia Express transformoi plotësisht proceset tona të BN. Ekspertiza e tyre në fitimin e talenteve na ndihmoi të ndërtojmë një ekip me standarde botërore që e çoi kompaninë tonë në lartësi të reja.",
        testimonial_1_name: "Marko Petrović",
        testimonial_1_title: "CEO, TechVision Solutions",
        testimonial_2_text: "Shërbimet e këshillimit ligjor të ofruara nga Anatolia Express ishin të jashtëzakonshme. Ata na udhëzuan nëpër rregullore komplekse ndërkombëtare me profesionalizëm dhe ekspertizë.",
        testimonial_2_name: "Sarah Mitchell",
        testimonial_2_title: "Drejtore Ligjore, Global Ventures Ltd",
        testimonial_3_text: "Ekspertiza e tyre në këshillimin financiar na ndihmoi të optimizojmë operacionet tona dhe të arrijmë 40% reduktim kostoje duke ruajtur cilësinë. E rekomandoj shumë!",
        testimonial_3_name: "Ahmed Krasniqi",
        testimonial_3_title: "CFO, Balkan Industries",
        client_1: "TechVision",
        client_2: "Global Ventures",
        client_3: "Balkan Industries",
        client_4: "EuroTrade",
        client_5: "Innovation Hub",
        
        // Contact
        contact_badge: "Na Kontaktoni",
        contact_title: "Filloni Transformimin e Biznesit Tuaj",
        contact_subtitle: "Gati të çoni biznesin tuaj në nivelin tjetër? Këshilluesit tanë ekspertë janë këtu për të ndihmuar suksesin tuaj.",
        contact_office: "Zyra Kryesore",
        contact_phone: "Telefoni",
        contact_email: "Email-i",
        contact_hours: "Orët e Punës",
        contact_weekdays: "Hën - Pre: 09:00 - 18:00",
        contact_weekend: "Sht: 10:00 - 14:00",
        form_title: "Na Kontaktoni",
        form_subtitle: "Plotësoni formularin më poshtë dhe do t'ju përgjigjemi brenda 24 orëve",
        form_name_label: "Emri i Plotë *",
        form_email_label: "Adresa Email *",
        form_phone_label: "Numri i Telefonit",
        form_message_label: "Mesazhi *",
        form_name: "Emri Juaj i Plotë",
        form_email: "email.juaj@shembull.com",
        form_phone: "+383 XX XXX XXX",
        form_message: "Na tregoni se si mund t'ju ndihmojmë...",
        form_privacy: "Unë pajtohem me politikën e privatësisë dhe kushtet e shërbimit *",
        form_submit: "Dërgo Mesazhin",
        select_service: "Zgjidhni Shërbimin",
        service_hr: "Këshillim Burimesh Njerëzore",
        service_legal: "Këshillim Ligjor",
        service_finance: "Këshillim Financiar",
        service_global: "Zgjidhje Biznesi Global",
        service_multiple: "Shërbime të Shumta",
        
        // Footer
        footer_description: "Partneri juaj i besueshëm global i këshillimit, duke lidhur bizneset nga Ballkani në Evropë me përsosmëri strategjike dhe rezultate të vërtetuara.",
        footer_cert_1: "ISO 9001:2015",
        footer_cert_2: "Të Dhëna të Mbrojtura",
        footer_services: "Shërbimet Tona",
        footer_quick_links: "Lidhje të Shpejta",
        footer_about: "Rreth Nesh",
        footer_testimonials: "Dëshmi",
        footer_careers: "Karriera",
        footer_blog: "Blog",
        footer_privacy: "Politika e Privatësisë",
        footer_contact_title: "Informacioni i Kontaktit",
        footer_terms: "Kushtet e Shërbimit",
        footer_cookies: "Politika e Cookies",
        footer_rights: "Të gjitha të drejtat e rezervuara.",
        
        // WhatsApp
        whatsapp_text: "Bisedoni me ne"
    },
    
    tr: {
        // Loading Screen
        loading_text: "Yükleniyor...",
        
        // Navigation
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımızda",
        nav_services: "Hizmetlerimiz",
        nav_achievements: "Başarılarımız",
        nav_testimonials: "Müşteri Yorumları",
        nav_contact: "İLETİŞİM",
        
        // Header
        header_tagline: "Profesyonel Global Danışmanlık",
        
        // Hero section
        hero_badge: "2020'den Beri Güvenilir",
        hero_title: "İşiniz İçin Lider<br>Global Danışmanlık<br>Çözümleri",
        hero_subtitle: "Balkanlar ve Avrupa'daki işletmeleri büyüme sağlayan, uyumluluğu garanti eden ve küresel fırsatları açan stratejik danışmanlık hizmetleriyle güçlendiriyoruz.",
        hero_cta_primary: "İletişime Geç",
        hero_cta_secondary: "Hizmetleri Keşfet",
        hero_feature_1: "Uzman Danışmanlar",
        hero_feature_2: "Kanıtlanmış Başarı",
        hero_feature_3: "7/24 Destek",
        
        // Statistics
        stat_clients: "Memnun Müşteri",
        stat_success: "Başarı Oranı",
        stat_countries: "Hizmet Verilen Ülke",
        stat_experience: "Yıl Deneyim",
        
        // About section
        about_badge: "Anatolia Express Hakkında",
        about_title: "Güvenilir Global Danışmanlık Ortağınız",
        about_subtitle: "Balkanlar ve Avrupa'daki işletmeleri stratejik danışmanlık mükemmelliğiyle birleştiriyoruz",
        about_feature_1_title: "Hizmette Mükemmellik",
        about_feature_1_desc: "Müşterilerimiz için kalite, güvenilirlik ve ölçülebilir sonuçlara odaklanarak olağanüstü danışmanlık hizmetleri sunuyoruz.",
        about_feature_2_title: "Uzman Ekip",
        about_feature_2_desc: "Ekibimiz kendi alanlarında kapsamlı deneyime ve derin pazar bilgisine sahip deneyimli profesyonellerden oluşur.",
        about_feature_3_title: "Kanıtlanmış Sonuçlar",
        about_feature_3_desc: "Stratejik danışmanlık ve yenilikçi çözümlerle işletmelerin hedeflerine ulaşmalarına yardımcı olma konusunda kanıtlanmış bir geçmişimiz var.",
        
        // Services section
        services_badge: "Uzmanlığımız",
        services_title: "Profesyonel Danışmanlık Hizmetleri",
        services_subtitle: "Global pazarlarda işinizin başarısını artırmak için özel olarak tasarlanmış kapsamlı çözümler",
        service_popular: "En Popüler",
        service_hr_title: "İnsan Kaynakları Danışmanlığı",
        service_hr_desc: "Yüksek performanslı ekipler oluşturmak için stratejik yetenek kazanımı, işgücü planlaması ve İK optimizasyon çözümleri.",
        service_hr_feature_1: "Yetenek Kazanımı ve İşe Alım",
        service_hr_feature_2: "Performans Yönetim Sistemleri",
        service_hr_feature_3: "Çalışan Eğitimi ve Geliştirme",
        service_hr_feature_4: "Ücret ve Yan Haklar Stratejisi",
        service_legal_title: "Hukuk Danışmanlığı",
        service_legal_desc: "İş operasyonları, uyumluluk ve yargı alanları genelinde stratejik hukuki planlama için uzman hukuki rehberlik.",
        service_legal_feature_1: "Kurumsal Hukuk ve Yönetişim",
        service_legal_feature_2: "Sözleşme Müzakeresi ve İncelemesi",
        service_legal_feature_3: "Düzenleyici Uyumluluk",
        service_legal_feature_4: "Uluslararası İş Hukuku",
        service_finance_title: "Finansal Danışmanlık",
        service_finance_desc: "İşinizin finansal performansını optimize etmek için stratejik finansal planlama, analiz ve danışmanlık hizmetleri.",
        service_finance_feature_1: "Finansal Planlama ve Analiz",
        service_finance_feature_2: "Yatırım Stratejisi Danışmanlığı",
        service_finance_feature_3: "Risk Yönetimi Çözümleri",
        service_finance_feature_4: "Birleşme ve Satın Alma Desteği",
        service_global_title: "Global İş Çözümleri",
        service_global_desc: "Uluslararası pazar giriş stratejileri, sınır ötesi ortaklıklar ve global genişleme danışmanlık hizmetleri.",
        service_global_feature_1: "Pazar Giriş Stratejileri",
        service_global_feature_2: "Uluslararası Ortaklıklar",
        service_global_feature_3: "Sınır Ötesi İşlemler",
        service_global_feature_4: "Kültürel Entegrasyon Desteği",
        service_learn_more: "Daha Fazla Bilgi",
        
        // Global section
        global_title: "GLOBAL ÇÖZÜMLER",
        global_text: "Anatolia Express, stratejik ortaklıklar<br>geliştirerek global pazarlarda<br>çözümler sunar.",
        
        // Testimonials section
        testimonials_badge: "Müşteri Başarı Hikayeleri",
        testimonials_title: "Müşterilerimiz Ne Diyor",
        testimonials_subtitle: "Balkanlar ve Avrupa'daki işletmeler tarafından güvenilen",
        testimonial_1_text: "Anatolia Express İK süreçlerimizi tamamen dönüştürdü. Yetenek kazanımındaki uzmanlıkları, şirketimizi yeni zirvelere taşıyan dünya standartlarında bir ekip kurmamıza yardımcı oldu.",
        testimonial_1_name: "Marko Petrović",
        testimonial_1_title: "CEO, TechVision Solutions",
        testimonial_2_text: "Anatolia Express'in sağladığı hukuki danışmanlık hizmetleri olağanüstüydü. Karmaşık uluslararası düzenlemelerde bizi profesyonellik ve uzmanlıkla yönlendirdiler.",
        testimonial_2_name: "Sarah Mitchell",
        testimonial_2_title: "Hukuk Müdürü, Global Ventures Ltd",
        testimonial_3_text: "Finansal danışmanlık uzmanlıkları operasyonlarımızı optimize etmemize ve kaliteyi koruyarak %40 maliyet azalımı elde etmemize yardımcı oldu. Kesinlikle tavsiye ederim!",
        testimonial_3_name: "Ahmed Krasniqi",
        testimonial_3_title: "CFO, Balkan Industries",
        client_1: "TechVision",
        client_2: "Global Ventures",
        client_3: "Balkan Industries",
        client_4: "EuroTrade",
        client_5: "Innovation Hub",
        
        // Contact
        contact_badge: "İletişime Geçin",
        contact_title: "İş Dönüşümünüzü Başlatın",
        contact_subtitle: "İşinizi bir sonraki seviyeye taşımaya hazır mısınız? Uzman danışmanlarımız başarınız için burada.",
        contact_office: "Merkez Ofis",
        contact_phone: "Telefon",
        contact_email: "E-posta",
        contact_hours: "Çalışma Saatleri",
        contact_weekdays: "Pzt - Cum: 09:00 - 18:00",
        contact_weekend: "Cmt: 10:00 - 14:00",
        form_title: "Bizimle İletişime Geçin",
        form_subtitle: "Aşağıdaki formu doldurun, 24 saat içinde size geri döneceğiz",
        form_name_label: "Ad Soyad *",
        form_email_label: "E-posta Adresi *",
        form_phone_label: "Telefon Numarası",
        form_message_label: "Mesaj *",
        form_name: "Adınız Soyadınız",
        form_email: "ornek@email.com",
        form_phone: "+383 XX XXX XXX",
        form_message: "Size nasıl yardımcı olabileceğimizi bize bildirin...",
        form_privacy: "Gizlilik politikası ve hizmet şartlarını kabul ediyorum *",
        form_submit: "Mesaj Gönder",
        select_service: "Hizmet Seçiniz",
        service_hr: "İnsan Kaynakları Danışmanlığı",
        service_legal: "Hukuk Danışmanlığı",
        service_finance: "Finansal Danışmanlık",
        service_global: "Global İş Çözümleri",
        service_multiple: "Çoklu Hizmetler",
        
        // Footer
        footer_description: "Balkanlar'dan Avrupa'ya işletmeleri stratejik mükemmellik ve kanıtlanmış sonuçlarla birleştiren güvenilir global danışmanlık ortağınız.",
        footer_cert_1: "ISO 9001:2015",
        footer_cert_2: "Veri Korumalı",
        footer_services: "Hizmetlerimiz",
        footer_quick_links: "Hızlı Bağlantılar",
        footer_about: "Hakkımızda",
        footer_testimonials: "Müşteri Yorumları",
        footer_careers: "Kariyer",
        footer_blog: "Blog",
        footer_privacy: "Gizlilik Politikası",
        footer_contact_title: "İletişim Bilgileri",
        footer_terms: "Hizmet Şartları",
        footer_cookies: "Çerez Politikası",
        footer_rights: "Tüm hakları saklıdır.",
        
        // WhatsApp
        whatsapp_text: "Bizimle sohbet edin"
    }
};

// Current language
let currentLanguage = 'tr';

// Ensure page starts at top on load
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// Loading screen functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Ensure page starts at top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Ensure we're still at top after loading screen disappears
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 2000);
});

// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const flags = document.querySelectorAll('.flag');
    
    // Function to update translations
    function updateTranslations(language) {
        currentLanguage = language;
        
        // Update all elements with data-translate attribute
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language] && translations[language][key]) {
                if (element.tagName === 'INPUT') {
                    element.placeholder = translations[language][key];
                } else if (element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[language][key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[language][key];
                } else {
                    element.innerHTML = translations[language][key];
                }
            }
        });
        
        // Update active flag
        flags.forEach(flag => {
            flag.classList.remove('active');
            if (flag.getAttribute('data-lang') === language) {
                flag.classList.add('active');
            }
        });
        
        // Store language preference
        localStorage.setItem('preferredLanguage', language);
    }
    
    // Add click event listeners to flags
    flags.forEach(flag => {
        flag.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            updateTranslations(language);
        });
    });
    
    // Load saved language preference or default to Turkish
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    updateTranslations(savedLanguage);
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Header scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.consultation-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Create Gmail compose URL
            const emailSubject = encodeURIComponent(`New Contact Message from ${data.name || 'Website Visitor'}`);
            const emailBody = encodeURIComponent(`
New contact message from Anatolia Express website:

Name: ${data.name || 'Not provided'}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone || 'Not provided'}

Message:
${data.message || 'No message provided'}

Privacy Agreement: ${data.privacy ? 'Agreed' : 'Not agreed'}

---
This message was sent from the Anatolia Express website contact form.
            `);
            
            // Open Gmail compose window
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@expressanatolia.com&su=${emailSubject}&body=${emailBody}`;
            window.open(gmailUrl, '_blank');
            
            // Show success message based on current language
            const successMessages = {
                tr: 'Gmail açıldı! Mesajınızı göndermek için Gmail\'de "Gönder" butonuna tıklayın.',
                en: 'Gmail opened! Click "Send" in Gmail to send your message.',
                al: 'Gmail u hap! Klikoni "Dërgo" në Gmail për të dërguar mesazhin tuaj.'
            };
            
            // Show success message
            setTimeout(() => {
                alert(successMessages[currentLanguage] || successMessages.tr);
            }, 500);
            
            // Reset form
            this.reset();
        });
    }
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Touch device detection
document.addEventListener('DOMContentLoaded', function() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
        
        // Add touch feedback for flags
        const flags = document.querySelectorAll('.flag');
        flags.forEach(flag => {
            flag.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            flag.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 150);
            });
        });
    }
});