const submitBtn = document.getElementById('submitBtn')
const input = document.getElementById('toDoInput')
const list = document.getElementById('list')
const removeBtn = document.getElementById('removeBtn')
const allListItems = document.querySelectorAll('li')


submitBtn.addEventListener('click', () =>{
    const listItem = document.createElement("li")
    listItem.textContent = toDoInput.value
    list.appendChild(listItem)
})

removeBtn.addEventListener('click', () =>{
    const lastLiitem = document.querySelector("li:last-child")
    list.removeChild(lastLiitem)
})

allListItems.forEach((listItem) =>{
    listItem.addEventListener('click', (event) =>{
        list.removeChild(event.target)
    })
})


list.addEventListener('mouseover', (event) =>{
    event.target.textContent = event.target.textContent.toUpperCase()
})

