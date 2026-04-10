/* ============================================================
   TAOUFIK MOUDRIK PORTFOLIO — JavaScript
   i18n, Animations, Navigation, Scroll Effects, Form Handling
   ============================================================ */

// ==================== TRANSLATIONS ====================
const translations = {
    fr: {
        // Nav
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.skills": "Compétences",
        "nav.projects": "Projets",
        "nav.contact": "Contact",
        // Hero
        "hero.badge": "Bismillah — Au nom de Dieu",
        "hero.greeting": "Salam, je suis",
        "hero.subtitle_pre": "Élève Ingénieur en",
        "hero.subtitle_highlight": "Mécatronique et Systèmes Intelligents",
        "hero.quote": "« Celui qui emprunte un chemin à la recherche du savoir, Allah lui facilite un chemin vers le Paradis. »",
        "hero.quote_source": "Hadith (Muslim)",
        "hero.cta_projects": "Voir mes projets",
        "hero.cta_contact": "Me contacter",
        "hero.scroll": "Défiler",
        // About
        "about.tag": "Présentation",
        "about.title_pre": "À propos de",
        "about.title_highlight": "moi",
        "about.lead": "Passionné par la <strong>conception de systèmes complexes</strong> alliant mécanique, électronique et informatique, je suis convaincu que l'innovation technologique peut transformer positivement notre monde.",
        "about.p1": "En tant qu'élève ingénieur en <strong>Génie Mécatronique et Systèmes Intelligents</strong> à l'ENSA Safi, je développe des compétences à la croisée de la robotique, de l'intelligence artificielle et des systèmes embarqués.",
        "about.p2": "Ma volonté est d'utiliser la technologie — qu'il s'agisse des <strong>énergies renouvelables</strong>, des <strong>systèmes intelligents</strong> ou de l'<strong>automatisation</strong> — de manière <em>éthique et utile</em>, au service de la communauté et dans le respect des valeurs qui guident mon parcours.",
        "about.stat1_label": "Formation d'Ingénieur",
        "about.stat2_value": "Mécatronique",
        "about.stat2_label": "Spécialisation",
        "about.stat3_value": "IA & Robotique",
        "about.stat3_label": "Domaines de passion",
        "about.stat4_value": "Éthique",
        "about.stat4_label": "Technologie responsable",
        // Skills
        "skills.tag": "Expertise",
        "skills.title_pre": "Compétences",
        "skills.title_highlight": "Techniques",
        "skills.cat1_title": "Informatique & IA",
        "skills.cat2_title": "Électronique & Embarqué",
        "skills.cat3_title": "Mécanique & Automatisation",
        "skills.ai": "Intelligence Artificielle",
        "skills.iot": "Internet des Objets (IoT)",
        "skills.embedded": "Informatique Embarquée",
        "skills.micro": "Microcontrôleurs",
        "skills.signal": "Traitement du Signal",
        "skills.sensors": "Capteurs Intelligents",
        "skills.mech_design": "Conception Mécanique",
        "skills.robotics": "Robotique",
        "skills.control": "Systèmes Asservis",
        // Projects
        "projects.tag": "Réalisations",
        "projects.title_pre": "Mes",
        "projects.title_highlight": "Projets",
        "projects.subtitle": "Des projets qui reflètent ma passion pour l'innovation et l'ingénierie.",
        "projects.p1_title": "Méthodes d'Optimisation en IA",
        "projects.p1_desc": "Étude et implémentation des méthodes d'optimisation appliquées à l'intelligence artificielle : descente de gradient, algorithmes évolutionnaires, optimisation par essaim de particules (PSO) et recherche de minima globaux dans les réseaux de neurones.",
        "projects.p2_title": "Tests Statistiques et Applications",
        "projects.p2_desc": "Étude approfondie des tests statistiques (T-test, Chi², ANOVA, Kolmogorov-Smirnov) et de leurs applications pratiques en ingénierie et en analyse de données. Implémentation de simulations et de validations sur des jeux de données réels.",
        "projects.p3_title": "Les Processus Stochastiques",
        "projects.p3_desc": "Modélisation et simulation de processus stochastiques : chaînes de Markov, processus de Poisson, mouvement brownien et files d'attente. Applications à la modélisation de systèmes aléatoires en ingénierie et en finance.",
        "projects.p4_title": "Contrôle Optimal en IA",
        "projects.p4_desc": "Étude du contrôle optimal appliqué à l'intelligence artificielle : programmation dynamique, principe du maximum de Pontryagin, apprentissage par renforcement (Reinforcement Learning) et contrôle adaptatif de systèmes complexes.",
        "projects.p5_title": "Complexité NP & Problème du Voyageur de Commerce",
        "projects.p5_desc": "Analyse de la complexité des problèmes NP-difficiles avec le TSP (Travelling Salesman Problem) comme cas d'étude. Implémentation d'heuristiques et de métaheuristiques (recuit simulé, algorithmes génétiques) pour résoudre des instances complexes.",
        "projects.p6_title": "Le Problème P vs NP",
        "projects.p6_desc": "Étude théorique du problème fondamental P vs NP en informatique. Analyse des classes de complexité, des réductions polynomiales, de la NP-complétude et des implications pour la cryptographie et l'algorithmique moderne.",
        "projects.p7_title": "Le Problème 3-SAT",
        "projects.p7_desc": "Étude du problème de satisfaisabilité booléenne 3-SAT, l'un des premiers problèmes prouvés NP-complets (théorème de Cook-Levin). Implémentation de solveurs SAT et analyse de la transition de phase dans les instances aléatoires.",
        // Contact
        "contact.tag": "Communication",
        "contact.title_pre": "Me",
        "contact.title_highlight": "Contacter",
        "contact.info_title": "Restons en contact",
        "contact.info_text": "N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger autour de l'ingénierie et de l'innovation.",
        "contact.location_label": "Localisation",
        "contact.country": "Maroc",
        "contact.closing": "N'hésitez pas à me contacter.<br><em>Paix sur vous.</em>",
        "contact.form_name": "Nom complet",
        "contact.form_name_ph": "Votre nom",
        "contact.form_email": "Adresse email",
        "contact.form_email_ph": "votre@email.com",
        "contact.form_subject": "Sujet",
        "contact.form_subject_ph": "Sujet de votre message",
        "contact.form_message_ph": "Votre message...",
        "contact.form_submit": "Envoyer le message",
        "contact.form_sending": "Envoi en cours...",
        "contact.form_success": "Message envoyé avec succès ! Jazak Allah Khairan. 🤲",
        "contact.form_error": "Veuillez remplir tous les champs obligatoires.",
        "contact.form_email_error": "Veuillez entrer une adresse email valide.",
        // Footer
        "footer.tagline": "Élève Ingénieur en Mécatronique — ENSA Safi",
        "footer.rights": "Tous droits réservés.",
        "footer.dua": "Mon Seigneur, augmente ma science",
    },

    en: {
        // Nav
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        // Hero
        "hero.badge": "Bismillah — In the name of God",
        "hero.greeting": "Salam, I am",
        "hero.subtitle_pre": "Engineering Student in",
        "hero.subtitle_highlight": "Mechatronics & Intelligent Systems",
        "hero.quote": "\"Whoever takes a path in search of knowledge, Allah makes a path to Paradise easy for him.\"",
        "hero.quote_source": "Hadith (Muslim)",
        "hero.cta_projects": "View my projects",
        "hero.cta_contact": "Contact me",
        "hero.scroll": "Scroll",
        // About
        "about.tag": "Introduction",
        "about.title_pre": "About",
        "about.title_highlight": "me",
        "about.lead": "Passionate about the <strong>design of complex systems</strong> combining mechanics, electronics and computer science, I am convinced that technological innovation can positively transform our world.",
        "about.p1": "As an engineering student in <strong>Mechatronics and Intelligent Systems</strong> at ENSA Safi, I develop skills at the crossroads of robotics, artificial intelligence and embedded systems.",
        "about.p2": "My goal is to use technology — whether <strong>renewable energy</strong>, <strong>intelligent systems</strong> or <strong>automation</strong> — in an <em>ethical and useful</em> way, serving the community and respecting the values that guide my path.",
        "about.stat1_label": "Engineering Degree",
        "about.stat2_value": "Mechatronics",
        "about.stat2_label": "Specialization",
        "about.stat3_value": "AI & Robotics",
        "about.stat3_label": "Areas of passion",
        "about.stat4_value": "Ethics",
        "about.stat4_label": "Responsible technology",
        // Skills
        "skills.tag": "Expertise",
        "skills.title_pre": "Technical",
        "skills.title_highlight": "Skills",
        "skills.cat1_title": "Computer Science & AI",
        "skills.cat2_title": "Electronics & Embedded",
        "skills.cat3_title": "Mechanics & Automation",
        "skills.ai": "Artificial Intelligence",
        "skills.iot": "Internet of Things (IoT)",
        "skills.embedded": "Embedded Computing",
        "skills.micro": "Microcontrollers",
        "skills.signal": "Signal Processing",
        "skills.sensors": "Smart Sensors",
        "skills.mech_design": "Mechanical Design",
        "skills.robotics": "Robotics",
        "skills.control": "Control Systems",
        // Projects
        "projects.tag": "Achievements",
        "projects.title_pre": "My",
        "projects.title_highlight": "Projects",
        "projects.subtitle": "Projects reflecting my passion for innovation and engineering.",
        "projects.p1_title": "Optimization Methods in AI",
        "projects.p1_desc": "Study and implementation of optimization methods applied to artificial intelligence: gradient descent, evolutionary algorithms, particle swarm optimization (PSO) and global minima search in neural networks.",
        "projects.p2_title": "Statistical Tests & Applications",
        "projects.p2_desc": "In-depth study of statistical tests (T-test, Chi², ANOVA, Kolmogorov-Smirnov) and their practical applications in engineering and data analysis. Implementation of simulations and validations on real datasets.",
        "projects.p3_title": "Stochastic Processes",
        "projects.p3_desc": "Modeling and simulation of stochastic processes: Markov chains, Poisson processes, Brownian motion and queuing theory. Applications to modeling random systems in engineering and finance.",
        "projects.p4_title": "Optimal Control in AI",
        "projects.p4_desc": "Study of optimal control applied to artificial intelligence: dynamic programming, Pontryagin's maximum principle, Reinforcement Learning and adaptive control of complex systems.",
        "projects.p5_title": "NP Complexity & Travelling Salesman Problem",
        "projects.p5_desc": "Analysis of NP-hard problem complexity with the TSP (Travelling Salesman Problem) as a case study. Implementation of heuristics and metaheuristics (simulated annealing, genetic algorithms) to solve complex instances.",
        "projects.p6_title": "The P vs NP Problem",
        "projects.p6_desc": "Theoretical study of the fundamental P vs NP problem in computer science. Analysis of complexity classes, polynomial reductions, NP-completeness and implications for cryptography and modern algorithms.",
        "projects.p7_title": "The 3-SAT Problem",
        "projects.p7_desc": "Study of the 3-SAT Boolean satisfiability problem, one of the first problems proven NP-complete (Cook-Levin theorem). Implementation of SAT solvers and phase transition analysis in random instances.",
        // Contact
        "contact.tag": "Communication",
        "contact.title_pre": "Contact",
        "contact.title_highlight": "Me",
        "contact.info_title": "Let's stay in touch",
        "contact.info_text": "Don't hesitate to contact me to discuss projects, opportunities or simply to exchange ideas about engineering and innovation.",
        "contact.location_label": "Location",
        "contact.country": "Morocco",
        "contact.closing": "Don't hesitate to reach out.<br><em>Peace be upon you.</em>",
        "contact.form_name": "Full name",
        "contact.form_name_ph": "Your name",
        "contact.form_email": "Email address",
        "contact.form_email_ph": "your@email.com",
        "contact.form_subject": "Subject",
        "contact.form_subject_ph": "Subject of your message",
        "contact.form_message_ph": "Your message...",
        "contact.form_submit": "Send message",
        "contact.form_sending": "Sending...",
        "contact.form_success": "Message sent successfully! Jazak Allah Khairan. 🤲",
        "contact.form_error": "Please fill in all required fields.",
        "contact.form_email_error": "Please enter a valid email address.",
        // Footer
        "footer.tagline": "Mechatronics Engineering Student — ENSA Safi",
        "footer.rights": "All rights reserved.",
        "footer.dua": "My Lord, increase my knowledge",
    },

    ar: {
        // Nav
        "nav.home": "الرئيسية",
        "nav.about": "من أنا",
        "nav.skills": "المهارات",
        "nav.projects": "المشاريع",
        "nav.contact": "اتصل بي",
        // Hero
        "hero.badge": "بسم الله الرحمن الرحيم",
        "hero.greeting": "السلام عليكم، أنا",
        "hero.subtitle_pre": "طالب هندسة في",
        "hero.subtitle_highlight": "الميكاترونيك والأنظمة الذكية",
        "hero.quote": "«مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ»",
        "hero.quote_source": "حديث (مسلم)",
        "hero.cta_projects": "عرض مشاريعي",
        "hero.cta_contact": "اتصل بي",
        "hero.scroll": "مرّر",
        // About
        "about.tag": "تقديم",
        "about.title_pre": "نبذة",
        "about.title_highlight": "عني",
        "about.lead": "شغوف بـ<strong>تصميم الأنظمة المعقدة</strong> التي تجمع بين الميكانيكا والإلكترونيات وعلوم الحاسوب، وأنا مقتنع بأن الابتكار التكنولوجي يمكن أن يُحدث تغييراً إيجابياً في عالمنا.",
        "about.p1": "بصفتي طالب هندسة في <strong>الميكاترونيك والأنظمة الذكية</strong> في المدرسة الوطنية للعلوم التطبيقية بآسفي، أطور مهاراتي في مجالات الروبوتيك والذكاء الاصطناعي والأنظمة المدمجة.",
        "about.p2": "هدفي هو استخدام التكنولوجيا — سواء <strong>الطاقات المتجددة</strong> أو <strong>الأنظمة الذكية</strong> أو <strong>الأتمتة</strong> — بطريقة <em>أخلاقية ومفيدة</em>، لخدمة المجتمع واحترام القيم التي توجه مساري.",
        "about.stat1_label": "تكوين هندسي",
        "about.stat2_value": "ميكاترونيك",
        "about.stat2_label": "التخصص",
        "about.stat3_value": "ذكاء اصطناعي وروبوتيك",
        "about.stat3_label": "مجالات الشغف",
        "about.stat4_value": "أخلاقيات",
        "about.stat4_label": "تكنولوجيا مسؤولة",
        // Skills
        "skills.tag": "الخبرات",
        "skills.title_pre": "المهارات",
        "skills.title_highlight": "التقنية",
        "skills.cat1_title": "المعلوميات والذكاء الاصطناعي",
        "skills.cat2_title": "الإلكترونيك والأنظمة المدمجة",
        "skills.cat3_title": "الميكانيكا والأتمتة",
        "skills.ai": "الذكاء الاصطناعي",
        "skills.iot": "إنترنت الأشياء (IoT)",
        "skills.embedded": "الحوسبة المدمجة",
        "skills.micro": "المتحكمات الدقيقة",
        "skills.signal": "معالجة الإشارات",
        "skills.sensors": "المستشعرات الذكية",
        "skills.mech_design": "التصميم الميكانيكي",
        "skills.robotics": "الروبوتيك",
        "skills.control": "أنظمة التحكم",
        // Projects
        "projects.tag": "الإنجازات",
        "projects.title_pre": "مشاريعي",
        "projects.title_highlight": "البحثية",
        "projects.subtitle": "مشاريع تعكس شغفي بالابتكار والهندسة.",
        "projects.p1_title": "طرق التحسين في الذكاء الاصطناعي",
        "projects.p1_desc": "دراسة وتنفيذ طرق التحسين المطبقة على الذكاء الاصطناعي: الانحدار التدريجي، الخوارزميات التطورية، تحسين سرب الجسيمات (PSO) والبحث عن الحد الأدنى العام في الشبكات العصبية.",
        "projects.p2_title": "الاختبارات الإحصائية وتطبيقاتها",
        "projects.p2_desc": "دراسة معمقة للاختبارات الإحصائية (T-test, Chi², ANOVA, Kolmogorov-Smirnov) وتطبيقاتها العملية في الهندسة وتحليل البيانات مع تنفيذ المحاكاة والتحقق على مجموعات بيانات حقيقية.",
        "projects.p3_title": "العمليات العشوائية",
        "projects.p3_desc": "نمذجة ومحاكاة العمليات العشوائية: سلاسل ماركوف، عملية بواسون، الحركة البراونية ونظرية الطوابير. تطبيقات في نمذجة الأنظمة العشوائية في الهندسة والمالية.",
        "projects.p4_title": "التحكم الأمثل في الذكاء الاصطناعي",
        "projects.p4_desc": "دراسة التحكم الأمثل المطبق على الذكاء الاصطناعي: البرمجة الديناميكية، مبدأ بونترياجين الأقصى، التعلم بالتعزيز والتحكم التكيفي في الأنظمة المعقدة.",
        "projects.p5_title": "تعقيد NP ومسألة البائع المتجول",
        "projects.p5_desc": "تحليل تعقيد المسائل NP-الصعبة مع مسألة البائع المتجول (TSP) كدراسة حالة. تنفيذ الاستدلالات والاستدلالات الفوقية (التطويع المحاكي، الخوارزميات الجينية) لحل الحالات المعقدة.",
        "projects.p6_title": "مسألة P مقابل NP",
        "projects.p6_desc": "دراسة نظرية لمسألة P مقابل NP الأساسية في علوم الحاسوب. تحليل فئات التعقيد، الاختزالات متعددة الحدود، NP-الاكتمال والآثار المترتبة على التشفير والخوارزميات الحديثة.",
        "projects.p7_title": "مسألة 3-SAT",
        "projects.p7_desc": "دراسة مسألة قابلية الإشباع البوليانية 3-SAT، إحدى أولى المسائل التي ثبتت NP-كاملة (نظرية كوك-ليفين). تنفيذ حلّالات SAT وتحليل انتقال الطور في الحالات العشوائية.",
        // Contact
        "contact.tag": "التواصل",
        "contact.title_pre": "تواصل",
        "contact.title_highlight": "معي",
        "contact.info_title": "لنبقَ على تواصل",
        "contact.info_text": "لا تتردد في التواصل معي لمناقشة المشاريع أو الفرص أو ببساطة لتبادل الأفكار حول الهندسة والابتكار.",
        "contact.location_label": "الموقع",
        "contact.country": "المغرب",
        "contact.closing": "لا تتردد في التواصل معي.<br><em>السلام عليكم ورحمة الله.</em>",
        "contact.form_name": "الاسم الكامل",
        "contact.form_name_ph": "اسمك",
        "contact.form_email": "البريد الإلكتروني",
        "contact.form_email_ph": "بريدك@email.com",
        "contact.form_subject": "الموضوع",
        "contact.form_subject_ph": "موضوع رسالتك",
        "contact.form_message_ph": "رسالتك...",
        "contact.form_submit": "إرسال الرسالة",
        "contact.form_sending": "جاري الإرسال...",
        "contact.form_success": "تم إرسال الرسالة بنجاح! جزاك الله خيراً. 🤲",
        "contact.form_error": "يرجى ملء جميع الحقول المطلوبة.",
        "contact.form_email_error": "يرجى إدخال بريد إلكتروني صالح.",
        // Footer
        "footer.tagline": "طالب هندسة الميكاترونيك — ENSA آسفي",
        "footer.rights": "جميع الحقوق محفوظة.",
        "footer.dua": "ربّ زدني علماً",
    }
};

// ==================== i18n ENGINE ====================
let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    const t = translations[lang];
    if (!t) return;

    // Set direction
    const isRTL = lang === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Update all data-i18n elements (text content)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update all data-i18n-html elements (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // Update language switcher UI
    const langFlags = { fr: '🇫🇷', en: '🇬🇧', ar: '🇸🇦' };
    const langCodes = { fr: 'FR', en: 'EN', ar: 'AR' };
    const langCurrentEl = document.getElementById('lang-current');
    if (langCurrentEl) {
        langCurrentEl.querySelector('.lang-flag').textContent = langFlags[lang];
        langCurrentEl.querySelector('.lang-code').textContent = langCodes[lang];
    }

    // Highlight active language option
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    // Update page title
    const titles = {
        fr: 'Taoufik Moudrik — Élève Ingénieur en Mécatronique',
        en: 'Taoufik Moudrik — Mechatronics Engineering Student',
        ar: 'توفيق مودريك — طالب هندسة الميكاترونيك'
    };
    document.title = titles[lang] || titles.fr;
}


// ==================== MAIN APP ====================
document.addEventListener('DOMContentLoaded', () => {

    // ==================== PAGE LOADER ====================
    const loader = document.getElementById('page-loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1200);
    });
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);


    // ==================== LANGUAGE SWITCHER ====================
    const langSwitcher = document.getElementById('lang-switcher');
    const langCurrentBtn = document.getElementById('lang-current');
    const langDropdown = document.getElementById('lang-dropdown');

    // Toggle dropdown
    langCurrentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
    });

    // Select language
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            setLanguage(lang);
            langSwitcher.classList.remove('open');
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
        }
    });

    // Apply saved language on load
    setLanguage(currentLang);


    // ==================== NAVBAR SCROLL EFFECT ====================
    const navbar = document.getElementById('main-nav');
    const backToTop = document.getElementById('back-to-top');

    function handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });


    // ==================== ACTIVE NAV LINK ON SCROLL ====================
    const sections = document.querySelectorAll('.section, .hero-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });


    // ==================== MOBILE NAVIGATION ====================
    const navToggle = document.getElementById('nav-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
    });

    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });


    // ==================== BACK TO TOP ====================
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // ==================== SCROLL ANIMATIONS ====================
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1,
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseInt(el.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    el.classList.add('animated');
                }, delay);
                animationObserver.unobserve(el);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });


    // ==================== SKILL BAR ANIMATION ====================
    const skillFills = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width');
                setTimeout(() => {
                    fill.style.width = width + '%';
                }, 300);
                skillObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(fill => {
        skillObserver.observe(fill);
    });


    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const t = translations[currentLang];
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const message = document.getElementById('form-message').value.trim();

        if (!name || !email || !message) {
            showFormFeedback(t['contact.form_error'], 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormFeedback(t['contact.form_email_error'], 'error');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="ph ph-spinner" style="animation: loaderRotate 1s linear infinite"></i> <span>${t['contact.form_sending']}</span>`;

        setTimeout(() => {
            showFormFeedback(t['contact.form_success'], 'success');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="ph ph-paper-plane-tilt"></i> <span>${t['contact.form_submit']}</span>`;
        }, 2000);
    });

    function showFormFeedback(message, type) {
        const existing = document.querySelector('.form-feedback');
        if (existing) existing.remove();

        const feedback = document.createElement('div');
        feedback.className = `form-feedback form-feedback-${type}`;
        feedback.innerHTML = `
            <i class="ph ${type === 'success' ? 'ph-check-circle' : 'ph-warning-circle'}"></i>
            <span>${message}</span>
        `;
        feedback.style.cssText = `
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 20px;
            border-radius: 12px;
            font-size: 0.88rem;
            font-weight: 500;
            margin-top: 16px;
            animation: feedbackSlide 0.4s ease;
            background: ${type === 'success' ? 'rgba(10, 123, 90, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
            color: ${type === 'success' ? '#0A7B5A' : '#DC3545'};
            border: 1px solid ${type === 'success' ? 'rgba(10, 123, 90, 0.2)' : 'rgba(220, 53, 69, 0.2)'};
        `;

        contactForm.appendChild(feedback);

        setTimeout(() => {
            feedback.style.opacity = '0';
            feedback.style.transform = 'translateY(-10px)';
            feedback.style.transition = 'all 0.3s ease';
            setTimeout(() => feedback.remove(), 300);
        }, 5000);
    }

    // Add feedback animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes feedbackSlide {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);


    // ==================== PARALLAX EFFECT ON HERO ====================
    const heroFloats = document.querySelectorAll('.hero-float');

    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return;

        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        heroFloats.forEach((float, index) => {
            const speed = (index + 1) * 15;
            const x = mouseX * speed;
            const y = mouseY * speed;
            float.style.transform = `translate(${x}px, ${y}px)`;
        });
    });


    // ==================== TYPED EFFECT ON HERO GREETING ====================
    const greeting = document.getElementById('hero-greeting');
    if (greeting) {
        const text = greeting.textContent;
        greeting.textContent = '';
        greeting.style.opacity = '1';

        let i = 0;
        function typeGreeting() {
            if (i < text.length) {
                greeting.textContent += text.charAt(i);
                i++;
                setTimeout(typeGreeting, 80);
            }
        }

        setTimeout(typeGreeting, 1600);
    }


    // ==================== FORM INPUT FOCUS ====================
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('focused');
        });
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.closest('.form-group').classList.remove('focused');
            }
        });
    });

});
