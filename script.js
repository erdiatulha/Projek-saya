
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



