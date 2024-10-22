document.addEventListener('DOMContentLoaded', () => {
  const click = document.querySelector('.click_toggle')
  const hiddenText = document.querySelector('.hidden_block_text')

  click.addEventListener('click', () => {
    hiddenText.classList.toggle('visible')
  })
})
