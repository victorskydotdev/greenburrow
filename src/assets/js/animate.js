const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show-layout');
		} else entry.target.classList.remove('show-layout');
	});
});

const hiddenElements = document.querySelectorAll('.hidden');

const animateOnScroll = () => {
	hiddenElements.forEach((element) => {
		observer.observe(element);
	});
};

export { animateOnScroll };

const resilentAnime = document.querySelector('.resilient');
const sustainableAnime = document.querySelector('.sustainable');
const startingText = document.querySelector('.starting-text');

let isResilentVisible = true; // Track visibility for resilient element
let isSustainableVisible = false; // Track visibility for sustainable element (initially hidden)

const hideText = () => {
	setTimeout(() => {
		startingText.style.display = 'none';
	}, 3000);
};

hideText();
if (resilentAnime) {
	const animateText = () => {
		setInterval(() => {
			isResilentVisible = !isResilentVisible;
			isSustainableVisible = !isSustainableVisible;

			if (isResilentVisible) {
				resilentAnime.classList.remove('text-hidden');
				resilentAnime.classList.add('show-animation');
				sustainableAnime.classList.remove('show-animation');
				sustainableAnime.classList.add('text-hidden');
			} else {
				resilentAnime.classList.remove('show-animation');
				resilentAnime.classList.add('text-hidden');
				sustainableAnime.classList.remove('text-hidden');
				sustainableAnime.classList.add('show-animation');
			}
		}, 3000); // Interval set to 2 seconds
	};

	window.addEventListener('DOMContentLoaded', animateText);
}
