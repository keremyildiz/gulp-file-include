$('.main-slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold:100,
});

$('.brand-slider').slick({
    dots: false,
    touchThreshold: 1000,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
            arrows: true,
            slidesToShow: 6,
            slidesToScroll: 6,
        }
    }]
});
