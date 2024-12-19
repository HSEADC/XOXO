document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu')
  const item = document.querySelector('.item-menu')
  const nav = document.querySelector('.burger-nav')
  const logoMenu = document.querySelector('.logo-menu')


  item.addEventListener('click', () => {
    burgerMenu.classList.toggle('active'), 
    nav.classList.toggle('nav-active')
  })
  item.addEventListener('click', () => {
      logoMenu.classList.toggle('logo-inactive')
  })
})
