const modeToggleButton = document.getElementById('mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const translateButton = document.getElementById('translate-button');
const translateEsIcon = document.getElementById('translate-es');
const spanLink = document.querySelector('.span');
const know = document.querySelector('.know')

if (modeToggleButton && sunIcon && moonIcon) {
    modeToggleButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('light');

        if (document.body.classList.contains('light')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        }
    });
}

if (translateEsIcon) {
    translateEsIcon.addEventListener('click', (e) => {
        handleLinkClick(e);
    });
}

if (translateButton) {
    translateButton.addEventListener('click', (e) => {
        handleLinkClick(e);
    });
}

if (spanLink) {
    spanLink.addEventListener('click', (e) => {
        handleLinkClick(e);
    });
}

if (know) {
    know.addEventListener('click', (e) => {
        handleLinkClick(e);
    });
}

function handleLinkClick(e) {
    e.preventDefault();
    let message = 'This feature will be available soon!';
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 3000
    });
}