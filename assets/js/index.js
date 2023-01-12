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


// create catigories
!(function(){
    const data = ['розетки', 'выключатели', 'коробки распаечные', 'изоляторы кабельные', 'втулки', 'рамки', 'провода', 'аксесуары', 'лампы', 'светильники',];
    let parent = document.querySelector('.categories');

    for(let i = 0; i < data.length; i++) {
        let item = document.createElement('div');
        item.classList.add('brend_item');
        parent.append(item);

        let itemBg = document.createElement('div');
        itemBg.style.background = `url(./assets/images/img/brand_item${i + 1}.png)`;
        itemBg.style.backgroundRepeat = 'no-repeat';
        itemBg.style.backgroundPosition = 'left 50%';
        itemBg.classList.add('brand_item_bg');
        item.append(itemBg);

        let itemText = document.createElement('div');
        itemText.classList.add('brand_text');
        itemText.textContent = data[i];
        itemBg.append(itemText);
    }
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