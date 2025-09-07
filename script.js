document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text');
    const text = 'padelhubkzn';
    textElement.textContent = '';
    for (let i = 0; i < 30; i++) { // Repeat to ensure continuous scrolling
        textElement.textContent += text;
    }
});
