/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var confirm = document.querySelector('.confirm_button');
  var preloader = document.querySelector('.preloader');
  confirm.addEventListener('click', function () {
    preloader.classList.add('inactive_preloader');
  });
});
/******/ })()
;