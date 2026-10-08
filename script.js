const themeSelect = document.querySelector('#theme-select');
const savedTheme = localStorage.getItem('portfolio-theme');

if (themeSelect) {
    if (savedTheme === 'dark' || savedTheme === 'light') {
        document.documentElement.dataset.theme = savedTheme;
        themeSelect.value = savedTheme;
    }

    themeSelect.addEventListener('change', () => {
        const theme = themeSelect.value;
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('portfolio-theme', theme);
    });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();
