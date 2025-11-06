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
// FUNÇÃO: Smooth Scroll para Links Internos
// ========================================
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
// FUNÇÃO: Inicialização
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Flavia Reis Aromas - Landing Page Carregada');
    
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
