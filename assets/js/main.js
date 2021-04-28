function trySweetAlert2() {
    Swal.fire({
        icon: 'success',
        title: 'Some title',
        text: 'Something ...',
        footer: '<a href>Link example for anything</a>'
    })
}

const navUl = document.querySelector('header .header .headerNav nav ul.isMobile');
const html = document.querySelector('html');
const headerTitles = document.querySelector('.headerTitles');
const backToTop = document.querySelector('.backToTop');

const divButtonMenuMobile = document.querySelector('.divButtonMenuMobile');
divButtonMenuMobile.addEventListener('click', () => {
    navUl.classList.toggle('showMenu');
    html.classList.toggle('is-overflow-hidden');
    setTimeout(() => {
        headerTitles.classList.toggle('is-hidden');
        backToTop.classList.toggle('is-hidden');
    }, 200);
});

const divButtonMenuMobileClose = document.querySelector('.divButtonMenuMobileClose');
divButtonMenuMobileClose.addEventListener('click', () => {
    navUl.classList.toggle('showMenu');
    html.classList.toggle('is-overflow-hidden');
    setTimeout(() => {
        headerTitles.classList.toggle('is-hidden');
        backToTop.classList.toggle('is-hidden');
    }, 200);
});

backToTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});

function fnShowHideBtnBackToTop() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTop.classList.remove('is-All-Right');
    } else {
        backToTop.classList.add('is-All-Right');
    }
}

window.onscroll = () => fnShowHideBtnBackToTop();