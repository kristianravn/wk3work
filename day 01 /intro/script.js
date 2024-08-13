console.log("hello there!!")

// const listItems = document.getElementsByTagName(`li`);

// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.color = "red";
//     listItems[i].textContent = "i am index number" +i
// };

// const header = document.getElementById(`heading`);

// header.textContent = "hello "

// const list = document.getElementById(`listwrapper`);

// list.innerHTML +="<li> New List item</li>"

// const header = document.getElementById(`heading`);
// const list = document.querySelector("ul");
// const listitems = document.getElementsByClassName("listitem")

// header.style.border = "3px solid red";
// list.style.backgroundColor = 'yellow';
// list[1].style.display = 'none';

// const header = document.getElementById('heading');

// header.addEventListener('click', () => {
//     header.textContent = "it has changed !!!!"
// });

// const heading = document.getElementById('heading');

// heading.addEventListener('mouseover', () => {
//     heading.textContent = heading.textContent.toUpperCase()
// });

// heading.addEventListener('mouseout', () => {
//     heading.textContent = heading.textContent.toLowerCase()
// });

const heading = document.getElementById('heading');
const inputBox = document.getElementById('inputBox');
const submit = document.getElementById('submit');

document.addEventListener('keypress', (event) => {
    console.log(event)
    console.log(event.target)
  
})