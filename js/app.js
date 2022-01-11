//Bookmark
const bookmark = document.getElementById("bookmark")
const bookmarkText = document.querySelector(".bookmark");
// Menubuttons && Icon
const subMenuBtn = document.getElementById("subMenu");
const subMenu = document.querySelector(".subMenu");
const subMenuIcon = document.getElementById("#subMenuIcon");
const isMenuOpen =false;

const totalLayer = document.querySelector(".total_layer");
// modal
const modalSnap = document.querySelector(".modal_snap");
const modalInner  = document.querySelectorAll(".modal_inner");
// reward selection 
const selectReward = document.querySelectorAll(".select_reward");
// pledge input 
const inputPledge = document.querySelectorAll(".enter_pledge");
const pledgeValue = document.getElementsByName("pledge");
// thankscard
const thanksCard = document.querySelector(".thanks_card") 

//  MENU && SUBMENU DISPLAY


subMenuBtn.addEventListener("click", () => {
    isMenuOpen ==! isMenuOpen;
    if (isMenuOpen) {
      subMenu.style.display = "block";
      totalLayer.classList.add("show");
      subMenuIcon.src = "./assets/icons/icon-close-menu.svg"
    } else {
      subMenu.style.display = "none";
      totalLayer.classList.remove("show");
      subMenuIcon.src = "./assets/icons/icon-hambuger.svg"
    }
  });
  


// mobileMenu.addEventListener('click', () =>{
//     isMenuOpen = !isMenuOpen;
//     if(isMenuOpen){
//         navMenu.style.display = "block";
//         totalLayer.classList.add("show");
//         imageIcon.src = "./assets/icons/icon-hamburger.svg";
//     }else{
//         navMenu.style.display = "none";
//         totalLayer.classList.remove("show");
//         imageIcon.src = "./assets/icons/icon-hamburger.svg";
//     }
// });