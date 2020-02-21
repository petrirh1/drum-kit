let audios;
let keys;
const className = 'active';
const allowedKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

window.addEventListener('load', () => {
	audios = document.querySelectorAll('.audio');
	keys = document.querySelectorAll('.key');

	keys.forEach((key, index) => {
		key.addEventListener('click', () => {
			audios[index].currentTime = 0;
			audios[index].play();
		});
	});
});

document.addEventListener('keydown', e => {
	e.preventDefault(); // prevents firing search on firefox when key is being pressed

	if (!allowedKeys.includes(e.key.toUpperCase())) return;

	const newAudios = Array.from(audios); // converts node list to array
	const index = newAudios.findIndex(i => i.parentNode.innerText === e.key.toUpperCase());

	handleClass(keys[index]);
	audios[index].currentTime = 0;
	audios[index].play();
});

const handleClass = el => {
	el.classList.add(className);

	el.addEventListener('animationend', () => {
		el.classList.remove(className);
	});
};
