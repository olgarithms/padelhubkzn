document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text');
    const text = 'padelhubkzn';
    textElement.textContent = '';
    for (let i = 0; i < 30; i++) {
        textElement.textContent += text;
    }

    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');

    if (!cookieConsent || !acceptButton) {
        console.error('Cookie consent elements not found!');
        return;
    }

    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'true');
        cookieConsent.style.display = 'none';
        // Placeholder for loading analytics or other scripts
        console.log('Cookies accepted');
    });
});
