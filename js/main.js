/* General jQuery & JS stuff goes here. */


jQuery(document).ready(function ($) {
    // Initialize wowjs 
    // new WOW().init();

    /*-------------------
    MAGNIFICO STARTER - 
    Code from a starter example by the creator. 
    https://codepen.io/dimsemenov/pen/hutrb
    -------------------*/
    // $('.with-caption').magnificPopup({
    //     type: 'image',
    //     closeBtnInside: false,
    //     mainClass: 'mfp-with-zoom mfp-img-mobile',

    //     image: {
    //         verticalFit: true,
    //         titleSrc: function (item) {
    //             //More could be done here......
    //             //Also doesn't fit so good on iPad.
    //             var caption = item.el.attr('title');
    //             return caption;
    //         }
    //     },

    //     //This will let us click through images eventually....
    //     gallery: {
    //         enabled: true
    //     },
    // });

    $(".hamburger").click(function(){
        $(".mobile-nav").toggleClass("mobile-nav-active");
        $("body").toggleClass("mobile-nav-background-color");
    });

    $(".mobile-links").click(function(){
        $(".mobile-nav").removeClass("mobile-nav-active");
        $("body").removeClass("mobile-nav-background-color");
    });

});
