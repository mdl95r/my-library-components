const initModal = () => {
	const TRIGGER_MODAL_BUTTONS = document.querySelectorAll('.js-trigger-modal-btn');
	const MODAL = document.querySelector('.js-modal');
	const BODY = document.querySelector('body');

	if (MODAL) {
		TRIGGER_MODAL_BUTTONS.forEach(el => {
			el.addEventListener('click', function(e) {
				e.preventDefault();
				const id = this.getAttribute('href');
				const CURRENT_POPUP = document.querySelector(id);
				
				CURRENT_POPUP.classList.add('modal_opened');
				BODY.classList.add('modal-noScroll');
			})
		})
	
		document.addEventListener('click', (e) => {
			const trg = e.target;
			const MODAL_OPENED = document.querySelector('.modal.modal_opened');
			if (trg.classList.contains('modal_opened') || trg.classList.contains('js-modal-close-btn')) {
				MODAL_OPENED.classList.remove('modal_opened');
				BODY.classList.remove('modal-noScroll');
			}
		})
	}
}

export default initModal