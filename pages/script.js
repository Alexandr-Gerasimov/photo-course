const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu')


function openBurgerMenu(burger) {
    if (burgerMenu.className === 'header__menu header__menu_active' && burgerButton.className === 'header__burger header__burger_close') {
        burger.classList.remove('header__menu_active');
        burgerButton.classList.remove('header__burger_close')
    } else {
        burger.classList.add('header__menu_active');
        burgerButton.classList.add('header__burger_close')
    }
}

burgerButton.addEventListener('click', function () {
    openBurgerMenu(burgerMenu)
})