function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const nameOfBackgroundColor = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

buttonChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;
  nameOfBackgroundColor.textContent = newColor;
});
