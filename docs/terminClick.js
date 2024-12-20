/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var word = document.querySelector('.highlighted-termin');
  var termin = document.querySelector('.termin2');
  var content = document.querySelector('.article2');
  word.addEventListener('mouseenter', function () {
    content.classList.add('blur'), termin.classList.add('visible_termin');
  });
  word.addEventListener('mouseleave', function () {
    content.classList.remove('blur'), termin.classList.remove('visible_termin');
  });
});
/******/ })()
;