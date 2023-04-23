const wrapper = document.querySelector('.bubble-wrapper');
const redBtn = document.querySelector('.select-red-btn');
const greenBtn = document.querySelector('.select-green-btn');
const blueBtn = document.querySelector('.select-blue-btn');

let index = 0;

const Red = {
	One: "rgb(239, 83, 80)",
	Two: "rgb(244, 67, 54)",
	Three: "rgb(229, 57, 53)",
	Four: "rgb(211, 47, 47)",
	Five: "rgb(198, 40, 40)"
}

const Green = {
	One: "rgb(102, 187, 106)",
	Two: "rgb(76, 175, 80)",
	Three: "rgb(67, 160, 71)",
	Four: "rgb(56, 142, 60)",
	Five: "rgb(46, 125, 50)"
}

const Blue = {
	One: "rgb(66, 165, 245)",
	Two: "rgb(33, 150, 243)",
	Three: "rgb(30, 136, 229)",
	Four: "rgb(25, 118, 210)",
	Five: "rgb(21, 101, 192)"
}

const storage = localStorage.getItem('color');

let Color = (storage === 'blue') ? Blue : (storage === 'green') ? Green : Red;

let colors = [
	Color.One, 
	Color.Two, 
	Color.Three, 
	Color.Four, 
	Color.Five, 
	Color.Four, 
	Color.Three, 
	Color.Two
];

redBtn.onclick = () => {
	Color = Red;

	colors = [
		Color.One, 
		Color.Two, 
		Color.Three, 
		Color.Four, 
		Color.Five, 
		Color.Four, 
		Color.Three, 
		Color.Two
	];

	localStorage.setItem('color', 'red');
}
greenBtn.onclick = () => {
	Color = Green;

	colors = [
		Color.One, 
		Color.Two, 
		Color.Three, 
		Color.Four, 
		Color.Five, 
		Color.Four, 
		Color.Three, 
		Color.Two
	];

	localStorage.setItem('color', 'green');
}
blueBtn.onclick = () => {
	Color = Blue;

	colors = [
		Color.One, 
		Color.Two, 
		Color.Three, 
		Color.Four, 
		Color.Five, 
		Color.Four, 
		Color.Three, 
		Color.Two
	];

	localStorage.setItem('color', 'blue');
}

const animateBubble = x => {  
	const bubble = document.createElement("div");
	bubble.className = "bubble";
	bubble.style.left = `${x}px`;
	bubble.style.backgroundColor = colors[index++ % (colors.length - 1)];
  wrapper.appendChild(bubble);
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);