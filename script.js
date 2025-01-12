const carouselContainer = document.querySelector(".carouselContainer");
        const carouselItems = document.querySelectorAll(".carouselItem");
        // let scrollPos = 0;

        function moveToNextSlide() {
          if(carouselContainer.scrollLeft>=carouselItems[0].offsetWidth*(carouselItems.length-1)){
            carouselContainer.scrollLeft=0;
          }
          else{
            carouselContainer.scrollLeft+=carouselItems[0].offsetWidth
          }
        }
        function moveToPrevSlide() {
          if(carouselContainer.scrollLeft==0){
            carouselContainer.scrollLeft=(carouselItems.length-1)*(carouselItems[0].offsetWidth);
          }
          else{
            carouselContainer.scrollLeft-=carouselItems[0].offsetWidth;
          }
        }

        // Set interval for automatic slide transition
        let autoSlideInterval = setInterval(moveToNextSlide, 5000);

        document.querySelector('.carouselContainer').addEventListener('mouseover', () => {
            clearInterval(autoSlideInterval);
          });
          
          document.querySelector('.carouselContainer').addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(moveToNextSlide, 5000);
          });