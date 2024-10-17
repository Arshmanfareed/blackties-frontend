$(document).ready(function() {

  $('.detailCar-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      },
      onChanged: function(event) {
          const currentIndex = event.item.index;
          const items = event.target.querySelectorAll('.owl-item');
          const activeItem = items[currentIndex];
          if (activeItem) {
              $('.detailCar-slide-controller ul li').removeClass('slide-active');
              $('#'+$(activeItem).find('div').data('item')).addClass('slide-active');
          }
      }
  });

  var $mainSlider = $('.detailCar-slider');
  var $thumbnailSlider = $('.detailCar-slide-controller ul li');

  $(document).on('click', '.detailCar-slide-controller ul li', function(e) {
      $('.detailCar-slide-controller ul li').removeClass('slide-active');
      $(this).addClass('slide-active');
  });

  $thumbnailSlider.on('click', function() {
      var index = $(this).index();
      $mainSlider.trigger('to.owl.carousel', [index]);
  });
  
    // Form Step Js
    var totalSteps = $(".steps li").length;

$(".submit").on("click", function () {
  return false;
});

$(".steps li:nth-of-type(1)").addClass("active");
$(".myContainer .form-container:nth-of-type(1)").addClass("active");

$(".form-container").on("click", ".nextBtn", function () {
  $(".steps li")
    .eq($(this).parents(".form-container").index() + 1)
    .addClass("active");
  $(this)
    .parents(".form-container")
    .removeClass("active")
    .next()
    .addClass("active flipInX");
});

$(".form-container").on("click", ".prevBtn", function () {
  $(".steps li")
    .eq($(this).parents(".form-container").index() - totalSteps)
    .removeClass("active");
  $(this)
    .parents(".form-container")
    .removeClass("active, flipInX")
    .prev()
    .addClass("active ,flipInY");
});

/*=========================================================
*     If you won't to make steps clickable, Please comment below code 
=================================================================*/
$(".steps li").on("click", function () {
  var stepVal = $(this).find("span").text();
  $(this).prevAll().addClass("active");
  $(this).addClass("active");
  $(this).nextAll().removeClass("active");
  $(".myContainer .form-container").removeClass("active flipInX");
  $(".myContainer .form-container:nth-of-type(" + stepVal + ")").addClass(
    "active flipInX"
  );
});
});