import { HTTPServece } from "../../common/scripts/http-service";

const ROOT_CLASS_NAMES = 'slider';
const SLIDES_CLASS_ALL = `.${ROOT_CLASS_NAMES}__image`;
const BUTTON_PREV_CLASS = `.${ROOT_CLASS_NAMES}__prev`;
const BUTTON_NEXT_CLASS = `.${ROOT_CLASS_NAMES}__next`;
const VISIBLE_CLASS = 'visible';
const URL = 'https://api.jsonbin.io/b/5c6de2a5ece18042ed2b1487';

export class InfoBox {
   constructor(rootElement, infoBoxData) {
      this.rootElement = rootElement;
      this.infoBoxData = infoBoxData;
      this.httpService = new HTTPServece();
      this.slider;
      this.buttonPrev;
      this.buttonNext;
      this.render();
      //this.getList();

   }

   // getList() {
   //    this.httpService.get(URL, (response) => this.renderList(response));
   // }

   render() {
      this.slider = document.createElement("div");
      this.slider.classList.add("slider__images-container")
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

      const buttonContainer = `
         <div class="slider__btns">
            <input class="slider__prev" type="button" value="PREV"></input>
            <input class="slider__next" type="button" value="NEXT;"></input>
         </div>
      `;
      this.rootElement.innerHTML += buttonContainer;

      this.buttonPrev = document.querySelector(BUTTON_PREV_CLASS);
      this.buttonPrev.addEventListener('click', () => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide--;
         if(currentSlide < 0 )
         currentSlide = slides.length - 1;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
      })

      this.buttonNext = document.querySelector(BUTTON_NEXT_CLASS);
      this.buttonNext.addEventListener('click', () => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
      })

      const slides = document.querySelectorAll(SLIDES_CLASS_ALL);
      let currentSlide = 0;
      const slideInterval = setInterval(() => {
         slides[currentSlide].classList.remove(VISIBLE_CLASS);
         currentSlide = (currentSlide + 1) % slides.length;
         slides[currentSlide].classList.add(VISIBLE_CLASS);
      }, 7000);
   }
}

