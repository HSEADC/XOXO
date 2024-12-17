document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const item = document.querySelector('.item-menu')

  item.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
  })
})
