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
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

document.getElementById('composition-button').addEventListener('click', scrollToElement);
function scrollToElement(e) {
    element = document.getElementById("composition")
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

document.getElementById('sign-up-button').addEventListener('click', scrollToSign);
function scrollToSign(e) {
    element = document.getElementById("sign-up")
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

document.getElementById('orders-searching-button').addEventListener('click', scrollToSignUp);
function scrollToSignUp(e) {
    element = document.getElementById("sign-up")
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

function toggleText(btn) {
     if (btn.innerHTML == "Записаться!") {
        btn.innerHTML = "Спасибо!";
    } else {
        btn.innerHTML = "Записаться!";
    }
}

const header = document.querySelector('.header');

