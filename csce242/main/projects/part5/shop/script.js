document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Load product images dynamically
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const imageRow = document.getElementById('imageRow');
            data.imageColumns.forEach(column => {
                const imageColumn = document.createElement('div');
                imageColumn.className = 'image-column';
                column.images.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image.src;
                    imgElement.alt = image.alt;
                    imageColumn.appendChild(imgElement);
                });
                imageRow.appendChild(imageColumn);
            });
        })
        .catch(error => {
            console.error('Error loading the product images:', error);
        });
});
