import initAccordion from '../../../components/accordion/index.js';
import initTabs from '../../../components/tabs/index.js';
import initBurger from '../../../components/burger/index.js';
import initModal from '../../../components/modal/index.js';
import initSelect from '../../../components/form/select/index';
import initSlider from './components/slider';



document.addEventListener('DOMContentLoaded', () => {
	initAccordion();
	initTabs();
	initBurger();
	initSlider();
	initModal();
	initSelect();
})