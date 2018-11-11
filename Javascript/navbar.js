////////
////
//// NavBar
////
///////

const navbar = document.querySelector('.wrapper-navigation');

window.addEventListener('scroll', () => {

  if(window.scrollY > 500){
    navbar.classList.add('active')
    }

  else{
    navbar.classList.remove('active')
  }
});
