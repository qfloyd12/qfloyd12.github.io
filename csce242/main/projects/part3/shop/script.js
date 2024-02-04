document.getElementById("color").addEventListener("change", function() {
    var color = this.value;
    var image = document.querySelector(".product-image img");
    image.src = "shoe-" + color + ".jpg"; 
});