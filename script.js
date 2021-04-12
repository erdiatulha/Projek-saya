
// dark-mode

var mode= document.getElementById('mode');

mode.onclick=function(){
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')){
    mode.src="fas fa-moon";
  } else{
    mode.src="fas fa-moon";
  }
} 

//hamburger menu

const menu = document.querySelector('.menu ul')
const closeMenu = document.querySelector('.header .menu .closeMenu')
const openMenu = document.querySelector('.header .openMenu')

openMenu.addEventListener('click' , show)
closeMenu.addEventListener('click' , close)

function show() {
  menu.style.display = 'flex' ;
  menu.style.top = '0' ;
}
function close() {
  menu.style.top = '-100%' ;
}





