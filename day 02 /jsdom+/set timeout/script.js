const surpriseBtn = document.getElementById('surpiseBtn')
const heading = document.getElementById('heading')

surpriseBtn.addEventListener('click', () =>{
    heading.textContent = 'surprise'
    setTimeout(() => {
        heading.textContent = ''
    }, 10000);
})