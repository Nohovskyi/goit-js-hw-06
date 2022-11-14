const inputEl = document.querySelector("#validation-input");
const dataLegth = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", checkLegthInput);

function checkLegthInput(element) {
  if (element.currentTarget.value.length === dataLegth) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
