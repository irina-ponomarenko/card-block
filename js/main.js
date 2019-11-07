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

});