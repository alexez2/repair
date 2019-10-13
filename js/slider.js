$(document).ready(function(){
    $('.portfolio_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:$('.right_arrows'),
        prevArrow:$('.left_arrows'),
        responsive: [

            {
              breakpoint: 1182,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 792,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });