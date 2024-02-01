var currentImage = 1;

function changeImage() {
    var img = document.getElementById('img1');
    if (currentImage === 1) {
        img.src = 'images/200x200(Blue).gif';
        currentImage = 2;
    } else {
        img.src = 'images/200x200.gif';
        currentImage = 1;
    }
}

function SliderImage() {
    var img = document.getElementById('img2');
} 

function rotateImage(degrees) {
    var img = document.getElementById('img2');
    img.style.transform = 'rotate(' + degrees + 'deg)';
}

function handleTouch() {
    starImg.style.display = "block"; 
}

function showImage(sectionId) {
    var section = document.getElementById(sectionId);
    var img = section.querySelector('img');
    if (img) {
        
        img.remove();
    } else {
       
        img = document.createElement('img');
        img.src = 'images/Star.png';
        img.setAttribute('style', 'width: 75px; height: 260px;');
        section.appendChild(img);
        
    }
}






