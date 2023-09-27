function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}



const phrases = ["A Frontend Developer", "A Website Designer"];
const textElement = document.getElementById("changing-text");

// Function to change the text
function changeText() {
    let currentIndex = 0;

    // Function to update the text with the next phrase
    function updateText() {
        textElement.textContent = phrases[currentIndex];
        currentIndex = (currentIndex + 1) % phrases.length;
    }

    // Set an interval to change the text at a specific time interval (e.g., every 2 seconds)
    setInterval(updateText, 2000); // Change every 2 seconds (2000 milliseconds)
}

// Call the function to initiate the text alternation
changeText();