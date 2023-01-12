"use strict"
// slider animation
!(function(){
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
})();

// create brands block
!(function(){
    let brands = document.querySelector('.brands');

    for(let i = 1; i < 10; i++) {
        let item = document.createElement('div');
        item.classList.add('item');
        brands.append(item);

        let logo = document.createElement('img');
        logo.src = `./assets/images/img/brand_icon${i}.png`;
        item.append(logo);
    }
})();