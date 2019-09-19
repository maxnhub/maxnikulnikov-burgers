function accordeonTeam(){
  const members = document.querySelectorAll(".team__item");
  const team = document.querySelector(".team__list");

  team.addEventListener("click" , function(event){
      event.preventDefault(); 
      const target = event.target; 

      if(target.classList.contains("team__link")){
          const member = target.parentNode; 
          const content = target.nextElementSibling;  
          const contentHeight = content.firstElementChild.clientHeight;
       
              for (const iterator of members) {
                  if(iterator !== member){
                      iterator.classList.remove("team__item--active");
                      iterator.lastElementChild.style.height= 0;
                  }
              }

              if(member.classList.contains("team__item--active")){
                  member.classList.remove("team__item--active");
                  content.style.height = 0;
              }else{
                  member.classList.add("team__item--active");
                  content.style.height = contentHeight + "px";
              }
      }
  });
}

accordeonTeam();
