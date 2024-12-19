/******/ (() => { // webpackBootstrap
document.addEventListener('DOMContentLoaded', function () {
  var triangle = document.getElementById('triangle');
  var clickToggle = document.querySelector('.click_toggle');
  var hiddenText = document.querySelector('.hidden_block_text');
  var isRotated = false;
  function toggleTriangle() {
    isRotated = !isRotated;
    triangle.style.transform = isRotated ? 'rotate(90deg)' : 'rotate(0deg)'; // Поворот треугольника
    hiddenText.classList.toggle('visible'); // Показ/скрытие текста
  }
  clickToggle.addEventListener('click', function () {
    toggleTriangle();
  });
});
/******/ })()
;