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
      MENU.forEach(m_el => m_el.classList.remove('on'))
      el.classList.add('on');
      swiper[idx].slideToLoop(0) //슬라이드 탭 이동시 초기화! 드뎌해따!
      CONTENT.forEach(c_el => c_el.classList.remove('on'))
      CONTENT[idx].classList.add('on')
    })
  })

  window.addEventListener('scroll', () => {
    let sct = window.scrollY

    sct > 1000
      ? document.querySelector('.Best .left img').classList.add('on')
      : document.querySelector('.Best .left img').classList.remove('on')

    sct > 2600
      ? document.querySelector('.Ods .right img').classList.add('on')
      : document.querySelector('.Ods .right img').classList.remove('on')
  })

})


