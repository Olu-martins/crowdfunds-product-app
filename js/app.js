//----------------------Bookmark-------------------------
let bookmark = document.getElementById("bookmark")
let bookmarkText = document.querySelector(".bookmark");
//-----------------Menubuttons && Icon-----------------
let hamburger = document.getElementById("subMenu");
let navItems = document.querySelector(".subMenu");
let subMenuIcon = document.getElementById("subMenuIcon");
let isMenuOpen = false;
let totalLayer = document.querySelector(".total_layer");
//---------------------modal-----------------------------
let modalSnap = document.querySelector(".modal_snap");
let modalInner  = document.querySelectorAll(".modal_inner");
//---------------reward selection------------------------ 
let selectReward = document.querySelectorAll(".select_reward");
//------------------pledge input------------------------- 
let inputPledge = document.querySelectorAll(".enter_pledge");
let pledgeValues = document.getElementsByName("pledge");
//------------------thankscard---------------------------
let thanksCard = document.querySelector(".thanks_card") 

//---------------------MENU && SUBMENU DISPLAY------------------------------
hamburger.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  if(isMenuOpen){
    navItems.style.display = "block";
    totalLayer.classList.add("show");
    subMenuIcon.src = "./assets/icons/icon-close-menu.svg";
  }else{
    navItems.style.display = "none";
    totalLayer.classList.remove("show");
    subMenuIcon.src = "./assets/icons/icon-hamburger.svg";
  }
});
  
//-----------------------------BOOKMARK-------------------------------
let bookmarked = false;
bookmark.addEventListener('click', () => {
    bookmarked = !bookmarked;
    bookmarked
    ? (bookmarkText.innerText = "Bookmarked")
    : (bookmarkText.innerText = "Bookmark" )
});

//------------------------OPEN && CLOSE MODAL--------------------------- 
document.getElementById('close_modal').addEventListener('click', () => {
  modalSnap.classList.remove("show");
  totalLayer.classList.remove("show")
});

document.getElementById("open_modal").addEventListener('click', () => {
  modalSnap.classList.add("show");
  totalLayer.classList.add("show")
});

//---------------------------MODAL PLEDGE--------------------------------- 
for (let i = 0; i < pledgeValues.length; i++){
  pledgeValues[i].addEventListener('click', (e) => {
    clearBorder();
    e.path[2].style.border = "2px solid gray";
    modalInner[i].classList.add("display-pledge");
    inputPledge[i].innerHTML = `
    <h3>Enter your pledge</h3>
    <label for="pledge">
    <span>$</span>
    <input type="text" />
    </label>
    <button onclick="displaythanks()">Continue</button>
    `
  });
}

function clearBorder () {
  for(let i = 0; i < pledgeValues.length; i++){
    modalInner[i].style.border = "1px solid rgba(128, 128, 128, 0.479)";
    modalInner[i].classList.remove("display-pledge");
    inputPledge[i].innerHTML = "";
  }
}

//----------------------------THANKS CARD------------------------------------
let isDisplayThanks = true;
selectReward[0].addEventListener('click', displaythanks);
selectReward[1].addEventListener('click', displaythanks);
document.getElementById("gotit").addEventListener('click', displaythanks);

function displaythanks () {
  if(isDisplayThanks){
    thanksCard.classList.add("show");
    totalLayer.classList.add("show");
    modalSnap.classList.remove("show");
    clearBorder();    
  }else{
    thanksCard.classList.remove("show");
    totalLayer.classList.remove("show");
    clearBorder();    
  }
  isDisplayThanks = !isDisplayThanks;
}

//--------------------- COUNTER AND PROGRESS BAR----------------------------

function numberCal() {
  const counters = document.querySelectorAll(".counter");
  const rate1 = 500;
  const rate2 = 5000;    
  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;            
          let num = 0;

          if (target > 50000) {
              num = Math.floor(target / rate2);
          } else {
              num = Math.floor(target / rate1);
          }

          if (count < target) {
              counter.innerText = (count + num).toLocaleString();
              setTimeout(updateCount, 5);
          } else {
              counter.innerText = (target).toLocaleString();
          }
      };
      updateCount();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  numberCal();
})
