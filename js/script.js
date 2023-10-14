const buttonLateralPc = document.querySelector('.buttonLateralPc')
const buttonLateralMobile = document.querySelector('.buttonLateralMobile')
const showDivMobile = document.querySelector('.leftListMobile')
const showDivPc = document.querySelector('.leftListPc')
const btnRegister = document.querySelector('.btn-register')
const contGames = document.querySelectorAll('.contGames')
const rowGames = document.querySelectorAll('.rowGames')


/* CODE POUR BOUTON LATERAL MENU */

let checkLateral = window.innerWidth <= 767;

buttonLateralPc.addEventListener('click', () => {
  showDivPc.style.display = 'none'
  showDivMobile.style.display = 'block'
  if(window.innerWidth >= 767){
    contGames.forEach((element) => {
      element.style.paddingLeft = '60px'
    })
  }
  
})

buttonLateralMobile.addEventListener('click', () => {
  showDivMobile.style.display = 'none'
  showDivPc.style.display = 'block'
  if(window.innerWidth >= 767){
    contGames.forEach((element) => {
      element.style.paddingLeft = '230px'
    })

  }
  
})

function handleResize() {
  if (window.innerWidth <= 767 && !checkLateral) {
    checkLateral = true;
    showDivPc.style.display = 'none';
    showDivMobile.style.display = 'block';
    contGames.forEach((element) => {
      element.style.paddingLeft = '60px'
    })


  } 
  else if (window.innerWidth > 767 && checkLateral) {
    checkLateral = false;
    showDivMobile.style.display = 'none';
    showDivPc.style.display = 'block';
    contGames.forEach((element) => {
      element.style.paddingLeft = '230px'
    })

  }
}

function loadRezise(){
  if(window.innerWidth <= 767){
    showDivPc.style.display = 'none'
    showDivMobile.style.display = 'block'
    contGames.forEach((element) => {
      element.style.paddingLeft = '60px'
    })
  }
}

window.addEventListener('load', loadRezise);
window.addEventListener('resize', handleResize);

btnRegister.addEventListener('mouseenter', () => {
  btnRegister.classList.add('btnRegisterAnim')
})

btnRegister.addEventListener('mouseleave', () => {
  btnRegister.classList.remove('btnRegisterAnim')
})


rowGames.forEach((element) => {
  element.addEventListener('wheel', function (e) {
    console.log(e)
    e.preventDefault()
    this.scrollLeft += e.deltaY;
})})