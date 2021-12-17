$(function() {
    // Header Icon Set
    /*$.ajax({
        url: "icons.html",
        success: function(result) {
            $(".site-header .icon-set").html(result);
        }
    });
    */

    // Mobile Menu Opened
    $(".mobile-menu-opened").click(function() {
        $("body").toggleClass("mobile-menu-ready");
        setTimeout(function() {
            $("body").toggleClass('mobile-menu-animate');
        }, 100);
    });

    // Mobile Menu Closed
    $("html , body").click(function(e) {
        var m = $('.mobile-menu-opened , .site-header-bottom');
        var bdy = $('body');
        if (!m.is(e.target) && m.has(e.target).length === 0) {
            bdy.removeClass('mobile-menu-animate');
            setTimeout(function() {
                bdy.removeClass('mobile-menu-ready');
            }, 700);
        }
    });

    // Search Focused , Keyup

    $(".search-input").click(function() {
        $("body").addClass("search-ready");
        setTimeout(function() {
            $("body").addClass('search-animate');
        }, 100);
    });

    // Search Keyup
    $('.search-input').keyup(function() {
        if ($.trim($('.search-input').val()).length > 2) {
            $("body").addClass('search-keyup');
        } else {
            $("body").removeClass('search-keyup');
        }
    });

    // Search Close
    $("html , body , .search-close").click(function(e) {
        var m = $('.search-input , .search-suggest , .search-text');
        var bdy = $('body');
        if (!m.is(e.target) && m.has(e.target).length === 0) {
            bdy.removeClass('search-animate');
            bdy.removeClass('search-ready');
            bdy.removeClass('search-keyup');
            $(".search-input").val("");
        }
    });

    // CATEGORY MENU 
    $('.site-menu li.lvl-1').hover(function(){
        $("body").toggleClass("menu-active");
    });

    $(".site-menu li.lvl-1 > b").click(function() {
        $(this).parent(".lvl-1").toggleClass("selected");
    });

    $(".menu-overlay").click(function() {
        $(".site-menu li.lvl-1").removeClass("selected");
        $("body").removeClass("menu-active");
    });

    $(".site-menu li.lvl-2 > a").click(function() {
        $(this).parent('.lvl-2').toggleClass("selected");
    });

    // DR Tab Menu
       
    $(".dr-tab-header > a").click(function() {
        var tab_index = $(this).index();
        $(".dr-tab-content > div , .dr-tab-header > a").removeClass("active");
        $(".dr-tab-content > div").eq(tab_index).addClass("active");
        $(this).addClass("active");
        $('.tab-carousel-slider').slick('setPosition');
    });


    // DR Accordion Menu
       
    $(".dr-accordion-header").click(function() {
        $(this).parent(".dr-accordion-item").toggleClass("active");
    });

    

    // Carousel Slider
    $('.carousel-slider').slick({
        dots: false,
        infinite: false,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        mobileFirst: true,
        centerMode: false,
        centerPadding: '40px',
        variableWidth: false,
        swipeToSlide: true,
        responsive: [
            {
            breakpoint: 767,
            settings: {
                centerMode: false,
                variableWidth: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                swipeToSlide: false,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                centerMode: false,
                variableWidth: false,
                slidesToShow: 6,
                slidesToScroll: 6,
                swipeToSlide: false,
            }
        }
    ]
    });

        // Carousel Slider
        $('.tab-carousel-slider').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            mobileFirst: true,
            centerMode: false,
            centerPadding: '0px',
            variableWidth: false,
            swipeToSlide: true,
            responsive: [
                {
                breakpoint: 510,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    swipeToSlide: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    swipeToSlide: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    swipeToSlide: false,
                }
            }
        ]
        });

    // Homepage Cover Slider
    $('.cover-slider').slick({
        dots: true,
        touchThreshold: 1000,
        infinite: true,
        fade: true,
        cssEase: 'linear',
    });

    // Cover Slider 
    $('.homepage-slider.cover-slider').slick({
        dots: true,
        touchThreshold: 1000,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
    });

})