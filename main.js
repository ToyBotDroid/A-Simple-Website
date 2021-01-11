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

// Dark-Light Mode

modeBtn.addEventListener("change", () => {
  if( modeBtn.checked === true){
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");      
      nav.classList.remove("light-theme");
      nav.classList.add("dark-theme");
      menuListItems.classList.remove("light-theme");
      menuListItems.classList.add("dark-theme");
  }else{
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      nav.classList.remove("dark-theme");
      nav.classList.add("light-theme");
      menuListItems.classList.remove("dark-theme");
      menuListItems.classList.add("light-theme");   
      
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