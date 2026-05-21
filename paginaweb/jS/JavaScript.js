'use strict';

document.addEventListener('DOMContentLoaded', () => {
    setupGreetingFooter();
    setupIndexNewsletter();
});

function setupGreetingFooter() {
    const headerSaludo = document.getElementById('headerSaludo');
    const footerFecha = document.getElementById('footerFecha');
    if (!headerSaludo && !footerFecha) {
        return;
    }

    const now = new Date();
    const hour = now.getHours();
    let greeting = 'Buenas noches';
    if (hour >= 8 && hour < 14) {
        greeting = 'Buenos días';
    } else if (hour >= 14 && hour < 20) {
        greeting = 'Buenas tardes';
    }

    const formattedDate = now.toLocaleString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    if (headerSaludo) {
        headerSaludo.textContent = greeting;
    }
    if (footerFecha) {
        footerFecha.textContent = formattedDate;
    }
}

function setupIndexNewsletter() {
    const openNewsletter = document.getElementById('openNewsletter');
    const closeNewsletter = document.getElementById('closeNewsletter');
    const newsletter = document.querySelector('.newsletter');
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterName = document.getElementById('newsletter-name');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterMessage = document.getElementById('newsletterMessage');

    function showNewsletter() {
        if (!newsletter) return;
        newsletter.classList.add('active');
        newsletter.setAttribute('aria-hidden', 'false');
    }

    function hideNewsletter() {
        if (!newsletter) return;
        newsletter.classList.remove('active');
        newsletter.setAttribute('aria-hidden', 'true');
    }

    function setNewsletterMessage(text, isError = false) {
        if (!newsletterMessage) return;
        newsletterMessage.textContent = text;
        newsletterMessage.classList.toggle('success', !isError);
        newsletterMessage.classList.toggle('error', isError);
    }

    openNewsletter?.addEventListener('click', () => {
        setNewsletterMessage('');
        showNewsletter();
    });

    closeNewsletter?.addEventListener('click', hideNewsletter);

    newsletter?.addEventListener('click', (event) => {
        if (event.target === newsletter) {
            hideNewsletter();
        }
    });

    newsletterForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!newsletterName.value.trim() || !newsletterEmail.value.trim()) {
            setNewsletterMessage('Por favor completa todos los campos.', true);
            return;
        }
        if (!newsletterEmail.checkValidity()) {
            setNewsletterMessage('Introduce un correo electrónico válido.', true);
            return;
        }
        setNewsletterMessage(`Gracias por suscribirte, ${newsletterName.value.trim()}!`);
        newsletterForm.reset();
    });
}

