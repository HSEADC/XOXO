document.addEventListener('DOMContentLoaded', () => {
  const word = document.querySelector('.highlighted-word')
  const termin = document.querySelector('.termin')
  const content = document.querySelector('.article')

  word.addEventListener('mouseenter', () => {
    content.classList.add('blur'), termin.classList.add('visible_termin')
  })
  word.addEventListener('mouseleave', () => {
    content.classList.remove('blur'), termin.classList.remove('visible_termin')
  })
})
