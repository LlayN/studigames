const buttonLateralPc = document.querySelector('.buttonLateralPc')
const buttonLateralMobile = document.querySelector('.buttonLateralMobile')
const showDivMobile = document.querySelector('.leftListAfterAnimation')
const showDivPc = document.querySelector('.leftList')


var checkLateral = window.innerWidth <= 767;

buttonLateralPc.addEventListener('click', () => {
  showDivPc.style.display = 'none'
  showDivMobile.style.display = 'block'
})

buttonLateralMobile.addEventListener('click', () => {
  showDivMobile.style.display = 'none'
  showDivPc.style.display = 'block'
})

function handleResize() {
  if (window.innerWidth <= 767 && !checkLateral) {
    checkLateral = true;
    showDivPc.style.display = 'none';
    showDivMobile.style.display = 'block';
  } 
  else if (window.innerWidth > 767 && checkLateral) {
    checkLateral = false;
    showDivMobile.style.display = 'none';
    showDivPc.style.display = 'block';
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
