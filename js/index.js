// console.log('Самооценкa своей работы:\n\n1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n - <header>, <main>, <footer> +3\n - четыре элемента <section> (по количеству секций) +3\n - только один заголовок <h1> +3\n - три заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n - один элемент <nav> (панель навигации) +3\n - два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n - четыре кнопки <button> +2\n3. Вёрстка соответствует макету +48\n - блок <header> +6\n - секция preview +9\n - секция steps +9\n - секция destinations +9\n - секция stories +9\n - блок <footer> +6\n4. Требования к css + 12\n - для построения сетки используются флексы или гриды +2\n - при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n - фоновый цвет тянется на всю ширину страницы +2\n - иконки добавлены в формате .svg +2\n - изображения добавлены в формате .jpg +2\n - есть favicon +2\n5. Интерактивность, реализуемая через css +20\n - плавная прокрутка по якорям +5\n - иконки соцсетей в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса +5\n - интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта +5\n - обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n\nИтоговая оценка за задание - 100 баллов');

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