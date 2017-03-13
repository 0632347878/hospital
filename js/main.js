jQuery(document).ready(function () {

    $('.rocket').on('click touchend', function () {
        $('html, body').animate({'scrollTop': 0}, 800, 'swing');
        return false;
    });

    $('.like').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });

    $('.cabinet-ul a').on('click', function () {
        $('.cabinet-block > div').hide();
        $('.cabinet-block > [class="'+$(this).attr('data-tab')+'"]').show();
        return false;
    });

        $('.slick_w').slick({
            arrows: true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,  
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    
    $('.carousel').slick({
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.carousel-partners').slick({
        dots: false,
        infinite: false,
        speed: 400,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.vertical-carousel').rcarousel({
        orientation: 'vertical',
        visible: 4,
        step: 2,
        width: 225,
        height: 144,
        navigation: {
            prev: ".prev",
            next: ".next"
        }
    });

    $('.groups-carousel').rcarousel({
        orientation: 'vertical',
        visible: 4,
        step: 2,
        width: 225,
        height: 144,
        navigation: {
            prev: ".prev2",
            next: ".next2"
        }
    });

    $(".slider").slider({
        range: true,
        min: 18,
        max: 100,
        values: [ 18, 80 ],
        slide: function( event, ui ) {
            var values = $(".slider").slider( "option", "values" );
            $( "#slider-result-1" ).html(values[0] + ' лет');
            $( "#slider-result-2" ).html(values[1] + ' лет');
        },
        change: function(event, ui) {
            var values = $(".slider").slider( "option", "values" );
            $( "#slider-result-1" ).html(values[0] + ' лет');
            $( "#slider-result-2" ).html(values[1] + ' лет');
        }
    });

      $('.vertical-carousel2').rcarousel({
        orientation: 'vertical',
        visible: 4,
        step: 1,
        width: 225,
        height: 144,
        loop: true,
        // auto: {enabled: true},
        navigation: {
          prev: ".prev2",
          next: ".next2"
        },
      });
      $('.vertical-carousel3').rcarousel({
        orientation: 'vertical',
        visible: 4,
        step: 1,
        width: 225,
        height: 144,
        loop: true,
        // auto: {enabled: true},
        navigation: {
          prev: ".prev3",
          next: ".next3"
        },
      });
  jQuery(function($) {
    $('.vertical-carousel4').rcarousel({
      orientation: 'vertical',
      visible: 5,
      step: 1,
      width: 260,
      height: 120,
      navigation: {
        prev: ".prev4",
        next: ".next4"
      },
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
    });
  });
});