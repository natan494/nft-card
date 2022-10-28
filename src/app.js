const mainIng = document.querySelector(`#img_container`);
const eye = document.querySelector(`#eye`);
mainIng.addEventListener(`mouseover`, () => {
	eye.classList.add(`opacity`);
});

mainIng.addEventListener("mouseout", () => {
	eye.classList.remove(`opacity`);
});
