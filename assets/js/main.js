const header = document.querySelector('header');
const headerBtn = document.querySelector('header button');

headerBtn.addEventListener('click', menuFn)

function menuFn(e) {
    header.classList.toggle('show')
}