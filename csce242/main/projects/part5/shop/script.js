document.getElementById("").addEventListener("", function() {
    var color = this.value;
    var image = document.querySelector("");
    image.src = "" + color + ""; 
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});