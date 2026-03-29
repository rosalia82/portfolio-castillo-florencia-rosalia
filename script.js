const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});

const projectsData = {
    'medical-office': {
        en: {
            category: 'Community Manager / 2024',
            title: 'MEDICAL OFFICE',
            description: 'Complete social media management for a modern medical practice. Creating strategic content that educates, engages, and builds trust with patients. Visual identity across Instagram, Facebook, and stories with consistent brand messaging focused on health, wellness, and professional care.',
            tags: ['Social Media', 'Content Strategy', 'Healthcare Branding'],
            images: [
                { type: 'wide',   src: 'img/consultorio/Mesa de trabajo 1.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 2.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 3.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 4.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 5.png' },            ]
        },
        es: {
            category: 'Community Manager / 2024',
            title: 'CONSULTORIO MÉDICO',
            description: 'Gestión completa de redes sociales para un consultorio médico moderno. Creando contenido estratégico que educa, involucra y construye confianza con los pacientes. Identidad visual en Instagram, Facebook e historias con mensajes de marca consistentes enfocados en salud, bienestar y cuidado profesional.',
            tags: ['Redes Sociales', 'Estrategia de Contenido', 'Branding Salud'],
            images: [
                { type: 'wide',   src: 'img/consultorio/Mesa de trabajo 1.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 2.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 3.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 4.png' },
                { type: 'square', src: 'img/consultorio/Mesa de trabajo 5.png' },            ]
        }
    },
    'furniture-store': {
        en: {
            category: 'Community Manager / 2024',
            title: 'FURNITURE STORE',
            description: 'Strategic social media presence for a contemporary furniture retailer. Creating lifestyle content that showcases products in aspirational settings. Product photography, styling direction, and cohesive visual storytelling that drives engagement and sales.',
            tags: ['Social Media', 'Product Photography', 'Lifestyle Content'],
            images: [
                { type: 'wide',   src: 'img/muebleria/Mesa de trabajo 6.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 7.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 8.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 9.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 10.png' },
            ]
        },
        es: {
            category: 'Community Manager / 2024',
            title: 'MUEBLERÍA',
            description: 'Presencia estratégica en redes sociales para una mueblería contemporánea. Creando contenido lifestyle que muestra productos en ambientes aspiracionales. Fotografía de productos, dirección de estilo y narrativa visual cohesiva que impulsa engagement y ventas.',
            tags: ['Redes Sociales', 'Fotografía de Producto', 'Contenido Lifestyle'],
            images: [
                { type: 'wide',   src: 'img/muebleria/Mesa de trabajo 6.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 7.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 8.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 9.png' },
                { type: 'square', src: 'img/muebleria/Mesa de trabajo 10.png' },
                
            ]
        }
    },
    'app-branding': {
        en: {
            category: 'Branding + Digital / 2023',
            title: 'APP BRANDING',
            description: 'Complete brand identity system from concept to execution. Logo design, color palette, typography selection, and comprehensive brand guidelines. Mobile app UI/UX design with pixel-perfect attention to detail.',
            tags: ['Brand Identity', 'UI/UX Design', 'Brand Guidelines'],
            images: [
                { type: 'square', src: 'img/branding/Mesa de trabajo 26.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 26 copia.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 29.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 30.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 31.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 32.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 33.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 34.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 35.png' }
            ]
        },
        es: {
            category: 'Branding + Digital / 2023',
            title: 'BRANDING APP',
            description: 'Sistema completo de identidad de marca desde el concepto hasta la ejecución. Diseño de logo, paleta de colores, selección tipográfica y guías de marca comprehensivas. Diseño de UI/UX para app móvil con atención al detalle pixel-perfect.',
            tags: ['Identidad de Marca', 'Diseño UI/UX', 'Guías de Marca'],
            images: [
                { type: 'wide',   src: 'img/branding/Mesa de trabajo 1.jpg' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 26.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 26 copia.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 29.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 30.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 31.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 32.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 33.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 34.png' },
                { type: 'square', src: 'img/branding/Mesa de trabajo 35.png' }
            ]
        }
    },
    'city-3d': {
        en: {
            category: '3D Design / 2023',
            title: 'CITY RENDERS',
            description: 'Architectural visualization project exploring urban environments in Cinema 4D. Creating dramatic cityscapes with emphasis on form, scale, and lighting. Experimenting with atmospheric perspective and render techniques.',
            tags: ['Cinema 4D', '3D Modeling', 'Architectural Viz'],
            images: [
                { type: 'wide',   src: 'img/city japon/Mesa de trabajo 6 copia 3.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 19.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 20.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 21.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 22.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 27.png' }
            ]
        },
        es: {
            category: 'Diseño 3D / 2023',
            title: 'RENDERS CIUDAD',
            description: 'Proyecto de visualización arquitectónica explorando entornos urbanos en Cinema 4D. Creando paisajes urbanos dramáticos con énfasis en forma, escala e iluminación. Experimentando con perspectiva atmosférica y técnicas de render.',
            tags: ['Cinema 4D', 'Modelado 3D', 'Viz Arquitectónica'],
            images: [
                { type: 'wide',   src: 'img/city japon/Mesa de trabajo 6 copia 3.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 19.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 20.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 21.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 22.png' },
                { type: 'square', src: 'img/city japon/Mesa de trabajo 27.png' }
            ]
        }
    },
    'scenes-3d': {
        en: {
            category: '3D Design / 2023',
            title: 'SCENE STUDIES',
            description: 'Experimental 3D compositions in Blender exploring the fundamentals of lighting, mood, and spatial design. Each scene is a study in atmosphere and emotion.',
            tags: ['Blender', 'Lighting Design', 'Mood Studies'],
            images: [
                { type: 'wide',   src: 'img/monster inc/Mesa de trabajo 28.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 36.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 37.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 38.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 44.png' }
            ]
        },
        es: {
            category: 'Diseño 3D / 2023',
            title: 'ESTUDIOS ESCENA',
            description: 'Composiciones 3D experimentales en Blender explorando los fundamentos de iluminación, atmósfera y diseño espacial. Cada escena es un estudio en atmósfera y emoción.',
            tags: ['Blender', 'Diseño de Iluminación', 'Estudios de Atmósfera'],
            images: [
                { type: 'wide',   src: 'img/monster inc/Mesa de trabajo 28.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 36.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 37.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 38.png' },
                { type: 'square', src: 'img/monster inc/Mesa de trabajo 44.png' }
            ]
        }
    },
    'spirited-away': {
        en: {
            category: '3D Design / 2023',
            title: 'SPIRITED AWAY',
            description: "Artistic interpretation of scenes from Studio Ghibli's masterpiece. Detailed 3D recreations exploring the film's magical atmosphere, lighting, and architectural wonder.",
            tags: ['Blender', 'Fan Art', 'Environment Design'],
            images: [
                { type: 'wide',   src: 'img/chihiro/Mesa de trabajo 39.png' },
                { type: 'square', src: 'img/chihiro/Mesa de trabajo 41.png' },
                { type: 'square', src: 'img/chihiro/Mesa de trabajo 42.png' },
                { type: 'square', src: 'img/chihiro/Mesa de trabajo 43.png' }
                ,{ type: 'square', src: 'img/chihiro/Mesa de trabajo 40.png' }
           ]
        },
        es: {
            category: 'Diseño 3D / 2023',
            title: 'EL VIAJE DE CHIHIRO',
            description: 'Interpretación artística de escenas de la obra maestra de Studio Ghibli. Recreaciones 3D detalladas explorando la atmósfera mágica de la película, iluminación y maravilla arquitectónica.',
            tags: ['Blender', 'Fan Art', 'Diseño de Entorno'],
            images: [
                { type: 'wide',   src: 'img/chihiro/Mesa de trabajo 39.png' },
                { type: 'square', src: 'img/chihiro/Mesa de trabajo 41.png' },
                { type: 'square', src: 'img/chihiro/Mesa de trabajo 42.png' },
                { type: 'square', src: 'img/chihiro/Mesa de trabajo 43.png' }
                ,{ type: 'square', src: 'img/chihiro/Mesa de trabajo 40.png' }
            ]
        }
    }
};

const modal = document.getElementById('projectModal');
const modalClose = modal.querySelector('.modal-close');
const modalContent = modal.querySelector('.modal-content');

function openProjectModal(projectId) {
    const project = projectsData[projectId][currentLang];
    
    if (!project) return;
    
    modal.querySelector('.modal-category').textContent = project.category;
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-description').textContent = project.description;
    
    const gallery = modal.querySelector('.modal-gallery');
    gallery.innerHTML = '';
    project.images.forEach(image => {
        const imgEl = document.createElement('div');
        imgEl.className = `modal-gallery-item ${image.type}`;
        imgEl.innerHTML = `<img src="${image.src}" alt="${project.title}">`;
        gallery.appendChild(imgEl);
    });
    
    const tagsContainer = modal.querySelector('.modal-tags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });
    
    const personalProjects = ['app-branding', 'city-3d', 'scenes-3d', 'spirited-away'];
    modal.classList.toggle('is-personal', personalProjects.includes(projectId));

    document.body.style.overflow = 'hidden';
    modal.classList.add('active');
    modalContent.scrollTop = 0;
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProjectModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.dataset.project;
        if (projectId) openProjectModal(projectId);
    });
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const projectId = item.dataset.project;
            if (projectId) openProjectModal(projectId);
        }
    });
});


/* =============================================
   HOVER EXPAND CAROUSEL — Personal Projects
   ============================================= */

(function () {
    const cards = document.querySelectorAll('.he-card');
    if (!cards.length) return;

    function activateCard(index) {
        cards.forEach((c, i) => c.classList.toggle('is-active', i === index));
    }
    activateCard(0);

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => activateCard(index));
        card.addEventListener('focus',      () => activateCard(index));

        // Click anywhere on the card → open the shared project modal
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            if (projectId) openProjectModal(projectId);
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = card.dataset.project;
                if (projectId) openProjectModal(projectId);
            }
        });

        // On touch: first tap expands the card, second tap opens the modal
        card.addEventListener('touchend', (e) => {
            if (!card.classList.contains('is-active')) {
                e.preventDefault();
                activateCard(index);
            }
        }, { passive: false });
    });
})();
