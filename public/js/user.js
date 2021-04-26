$(document).ready(function () {

  $('.ham').click(function () {
    $('nav').toggleClass('nav_active');
    $('.ham').toggleClass('ham_active');
    $('.logotip_mobail').toggleClass('logotip_mobail_active');
    $('.logotip_desctop').toggleClass('logotip_desctop_active');
    $('.header_communication').toggleClass('header_communication_active');
  });

    
  /*-----убрать плюс--------*/
  
  $('.footer_services').click(function () {
    $('.footer_services').toggleClass('footer_services_active')
    $('.footer_top_middle__list ul').toggleClass('list_active')
  })


  /*------x----------------------x---------*/ 

  /*-----Слайдер на главной странице БАННЕР-----*/

  $('.banner_slider').slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 18000,
 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
    },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 6000
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
    }
]
  });
  
  /*------x----------------------x---------*/ 

  /*-----Слайдер "Товары недели"-----*/

  $('.product_week_slider').slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
//    autoplay: true,
//    autoplaySpeed: 8000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
    },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 4000
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
//          autoplay: true,
//          autoplaySpeed: 9000
        }
    }
]
  });
  
  /*------x----------------------x---------*/ 

  /*-----------Слайдер с навигацией----------*/
  
 $('.product_slider_for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: '.product_slider_nav'
 });
  
 $('.product_slider_nav').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.product_slider_for',
   dots: false,
   arrows: true,
   centerMode: false,
   focusOnSelect: true,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    }
  ]
 });
  
/*------x----------------------x---------*/  
  
  
/*---------------------Якоря----------------*/

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;


    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  
  /*------x----------------------x---------*/   
  
  
  
/*----------Слайдер страницы товара --------------*/
  
//   $('.machine_content_slider-single').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	fade: false,
// 	adaptiveHeight: true,
// 	infinite: false,
//	useTransform: true,
// 	speed: 400,
// 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
// });
//
// $('.machine_content_slider-nav')
// 	.on('init', function(event, slick) {
// 		$('.machine_content_slider-nav .slick-slide.slick-current').addClass('is-active');
// 	})
// 	.slick({
// 		slidesToShow: 8,
// 		slidesToScroll: 8,
// 		dots: false,
// 		focusOnSelect: false,
// 		infinite: false,
// 		responsive: [{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 8,
// 				slidesToScroll: 1,
// 			}
// 		}, {
// 			breakpoint: 640,
// 			settings: {
// 				slidesToShow: 8,
// 				slidesToScroll: 1,
//			}
// 		}, {
// 			breakpoint: 420,
// 			settings: {
// 				slidesToShow: 8,
// 				slidesToScroll: 1,
//		}
// 		}]
// 	});
//
// $('.machine_content_slider-single').on('afterChange', function(event, slick, currentSlide) {
// 	$('.machine_content_slider-nav').slick('slickGoTo', currentSlide);
// 	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
// 	$('.machine_content_slider-nav .slick-slide.is-active').removeClass('is-active');
// 	$(currrentNavSlideElem).addClass('is-active');
// });
//
// $('.machine_content_slider-nav').on('click', '.slick-slide', function(event) {
// 	event.preventDefault();
// 	var goToSingleSlide = $(this).data('slick-index');
//
// 	$('.machine_content_slider-single').slick('slickGoTo', goToSingleSlide);
// });
  
/*------x----------------------x---------*/ 
  
  
  /*-----Модальное окно-----*/
  $('#parts, #youtube').magnificPopup({
  delegate: 'a',
  removalDelay: 500, 
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true,
  type: 'iframe'  
});
  
  
  /*---------кнопки "+" "-" добавления товара --------------*/
  
  $( 'body' ).on( 'click', 'button.plus, button.minus', function() {
 
	var qty = $(this).parent().find( 'input' ),
	    val = parseInt( qty.val() ),
	    min = parseInt( qty.attr( 'min' ) ),
	    max = parseInt( qty.attr( 'max' ) ),
	    step = parseInt( qty.attr( 'step' ) );
 
	// дальше меняем значение количества в зависимости от нажатия кнопки
	if ( $( this ).is( '.plus' ) ) {
		if ( max && ( max <= val ) ) {
			qty.val( max );
		} else {
			qty.val( val + step );
		}
	} else {
		if ( min && ( min >= val ) ) {
			qty.val( min );
		} else if ( val > 1 ) {
			qty.val( val - step );
		}
	}
 
});
  
  /*--------x-----------------x---------*/
  
});