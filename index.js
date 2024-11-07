const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navbarbar = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        navbarbar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbarbar.classList.remove('active');
    })
}
