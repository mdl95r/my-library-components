const initAccordion = () => {
	const selectors = {
		ACCORDION_ITEM: '.js-accordion-item',
		ACCORDION_CONTENT: '.js-accordion-content',
		ACCORDION_BODY: '.js-accordion-body ',
	}

	const states = {
		ACCORDION_ITEM_OPENED: 'accordion__item_is-opened',
	}

	const allAccordionItems = document.querySelectorAll(selectors.ACCORDION_ITEM);

	allAccordionItems.forEach((el) => {
		el.addEventListener('click', function(e) {
			this.classList.toggle(states.ACCORDION_ITEM_OPENED);
			const body = this.querySelector(selectors.ACCORDION_BODY);
			if (this.classList.contains(states.ACCORDION_ITEM_OPENED)) {
				const heightContent = this.querySelector(selectors.ACCORDION_CONTENT).offsetHeight;
				body.style.height = `${heightContent}px`;
			} else {
				body.style.height = '';
			}
		})
	})

	// custom js if needed
}

export default initAccordion