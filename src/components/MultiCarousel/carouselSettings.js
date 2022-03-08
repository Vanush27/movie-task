export const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5,

    responsive: [
        {
            breakpoint: 1720,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 448,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

