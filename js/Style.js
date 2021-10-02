const menu = document.querySelector('.menu'),
    burger = document.querySelector('.burger'),
    overlay = document.querySelector('.overlay');


burger.addEventListener('click', () => {
    menu.classList.add('open');
        overlay.classList.add('open');
        lockScroll()
        initialMenu();
});

overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll()
});

function lockScroll(){
    document.body.classList.add("lock")
}

function unlockScroll(){
    document.body.classList.remove("lock")
}

menu.addEventListener('click',(e)=>{
if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link-dropdown')) {
    e.preventDefault();
    menu.classList.remove('open');
        overlay.classList.remove('open');
        unlockScroll();
    }

    if (e.target.classList.contains('nav__link-dropdown')) {
        e.preventDefault();
        e.target.closest('.nav__list').classList.add('transformation');
        e.target.closest('.nav__item').querySelector('.nav__list-dropdown').classList.add('transformation');

    }
    if (e.target.classList.contains('back')) {
        e.preventDefault()
        e.stopPropagation()
        initialMenu()
    }

})

const initialMenu = () => {
    let elementUl = document.querySelectorAll('.transformation')
    elementUl.forEach(function(item){
        item.classList.remove('transformation');
    })
}


