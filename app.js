const sliders = document.querySelector('.fa-sliders-h');
const cat = document.querySelector('.categories-container');

const res = document.querySelector('.resHeader');
const bars = document.querySelector('.fa-bars');


sliders.addEventListener('click', () => {
    if (cat.classList.contains('hidden')) {
        cat.classList.remove('hidden')
    } else {
        cat.classList.add('hidden')
    }
});


bars.addEventListener('click', () => {
    if (res.classList.contains('hide')) {
        res.classList.remove('hide')
    } else {
        res.classList.add('hide')
    }
});

