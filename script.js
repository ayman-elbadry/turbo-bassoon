/* ============================================================
   TAOUFIK MODRIK PORTFOLIO — JavaScript
   Animations, Navigation, Scroll Effects, Form Handling
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== PAGE LOADER ====================
    const loader = document.getElementById('page-loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1200);
    });
    // Fallback: hide loader after 3 seconds regardless
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 3000);


    // ==================== NAVBAR SCROLL EFFECT ====================
    const navbar = document.getElementById('main-nav');
    const backToTop = document.getElementById('back-to-top');
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        lastScroll = scrollY;
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

    // Close mobile menu on link click
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
    }, {
        threshold: 0.3,
    });

    skillFills.forEach(fill => {
        skillObserver.observe(fill);
    });


    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const subject = document.getElementById('form-subject').value.trim();
        const message = document.getElementById('form-message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            showFormFeedback('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormFeedback('Veuillez entrer une adresse email valide.', 'error');
            return;
        }

        // Simulate sending
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="ph ph-spinner"></i> <span>Envoi en cours...</span>';
        submitBtn.querySelector('.ph-spinner').style.animation = 'loaderRotate 1s linear infinite';

        setTimeout(() => {
            showFormFeedback('Message envoyé avec succès ! Jazak Allah Khairan. 🤲', 'success');
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="ph ph-paper-plane-tilt"></i> <span>Envoyer le message</span>';
        }, 2000);
    });

    function showFormFeedback(message, type) {
        // Remove existing feedback
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

        // Auto-remove after 5 seconds
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
    const heroSection = document.querySelector('.hero-section');
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
    const greeting = document.querySelector('.hero-greeting');
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

        // Start typing after loader
        setTimeout(typeGreeting, 1600);
    }


    // ==================== COUNTER ANIMATION FOR STATS ====================
    const counters = document.querySelectorAll('.stat-value');
    // Just in case we want numeric counters in the future
    

    // ==================== NAVBAR LINK HOVER RIPPLE ====================
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', function(e) {
            this.style.transition = 'all 0.3s ease';
        });
    });


    // ==================== FORM INPUT FLOAT LABELS ====================
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
