// Your code goes here

let navBar = document.querySelector('a');
navBar.addEventListener('mouseover',(event) => {
    navBar.style.borderBottom = '2px solid red';     
});

let headerImage = document.querySelector('.intro img')
let navItems = document.querySelectorAll('.nav-link');
navItems.forEach(event => {
    event.addEventListener('dblclick', (event) => {
        event.target.style.color = '#fb703f';
        headerImage.style.border = '2px dashed #fb703f'; 
    })
})

let firstH = document.querySelector('h1')
let hSelect = document.querySelector('h2');
hSelect.addEventListener('mouseout',(event) => {
    hSelect.style.fontSize = '5rem';
    hSelect.style.color = 'purple';
    firstH.style.color = 'purple';
});

let form = document.getElementById('form');
form.addEventListener('focus', (event) => {
  event.target.style.background = '#ACD2AD';    
},true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
},true);

let login = document.querySelector('.btn2');
login.addEventListener('click',(event) => {
    alert ('Please Add your login Informations!');
});

let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(event =>{
    event.addEventListener('copy', (event) => {
        alert("You are copying my content!");
    })
})

let allExpeditionsTitle = document.querySelectorAll('.destination h4')
allExpeditionsTitle.forEach(event => {
    event.addEventListener('mousemove', (event) => {
        event.target.style.color = 'purple';
    })
})

let allButtons = document.querySelectorAll('.btn');
allButtons.forEach(event => {
    event.addEventListener('click', () => {
       let name = prompt('Enter name');
        console.log(name + ' you are signed up!');
    })
});

let footer = document.querySelector('.footer');
footer.addEventListener('contextmenu', (event) => {
    event.target.style.color = 'dodgerblue';
})

// add stopPropagation();

let home = document.querySelector('.home');
home.addEventListener('click', () => {
    home.style.backgroundColor = '#efefef';
});

allParagraphs.forEach(event =>{
    event.addEventListener('click', (event) => {
        event.stopPropagation();
    })
})

// add preventDefault();
// I added the lambda school website to the home button 

let lambda = document.querySelector('a');
lambda.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Error 0000. Sorry! ');
});
