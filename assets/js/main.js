function trySweetAlert2() {
    Swal.fire({
        icon: 'success',
        title: 'Some title',
        text: 'Something ...',
        footer: '<a href>Link example for anything</a>'
    })
}

const navUl = document.querySelector('header .header .headerNav nav ul.isMobile');
const divButtonMenuMobile = document.querySelector('.divButtonMenuMobile');
divButtonMenuMobile.addEventListener('click', () => {
    navUl.classList.toggle('showMenu');
})