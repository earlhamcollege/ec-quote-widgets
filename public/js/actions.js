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
     inc = (data.speed) * 1000;
     widget_id = data._id;

     var container = document.querySelector("." + widget_id); //select container based on id
     slides = container.querySelectorAll('.slide'); //select slides from container
     btns = container.querySelectorAll('.nextBtn'); //select btns from container
     currentSlide = 0;
     prevSlide = 0;
     slideInterval = setInterval(nextSlide,inc);

     if (btns.length > 0) {
       btns[0].className = 'nextBtnS'; //auto select first button
     }
   };
 }
});
function nextSlide() { //move to next slide
  clearInterval(slideInterval);
  if(slides.length > 1){
    slides[currentSlide].className = 'slide';
    prevSlide = currentSlide;
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';

    setBtn(prevSlide, currentSlide);
  }
  slideInterval = setInterval(nextSlide,inc);
}
function prevSlide() { //move to prev slide
  clearInterval(slideInterval);
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
  slideInterval = setInterval(nextSlide,inc);
}
function pickSlide(n) { //move to n slide
  clearInterval(slideInterval);
  slides[currentSlide].className = 'slide';
  prevSlide = currentSlide;
  currentSlide = n;
  slides[currentSlide].className = 'slide showing';
  setBtn(prevSlide, currentSlide);
  slideInterval = setInterval(nextSlide,inc);
}
function setBtn(x,y){ //set the showing button from x to y
  if (btns.length > 0) {
    btns[x].className = 'nextBtn';
    btns[y].className = 'nextBtnS';
  }
}
