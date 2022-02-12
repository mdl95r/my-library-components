const initBurger = () => {
	const BURGER = document.querySelector('.js-burger-button');

	BURGER.addEventListener('click', function() {
		this.classList.toggle('header__burger_open');
	})
}

export default initBurger