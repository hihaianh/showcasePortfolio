const navItem = document.querySelectorAll(".nav-item")
const navItemAnchor = document.querySelectorAll(".nav-item a")
const navItemLine = document.querySelectorAll(".nav-line")
const navItemText = document.querySelectorAll("span")

// to store last clicked navItem
const lastClickedNavItem = null;

navItem.forEach(function(navItem) {
    navItem.addEventListener("click", function() {
        navItem.style.transform = "translateX(30px)";
        // keep track of last clicked nav item and listen for next nav item 
        // unclick last nav item (+ apply original styling) and 
        // apply clicked changes to new nav item
    })
})


//once images icon is clicked, pop-up showing certificate/img/pdf will show

const certificatePopUp = document.querySelector(".certificate-show");
const certificateImg = document.querySelector(".img-popup");
const closePopUp = document.querySelector(".img-popup i");

certificatePopUp.addEventListener("click", function() {
    certificateImg.style.display = "block";
})

closePopUp.addEventListener("click", function() {
    certificateImg.style.display = "none";
})

//if user clicks outside the popup, close the popup