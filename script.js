const btnShow = document.querySelector('.btn__show');
const btnback = document.querySelector('.btn__back');
const body = document.querySelector('body');

if(btnShow) {
    btnShow.addEventListener('click', () => {
        body.classList.add('show');
    })
}

if(btnback) {
    btnback.addEventListener('click', () => {
        body.classList.remove('show');
    })
}