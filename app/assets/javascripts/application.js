/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

var backtotopscrollposition = 4 * window.innerHeight;

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > backtotopscrollposition) {
      
          $('.app-back-to-top').fadeIn();
      
  } else {
      $('.app-back-to-top').fadeOut();
  }
});
