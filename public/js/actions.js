var inc = 0;
var slides = null;
var btns = null;
var currentSlide = 0;
var prevSlide = 0;
var slideInterval = null;

apos.define('ec-quote-widgets', {
 extend: 'apostrophe-widgets',
 construct: function(self, options) {
   self.play = function($widget, data, options) {
     console.log(data._id);
     //control vars
     inc = (data.speed) * 1000;
     slides = document.querySelectorAll('.slide');
     btns = document.querySelectorAll('.nextBtn');
     currentSlide = 0;
     prevSlide = 0;
     slideInterval = setInterval(nextSlide,inc);

     if (btns.length > 0) {
       btns[0].className = 'nextBtnS';
     }



   };
 }
});

//move to next slide
function nextSlide() {
  if(slides.length > 1){
    slides[currentSlide].className = 'slide';
    prevSlide = currentSlide;
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';

    setBtn(prevSlide, currentSlide);
  }
}
//move to prev slide
function prevSlide() {
  if (slides.length > 1){
    slides[currentSlide].className = 'slide';
    prevSlide = currentSlide;
    if (currentSlide > 0) {
      currentSlide = (currentSlide - 1);
    }else{
      currentSlide = (slides.length - 1);
    }
    slides[currentSlide].className = 'slide showing';
    setBtn(prevSlide, currentSlide);
  }
}
//move to n slide
function pickSlide(n) {
  clearInterval(slideInterval);
  slides[currentSlide].className = 'slide';
  prevSlide = currentSlide;
  currentSlide = n;
  slides[currentSlide].className = 'slide showing';
  setBtn(prevSlide, currentSlide);
  slideInterval = setInterval(nextSlide,inc);
}
function setBtn(x,y){
  if (btns.length > 0) {
    btns[x].className = 'nextBtn';
    btns[y].className = 'nextBtnS';
  }
}
