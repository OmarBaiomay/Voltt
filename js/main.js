/*global $, window, WOW, document*/

$(window).scroll(function () {

    "use strict";

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 150) {
        $('nav').addClass('active');
    } else {
        $('nav').removeClass('active');
    }
});


//// WOW js 

new WOW().init();

/// ScrollIt

$(function () {

    "use strict";

    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'ease', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 0 // offste (in px) for fixed top navigation
    });
});


/////// OWL Carousel 

$(document).ready(function () {
    "use strict";
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        center: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000
    });
});

