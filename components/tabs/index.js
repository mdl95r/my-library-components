const initTabs = () => {
	const TABS = document.querySelectorAll('.js-tab-menu-item');
	TABS.forEach(el => {
		el.addEventListener('click', function () {
			TABS.forEach(el => el.classList.remove('tabs__menu-item_active'));
			this.classList.add('tabs__menu-item_active');
			const id = el.dataset.tabItem;
			showTab(id);
		})
	})
	const showTab = (id) => {
		const itemList = document.querySelector(`.js-tab-item[data-tab-item='${id}']`);
		const itemsList = document.querySelectorAll('.js-tab-item');

		itemsList.forEach(el => el.classList.add('tabs__tab-item_hidden'));
		itemList.classList.remove('tabs__tab-item_hidden');
	}
}

export default initTabs