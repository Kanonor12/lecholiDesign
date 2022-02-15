//const signUp  = document.querySelector('.signup');
//const options = document.getElementById('signup-options')
//const signUp  = document.querySelector('.signup');

//const dropDown = document.querySelector('.dropDownMenu')

//signUp.addEventListener('mouseenter', e => {
  
  // options.style.display = 'flex'
   
 
//})
//signUp.addEventListener('click', e => {
    
  //   console.log("Button clicked")
  
// })
//dropDown.addEventListener('mouseleave', e => {
  //  options.style.display = 'none'
  
//})

const openBtn = document.querySelector('.signup')
const closeBtn = document.querySelector('.close-btn')
const modal = document.getElementById('email-modal')


//click events
openBtn.addEventListener('click', () => {
  modal.style.display = 'block'
  console.log("button clicked")
  console.log.apply('modal')
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

window.addEventListener('click', e => {
  if(e.target === modal){
    modal.style.display = 'none';
  }
})


