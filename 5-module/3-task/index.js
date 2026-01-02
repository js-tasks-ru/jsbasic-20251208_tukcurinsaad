function initCarousel() {
  let carouselRight = document.querySelector('.carousel__arrow_right');
   let carouselLeft = document.querySelector('.carousel__arrow_left');
   let carouselInner = document.querySelector('.carousel__inner');
   let carouselSlide = 0;
  
function toggleArrow (carouselSlide) {
    if (carouselSlide === 3) {
	carouselRight.style.display = 'none';
} else {
    carouselRight.style.display = ''; 
}
	if (carouselSlide === 0) {
	carouselLeft.style.display = 'none';
} else {
    carouselLeft.style.display = ''; 
}
}
toggleArrow(carouselSlide);

   carouselRight.addEventListener('click', () => {
   	++carouselSlide;
   		 toggleArrow (carouselSlide);
   	carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * carouselSlide}px)`;
   
   })
   carouselLeft.addEventListener('click', () => {
   	--carouselSlide;
   	 toggleArrow(carouselSlide);
   	carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * carouselSlide}px)`;
   
  })
}




