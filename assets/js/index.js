"use strict"

let sliderContent = document.querySelector('.slider_content');
let btnsBlock = document.querySelector('.btns_block');
let btns = document.querySelectorAll('.btn');

btnsBlock.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')) {
        btns.forEach(elem => {
            elem.classList.remove('active');
        })

        e.target.classList.add('active');
        console.log(e.target);
    }

    if(e.target.classList.contains('btn1')) {
        sliderContent.style.left = '0px';
    }

    if(e.target.classList.contains('btn2')) {
        sliderContent.style.left = '-1920px';
    }

    if(e.target.classList.contains('btn3')) {
        sliderContent.style.left = '-3840px';
    }

    if(e.target.classList.contains('btn4')) {
        sliderContent.style.left = '-5760px';
    }
})