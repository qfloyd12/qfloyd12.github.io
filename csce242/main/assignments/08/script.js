
const imageElement = document.getElementById('image');
const commandInput = document.getElementById('commandInput');

commandInput.addEventListener('input', handleCommands);

function handleCommands() {

    const input = commandInput.value.toLowerCase();

    for (let i = 0; i < input.length; i++) {
        const command = input[i];
        if (command === 'b') {
            imageElement.src = 'images/read.jpg'; 
        } else if (command === 'c') {
            imageElement.src = 'images/clown.jpg'; 
        } else if (command === 'p') {
            imageElement.src = 'images/birthday.jpg'; 
        } else if (command === 'r') {
            imageElement.src = 'images/rain.jpg'; 
        } else if (command === 's') {
            imageElement.src = 'images/shovel.jpg'; 
        } else if (command === 'w') {
            imageElement.src = 'images/work.jpg'; 
        }
    }
}



