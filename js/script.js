// Add this JavaScript to toggle the menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
   
    burgerMenu.addEventListener('click', function() {
        console.log("test");
        burgerMenu.classList.toggle('open');
    });
});
