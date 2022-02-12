/* расскоментить при интеграции
import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy]);
*/

const initSlider = () => {
	new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 800,
		loop: true,
		autoplay: true,
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