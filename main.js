const defaultContainer = document.getElementById('default-container');
const contactMeContainer = document.getElementById('nav-item-four-container');
const contactMe = document.getElementById('item_four');

contactMe.addEventListener('click', function () {
    if (contactMeContainer.style.display === 'none') {
        contactMeContainer.style.display === 'block';
        defaultContainer.style.display === 'none';
    } else {
        contactMeContainer.style.display === 'none';
        defaultContainer.style.display === 'block'
    }
})