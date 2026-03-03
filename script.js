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
  dataCount = 0;
  paragraph.textContent = `Total Records: ${dataCount}`;
  updateStatus();
});

function updateStatus(actionText = "") {
  let statusText = "";

  if (dataCount < 5) {
    statusText = "Status: Low Data";
  } else if (dataCount < 10) {
    statusText = "Status: Moderate Data";
  } else {
    statusText = "Status: High Data";
  }

  statusMessage.textContent = actionText
    ? `${actionText} | ${statusText}`
    : statusText;
}




