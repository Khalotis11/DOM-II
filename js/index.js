// Your code goes here
// const mybutton = document.querySelectorAll('.nav-link')
// mybutton.addEventListener('click', function(event) {
//     console.log('you clicked me');
//     mybutton.style.color='red';
    
//   });
let navBar = document.querySelector('a');
navBar.addEventListener('mouseover',function(event){
    event.stopPropagation();
    navBar.style.borderBottom = '2px solid red';     
});

let navItems = document.querySelectorAll('.nav-link');
navItems.forEach(node => {
    node.addEventListener('dblclick', function(event) {
        event.target.style.color = '#fb703f';
    })
})

let firstH = document.querySelector('h1')
let hSelect = document.querySelector('h2');
hSelect.addEventListener('mouseout',function(event){
    hSelect.style.fontSize = '5rem';
    hSelect.style.color = 'purple';
    firstH.style.color = 'purple';
});

let form = document.getElementById('form');
form.addEventListener('focus', function( event ) {
  event.target.style.background = '#ACD2AD';    
},true);

form.addEventListener('blur', function( event ) {
  event.target.style.background = '';    
},true);

let login = document.querySelector('.btn2');
login.addEventListener('click',function(event){
    alert ('Please Add your login Informations!');
});