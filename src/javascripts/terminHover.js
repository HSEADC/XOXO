document.addEventListener('DOMContentLoaded', () => {
  const word = document.querySelector('.highlighted-word')
  const content = document.querySelector('.article')

  word.addEventListener('mouseenter', () => {
    content.classList.add('blur')
  })

  word.addEventListener('mouseleave', () => {
    content.classList.remove('blur')
  })
})
