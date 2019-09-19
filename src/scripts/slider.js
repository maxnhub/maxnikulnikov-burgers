let sliderBurger = () => {
  const left = document.querySelector(".arrow__slide--left");
  const right = document.querySelector(".arrow__slide--right");
  const items = document.querySelector("#slider");

  right.addEventListener("click", function(e) {
    e.preventDefault();
    loop("right");
  });

  left.addEventListener("click", function(e) {
    e.preventDefault();
    loop("left");
  });

  function loop(direction) {
    if (direction === "right") {
      items.appendChild(items.firstElementChild);
    } else {
      items.insertBefore(items.lastElementChild, items.firstElementChild);
    }
  }
}
sliderBurger();
