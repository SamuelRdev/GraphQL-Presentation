$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('#navigation').addClass('sticky-style');
        }
        else{
            $('#navigation').removeClass('sticky-style');
        }
    })
})