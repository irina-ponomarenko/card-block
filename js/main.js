$(document).ready(function() {

    //---------------slider script--------------//

    $('#carousel').flexslider({
        animation: "slide",
        slideshowSpeed: 2800,
        controlNav: false,
        animationLoop: true,
        slideshow: false,
        itemWidth: 153,
        itemMargin: 35,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        slideshowSpeed: 2800,
        controlNav: false,
        animationLoop: true,
        slideshow: true,
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


    $('.show-popup-1').on('click', function(){
        show_popup1();
    });

    $('.hide-popup').on('click', function(){
        hide_popup1();
    });

    function show_popup1(){
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
        $('.div-popup-1').fadeIn(500);
    }

    function hide_popup1(){
        // плавно скрываем попап и фон
        $('.popup-bg').fadeOut(500);
        $('.div-popup-1').fadeOut(500);
    }



    $('.show-popup-2').on('click', function(){
        show_popup2();
    });

    $('.hide-popup').on('click', function(){
        hide_popup2();
    });

    function show_popup2(){
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
        $('.div-popup-2').fadeIn(500);
    }

    function hide_popup2(){
        // плавно скрываем попап и фон
        $('.popup-bg').fadeOut(500);
        $('.div-popup-2').fadeOut(500);
    }


    //--------------click option texture-----------//

    $('.item-option-color').on('click', function () {
       $('.item-option-color').removeClass('active-option');
       $(this).addClass('active-option');
    });

    //-------------------resize button---------------//

    $(".additional-icons").on('click', function (e) {
       e.preventDefault();
         $(this).toggleClass('active');
    });


     //-------------------slide social icon---------------//

     let flagSocialBtn = true;

     $('.social-btn').on('click', function(){
        if (flagSocialBtn) {
            setTimeout(function (){
                $('.wrapper-social').addClass('active-social');
            }, 150);
            $('.social-list').addClass('active-social-list');

             flagSocialBtn = false;
        } else {
            setTimeout(function(){
                $('.social-list').removeClass('active-social-list');
            }, 150);
            $('.wrapper-social').removeClass('active-social');

            flagSocialBtn = true;
        }
     });


});