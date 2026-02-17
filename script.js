//Declaring Variables
let dataCount = 128;
const container = document.getElementById("data-container");
const paragraph = container.querySelector("p");
const button = document.getElementById("update-btn");
const resetButton = document.getElementById("reset-btn");
const statusMessage = document.getElementById("status-message");



console.log("button found?", button);
console.log("paragraph found?", paragraph);

paragraph.textContent = `Total Records: ${dataCount}`;

button.addEventListener("click", function () {
  dataCount++;
  paragraph.textContent = `Total Records: ${dataCount}`;
  updateStatus();
});

resetButton.addEventListener("click", function () {
  dataCount = 128;
  paragraph.textContent = `Total Records: ${dataCount}`;
});

function updateStatus() {
  if (dataCount < 5) {
    statusMessage.textContent = "Status: Low Data";
  } else if (dataCount < 10) {
    statusMessage.textContent = "Status: Moderate Data";
  } else {
    statusMessage.textContent = "Status: High Data";
  }
}




