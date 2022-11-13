const list = document.querySelector("#categories");

const listItems = document.querySelectorAll(".item");
console.log("Number of categories:", listItems.length);

listItems.forEach((element) => {
  const itemHeader = element.firstElementChild;
  console.log("Category:", itemHeader.textContent);

  const itemList = element.lastElementChild.children;
  console.log("Elements:", itemList.length);
});
