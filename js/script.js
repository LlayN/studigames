const buttonLateralPc = document.querySelector('.buttonLateralPc')
const buttonLateralMobile = document.querySelector('.buttonLateralMobile')
const showDivMobile = document.querySelector('.leftListMobile')
const showDivPc = document.querySelector('.leftListPc')
const btnRegister = document.querySelector('.btn-register')
const divnewGames = document.querySelector('.divnewGames')

/* CODE POUR BOUTON LATERAL MENU */

let checkLateral = window.innerWidth <= 767;

buttonLateralPc.addEventListener('click', () => {
  showDivPc.style.display = 'none'
  showDivMobile.style.display = 'block'
  divnewGames.style.paddingLeft = '60px'
})

buttonLateralMobile.addEventListener('click', () => {
  showDivMobile.style.display = 'none'
  showDivPc.style.display = 'block'
  divnewGames.style.paddingLeft = '210px'
})

function handleResize() {
  if (window.innerWidth <= 767 && !checkLateral) {
    checkLateral = true;
    showDivPc.style.display = 'none';
    showDivMobile.style.display = 'block';
    divnewGames.style.paddingLeft = '60px'
  } 
  else if (window.innerWidth > 767 && checkLateral) {
    checkLateral = false;
    showDivMobile.style.display = 'none';
    showDivPc.style.display = 'block';
    divnewGames.style.paddingLeft = '210px'
  }
}

function loadRezise(){
  if(window.innerWidth <= 767){
    showDivPc.style.display = 'none'
    showDivMobile.style.display = 'block'
  }
}

window.addEventListener('load', loadRezise);
window.addEventListener('resize', handleResize);


const preLoader = document.querySelector('.preLoader')
window.addEventListener('load', () => {
  setTimeout(() => {
    preLoader.style.display = "none"
  }, 2500)
})

btnRegister.addEventListener('mouseenter', () => {
  btnRegister.classList.add('btnRegisterAnim')
})

btnRegister.addEventListener('mouseleave', () => {
  btnRegister.classList.remove('btnRegisterAnim')
})