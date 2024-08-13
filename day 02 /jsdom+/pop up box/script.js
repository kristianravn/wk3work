const closeBtn = document.getElementById('closeBtn')
const openBtn = document.getElementById('openBtn')



closeBtn.addEventListener('click', () => {
    closeBtn.parentNode.style.display = 'none'
})

openBtn.addEventListener('click', () => {
    openBtn.previousElementSibling.style.display = 'block'
})