document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    fetch('./ShoesData.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data); // Confirm data is loaded
            const shoesContainer = document.getElementById('shoes-container');
            if (!shoesContainer) {
                console.error('shoes-container element not found');
                return;
            }
            data.shoes.forEach(shoe => {
                console.log('Adding shoe:', shoe.name); // Confirm each shoe is processed
                const shoeElement = document.createElement('div');
                shoeElement.className = 'image-container';
                shoeElement.innerHTML = `
                    <img src="${shoe.image}" alt="${shoe.name}">
                    <div class="hover-text">${shoe.name}</div>
                `;
                shoesContainer.appendChild(shoeElement);
            });
        })
        .catch(error => {
            console.error('Error loading shoes data:', error);
        });
});
