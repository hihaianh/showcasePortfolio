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


//toggle img popup when clicking 'view certificates'

const certificatePopUp = document.querySelectorAll(".certificate-show");
const certificateImg = document.querySelectorAll(".img-popup");
const closePopUp = document.querySelector(".img-popup i");

certificatePopUp.forEach(function(certificatePopUp) {
    certificatePopUp.addEventListener("click", function() {
        certificateImg.classlist.toggle("hidden")
    })
})
