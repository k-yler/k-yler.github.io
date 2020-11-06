$(document).ready(function(){
    $('.feedback_slider').slick({
        // dots: true,
        slidesToShow: 4,
            
    })
});

$(document).ready(function(){
    $('.slider-we').slick({
        // dots: true,
        slidesToShow: 7,
        responsive:[{
            breakpoint: 1199,
            settings:{
                slidesToShow: 5
            }
        },{
            breakpoint: 900,
            settings:{
                slidesToShow: 4
            }
        },{
            breakpoint: 767,
            settings:{
                slidesToShow: 3,
                dots: true
            }
        },
        {
            breakpoint: 500,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
    })
});
$(document).ready(function(){
    $('.reviews-slider').slick({
        // dots: true,
        slidesToShow: 6,
        responsive:[{
            breakpoint: 1199,
            settings:{
                slidesToShow: 4
            }
        },{
            breakpoint: 900,
            settings:{
                slidesToShow: 3
            }
        },{
            breakpoint: 767,
            settings:{
                slidesToShow: 2,
                dots: true
            }
        },
        {
            breakpoint: 500,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
    })
});
$(document).ready(function(){
    $('.sales-slider').slick({
        // dots: true,
        slidesToShow: 5,
        responsive:[{
            breakpoint: 1199,
            settings:{
                slidesToShow: 4
            }
        },{
            breakpoint: 900,
            settings:{
                slidesToShow: 3
            }
        },{
            breakpoint: 767,
            settings:{
                slidesToShow: 2,
                dots: true
            }
        },
        {
            breakpoint: 500,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
    })
});
