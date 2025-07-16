//your JS code here. If required.
let count = 0; // Start count at 0 for the first element
let inps = document.getElementsByClassName("code");

// Function to move focus forward
function moveFocusForward(event) {
    if (event.key !== ' ' && !event.ctrlKey && !event.altKey && !event.metaKey) {
        if (count < inps.length - 1) { // Ensure we don't go out of bounds
            count++;
            inps[count].focus();
            //console.log("Moved focus to next element:", inps[count]);
        }
    }
}

// Function to move focus backward on Backspace
function moveFocusBackward(event) {
    if (event.key === "Backspace" || event.keyCode === 8) {
        event.preventDefault(); // Prevent browser's back navigation

        if (count => 0) {
			if(count == 0) {
				event.target.value = '';
			}
			else {
				event.target.value = '';
            	count--;
            	inps[count].focus();
			}
        }
    }
}

// Attach event listeners to all input fields
for (let i = 0; i < inps.length; i++) {
    inps[i].addEventListener('input', moveFocusForward);
    inps[i].addEventListener('keydown', moveFocusBackward);
}

if (inps.length > 0) {
    inps[0].focus();
}