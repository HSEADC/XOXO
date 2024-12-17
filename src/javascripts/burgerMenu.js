document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const item = document.querySelector('.item-menu')

  item.addEventListener('click', () => {
    content.classList.add('.burger-menu')
  })
  item.addEventListener('click', () => {
    content.classList.remove('.burger-menu')
  })
})
