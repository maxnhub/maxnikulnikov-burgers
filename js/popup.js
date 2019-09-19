let popupFeedback = () => {
    function popupReview(){
    const reviewList = document.querySelector('.feedback__list');
  
    reviewList.addEventListener('click' , function(e){
      if(e.target.classList.contains('feedback__btn')){
        const title = e.target.parentNode.querySelector('.feedback__subtitle').textContent;
        const text = e.target.parentNode.querySelector('.feedback__text').textContent;
      
        renderPopup(title, text);
      }
    })
  }

  popupReview();
  }
popupFeedback();