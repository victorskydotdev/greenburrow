const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const mobileNav = document.getElementById('mobile-nav');

const mobileNavFunct = () => {
	openMenu.addEventListener('click', () => {
		mobileNav.style.display = 'grid';
		openMenu.style.display = 'none';
		closeMenu.style.display = 'block';
	});

	closeMenu.addEventListener('click', () => {
		mobileNav.style.display = 'none';
		closeMenu.style.display = 'none';
		openMenu.style.display = 'block';
	});
};

export { mobileNavFunct };
