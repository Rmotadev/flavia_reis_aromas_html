/**
 * Flavia Reis Aromas - Landing Page
 * JavaScript para funcionalidades interativas
 */

// ========================================
// FUNÇÃO: Toggle de Dicas Educativas
// ========================================
function toggleTip(element) {
    const content = element.querySelector('.tip-content');
    const hint = element.querySelector('.tip-hint');
    
    // Verifica se o conteúdo está visível
    const isVisible = content.style.display !== 'none';
    
    if (isVisible) {
        // Fecha a dica
        content.style.display = 'none';
        hint.style.display = 'block';
    } else {
        // Abre a dica
        content.style.display = 'block';
        hint.style.display = 'none';
    }
}

// ========================================
// FUNÇÃO: Smooth Scroll Suave para Links Internos
// ========================================
function smoothScrollTo(element, duration = 800) {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20; // 20px de espaço extra
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Função de easing suave (ease-in-out-cubic)
    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo({
            top: startPosition + distance * ease,
            behavior: 'auto' // Usamos 'auto' porque controlamos manualmente
        });
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Aplica smooth scroll aos links da navbar
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return; // Ignora links vazios
            
            const target = document.querySelector(targetId);
            
            if (target) {
                smoothScrollTo(target, 800); // 800ms para uma transição suave e leve
            }
        });
    });
}

// Inicializa o smooth scroll
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
} else {
    initSmoothScroll();
}

// ========================================
// FUNÇÃO: Animação de Entrada ao Scroll
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa elementos com animação
document.querySelectorAll('.benefit-card, .product-card, .testimonial-card, .tip-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ========================================
// FUNÇÃO: Analytics (Opcional)
// ========================================
function trackEvent(eventName, eventData = {}) {
    // Você pode integrar Google Analytics ou outro serviço aqui
    console.log(`Event: ${eventName}`, eventData);
    
    // Exemplo com Google Analytics (descomente se usar):
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Rastreia cliques em botões CTA
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('cta_click', {
            button_text: this.textContent,
            button_class: this.className
        });
    });
});

// ========================================
// FUNÇÃO: Navbar Sticky com Shadow
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
});

// ========================================
// FUNÇÃO: Validação de Formulários (se adicionar)
// ========================================
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#d4a574';
            isValid = false;
        } else {
            input.style.borderColor = '#e8dfd6';
        }
    });

    return isValid;
}

// ========================================
// FUNÇÃO: Menu Mobile (Hambúrguer)
// ========================================
function initMobileMenu() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const menuLinks = document.querySelectorAll('.navbar-menu a');
    
    if (!toggleButton || !navbarMenu) return;
    
    // Cria o overlay se não existir
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }
    
    // Função para alternar o menu
    function toggleMenu() {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            // Fecha o menu
            toggleButton.setAttribute('aria-expanded', 'false');
            navbarMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = ''; // Restaura o scroll
            
            // Remove o event listener do overlay
            overlay.removeEventListener('click', closeMenu);
        } else {
            // Abre o menu
            toggleButton.setAttribute('aria-expanded', 'true');
            navbarMenu.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden'; // Bloqueia o scroll
            
            // Adiciona o event listener para fechar ao clicar fora
            setTimeout(() => {
                overlay.addEventListener('click', closeMenu);
            }, 10);
        }
    }
    
    // Função para fechar o menu
    function closeMenu() {
        toggleButton.setAttribute('aria-expanded', 'false');
        navbarMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = ''; // Restaura o scroll
        overlay.removeEventListener('click', closeMenu);
    }
    
    // Toggle do menu ao clicar no botão
    toggleButton.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Fecha o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Fecha o menu ao redimensionar para desktop
    function handleResize() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    }
    
    // Adiciona o event listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Fecha o menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ========================================
// FUNÇÃO: Lightbox para Imagens
// ========================================
function initImageLightbox() {
    console.log('Inicializando lightbox...');
    
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    
    // Verifica se os elementos necessários existem
    if (!lightbox) console.error('Elemento lightbox não encontrado');
    if (!lightboxImg) console.error('Elemento lightbox-image não encontrado');
    if (!closeBtn) console.error('Botão de fechar do lightbox não encontrado');
    
    if (!lightbox || !lightboxImg || !closeBtn) return;
    
    // Seleciona todas as imagens dos produtos
    const productImages = document.querySelectorAll('.product-card img');
    console.log(`Encontradas ${productImages.length} imagens de produtos`);
    
    if (productImages.length === 0) {
        console.error('Nenhuma imagem de produto encontrada');
        return;
    }
    
    // Adiciona o evento de clique nas imagens
    productImages.forEach((img, index) => {
        img.style.cursor = 'pointer'; // Garante que o cursor mude para pointer
        
        // Remove event listeners antigos para evitar duplicação
        const newImg = img.cloneNode(true);
        img.parentNode.replaceChild(newImg, img);
        
        // Adiciona o evento de clique
        newImg.addEventListener('click', function() {
            console.log('Imagem clicada:', newImg.src);
            openLightbox(newImg);
        });
        
        // Adiciona teclado acessível
        newImg.setAttribute('tabindex', '0');
        newImg.setAttribute('role', 'button');
        newImg.setAttribute('aria-label', `Ampliar imagem ${index + 1}`);
        
        newImg.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('Imagem ativada por teclado:', newImg.src);
                openLightbox(newImg);
            }
        });
    });
    
    // Função para abrir o lightbox
    function openLightbox(imgElement) {
        console.log('Abrindo lightbox para:', imgElement.src);
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = imgElement.alt || 'Imagem do produto';
        lightboxCaption.textContent = imgElement.alt || '';
        lightbox.classList.add('show');
        document.body.classList.add('lightbox-open');
        document.body.style.overflow = 'hidden';
        
        // Foca no botão de fechar para acessibilidade
        closeBtn.focus();
    }
    
    // Fecha o lightbox
    function closeLightbox() {
        console.log('Fechando lightbox');
        lightbox.classList.remove('show');
        document.body.classList.remove('lightbox-open');
        document.body.style.overflow = '';
    }
    
    // Fecha ao clicar no botão de fechar
    closeBtn.addEventListener('click', closeLightbox);
    
    // Fecha ao clicar fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Fecha ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            closeLightbox();
        }
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('show')) return;
        
        const currentIndex = Array.from(productImages).findIndex(
            img => img.src === lightboxImg.src
        );
        
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % productImages.length;
            openLightbox(productImages[nextIndex]);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + productImages.length) % productImages.length;
            openLightbox(productImages[prevIndex]);
        }
    });
    
    console.log('Lightbox inicializado com sucesso');
}

// ========================================
// FUNÇÃO: Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Flavia Reis Aromas - Landing Page Carregada');
    
    // Inicializa menu mobile
    initMobileMenu();
    
    // Inicializa o lightbox para as imagens dos produtos
    setTimeout(initImageLightbox, 100); // Pequeno delay para garantir que o DOM esteja pronto
    
    // Inicializa tooltips ou popovers se necessário
    // initializeTooltips();
    
    // Carrega dados dinâmicos se necessário
    // loadDynamicContent();
});

// ========================================
// FUNÇÃO: Suporte a PWA (Progressive Web App)
// ========================================
if ('serviceWorker' in navigator) {
    // Você pode registrar um service worker aqui para offline support
    // navigator.serviceWorker.register('/sw.js');
}

// ========================================
// FUNÇÃO: Detecção de Dispositivo
// ========================================
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========================================
// FUNÇÃO: Compartilhamento em Redes Sociais
// ========================================
function shareOnSocial(platform) {
    const url = window.location.href;
    const title = 'Flavia Reis Aromas - Velas Aromáticas Artesanais';
    const text = 'Descubra as velas aromáticas artesanais que transformam seu espaço em um santuário de bem-estar!';
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
        trackEvent('social_share', { platform: platform });
    }
}

// ========================================
// FUNÇÃO: Scroll para Topo
// ========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostra botão de scroll para topo quando necessário
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.querySelector('.scroll-top-btn');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// ========================================
// FUNÇÃO: Carregamento Lazy de Imagens
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// FUNÇÃO: Contagem de Elementos
// ========================================
function countElements() {
    const stats = {
        benefits: document.querySelectorAll('.benefit-card').length,
        products: document.querySelectorAll('.product-card').length,
        testimonials: document.querySelectorAll('.testimonial-card').length,
        tips: document.querySelectorAll('.tip-card').length
    };
    
    console.log('Estatísticas da Página:', stats);
    return stats;
}

// ========================================
// FUNÇÃO: Modo Escuro (Opcional)
// ========================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Carrega preferência de modo escuro
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ========================================
// FUNÇÃO: Verificação de Performance
// ========================================
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Tempo de carregamento da página:', pageLoadTime + 'ms');
    }
});

// ========================================
// FUNÇÃO: Tratamento de Erros
// ========================================
window.addEventListener('error', function(event) {
    console.error('Erro na página:', event.error);
    // Você pode enviar o erro para um serviço de logging aqui
    // logErrorToServer(event.error);
});

// ========================================
// FUNÇÃO: Validação de Conectividade
// ========================================
window.addEventListener('online', function() {
    console.log('Conexão restaurada');
    // Atualiza conteúdo se necessário
});

window.addEventListener('offline', function() {
    console.log('Conexão perdida');
    // Mostra mensagem ao usuário
});

// ========================================
// EXPORTAR FUNÇÕES (se usar módulos)
// ========================================
// export { toggleTip, trackEvent, shareOnSocial, scrollToTop };
