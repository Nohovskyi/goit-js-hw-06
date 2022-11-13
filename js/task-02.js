const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listElements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const itemOfList = document.createElement("li");

  itemOfList.textContent = ingredient;
  itemOfList.classList.add("item");

  listElements.push(itemOfList);
}

list.append(...listElements);
