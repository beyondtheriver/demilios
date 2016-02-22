$(document).ready(function(){
  var index = 0;
  var review = $(".review")[index];

  function displayReviews(){
    // the root of why my reviews won't start. I keep getting the error $review.is is not a function. why!?
    // I beleive my logic is right, there's gotta some jquery rule that i'm not getting around.
    if ($(".review").is(':hidden')){
      $(".review").fadeIn('slow', function(){

      });
      index ++
    } else if (index === $(".review").length - 1){
      $(".review")[index].fadeOut('slow', function(){

      });
      $(".review")[0].fadeIn('slow', function(){

      });
      index = 0;
    } else {
      $(".review")[index].fadeOut('slow', function(){

      });
      $(".review")[index + 1].fadeIn('slow', function(){

      });
      index ++
    }

  }

  window.setInterval(displayReviews, 6000)
});
