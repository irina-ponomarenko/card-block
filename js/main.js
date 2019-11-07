$(document).ready(function() {

    //---------------slider script--------------//

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: false,
        itemWidth: 153,
        itemMargin: 35,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });

    //----------check item color----------------//

    $('.color-item').on('click', function () {
       $(".color-item").removeClass('active-item-color');
       $(this).addClass('active-item-color');
       $('.other-color').removeClass('active-item-color');

    });


    //------------counter------------------------//

    $('.minus').on('click', function () {
        let $input = $(this).parent().find('.input-counter');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').on('click',function () {
        let $input = $(this).parent().find('.input-counter');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    //--------------------popup------------------//

    $('.show-popup').on('click', function(){
        show_popup();
    });

    $('.hide-popup').on('click', function(){
        hide_popup();
    });

    function show_popup(){
        // получаем размер экрана
        let bg_height = $(document).height();
        let bg_width = $(window).width();
        // задаем темному фону размер на весь экран
        $('.popup-bg').css({
            'width': bg_width,
            'height':bg_height
        });
        // плавно показываем фон и попап
        $('.popup-bg').fadeIn(500);
        $('.div-popup').fadeIn(500);
    }

    function hide_popup(){
        // плавно скрываем попап и фон
        $('.popup-bg').fadeOut(500);
        $('.div-popup').fadeOut(500);
    }


    //--------------click option texture-----------//

    $('.item-option-color').on('click', function () {
       $('.item-option-color').removeClass('active-option');
       $(this).addClass('active-option');
    });

});