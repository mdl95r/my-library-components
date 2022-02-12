import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const initSlider = () => {
	new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 800,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})
}

export default initSlider
