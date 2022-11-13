const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", (element) => {
  spanEl.style.fontSize = element.currentTarget.value + "px";
});
