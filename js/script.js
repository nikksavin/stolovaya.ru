// Слайдеры

const swiperTop = new Swiper('.offers-top__slider .swiper-container', {
    pagination: {
      el: '.offers-top__slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.offers-top__slider .swiper__btn-next',
        prevEl: '.offers-top__slider .swiper__btn-prev',
      },
    speed: 1000,
    autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
});

const swiperRecomendations = new Swiper('.offers-bottom__special-right .swiper-container', {
    pagination: {
      el: '.offers-bottom__special-right .swiper-pagination',
      clickable: true,
    },
    speed: 1000,
    navigation: {
        nextEl: '.offers-bottom__special-right .swiper__btn-next',
        prevEl: '.offers-bottom__special-right .swiper__btn-prev',
      },
    autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
});

  //выпадающее меню футер моб
  if ($(window).width() < 1000) {
    $('.links-top__list-title').click(function() {
      if ($(this).closest('.links-top__list').find('ul').css('display') ==
          'none') {
        $('.links-top__list-title').removeClass('active');
        $(this).addClass('active');
        $('.links-top__list ul').slideUp();
        $(this).closest('.links-top__list').find('ul').slideDown();
      }
      else {
        $(this).removeClass('active');
        $(this).closest('.links-top__list').find('ul').slideUp();
      }
    });
  }

//показать еще
 $('.advantages__left-btn').click(function() {
    if ($('.advantages__left-hidden').css('display') == 'none') {
        $(this).text('-');
        $(this).
            closest('.advantages__left').
            find('.advantages__left-hidden').
            slideDown();
    }
    else {
        $(this).text('+');
        $(this).
            closest('.advantages__left').
            find('.advantages__left-hidden').
            slideUp();
    }
});

// Модальное окно

// открыть по кнопке
$('.phone__link').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
    $('.phone__link').addClass('link--active');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	$('.phone__link').removeClass('link--active');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('.phone__link').removeClass('link--active');
	}
});

