const container = document.querySelector('.container');
const cardWrapper = document.querySelector('.card-container');
const cards = cardWrapper.querySelectorAll('.review-card');
const leftButton = document.querySelector('.card-mover-btn.left');
const rightButton = document.querySelector('.card-mover-btn.right');

const scrollStep = container.clientWidth; // Define scroll step based on container width
let currentScrollPosition = 0;

function updateButtonStates() {
	const threshold = scrollStep; // Define threshold for disabling buttons
	leftButton.disabled = currentScrollPosition <= threshold;
	rightButton.disabled =
		currentScrollPosition >= cardWrapper.scrollWidth - container.clientWidth;
}

leftButton.addEventListener('click', () => {
	currentScrollPosition -= scrollStep;
	cardWrapper.scrollBy({ left: -scrollStep, behavior: 'smooth' });
	updateButtonStates();
});

rightButton.addEventListener('click', () => {
	currentScrollPosition += scrollStep;
	cardWrapper.scrollBy({ left: scrollStep, behavior: 'smooth' });
	updateButtonStates();
});

export { updateButtonStates }; // Update button states initially
