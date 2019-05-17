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
      this.slides;
      this.slider;
      this.imageData;
      this.noteData;
      this.currentSlide = 0;
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
         <div class="slider__control-btns">
            <div class="slider__btn-arrow"></div>
            <div class="slider__prev">PREV</div>
            <div class="slider__next">NEXT</div>
            <div class="slider__btn-arrow"></div>
         </div>
         <div class="slider__store-btns">
            <div href="#" class="slider__store-btn">Find a store</div>
            <div class="find-a-store__store-btn_arrow"></div>
         </div>
      </div>
         
      `;
      this.rootElement.innerHTML += buttonContainer;

      this.imageData = document.querySelectorAll(".slide__image");
      this.captionData = document.querySelectorAll(".slider__caption-content");
      this.textData = document.querySelectorAll(".slider__text");
      this.noteData = document.querySelectorAll(".slider__note");
      this.buttonNote = document.querySelector(".slider__btn-note");


        this.buttonNote.addEventListener('click', () => {
         this.imageData.forEach((noteText, item) => {
            if(this.imageData[item].classList.contains('slide__image-expand')) {
               this.imageData[item].classList.remove('slide__image-expand');
            } else {
               this.imageData[item].classList.add('slide__image-expand');
            }
         });
      });

      this.buttonNote.addEventListener('click', () => {
         this.textData.forEach((noteText, item) => {
            if(this.textData[item].classList.contains('slider__text-expand')) {
               this.textData[item].classList.remove('slider__text-expand');
            } else {
               this.textData[item].classList.add('slider__text-expand');
            }
         });
      });


      this.buttonNote.addEventListener('click', () => {
         this.noteData.forEach((noteText, item) => {
            if(this.noteData[item].classList.contains('slider__note-expand')) {
               this.noteData[item].classList.remove('slider__note-expand');
            } else {
               this.noteData[item].classList.add('slider__note-expand');
            }
         });
      });

       this.buttonNote.addEventListener('click', () => {
         this.captionData.forEach((noteText, item) => {
            if(this.captionData[item].classList.contains('slider__caption-content_expand')) {
               this.captionData[item].classList.remove('slider__caption-content_expand');
               this.buttonNote.innerHTML = `Show details`;
            } else {
               this.captionData[item].classList.add('slider__caption-content_expand');
               this.buttonNote.innerHTML = `Hide details`;
            }
         });
      });

      this.buttonPrev = document.querySelector(BUTTON_PREV_CLASS);
      this.buttonPrev.addEventListener('click', () => {
         this.slides[this.currentSlide].classList.remove(VISIBLE_CLASS);
         this.currentSlide--;
         if(this.currentSlide < 0 )
         this.currentSlide = this.slides.length - 1;
         this.slides[this.currentSlide].classList.add(VISIBLE_CLASS);
      })

      this.buttonNext = document.querySelector(BUTTON_NEXT_CLASS);
      this.buttonNext.addEventListener('click', () => {
         this.slides[this.currentSlide].classList.remove(VISIBLE_CLASS);
         this.currentSlide = (this.currentSlide + 1) % this.slides.length;
         this.slides[this.currentSlide].classList.add(VISIBLE_CLASS);
      })



      this.slides = document.querySelectorAll(SLIDES_CLASS_ALL);
      // const slideInterval = setInterval(() => {
      //    this.slides[this.currentSlide].classList.remove(VISIBLE_CLASS);
      //    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      //    this.slides[this.currentSlide].classList.add(VISIBLE_CLASS);
      // }, 7000);
   }
}

