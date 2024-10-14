//^ Style-3


function showFirstAlert() {
    document.getElementById("firstAlert").style.display = "block";
}

// Show the custom input form after the first alert
function showInputForm() {
    closeAlert('firstAlert');
    document.getElementById("inputAlert").style.display = "block";
}

// Process the input number and display the final result in the third alert
function processInput() {
    // Step 1: Get user input from the custom input field
    let userInput = document.getElementById("userInput").value;

    // Convert the input to a number
    let number = parseFloat(userInput);

    // Step 2: Convert it into the greater number using Math.ceil
    let roundedNumber = Math.ceil(number); // Example: Math.ceil(3.4) => 4

    // Step 3: Declare a variable of string and assign some text
    var text = "draW-floW-keeP-livE-looP-mapS";

    // Step 4: Slice the text into a new variable from 0 to the rounded number
    let slicedText = text.slice(0, roundedNumber); // Example: text.slice(0, 4) => "draW"

    // Step 5: Use a for loop and concatenation to reverse the sliced string
    let reversedText = "";
    for (let i = slicedText.length - 1; i >= 0; i--) {
        reversedText += slicedText[i]; // Concatenating each character in reverse order
    }

    // Step 6: Show the reversed text in the third custom alert
    document.getElementById("resultMessage").textContent = "Reversed Text: " + reversedText;

    // Hide the input alert and show the result alert
    closeAlert('inputAlert');
    document.getElementById("resultAlert").style.display = "block";
}

// Close the alert box
function closeAlert(alertId) {
    document.getElementById(alertId).style.display = "none";
}
