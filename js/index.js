console.log('Самооценкa своей работы:\n\n1. Слайдер изображений в секции destinations +50\n - на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20\n - Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20\n - Анимации плавного перемещения для слайдера +10\n2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n - логин попап соответствует верстке его закрытие происходит при клике вне попапа +25\n - логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25\n3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25\n\nИтоговая оценка за задание - 100 баллов');

// -- MENU BURGER
const navIcon = document.querySelector('.header-nav_icon');
const navMenu = document.querySelector('.header-nav');
const navClose = document.querySelector('.header-nav_close');
const headerBack = document.querySelector('.header-nav-background');
const link = document.querySelectorAll('.header-nav_link');


navIcon.addEventListener('click', function(e) {
  navIcon.classList.add('menu-active');
  navMenu.classList.add('menu-active');
  headerBack.classList.add('menu-active');
});

navClose.addEventListener('click', function(e) {
  navIcon.classList.remove('menu-active');
  navMenu.classList.remove('menu-active');
  headerBack.classList.remove('menu-active');
});

headerBack.addEventListener('click', function(e) {
  navIcon.classList.remove('menu-active');
  navMenu.classList.remove('menu-active');
  headerBack.classList.remove('menu-active');
});


let i = 0;
while (i < link.length) {
  link[i].addEventListener('click', function(e) {
    navIcon.classList.remove('menu-active');
    navMenu.classList.remove('menu-active');
    headerBack.classList.remove('menu-active');
  });
  i++
}
// -- MENU BURGER END

// -- SLIDER DV
// Смещение слайда
let slideMoveDV = -540;
// Контейнер слайдера
const sliderTrackDV = document.querySelector('.slider-track--dv');
const allDotsDV = document.querySelector('.slider-dots--dv');
const dotsDV = Array.from(allDotsDV.children)

document.querySelector('.slider_btn--next--dv').addEventListener('click', function () {
  // Значение сдвига слайда на ширину 1 картинки
  slideMoveDV -= 860;

  // Блочим кнопку если track уже сдвинут
  if (sliderTrackDV.style.left == '-1400px') {
    slideMoveDV = -1400
  };

  // Меняем цвет точек
  if (sliderTrackDV.style.left == '320px') {
    dotsDV[0].classList.remove('slide-active--dv');
    dotsDV[1].classList.add('slide-active--dv');
  } else if (sliderTrackDV.style.left == '-540px') {
    dotsDV[1].classList.remove('slide-active--dv');
    dotsDV[2].classList.add('slide-active--dv');
  } else {
    dotsDV[1].classList.remove('slide-active--dv');
    dotsDV[2].classList.add('slide-active--dv');
  }

  sliderTrackDV.style.left = slideMoveDV + 'px';
});

document.querySelector('.slider_btn--prev--dv').addEventListener('click', function () {
  // Значение сдвига слайда на ширину 1 картинки
  slideMoveDV += 860;

  // Блочим кнопку если track уже сдвинут
  if (sliderTrackDV.style.left == '320px') {
    slideMoveDV = 320
  };

  // Меняем цвет точек
  if (sliderTrackDV.style.left == '-1400px') {
    dotsDV[2].classList.remove('slide-active--dv');
    dotsDV[1].classList.add('slide-active--dv');
  } else if (sliderTrackDV.style.left == '-540px') {
    dotsDV[1].classList.remove('slide-active--dv');
    dotsDV[0].classList.add('slide-active--dv');
  } else {
    dotsDV[1].classList.remove('slide-active--dv');
    dotsDV[0].classList.add('slide-active--dv');
  }

  sliderTrackDV.style.left = slideMoveDV + 'px';
});
// -- SLIDER DV END

// -- SLIDER MV
const carousel = document.querySelector('.slider-container');
const slides = Array.from(carousel.children);
const btnPrev = document.querySelector('.slider_btn--prev');
const btnNext = document.querySelector('.slider_btn--next');
const dotsContainer = document.querySelector('.slider-dots');
const dots = Array.from(dotsContainer.children)

// Получаем ширину одного слайда
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// Сдвигаем слайды в ряд
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px'
// slides[2].style.left = slideWidth * 2 + 'px'
// То же самое но циклом
slides.forEach((slide, index) => {
  slide.style.left = slideWidth *  index + 'px';
});


// Функция для сдвига слайдов
const moveSlide = (carousel, activeSlide, targetSlide) => {
  carousel.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  activeSlide.classList.remove('slide-active');
  targetSlide.classList.add('slide-active');
};

// Функция для показа октивной dot
const changeActiveDot = (activeDot, targetDot) => {
  activeDot.classList.remove('slide-active');
  targetDot.classList.add('slide-active');
};

// Функция для добавления прозрачности кнопкам
const opacityBtn = (slides, btnPrev, btnNext, targetIndex) => {
  if (targetIndex === 0) {
    btnPrev.classList.add('slider-btn--last');
    btnNext.classList.remove('slider-btn--last');
  } else if (targetIndex === slides.length - 1) {
    btnPrev.classList.remove('slider-btn--last');
    btnNext.classList.add('slider-btn--last');
  } else {
    btnPrev.classList.remove('slider-btn--last');
    btnNext.classList.remove('slider-btn--last');
  }
};

// Кнопка в право
btnNext.addEventListener('click', e => {
  // Находим активный слайд
  const activeSlide = carousel.querySelector('.slide-active');
  // Находим следующий слайд
  const nextSlide = activeSlide.nextElementSibling;
  // Насколько сдвинуть следующий слайд
  // const amountMove = nextSlide.style.left;
  const activeDot = dotsContainer.querySelector('.slide-active');
  const nextDot = activeDot.nextElementSibling;
  // Константа для работы функции прозрачности кнопок
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  // Двигаем слайды
  // carousel.style.transform = 'translateX(-' + amountMove + ')';
  // activeSlide.classList.remove('slide-active');
  // nextSlide.classList.add('slide-active');

  // Тоже самое, но сделали функцию с таргетом для всех
  moveSlide(carousel, activeSlide, nextSlide) 
  changeActiveDot(activeDot, nextDot);

  opacityBtn(slides, btnPrev, btnNext, nextIndex);
});

// Кнопка в лево
btnPrev.addEventListener('click', e => {
  // Находим активный слайд
  const activeSlide = carousel.querySelector('.slide-active');
  // Находим следующий слайд
  const prevSlide = activeSlide.previousElementSibling;
  // Насколько сдвинуть следующий слайд
  // const amountMove = prevSlide.style.left;
  const activeDot = dotsContainer.querySelector('.slide-active');
  const prevDot = activeDot.previousElementSibling;
  // Константа для работы функции прозрачности кнопок
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  // Двигаем слайды
  // carousel.style.transform = 'translateX(-' + amountMove + ')';
  // activeSlide.classList.remove('slide-active');
  // prevSlide.classList.add('slide-active');

  // Тоже самое, но сделали функцию с таргетом для всех
  moveSlide(carousel, activeSlide, prevSlide) 
  changeActiveDot(activeDot, prevDot);

  opacityBtn(slides, btnPrev, btnNext, prevIndex);
});

// Dots
dotsContainer.addEventListener('click', e => {
  // Клик показывает ближайшую dot
  const targetDot = e.target.closest('span');
  // Если цель клика dot то остановить функцию
  if (!targetDot) return;

  // Находим активный слайд
  const activeSlide = carousel.querySelector('.slide-active');
  // Находим активный dot
  const activeDot = dotsContainer.querySelector('.slide-active');
  // Находим индекс dot на который кликнули
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  // Присваиваем слайду номер dot
  const targetSlide = slides[targetIndex];

  // Функция для сдвига слайдов подходит и сюда
  moveSlide(carousel, activeSlide, targetSlide); 

  // Работает по клику на dot, но не работает по клику на кнопки
  // activeDot.classList.remove('slide-active');
  // targetDot.classList.add('slide-active');
  // Тоже самое но функцией changeActiveDot + добавляем ее в 'слушатель кнопок' btnPrev, btnNext
  changeActiveDot(activeDot, targetDot);

  // Для добавления прозрачности кнопкам
  // if (targetIndex === 0) {
  //   btnPrev.classList.add('slider-btn--last');
  //   btnNext.classList.remove('slider-btn--last');
  // } else if (targetIndex === slides.length - 1) {
  //   btnPrev.classList.remove('slider-btn--last');
  //   btnNext.classList.add('slider-btn--last');
  // } else {
  //   btnPrev.classList.remove('slider-btn--last');
  //   btnNext.classList.remove('slider-btn--last');
  // }
  // Вывели это в отдельную функцию opacityBtn
  opacityBtn(slides, btnPrev, btnNext, targetIndex);
});
// -- SLIDER MV END

// -- POPUP
const accountBtn = document.getElementById('account');
const loginBtn = document.querySelector('.header-btn');
const popup = document.querySelector('.popup');
const loginPopup = document.querySelector('.login-popup');
const regPopup = document.querySelector('.reg-popup');
const signBtn = document.querySelector('.popup-btn--green');
const regBtn = document.querySelector('.popup-link--reg');
const signUpBtn = document.querySelector('.reg-popup-btn');
const loginPopBtn = document.querySelector('.reg-popup-link');

accountBtn.addEventListener('click', () => {
  popup.classList.remove('popup-hidden');
  loginPopup.classList.remove('login-popup-hidden');
});

loginBtn.addEventListener('click', () => {
  popup.classList.remove('popup-hidden');
  loginPopup.classList.remove('login-popup-hidden');
});

popup.addEventListener('click', (e) => {
  if(e.target.classList.contains('popup')) {
    popup.classList.add('popup-hidden');
    loginPopup.classList.add('login-popup-hidden');
    regPopup.classList.add('reg-popup-hidden');
  }
});

signBtn.addEventListener('click', () => {
  alert('Email: ' + document.getElementsByTagName("input")[0].value + '\nPassword: ' + document.getElementsByTagName("input")[1].value);
});

signUpBtn.addEventListener('click', () => {
  alert('Email: ' + document.getElementsByTagName("input")[2].value + '\nPassword: ' + document.getElementsByTagName("input")[3].value);
});

regBtn.addEventListener('click', () => {
  regPopup.classList.remove('reg-popup-hidden');
  loginPopup.classList.add('login-popup-hidden');
});

loginPopBtn.addEventListener('click', () => { 
  loginPopup.classList.remove('login-popup-hidden');
  regPopup.classList.add('reg-popup-hidden');
});
// -- POPUP END