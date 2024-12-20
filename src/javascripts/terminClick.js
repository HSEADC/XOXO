document.addEventListener('DOMContentLoaded', () => {
  const word = document.querySelector('.highlighted-termin')
  const termin = document.querySelector('.termin2')
  const content = document.querySelector('.article2')

  word.addEventListener('mouseenter', () => {
    content.classList.add('blur'), termin.classList.add('visible_termin')
  })
  word.addEventListener('mouseleave', () => {
    content.classList.remove('blur'), termin.classList.remove('visible_termin')
  })
})
