const elements = document.getElementsByClassName("FAQ-item-question");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", handleDropDown.bind(elements[i], i));
}
function handleDropDown(i) {
  closeOthers(i);
  const answer = this.parentElement.children[1];
  answer.classList.toggle("FAQ-item-opened");
  if (answer.id !== "opened") {
    answer.id = "opened";
  } else {
    answer.id = "closed";
  }
  const image = this.parentElement.children[0].children[1];
  changeImage(image);
}
const changeImage = (image) => {
  if (image.id === "down") {
    image.id = "up";
    image.src = "./images/UpArrow.svg";
    return;
  }
  image.id = "down";
  image.src = "./images/DownArrow.svg";
  return;
};
const closeOthers = (index) => {
  for (let i = 0; i < elements.length; i++) {
    if (i !== index && elements[i].parentElement.children[1].id === "opened") {
      let answer = elements[i].parentElement.children[1];
      answer.classList.toggle("FAQ-item-opened");
      answer.id = "closed";
      const image = elements[i].parentElement.children[0].children[1];
      changeImage(image);
      break;
    }
  }
};
