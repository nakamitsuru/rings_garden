// JavaScript Document


$(function(){ 
  $('.fadein').hide().fadeIn(2000);
});



$(function(){
    $(window).scroll(function (){
        $('.scroll-fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});


$(".btn-trigger").on("click",function(){
$(this).toggleClass("active");
$(".nav-bg").fadeToggle(200);
});


$(function(){
  $('#btn01').on('click', function() {
    $(this).toggleClass('open');
    return false;
  });
});



