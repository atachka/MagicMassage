const starsContainer = document.querySelector(
  ".reviews-slider-circles__container"
);
const itemsContainer = document.querySelector(".reviews-items__container");

const circles = starsContainer.children;
for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", handleClick);
}
let start = 0;
let end = 0;

function handleClick() {
  changeSrcs();
  this.src = "./images/SliderActiveCircle.svg";
  start = end;
  end = -300 * this.id;
  itemsContainer.animate(
    [
      {
        left: `${start}px`,
      },
      {
        left: `${end}px`,
      },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
}
function changeSrcs() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].src = "./images/SliderCircle.svg";
  }
}
