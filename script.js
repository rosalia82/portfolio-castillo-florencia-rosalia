/* ===== VARIABLES GLOBALES ===== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

/* ===== FUNCIONES DE NAVEGACIÓN ===== */
// Toggle del menú móvil
function toggleMobileMenu() {
    navMenu.classList.toggle('show-menu');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

// Cerrar menú móvil al hacer click en un enlace
function closeMobileMenu() {
    navMenu.classList.remove('show-menu');
    const icon = navToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
}

// Cambiar header al hacer scroll
function updateHeaderOnScroll() {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

// Activar enlace de navegación según la sección
function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

/* ===== FUNCIONES DE ANIMACIÓN ===== */
// Configuración del Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            
            setTimeout(() => {
                entry.target.classList.add('show');
            }, delay);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Inicializar animaciones
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    animatedElements.forEach(element => {
        const animationType = element.dataset.animate;
        element.classList.add('animate', animationType);
        observer.observe(element);
    });
}

// Animación de escritura para el título
function typeWriterEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/* ===== FUNCIONES DE INTERACTIVIDAD ===== */
// Smooth scroll para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                closeMobileMenu();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efectos hover para skills
function initSkillsInteraction() {
    const skillItems = document.querySelectorAll('.skill__item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05) rotateY(5deg)';
            
            const icon = this.querySelector('i');
            icon.style.animation = 'skillPulse 0.6s ease-in-out';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            
            const icon = this.querySelector('i');
            icon.style.animation = '';
        });
    });
}

// Efectos hover para tarjetas de contacto
function initContactCardsInteraction() {
    const contactCards = document.querySelectorAll('.info-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.info-card__icon');
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.info-card__icon');
            icon.style.transform = '';
        });
    });
}

// Agregar animación CSS para skills
function addSkillsAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes skillPulse {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.3) rotate(10deg); }
        }
    `;
    document.head.appendChild(style);
}

/* ===== MODAL DE PROYECTOS ===== */
const projectModal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');

// Datos de los proyectos
const projectsData = {
    'kinesiology': {
        title: 'Consultorio de Kinesiología y Fisioterapia',
        period: 'Enero 2025 – Julio 2025',
        description: 'Desarrollo integral de comunicación visual y estrategia digital para un consultorio de kinesiología y fisioterapia, enfocado en la educación y promoción de servicios de salud.',
        objectives: [
            'Crear una identidad visual profesional y confiable',
            'Desarrollar contenido educativo sobre kinesiología',
            'Implementar estrategia de redes sociales para el sector salud',
            'Producir material audiovisual para campañas educativas'
        ],
        results: [
            'Incremento del 150% en el alcance de redes sociales',
            'Mayor participación de pacientes en tratamientos preventivos',
            'Posicionamiento como referente educativo en el área',
            'Aumento del 40% en consultas mensuales'
        ],
        images: [
            'imagenes/proyectocon/Mesa de trabajo 1.jpg',
            'imagenes/proyectocon/Mesa de trabajo 2.jpg',
            'imagenes/proyectocon/Mesa de trabajo 3.jpg',
            'imagenes/proyectocon/Mesa de trabajo 4.jpg',
            'imagenes/proyectocon/Mesa de trabajo 5.jpg',
            'imagenes/proyectocon/Mesa de trabajo 6.jpg'
        ]
    },
    'ks-hogar': {
        title: 'KS Hogar',
        period: '2024',
        description: 'Desarrollo de identidad visual completa y gestión de redes sociales para una marca de mobiliario, enfocada en crear una presencia digital sólida y atractiva para el público objetivo.',
        objectives: [
            'Diseñar una identidad visual moderna y elegante',
            'Crear contenido visual consistente para redes sociales',
            'Gestionar la comunidad online de manera profesional',
            'Posicionar la marca en el sector de decoración'
        ],
        results: [
            'Crecimiento del 200% en seguidores de Instagram',
            'Mayor engagement con el público objetivo',
            'Incremento en consultas por productos específicos'
        ],
        images: [
            'imagenes/proyectoks/Mesa de trabajo 1.jpg',
            'imagenes/proyectoks/Mesa de trabajo 2.jpg',
            'imagenes/proyectoks/Mesa de trabajo 3.jpg',
            'imagenes/proyectoks/Mesa de trabajo 4.jpg',
            'imagenes/proyectoks/Mesa de trabajo 5.jpg'
        ]
    },
    'academic': {
        title: 'Proyecto Académico – Facultad',
        period: '2024',
        description: 'Proyecto académico desarrollado en la facultad: Jelly Ink, una aplicación móvil que combina funciones de red social visual (similar a VSCO) con un sistema de conexión entre personas (similar a Tinder), enfocada en artistas visuales. La app busca que pintores, fotógrafos, diseñadores y otros creativos puedan compartir su trabajo, inspirarse y colaborar en proyectos conjuntos. El desarrollo incluyó la creación del logo, la identidad visual y el prototipo de la interfaz.',
        objectives: [
            'Explorar el diseño de una plataforma que conecte artistas con intereses similares.',
            'Diseñar un espacio para exhibir portafolios visuales y recibir retroalimentación.',
            'Incentivar la creación conjunta de proyectos a través de herramientas de búsqueda de colaboradores.',
            'Aplicar principios de UX/UI en el diseño'
            ,
            'Crear la identidad visual y el logotipo que transmitan creatividad, conexión y fluidez.'
        ],
        results: [
            'Presentación de un prototipo funcional y visual de la app.',
            'Diseño completo de logo, identidad visual, paleta de colores e íconos.',
            'Elaboración de wireframes y mockups para la interfaz.',
            'Propuesta de campaña publicitaria con concepto creativo y piezas para distintos medios.'
        ],
        images: [
            'imagenes/proyectofac/Mesa de trabajo 1.jpg',
            'imagenes/proyectofac/Mesa de trabajo 2.jpg',
            'imagenes/proyectofac/Mesa de trabajo 3.jpg',
            'imagenes/proyectofac/Mesa de trabajo 4.jpg',
            'imagenes/proyectofac/Mesa de trabajo 5.jpg',
            'imagenes/proyectofac/Mesa de trabajo 6.jpg',
            'imagenes/proyectofac/Mesa de trabajo 7.jpg',
            'imagenes/proyectofac/Mesa de trabajo 8.jpg',
            'imagenes/proyectofac/Mesa de trabajo 9.jpg',
            'imagenes/proyectofac/Mesa de trabajo 10.jpg',
            'imagenes/proyectofac/Mesa de trabajo 11.jpg',
            'imagenes/proyectofac/Mesa de trabajo 12.jpg',
            'imagenes/proyectofac/Mesa de trabajo 13.jpg'
        ]
    }
};

// Abrir modal de proyecto
function openProject(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    modalBody.innerHTML = `
        <div class="project-detail">
            <div class="project-header">
                <h2 class="project-detail__title">${project.title}</h2>
                <span class="project-detail__period">${project.period}</span>
            </div>
            
            <div class="project-gallery">
                <div class="gallery-main">
                    <img src="${project.images[0]}" alt="${project.title}" class="gallery-main__img" id="main-image">
                </div>
                <div class="gallery-thumbs">
                    ${project.images.map((img, index) => 
                        `<img src="${img}" alt="${project.title} ${index + 1}" class="gallery-thumb ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">`
                    ).join('')}
                </div>
            </div>
            
            <div class="project-content">
                <div class="content-section">
                    <h3>Descripción del Proyecto</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="content-section">
                    <h3>Objetivos</h3>
                    <ul class="objectives-list">
                        ${project.objectives.map(objective => `<li>${objective}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="content-section">
                    <h3>Resultados</h3>
                    <ul class="results-list">
                        ${project.results.map(result => `<li>${result}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Agregar estilos del modal si no existen
    addModalStyles();
}

// Cerrar modal de proyecto
function closeProject() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Cambiar imagen principal del proyecto
function changeMainImage(src, thumb) {
    const mainImage = document.getElementById('main-image');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    
    mainImage.src = src;
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

// Agregar estilos para el modal
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .project-detail__title {
            font-family: var(--font-script);
            font-size: 2rem;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .project-detail__period {
            color: var(--accent-color);
            font-weight: 600;
            margin-bottom: 2rem;
            display: block;
        }
        
        .project-gallery {
            margin: 2rem 0;
        }
        
        .gallery-main {
            margin-bottom: 1rem;
        }
        
        .gallery-main__img {
    width: auto;
    height: auto;
    max-width: 100%;
    border-radius: 10px;
}
        
        .gallery-thumbs {
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
        }
        
        .gallery-thumb {
            width: 80px;
            height: 60px;
            object-fit: cover;
            border-radius: 5px;
            cursor: pointer;
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }
        
        .gallery-thumb.active,
        .gallery-thumb:hover {
            opacity: 1;
        }
        
        .content-section {
            margin-bottom: 2rem;
        }
        
        .content-section h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        
        .objectives-list,
        .results-list {
            padding-left: 1.5rem;
        }
        
        .objectives-list li,
        .results-list li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }
    `;
    
    document.head.appendChild(style);
}

/* ===== FORMULARIO DE CONTACTO ===== */
// Esta sección se ha removido ya que no hay formulario

/* ===== EFECTOS VISUALES ADICIONALES ===== */
// Paralaje en el header
function initParallaxEffect() {
    const homeSection = document.querySelector('.home');
    
    if (homeSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            homeSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Cursor personalizado
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Agregar estilos del cursor
    const cursorStyles = document.createElement('style');
    cursorStyles.textContent = `
        .custom-cursor {
            position: fixed;
            width: 10px;
            height: 10px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
        }
        
        .cursor-follower {
            position: fixed;
            width: 30px;
            height: 30px;
            border: 2px solid var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            opacity: 0.5;
        }
        
        @media (max-width: 768px) {
            .custom-cursor,
            .cursor-follower {
                display: none;
            }
        }
    `;
    document.head.appendChild(cursorStyles);
}

// Partículas flotantes en el background
function initFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    document.body.appendChild(particlesContainer);
    
    // Crear partículas
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Posición aleatoria
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Tamaño aleatorio
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Duración de animación aleatoria
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    // Agregar estilos de partículas
    const particleStyles = document.createElement('style');
    particleStyles.textContent = `
        .floating-particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        }
        
        .particle {
            position: absolute;
            background: rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            animation: float linear infinite;
        }
        
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        
        @media (max-width: 768px) {
            .floating-particles {
                display: none;
            }
        }
    `;
    document.head.appendChild(particleStyles);
}

// Contador animado para estadísticas (si se necesita)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start < target) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Filtro de blur al hacer scroll
function initScrollBlur() {
    const blurElements = document.querySelectorAll('.blur-on-scroll');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const blurValue = Math.min(scrolled / 500, 1) * 5;
        
        blurElements.forEach(element => {
            element.style.filter = `blur(${blurValue}px)`;
        });
    });
}

// Revelar texto letra por letra
function revealTextByLetter(element, delay = 50) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    
    [...text].forEach((char, index) => {
        setTimeout(() => {
            element.textContent += char;
        }, delay * index);
    });
}

// Efecto de ondas en clicks
function initRippleEffect() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.button') || e.target.closest('.project__btn')) {
            const button = e.target.closest('.button') || e.target.closest('.project__btn');
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                background-color: rgba(255, 255, 255, 0.5);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
    
    // Agregar animación de ripple
    const rippleStyles = document.createElement('style');
    rippleStyles.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyles);
}

// Loading screen
function initLoadingScreen() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">Florencia</div>
            <div class="loader-progress">
                <div class="progress-bar"></div>
            </div>
            <div class="loader-text">Cargando portfolio...</div>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Agregar estilos del loader
    const loaderStyles = document.createElement('style');
    loaderStyles.textContent = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
            color: var(--white-color);
        }
        
        .loader-logo {
            font-family: var(--font-script);
            font-size: 3rem;
            margin-bottom: 2rem;
            animation: logoGlow 2s ease-in-out infinite alternate;
        }
        
        .loader-progress {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 2px;
            margin: 2rem auto;
            overflow: hidden;
        }
        
        .progress-bar {
            width: 0%;
            height: 100%;
            background: var(--accent-color);
            border-radius: 2px;
            animation: loadProgress 3s ease-out forwards;
        }
        
        .loader-text {
            font-size: var(--small-font-size);
            opacity: 0.8;
            animation: textPulse 1.5s ease-in-out infinite;
        }
        
        @keyframes logoGlow {
            0% { text-shadow: 0 0 10px rgba(212, 175, 55, 0.5); }
            100% { text-shadow: 0 0 20px rgba(212, 175, 55, 0.8); }
        }
        
        @keyframes loadProgress {
            0% { width: 0%; }
            100% { width: 100%; }
        }
        
        @keyframes textPulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(loaderStyles);
    
    // Remover loader después de cargar
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 3000);
    });
}

/* ===== EVENT LISTENERS ===== */
function initEventListeners() {
    // Navegación móvil
    navToggle?.addEventListener('click', toggleMobileMenu);
    
    // Cerrar menú al hacer click en enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Scroll events
    window.addEventListener('scroll', () => {
        updateHeaderOnScroll();
        updateActiveNavLink();
    });
    
    // Cerrar modal al hacer click fuera
    projectModal?.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProject();
        }
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProject();
        }
    });
    
    // Prevenir scroll del body cuando el modal está abierto
    document.addEventListener('wheel', (e) => {
        if (projectModal.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
}

/* ===== INICIALIZACIÓN ===== */
function init() {
    // Verificar si el DOM está completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }
    
    console.log('🎨 Inicializando Portfolio de Florencia Rosalía Castillo...');
    
    // Inicializar loading screen
    initLoadingScreen();
    
    // Inicializar funciones principales
    initEventListeners();
    initSmoothScroll();
    initAnimations();
    initSkillsInteraction();
    initContactCardsInteraction();
    
    // Efectos visuales adicionales
    addSkillsAnimation();
    initRippleEffect();
    
    // Efectos avanzados (solo en desktop)
    if (window.innerWidth > 768) {
        initCustomCursor();
        initFloatingParticles();
        initParallaxEffect();
    }
    
    // Animación del título principal
    setTimeout(() => {
        const homeTitle = document.querySelector('.home__name');
        if (homeTitle) {
            const originalText = homeTitle.textContent;
            typeWriterEffect(homeTitle, originalText, 150);
        }
    }, 3500);
    
    console.log('✨ Portfolio inicializado correctamente!');
}

// Auto-inicialización
init();

/* ===== FUNCIONES GLOBALES PARA HTML ===== */
// Estas funciones deben estar disponibles globalmente para los eventos onclick
window.openProject = openProject;
window.closeProject = closeProject;
window.changeMainImage = changeMainImage;