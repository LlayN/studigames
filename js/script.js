const buttonLateralPc = document.querySelector('.buttonLateralPc')
const buttonLateralMobile = document.querySelector('.buttonLateralMobile')
const showDivMobile = document.querySelector('.leftListMobile')
const showDivPc = document.querySelector('.leftListPc')
const btnRegister = document.querySelector('.btn-register')
const contGames = document.querySelectorAll('.contGames')
const rowGames = document.querySelectorAll('.rowGames')
const divMenuLateralMobile = document.querySelector('.divMenuLateralMobile')


/* CODE POUR BOUTON LATERAL MENU */

let checkLateral = window.innerWidth <= 767;

buttonLateralPc.addEventListener('click', () => {
  showDivPc.style.display = 'none'
  showDivMobile.style.display = 'flex'
  if(window.innerWidth >= 767){
    contGames.forEach((element) => {
      element.style.paddingLeft = '12px'
      element.style.paddingTop = '80px'
    })
  }
  
})

buttonLateralMobile.addEventListener('click', () => {
  showDivMobile.style.display = 'none'
  showDivPc.style.display = 'block'
  if(window.innerWidth >= 767){
    contGames.forEach((element) => {
      element.style.paddingLeft = '230px'
      element.style.paddingTop = '25px'
    })

  }
  
})



function loadRezise(){
  if(window.innerWidth <= 767){
    showDivPc.style.display = 'none'
    showDivMobile.style.display = 'flex'
    contGames.forEach((element) => {
      element.style.paddingLeft = '12px'
      element.style.paddingTop = '80px'
    })
  }
}

window.addEventListener('load', loadRezise);

btnRegister.addEventListener('mouseenter', () => {
  btnRegister.classList.add('btnRegisterAnim')
})

btnRegister.addEventListener('mouseleave', () => {
  btnRegister.classList.remove('btnRegisterAnim')
})


rowGames.forEach((element) => {
  element.addEventListener('wheel', function (e) {
    e.preventDefault()
    this.scrollLeft += e.deltaY;
    
})})

divMenuLateralMobile.addEventListener('wheel', function (e) {
  e.preventDefault()
  this.scrollLeft += e.deltaY;
})