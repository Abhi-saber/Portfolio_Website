const form = document.getElementById("myForm");
const button = document.getElementById("btn");
const input = document.getElementById("inputBox");

// Show alert on button click
button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Prevent form submission and print event value
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    console.log(input.value); // Print input value in console
});
