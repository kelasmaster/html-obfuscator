// script.js

// Function to encode HTML into Base64
function obfuscateHTML(html) {
  // Encode the input HTML into Base64
  const base64Encoded = btoa(html);
  // Return the Base64 string wrapped in a script tag for execution
  return `<script>document.write(atob('${base64Encoded}'));</script>`;
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
