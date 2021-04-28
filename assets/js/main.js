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

const divButtonMenuMobile = document.querySelector('.divButtonMenuMobile');
divButtonMenuMobile.addEventListener('click', () => {
    navUl.classList.toggle('showMenu');
    html.classList.toggle('is-overflow-hidden');
    setTimeout(() => {
        headerTitles.classList.toggle('is-hidden');
    }, 200);
});

const divButtonMenuMobileClose = document.querySelector('.divButtonMenuMobileClose');
divButtonMenuMobileClose.addEventListener('click', () => {
    navUl.classList.toggle('showMenu');
    html.classList.toggle('is-overflow-hidden');
    setTimeout(() => {
        headerTitles.classList.toggle('is-hidden');
    }, 200);
});