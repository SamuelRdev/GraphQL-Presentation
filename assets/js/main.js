$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('#navigation').addClass('sticky-style');
        }
        else{
            $('#navigation').removeClass('sticky-style');
        }
    })

    // if($(window).innerWidth)
    // if($(window).innerWidth() < 992){
    //     $('.cards').slick({
    //         arrows: false,
    //         autoplay: false,
    //         autoplaySpeed: 3000,
    //         dots: false,
    //         draggable: true,
    //         fade: true,
    //         infinite: true,
    //         slidesToShow: 2
            // responsive: [
            // {
            //   breakpoint: 992,
            //   settings: {
            //       arrows: true
            //   }
            // },
            // {
            //   breakpoint: 345,
            //   settings: {
            //       arrows: true
            //   }
            // }
            // ]
        // });
    // }
})