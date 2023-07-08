$(document).ready(function(){

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

// slick slider

$('.team_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
});
	
$('.box_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false
});
	
// menu fixed

$(window).scroll(function(){
 
  $scrollTop = $(this).scrollTop();

  if($scrollTop > 200){

    $(".navbar").addClass('menu_box');

  }else{
    $(".navbar").removeClass('menu_box')
  }

})



})




