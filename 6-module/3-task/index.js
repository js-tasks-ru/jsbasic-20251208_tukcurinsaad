import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }
  render() {
    let carouselSlides = this.slides.map((slide) => `
          <div class="carousel__slide" data-id="${slide.id}">
            <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button" data-id="${slide.id}">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
    `).join("")
    let carousel =  createElement(`
  <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class = "carousel__inner">
    ${carouselSlides}
    </div>
    </div>
      `)
     const buttons = carousel.querySelectorAll('.carousel__button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const event = new CustomEvent('product-add', {
      detail: button.dataset.id, // берём из data-id
      bubbles: true
    });
    carousel.dispatchEvent(event);
  });
});

     
      this.initCarousel(carousel);
      return carousel;
  

  }
  initCarousel(carousel) {
  let carouselRight = carousel.querySelector('.carousel__arrow_right');
   let carouselLeft = carousel.querySelector('.carousel__arrow_left');
   let carouselInner = carousel.querySelector('.carousel__inner');
   let carouselSlide = 0;
   let slideslength = this.slides.length; 
function toggleArrow (carouselSlide) {
    if (carouselSlide === slideslength - 1) {
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
}

