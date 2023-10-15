const newsSlider = new Swiper('.news__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 60,
});
const caloriesSlider = new Swiper('.calories__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
});
const reviewsSlider = new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'flip',
    flipEffect: {
        slideShadows: false,
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let headerBurger = document.querySelector('.header__burger');
let menuDropdown = document.querySelector('.menu-dropdown');
let closeMenuDropdown = document.querySelector('.menu-dropdown__close');
headerBurger.addEventListener('click', () => {
    menuDropdown.classList.add('open');
});
closeMenuDropdown.addEventListener('click', () => {
    menuDropdown.classList.remove('open');
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    });

    let itemsL = gsap.utils.toArray('.top__right-decor-image')

    itemsL.forEach(item => {
        gsap.fromTo(item, { opacity: 0, x: 150 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-50',
                scrub: true
            }
        })
    })
    // top__left-item
    gsap.fromTo('.top__left-item', { x: -100, opacity: 0 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: '.top__left-item',
            start: '-950',
            end: '-50',
            scrub: true
        }
    });
    gsap.fromTo('.top__right-item', { y: -100, opacity: 0 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.top__right-item',
            start: '-500',
            end: '-50',
            scrub: true
        }
    });
    // let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    // itemsL.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, x: -50 }, {
    //         opacity: 1, x: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-850',
    //             end: '-100',
    //             scrub: true
    //         }
    //     })
    // })

    // let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    // itemsR.forEach(item => {
    //     gsap.fromTo(item, { opacity: 0, x: 50 }, {
    //         opacity: 1, x: 0,
    //         scrollTrigger: {
    //             trigger: item,
    //             start: '-750',
    //             end: 'top',
    //             scrub: true
    //         }
    //     })
    // })

}




