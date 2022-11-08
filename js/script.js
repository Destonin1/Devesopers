$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        nextArrow: '<button class="arr-next"></button>',
        prevArrow: '<button class="arr-previous"></button>'
    });
});