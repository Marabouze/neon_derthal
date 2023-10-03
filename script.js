$(document).ready(function(){
    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 3, // Показывать по 3 изображения одновременно
        slidesToScroll: 1, // Прокручивать по 1 изображению за раз
        autoplay: true, // Автоматическое прокручивание
        autoplaySpeed: 2000, // Скорость автоматической прокрутки в миллисекундах (2 секунды)
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
