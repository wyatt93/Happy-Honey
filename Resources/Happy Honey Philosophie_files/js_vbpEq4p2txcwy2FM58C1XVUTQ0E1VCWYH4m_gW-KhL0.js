(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtSliderRevolutionBoxedWidth = {
    attach: function (context, settings) {
      $(context).find('#slideshow-fullwidth .slider-revolution').once('mtSliderRevolutionFullWidthInit').revolution({
        sliderType:"standard",
        sliderLayout:"auto",
        gridwidth: [1170,970,750,450],
        gridheight: drupalSettings.startupgrowth.sliderRevolutionFullWidthInit.slideshowFullWidthInitialHeight,
        delay: drupalSettings.startupgrowth.sliderRevolutionFullWidthInit.slideshowFullWidthEffectTime,
        disableProgressBar:'off',
        responsiveLevels:[1199,991,767,480],
        navigation: {
          onHoverStop:"off",
          arrows:{
            enable:true,
            tmp: "",
            left:{
              h_align:"left",
              v_align:"center",
              h_offset:15,
              v_offset:0
            },
            right:{
              h_align:"right",
              v_align:"center",
              h_offset:15,
              v_offset:0
            }
          },
          bullets:{
            style:"",
            enable:true,
            direction:"horizontal",
            space: 5,
            h_align: drupalSettings.startupgrowth.sliderRevolutionFullWidthInit.slideshowFullWidthBulletsPosition,
            v_align:"bottom",
            h_offset: 0,
            v_offset: 20,
            tmp:"",
          },
          touch:{
            touchenabled:"on",
            swipe_treshold:75,
            swipe_min_touches:1,
            drag_block_vertical:false,
            swipe_direction:"horizontal"
          }
        }
      });

      $(context).find('#slideshow-fullwidth .slider-revolution').once('mtSliderRevolutionFullWidthFade').bind("revolution.slide.onloaded",function (e) {
        $(context).find('.slider-revolution-wrapper:not(.one-slide) .tparrows').fadeIn("slow");
      });

    }
  };
})(jQuery, Drupal, drupalSettings);
;
