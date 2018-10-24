apos.define('ec-quote-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
      self.play = function($widget, data, options) {
        console.log(data);
        var instance = data._id;
        var inst_speed = data.speed * 1000 || 5000;
        var inst_autoplay = data.autoplay_toggle;
        var inst_dots = data.nav_toggle;
        
      $widget.find("[data-ec-quote-"+data._id+"] .slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: inst_dots,
        autoplay: inst_autoplay,
        autoplaySpeed: inst_speed,
        speed: 500,
        fade: true,
        arrows: false,
        draggable: false
      });
    };
  }
});
