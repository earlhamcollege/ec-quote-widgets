apos.define('ec-quote-widgets', {
  extend: 'apostrophe-widgets',
  construct: function(self, options) {
      self.play = function($widget, data, options) {
        console.log(data);
        var instance = data._id;
      $widget.find("[data-ec-quote-"+data._id+"] .slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true
      });
    };
  }
});
