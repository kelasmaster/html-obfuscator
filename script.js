// script.js

// Function to obfuscate HTML
function obfuscateHTML(html) {
  return html
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/\s+/g, " ")
    .trim();
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
  alert("Obfuscated HTML copied to clipboard!");
});
