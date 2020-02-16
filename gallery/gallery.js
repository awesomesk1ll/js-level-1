let IMGS = ['https://i.playground.ru/e/YNCtBoZigQh3r0BdVeBMLg.jpeg?480x640', 'https://i.playground.ru/e/Tf0mwt9jPRX8OLPMsWupgQ.jpeg?480x640',
    'https://i.playground.ru/e/T4l7p0eVZeOBAFQOy8BIpQ.jpeg?480x640', 'https://i.playground.ru/e/KloMCCgISWymrCtkSEUHdA.jpeg?480x640',
    'https://i.playground.ru/e/kLs-qQnqWHLdhb0D1C4SYQ.jpeg?480x640'
];

let domString = '';
IMGS.forEach((elem, index) => domString += `
	<img src ="${elem}" alt="pic${index+1}" border="0">
	`);

domString = `<h1>Image gallery</h1>
    		<img class="displayed-img" src="https://i.playground.ru/e/YNCtBoZigQh3r0BdVeBMLg.jpeg?480x640" alt="preview" border="0">
        <div class="gallery-bar">
		<div class="arrow left" onclick="move('left')"></div>
		${domString}
		<div class="arrow right" onclick="move('right')"></div>
		</div>`;

document.write(domString);

let displayedImg = document.querySelector("img.displayed-img");
let images = document.querySelectorAll(".gallery-bar img");

for (let i = 0; i < images.length; i++) {
    images[i].onclick = function(event) {
        displayedImg.setAttribute("src", event.target.src);
    }
}

function move(side) {
    let current = IMGS.indexOf(displayedImg.src);
    side == "left" ? current-- : current++;
    current < 0 ? current = IMGS.length - 1 : current > IMGS.length - 1 ? current = 0 : null;
    displayedImg.src = IMGS[current];
}

document.addEventListener('keydown', function(event) {
    move(event.keyCode < 39 ? "left" : "right")
});