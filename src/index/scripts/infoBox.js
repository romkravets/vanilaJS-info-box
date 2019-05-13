import { HTTPServece } from "../../common/scripts/http-service";

const URL = 'https://api.jsonbin.io/b/5c6de2a5ece18042ed2b1487';

export class InfoBox {
   constructor(rootElement, infoBoxData) {
      this.rootElement = rootElement;
      this.infoBoxData = infoBoxData;
      this.httpService = new HTTPServece();
      this.slider;
      this.render();
      //this.getList();

   }

   // getList() {
   //    this.httpService.get(URL, (response) => this.renderList(response));
   // }

   render() {
      this.slider = document.createElement('div');
      this.rootElement.appendChild(this.slider);
      
      for (let i = 0; i < this.infoBoxData.length; i++) {
         const { img, title, description } = this.infoBoxData[i];
         const infoBoxElement = `
         <div class="slider__image ${i == 0 ? 'visible' : ''}" data-slider="slide-${i}">
             <div class="slide__image">
              <img src="${img}" />
             </div>
             <div class="slider__caption">
               <div class="slider__caption-content">
                 <div class="slider__caption-title">
                   <h2>${title}</h2>
                 </div>
                 <p>${description}</p>
               </div>
             </div>
           </div>
         `;
         this.slider.innerHTML += infoBoxElement;

      }

      const slides = document.querySelectorAll('.slider__image');
      let currentSlide = 0;
      const slideInterval = setInterval(() => {
         slides[currentSlide].classList.remove('visible');
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].classList.add('visible');
      }, 3000);
   }
}

