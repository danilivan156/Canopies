(function ($) {
	$(document).ready(function () {
		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 4,
			spaceBetween: 16,
			grabCursor: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				310: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
				1025: {
					slidesPerView: 4,
				},
			}
		});

		var swiper = new Swiper(".mySwiper-1", {
			slidesPerView: 4,
			spaceBetween: 13,
			grabCursor: true,
			navigation: {
				nextEl: ".swiper-button-next-1",
				prevEl: ".swiper-button-prev-1",
			},
			breakpoints: {
				310: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 5,
				},
				1024: {
					slidesPerView: 3,
				},
				1025: {
					slidesPerView: 5,
				},
			}
		});


		var swiper = new Swiper(".mySwiper-4", {
			slidesPerView: 4,
			spaceBetween: 16,
			grabCursor: true,
			navigation: {
				nextEl: ".swiper-button-next-4",
				prevEl: ".swiper-button-prev-4",
			},
			breakpoints: {
				310: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
				1025: {
					slidesPerView: 4,
				},
			}
		});


		var swiper = new Swiper(".mySwiper-3", {
			spaceBetween: 7,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".mySwiper-2", {
			slidesPerView: 1,
			grabCursor: true,
			thumbs: {
				swiper: swiper,
			},
		});


		$('.tab').click(function(e) {
	        e.preventDefault();
	        const id = $(this).attr('href');
	        $('.tab').removeClass('active');
	        $(this).addClass('active');
	        $('.product__content').removeClass('activ');
	        $(id).addClass('activ');
    	});

	});
})(jQuery);