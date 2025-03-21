// script.js

// Function to obfuscate HTML into JavaScript
function obfuscateHTML(html) {
  // Split the HTML into an array of characters
  const charArray = html.split('');
  
  // Convert each character into its Unicode escape sequence
  const unicodeArray = charArray.map(char => {
    return `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`;
  });

  // Join the Unicode array into a single string
  const unicodeString = unicodeArray.join('');

  // Return the obfuscated JavaScript code
  return `document.write('${unicodeString}');`;
}

// DOM Elements
const htmlInput = document.getElementById("html-input");
const obfuscateBtn = document.getElementById("obfuscate-btn");
const htmlOutput = document.getElementById("html-output");
const copyBtn = document.getElementById("copy-btn");

// Event Listener for Obfuscate Button
obfuscateBtn.addEventListener("click", () => {
  const input = htmlInput.value.trim();
  if (!input) {
    alert("Please enter some HTML code to obfuscate.");
    return;
  }
  const obfuscated = obfuscateHTML(input);
  htmlOutput.value = obfuscated;
});

// Event Listener for Copy Button
copyBtn.addEventListener("click", () => {
  htmlOutput.select();
  document.execCommand("copy");
  alert("Obfuscated JavaScript copied to clipboard!");
});
