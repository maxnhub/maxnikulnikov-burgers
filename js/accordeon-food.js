function accordeonFood(){
  const foods = document.querySelectorAll(".food__item");
  const menu = document.querySelector(".accordeon--vertical");
  menu.addEventListener("click" , function(event){
    event.preventDefault();
    const target = event.target;
      if(target.classList.contains("food__vertical")){
        const food = target.parentNode;
        const content = target.nextElementSibling;
          for (const iterator of foods) {
            if(iterator !== food){
              iterator.classList.remove("food__description--active");
              iterator.lastElementChild.style.width= 0;
            }
          }
            if(food.classList.contains("food__description--active")){
              food.classList.remove("food__description--active");
              content.style.width = 0;
            } else {
              food.classList.add("food__description--active");
              content.style.width = calculateWidth() + "px";
          }
      }else if (target.classList.contains("food__name")){
        const food = target.parentNode.parentNode;
        const content = target.parentNode.nextElementSibling;
          for (const iterator of foods) {
            if(iterator !== food){
              iterator.classList.remove("food__description--active");
              iterator.lastElementChild.style.width= 0;
            }
          }
            if(food.classList.contains("food__description--active")){
              food.classList.remove("food__description--active");
              content.style.width = 0;
            } else {
              food.classList.add("food__description--active");
              content.style.width = calculateWidth() + "px";
          }
      }
  });
  function calculateWidth(){
    let windowWidth = document.documentElement.clientWidth;
    let links = document.querySelectorAll('.food__vertical');
    let linksWidth = parseInt(getComputedStyle(links[0]).width);
    let reqWidth = windowWidth - linksWidth * links.length;
    return reqWidth > 520 ? 520 : reqWidth;
  }
  }
  accordeonFood();