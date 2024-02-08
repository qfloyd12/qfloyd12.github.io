function updateYogaImage() {
    var sliderValue = document.getElementById("slider").value;
    var imagePath = "../images/yoga" + sliderValue + ".jpg";
 
    for (var i = 1; i <= 8; i++) {
        var image = document.getElementById("yogaImage" + i);
        
        if (i == sliderValue) {
           
            image.src = imagePath;
            
            image.style.display = "inline";
        } else {
            
            image.style.display = "none";
        }
    }
}
