import { HTTPServece } from "../../common/scripts/http-service";

const ROOT_CLASS_NAMES = 'slider';
const IMAGE_ROOT_CLASS = 'slide';
const CAPTION_CLASS_EXPAND = `${ROOT_CLASS_NAMES}__caption-content_expand`;
const SLIDE_CLASS_IMAGE = `.${IMAGE_ROOT_CLASS}__image`;
const SLIDE_CLASS_IMAGE_EXPAND = `${IMAGE_ROOT_CLASS}__image-expand`;
const TEXT_CLASS_EXPAND = `${ROOT_CLASS_NAMES}__text-expand`;
const NOTE_CLASS_EXPAND = `${ROOT_CLASS_NAMES}__note-expand`;
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
      this.toggleCaption = this.toggleCaption.bind(this);
      this.toggleImage = this.toggleImage.bind(this);
      this.toggleText = this.toggleText.bind(this);
      this.toggleNote = this.toggleNote.bind(this);
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

  toggleCaption() {
   this.captionData = document.querySelectorAll(".slider__caption-content");
   this.captionData.forEach((noteText, item) => {
      if(this.captionData[item].classList.contains(CAPTION_CLASS_EXPAND)) {
         this.captionData[item].classList.remove(CAPTION_CLASS_EXPAND);
         this.buttonNote.innerHTML = `Show details`;
      } else {
         this.captionData[item].classList.add(CAPTION_CLASS_EXPAND);
         this.buttonNote.innerHTML = `Hide details`;
      }
   });
  }

   toggleImage() {
      this.imageData = document.querySelectorAll(SLIDE_CLASS_IMAGE);
      this.imageData.forEach((noteText, item) => {
         if(this.imageData[item].classList.contains(SLIDE_CLASS_IMAGE_EXPAND)) {
            this.imageData[item].classList.remove(SLIDE_CLASS_IMAGE_EXPAND);
         } else {
            this.imageData[item].classList.add(SLIDE_CLASS_IMAGE_EXPAND);
         }
      });
   }

   toggleText() {
      this.textData = document.querySelectorAll(".slider__text");
      this.textData.forEach((noteText, item) => {
         if(this.textData[item].classList.contains(TEXT_CLASS_EXPAND)) {
            this.textData[item].classList.remove(TEXT_CLASS_EXPAND);
         } else {
            this.textData[item].classList.add(TEXT_CLASS_EXPAND);
         }
      });
   }

   toggleNote() {
      this.noteData = document.querySelectorAll(".slider__note");
      this.noteData.forEach((noteText, item) => {
         if(this.noteData[item].classList.contains(NOTE_CLASS_EXPAND)) {
            this.noteData[item].classList.remove(NOTE_CLASS_EXPAND);
         } else {
            this.noteData[item].classList.add(NOTE_CLASS_EXPAND);
         }
      });
   }

   render() {
      this.slider = document.createElement("div");
      this.slider.classList.add("slider__images-container");
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
            <div class="slider__prev">PREV</div>
            <div class="slider__next">NEXT</div>
         </div>
         <div class="slider__store-btns">
            <div href="#" class="slider__store-btn">Find a store</div>
         </div>
      </div>
      `;
      this.rootElement.innerHTML += buttonContainer;

      this.buttonNote = document.querySelector(".slider__btn-note");

      this.buttonNote.addEventListener('click', () => {
            this.toggleImage();
      });

      this.buttonNote.addEventListener('click', () => {
            this.toggleText();
      });

      this.buttonNote.addEventListener('click', () => {
         this.toggleNote();
      });

      this.buttonNote.addEventListener('click', () => {
         this.toggleCaption();
      });

      this.buttonPrev = document.querySelector(BUTTON_PREV_CLASS);
         this.buttonPrev.addEventListener('click', () => {
         this.slides[this.currentSlide].classList.remove(VISIBLE_CLASS);
         this.currentSlide--;
            if(this.currentSlide < 0 )
               this.currentSlide = this.slides.length - 1;
               this.slides[this.currentSlide].classList.add(VISIBLE_CLASS);
      });

      this.buttonNext = document.querySelector(BUTTON_NEXT_CLASS);
      this.buttonNext.addEventListener('click', () => {
         this.slides[this.currentSlide].classList.remove(VISIBLE_CLASS);
         this.currentSlide = (this.currentSlide + 1) % this.slides.length;
         this.slides[this.currentSlide].classList.add(VISIBLE_CLASS);
      });

      this.slides = document.querySelectorAll(SLIDES_CLASS_ALL);
      const slideInterval = setInterval(() => {
         this.slides[this.currentSlide].classList.remove(VISIBLE_CLASS);
         this.currentSlide = (this.currentSlide + 1) % this.slides.length;
         this.slides[this.currentSlide].classList.add(VISIBLE_CLASS);
      }, 7000);
   }
}

