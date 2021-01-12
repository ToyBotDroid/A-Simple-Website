// swal({
//      title:"Welcome !",
//      text: "If the texts are too small to read, then just zoom in the browser with control+ or from the browser menu",
//      buttons: {
//             // cancel: true,
//             confirm: "Ok"
//      }
// });


// Primiary reference selection

const modeBtn = document.querySelector('#btn-mode');
const nav = document.querySelector('#nav-bar');
const menuListItems = document.querySelector(".menu-content");
const menuBtn = document.querySelector(".menu-btn")
const navContent = document.querySelector(".menu-content")
const navLinks = document.querySelectorAll(".nav-link")
const modalBtn = document.querySelector(".modal-btn")
const modalClose = document.querySelector(".modal-close")
const modal = document.querySelector(".modal-wrapper")

// Dark-Light Mode

function addDarkTheme(){
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");      
  nav.classList.remove("light-theme");
  nav.classList.add("dark-theme");
  menuListItems.classList.remove("light-theme");
  menuListItems.classList.add("dark-theme");
}

function addLightTheme(){
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  nav.classList.remove("dark-theme");
  nav.classList.add("light-theme");
  menuListItems.classList.remove("dark-theme");
  menuListItems.classList.add("light-theme");  
}
modeBtn.addEventListener("change", () => {
  if( modeBtn.checked === true){
    addDarkTheme()
  }else{
    addLightTheme()   
  }
});

// Responsive Nav Bar

menuBtn.addEventListener("click",() => {
  navToggle();
})

function navToggle(){
  menuBtn.classList.toggle("active");
  navContent.classList.toggle('active')
}

navLinks.forEach( item =>{
  item.addEventListener("click", () => {
    navToggle()
  })
})

// modal

modalBtn.addEventListener("click", () => {
  modal.style.display = 'grid';
})

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
})
modal.addEventListener('click', () => {
  modal.style.display = 'none';
})