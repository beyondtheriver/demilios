$(document).ready(function(){
  var $review = $(".review").first();

  function displayReviews(){

    if ($review.next().length === 0 && $review.is(':hidden')){
      $review.fadeIn('fast', function(){

      });
      $review.fadeOut(5800, function(){

      });
      $review = $(".review").first();
    } else {
      $review.fadeIn('fast', function(){

      });
      $review.fadeOut(5800, function(){

      });
      $review = $review.next();
    }

  }

  window.setInterval(displayReviews, 5700)
});
