document.addEventListener('DOMContentLoaded', () => {
  const triangle = document.getElementById('triangle')
  const clickToggle = document.querySelector('.click_toggle')
  const hiddenText = document.querySelector('.hidden_block_text')

  let isRotated = false

  function toggleTriangle() {
    isRotated = !isRotated
    triangle.style.transform = isRotated ? 'rotate(90deg)' : 'rotate(0deg)' // Поворот треугольника
    hiddenText.classList.toggle('visible') // Показ/скрытие текста
  }

  clickToggle.addEventListener('click', () => {
    toggleTriangle()
  })
})
