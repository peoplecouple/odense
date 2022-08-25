window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.scroll').addEventListener('click', function () {
    const scrollPosition = document.querySelector(this.dataset.target).offsetTop;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
  })

  document.querySelector('.popup .close').addEventListener('click', function () {
    document.querySelector('.popup').classList.add('on')
  })

  document.querySelector('.search i').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.search_cover').classList.add('on')
    document.querySelector('.search_popup').classList.add('on')
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

  })

  document.querySelector('.search_popup .close').addEventListener('click', function () {
    document.querySelector('.search_cover').classList.remove('on')
    document.querySelector('.search_popup').classList.remove('on')
    document.getElementsByTagName('body')[0].style.overflow = 'unset';
  })





  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: '4',
    slideToClickedSlide: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })


  const MENU = document.querySelectorAll('.Goods .tab_menu li')
  const CONTENT = document.querySelectorAll('.Goods .slide>div')
  MENU.forEach((el, idx) => {
    el.addEventListener('click', (e) => { //e로 들어와서 a의 기본이벤트를 죽임
      e.preventDefault();
      MENU.forEach(el => el.classList.remove('on'))
      el.classList.add('on')
      CONTENT.forEach(el => el.classList.remove('on'))
      CONTENT[idx].classList.add('on')
    })
  })

  window.addEventListener('scroll', () => {
    let sct = window.scrollY

    // if (sct > 1000) {
    //   document.querySelector('.Best .left img').classList.add('on')
    // }
    // if (sct > 2600) {
    //   document.querySelector('.Best .left img').classList.add('on')
    // }
    sct > 1000
      ? document.querySelector('.Best .left img').classList.add('on')
      : document.querySelector('.Best .left img').classList.remove('on')

    sct > 2600
      ? document.querySelector('.Ods .right img').classList.add('on')
      : document.querySelector('.Ods .right img').classList.remove('on')
  })

})






// window.addEventListener('scroll', () => {
//   let sct = window.scrollY;
//   sct > 0
//     ? document.querySelector('#Header').classList.add('on')
//     : document.querySelector('#Header').classList.remove('on')

//     sct > 500
//     ? document.querySelector('.to_top').classList.add('on')
//     : document.querySelector('.to_top').classList.remove('on')
// })

// const MainSlider = new Swiper('.MainSlider', {
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// })

// const SCE_ELE = document.querySelectorAll('.active-event');
// window.addEventListener('scroll', () => {
//   let sct = window.scrollY;
//   SCE_ELE.forEach(e => {
//     sct > e.offsetTop - 500
//       ? e.classList.add('on')
//       : e.classList.remove('on')
//   })

// });

// document.querySelector('.to_top').addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' })
// })

// document.querySelector('.mopen').addEventListener('click', (e) => {
//   const TG = e.currentTarget;
//   TG.classList.toggle('on')
//   // 이건 헤더의 on을 뗏다 붙혀서 스크롤시 이벤트를 없애는거임
//   // 대신 제일 위에 조건문 써서 해도됨
//   document.querySelector('#Header').classList.toggle('ox')
// });

// document.querySelector('#Header').addEventListener('wheel', (e)=>{
//   e.preventDefault() //이벤트 자체를 막는다.
// })