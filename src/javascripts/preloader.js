document.addEventListener('DOMContentLoaded', () => {
  const confirm = document.querySelector('.confirm_button')
  const preloader = document.querySelector('.preloader')


  confirm.addEventListener('click', () => {
    preloader.classList.add('inactive_preloader')
  })
})
