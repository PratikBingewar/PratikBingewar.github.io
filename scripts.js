// Get the poem element
const poemElement = document.querySelector('.poem');

// Add event listener to the poem element
poemElement.addEventListener('click', function() {
    // Change the text color to red when clicked
    this.style.color = 'red';
});

