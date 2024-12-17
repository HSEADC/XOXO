document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const item = document.querySelector('.item-menu')
  const content = document.querySelector('.menu-mobile')

  item.addEventListener('click', () => {
    burgerMenu.classList.add('active')
  })

  if (burgerMenu.classList.has('active') == 1) {
    item.addEventListener('click', () => {
      burgerMenu.classList.remove('active')
    })
  }
})
