let dataCount = 128;

const container = document.getElementById("data-container");
const paragraph = container.querySelector("p");
const button = document.getElementById("update-btn");

console.log("button found?", button);
console.log("paragraph found?", paragraph);

paragraph.textContent = `Total Records: ${dataCount}`;

button.addEventListener("click", function () {
  dataCount++;
  paragraph.textContent = `Total Records: ${dataCount}`;
});




