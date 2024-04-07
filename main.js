const navItem = document.querySelectorAll(".nav-item")
const navItemAnchor = document.querySelectorAll(".nav-item a")
const navItemLine = document.querySelectorAll(".nav-line")
const navItemText = document.querySelectorAll("span")

navItem.forEach(function(navItem) {
    navItem.addEventListener("click", function() {
        navItem.style.transform = "translateX(30px)";
        // keep track of last clicked nav item and listen for next nav item 
        // unclick last nav item (+ apply original styling) and 
        // apply clicked changes to new nav item
    })
})