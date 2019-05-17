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
      this.noteData;
      this.currentNote = 0;
      this.buttonNote;
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
         const { img, title, description, note } = this.infoBoxData[i];
         const infoBoxElement = `
         <div class="slider__image ${i == 0 ? 'visible' : ''}" data-slider="slide-${i}">
             <div class="slide__image">
              <img class="slider__img" src="${img}" />
             </div>
             <div class="slider__caption">
               <div class="slider__caption-content">
                   <h2 class="slider__title">${title}</h2>
                  <div class="slider__text">${description}</div>
                  <div class="slider__note ">${note}</div>
               </div>
             </div>
           </div>
         `;
         this.slider.innerHTML += infoBoxElement;
      }

      const buttonContainerNote = `
         <div class="slider__note-container">
            <button class="slider__btn-note" type="button">Show details</button>
         </div>
      `;

      this.rootElement.innerHTML += buttonContainerNote;

      const buttonContainer = `
         <div class="slider__btns">
            <input class="slider__prev" type="button" value="PREV"></input>
            <input class="slider__next" type="button" value="NEXT"></input>
         </div>
      `;
      this.rootElement.innerHTML += buttonContainer;

      this.noteData = document.querySelectorAll(".slider__note");
      this.buttonNote = document.querySelector(".slider__btn-note");

       this.buttonNote.addEventListener('click', () => {
         this.noteData.forEach((noteText, item) => {
            console.log(item);
            if(this.noteData[item].classList.contains('slider__note-expand')) {
               this.noteData[item].classList.remove('slider__note-expand');
               this.buttonNote.innerHTML = `Show details`;
            } else {
               this.noteData[item].classList.add('slider__note-expand');
               this.buttonNote.innerHTML = `Hide details`;
            }
         });
      });

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
      // const slideInterval = setInterval(() => {
      //    slides[currentSlide].classList.remove(VISIBLE_CLASS);
      //    currentSlide = (currentSlide + 1) % slides.length;
      //    slides[currentSlide].classList.add(VISIBLE_CLASS);
      // }, 7000);
   }
}

