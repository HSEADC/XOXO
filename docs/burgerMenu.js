/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var burgerMenu = document.querySelector('.burger-menu');
  var item = document.querySelector('.item-menu');
  var nav = document.querySelector('.burger-nav');
  var logoMenu = document.querySelector('.logo-menu');
  item.addEventListener('click', function () {
    burgerMenu.classList.toggle('active'), nav.classList.toggle('nav-active');
  });
  item.addEventListener('click', function () {
    logoMenu.classList.toggle('logo-inactive');
  });
});
/******/ })()
;