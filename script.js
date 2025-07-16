let count = 0; // Start count at 0 for the first element
let inps = document.getElementsByClassName("code");

// Function to move focus forward after typing a character
function handleInputAndAdvance(event) {
    // Check if the current input has reached its maximum length (e.g., maxlength="1")
    // and if it's not the last input field.
    if (event.target.value.length === event.target.maxLength && event.target.maxLength > 0) {
        if (count < inps.length - 1) { // Ensure we don't go out of bounds
            count++;
            inps[count].focus();
            console.log("Moved focus to next element:", inps[count]);
        } else {
            // Optional: If at the last element and full, you might want to blur it or trigger a submission
            // event.target.blur();
            console.log("Reached the last element.");
        }
    }
}

// Function to handle Backspace for clearing or moving focus backward
function handleBackspace(event) {
    if (event.key === "Backspace" || event.keyCode === 8) {
        event.preventDefault(); // Prevent browser's default backspace behavior

        // If the current input field is NOT empty, clear its value and stay focused.
        if (event.target.value !== '') {
            event.target.value = ''; // Clear the character
            // The field remains focused naturally
        }
        // If the current input field IS empty, move focus to the previous one.
        else {
            if (count > 0) { // Ensure we don't go below the first element
                count--; // Decrement count to go to the previous element
                inps[count].focus(); // Set focus to the previous element
                console.log("Moved focus to previous element:", inps[count]);
            } else {
                console.warn("Already at the first element, cannot move back further.");
            }
        }
    }
}

// Attach event listeners to all input fields
for (let i = 0; i < inps.length; i++) {
    // For moving forward (after typing a character)
    inps[i].addEventListener('input', handleInputAndAdvance);

    // For handling Backspace (clearing or moving backward)
    inps[i].addEventListener('keydown', handleBackspace);
}

// Optional: Initially focus the first element when the page loads
if (inps.length > 0) {
    inps[0].focus();
    console.log("Initial focus on:", inps[0]);
}