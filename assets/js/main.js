$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            console.log("tamer")
            $('#navigation').addClass('sticky-style');
        }
        else{
            $('#navigation').removeClass('sticky-style');
        }
    })
})