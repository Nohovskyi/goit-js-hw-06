const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
const autoNameOut = nameOutput.textContent;

nameInput.addEventListener("input", changeInput);

function changeInput(event) {
  nameOutput.textContent = autoNameOut;

  if (nameInput.value !== "") {
    nameOutput.textContent = event.currentTarget.value;
  }
}
