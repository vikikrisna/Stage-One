$(window).on('load',function(){
    let wWidth = $(this).outerWidth();
    console.log(wWidth)


    if(wWidth >= 992){
        $('.navbar').addClass('fixed-top');
    };
});