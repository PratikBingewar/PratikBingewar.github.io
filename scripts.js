const poemLines = [
    "My love for you knows no bounds,",
    "You are always in my thoughts and prayers,",
    "Your smile brightens up my darkest days,",
    "I cherish every moment spent with you,",
    "Forever and always, my love for you will stay true."
];

const poemDisplay = document.getElementById('poem');
let lineIndex = 0;

function displayNextLine() {
    poemDisplay.textContent = poemLines[lineIndex];
    lineIndex = (lineIndex + 1) % poemLines.length;
}

// Initial display
displayNextLine();

// Display next line every 3 seconds
setInterval(displayNextLine, 3000);
