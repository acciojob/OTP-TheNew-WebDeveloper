let inps = document.getElementsByClassName("code"); // Define globally

// Function to move focus forward
function handleInputAndAdvance(event) {
    // Update count based on the current element's index
    let currentIdx = Array.from(inps).indexOf(event.target);
    if (currentIdx !== -1) { // Ensure the element is found in our collection
        // Check if the current input is full and not the last
        if (event.target.value.length === event.target.maxLength && event.target.maxLength > 0) {
            if (currentIdx < inps.length - 1) {
                inps[currentIdx + 1].focus();
            }
        }
    }
}

// Function to handle Backspace
function handleBackspace(event) {
    if (event.key === "Backspace" || event.keyCode === 8) {
        event.preventDefault();

        let currentIdx = Array.from(inps).indexOf(event.target); // Get current index
        if (currentIdx === -1) return; // Should not happen if attached correctly

        if (event.target.value !== '') { // If the field has content
            event.target.value = ''; // Clear its content
            // Focus remains on the current element
        } else { // If the field is empty
            if (currentIdx > 0) { // If it's not the first element
                inps[currentIdx - 1].focus(); // Move focus to the previous element
            }
            // If currentIdx is 0 (first element), stay focused but don't move back
        }
    }
}

// Attach event listeners to all input fields
for (let i = 0; i < inps.length; i++) {
    inps[i].addEventListener('input', handleInputAndAdvance);
    inps[i].addEventListener('keydown', handleBackspace);
}

// Initially focus the first element when the page loads
if (inps.length > 0) {
    inps[0].focus();
}