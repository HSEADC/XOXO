/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var word = document.querySelector('.highlighted-word');
  var termin = document.querySelector('.termin');
  var content = document.querySelector('.article');
  word.addEventListener('mouseenter', function () {
    content.classList.add('blur'), termin.classList.add('visible_termin');
  });
  word.addEventListener('mouseleave', function () {
    content.classList.remove('blur'), termin.classList.remove('visible_termin');
  });
});
/******/ })()
;