(function($) {
    "use strict";

/* ==========================================
           Preloader
========================================== */
  $(window).on("load", function (e) {
    $('.preloader').fadeOut(1000);  
  });
 
/* ==========================================
           Background Video
========================================== */
   if ($("#video").length > 0) {
    $(".autoplay").magnificPopup({
        type: "iframe"
    });
}

/* ==========================================
           Smooth Scroll
========================================== */
var scroll = new SmoothScroll();
var smoothScrollWithoutHash = function (selector, settings) {
  /**
   * If smooth scroll element clicked, animate scroll
   */
  var clickHandler = function (event) {
    var toggle = event.target.closest( selector );
    
    if ( !toggle || toggle.tagName.toLowerCase() !== 'a' ) return;
    
    var anchor = document.querySelector( toggle.hash );
    if ( !anchor ) return;

    event.preventDefault(); // Prevent default click event
    scroll.animateScroll( anchor, toggle, settings || {} ); // Animate scroll
  };

  window.addEventListener('click', clickHandler, false );
};
smoothScrollWithoutHash( 'a[href*="#"]' );

})(jQuery);

	
 