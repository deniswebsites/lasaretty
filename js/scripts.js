$.noConflict();
jQuery(document).ready(function($){

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).on('load', function(){
    
});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    if( $(".slider_1").length > 0 ) {
        $(".slider_1").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true
        });
    }

    if( $(".slider_2").length > 0 ) {
        $(".slider_2").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    if( $(".persons_slider").length > 0 ) {
        $(".persons_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 2
        });
    }

    if( $(".slider_3").length > 0 ) {
        $(".slider_3").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 2
        });
    }

// ----------------

    $(".dropdown_item_title").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".dropdown_item");
        dr = parent.find(".dropdown_item_content");
        if(dr.is(":hidden")) {
            dr.slideDown(300);
            parent.addClass("active");
        } else {
            dr.slideUp(300);
            parent.removeClass("active");
        }
    });

// ----------------

    $(".tab_link").on("click", function(e) {
      parent = $(this).closest(".tab_list");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

});

});