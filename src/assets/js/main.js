;(function ($) {
  'use strict'

  /* 1. Proloder */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow')
    $('body').delay(450).css({
      overflow: 'visible'
    })
  })

  /* 2. sticky And Scroll UP */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop()
    if (scroll < 400) {
      $('.header-sticky').removeClass('sticky-bar')
      $('#back-top').fadeOut(500)
    } else {
      $('.header-sticky').addClass('sticky-bar')
      $('#back-top').fadeIn(500)
    }
  })

  // Scroll Up
  $('#back-top a').on('click', function () {
    $('body,html').animate(
      {
        scrollTop: 0
      },
      800
    )
    return false
  })

  /* 4. MainSlider-1 */
  // h1-hero-active
  function mainSlider () {
    var BasicSlider = $('.slider-active')
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find(
        '[data-animation]'
      )
      doAnimations($firstAnimatingElements)
    })
    BasicSlider.on(
      'beforeChange',
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find('[data-animation]')
        doAnimations($animatingElements)
      }
    )

    $(document).ready(function () {
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      })

      // courses-area
      $('.courses-actives').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 400,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      })

      /* 4. Testimonial Active*/
      // var testimonial = $('.h1-testimonial-active')
      // if (testimonial.length) {
      //   testimonial.slick({
      //     dots: true,
      //     infinite: true,
      //     speed: 1000,
      //     autoplay: true,
      //     loop: true,
      //     arrows: true,
      //     prevArrow:
      //       '<button type="button" class="slick-prev"><i class="ti-arrow-top-left"></i></button>',
      //     nextArrow:
      //       '<button type="button" class="slick-next"><i class="ti-arrow-top-right"></i></button>',
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     responsive: [
      //       {
      //         breakpoint: 1024,
      //         settings: {
      //           slidesToShow: 1,
      //           slidesToScroll: 1,
      //           infinite: true,
      //           dots: true,
      //           arrow: true
      //         }
      //       },
      //       {
      //         breakpoint: 600,
      //         settings: {
      //           slidesToShow: 1,
      //           slidesToScroll: 1,
      //           arrow: true
      //         }
      //       },
      //       {
      //         breakpoint: 480,
      //         settings: {
      //           slidesToShow: 1,
      //           slidesToScroll: 1,
      //           arrow: true
      //         }
      //       }
      //     ]
      //   })
      // }

      // Single Img slder
      // $('.top-job-slider').slick({
      //   dots: false,
      //   infinite: true,
      //   autoplay: true,
      //   speed: 400,
      //   centerPadding: '60px',
      //   centerMode: true,
      //   focusOnSelect: true,
      //   arrows: false,
      //   prevArrow:
      //     '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      //   nextArrow:
      //     '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      //   slidesToShow: 4,
      //   slidesToScroll: 1,
      //   responsive: [
      //     {
      //       breakpoint: 1400,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 992,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         arrows: false,
      //         centerMode: false
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         arrows: false,
      //         centerMode: false
      //       }
      //     }
      //   ]
      // })

      // Single Img slder
      // $('.team-active').slick({
      //   dots: false,
      //   infinite: true,
      //   autoplay: true,
      //   speed: 400,
      //   arrows: true,
      //   prevArrow:
      //     '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      //   nextArrow:
      //     '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      //   slidesToShow: 4,
      //   slidesToScroll: 1,
      //   responsive: [
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 992,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         arrows: false
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         arrows: false
      //       }
      //     }
      //   ]
      // })

      // Brand Active
      // $('.brand-active').slick({
      //   dots: false,
      //   infinite: true,
      //   autoplay: true,
      //   speed: 400,
      //   arrows: false,
      //   slidesToShow: 5,
      //   slidesToScroll: 1,
      //   responsive: [
      //     {
      //       breakpoint: 1024,
      //       settings: {
      //         slidesToShow: 4,
      //         slidesToScroll: 3,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 992,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: false
      //       }
      //     },
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 1
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //   ]
      // })
    })
  }
  mainSlider()

  /* 7. data-background */
  $('[data-background]').each(function () {
    $(this).css(
      'background-image',
      'url(' + $(this).attr('data-background') + ')'
    )
  })

  // 11. ---- Mailchimp js --------//
  function mailChimp () {
    $('#mc_embed_signup').find('form').ajaxChimp()
  }
  mailChimp()
})(jQuery)

// Enquiry form logic
function open_close_form (i) {
  let form = $('#form')
  if (i.classList.contains('fa-times')) {
    $('body').css('background', 'initial')
    form.css('top', '-200%')
  }
}

window.addEventListener('load', () => {
  setTimeout(() => {
    let form = $('#form')
    form.css('top', '0');
    $("body").css("background","rgba(0,0,0,0.6)");
  }, 3000)
});