const initSelect = () => {
	const selectors = {
		SELECT_TRIGGER: '.js-select-trigger',
		SELECT_SELECTED: '.js-select-selected',
		SELECT_INPUT: '.js-select-input',
		SELECT_OPTIONS: '.js-select-options',
	}
	
	const states = {
		SELECT_TRIGGER_OPEN: 'select_open',
	}
	
	const SELECTS_TRIGGER = document.querySelectorAll(selectors.SELECT_TRIGGER);
	const SELECTS_OPTIONS = document.querySelectorAll(selectors.SELECT_OPTIONS);

	SELECTS_TRIGGER.forEach(el => {
		el.addEventListener('click', function(e) {
			e.target.closest(selectors.SELECT_TRIGGER).classList.toggle(states.SELECT_TRIGGER_OPEN);
		})
	})

	SELECTS_OPTIONS.forEach(el => {
		el.addEventListener('click', function(e) {
			const trg = e.target;
			const opts = trg.closest(selectors.SELECT_OPTIONS);

			for (const el of opts.children) {
				el.classList.remove('select__option_selected')
			}

			if (trg.classList.contains('select__option')) {
				trg.classList.add('select__option_selected');
			} else {
				return
			}

			const text = trg.textContent
			const currentContainer = trg.closest(selectors.SELECT_TRIGGER);
			
			setSelectedText(text, currentContainer);
		})
	})

	const setSelectedText = (option, container) => {
		const SELECTED = container.querySelector(selectors.SELECT_SELECTED);
		const SELECT = container.querySelector(selectors.SELECT_INPUT);
		SELECTED.textContent = option;
		SELECT.value = option;
	}

	document.addEventListener('click', (e) => {
		const trg = e.target;
		if (!trg.closest(selectors.SELECT_TRIGGER)) {
			SELECTS_TRIGGER.forEach(el => {
				el.classList.remove(states.SELECT_TRIGGER_OPEN);
			})
        }
	})
}

export default initSelect