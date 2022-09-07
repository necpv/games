let field = document.querySelector('#cards');
let reset = document.querySelector('#reset');
let resetBtn = document.querySelector('#reset-btn');

let selected = [];
let images = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
let usedCards = 0;
let posed = false;

for (let i=0; i<16; i++) {
	let li = document.createElement('LI');
	li.id = i;
	field.appendChild(li);
}

images = images
	.map((i) => [i, Math.random()])
	.sort((a,b) => a[1] - b[1])
	.map((i) => i[0]);

field.onclick = function(event) {
	let element = event.target;
	if (element.tagName == 'LI' && element.className != 'active' && !posed) {
		element.className = 'active';
		element.style.backgroundImage = 'url("images/' + images[element.id] + '.png")';
		selected.push(element);

		if (selected.length == 2) {
			posed = true;
			if (images[selected[0].id] == images[selected[1].id]) {
				selected[0].style.visibility = 'hidden';
				selected[1].style.visibility = 'hidden';
				usedCards += 2;
			};

			setTimeout(function() {
				selected[0].style.backgroundImage = 'url("images/back.png")';
				selected[1].style.backgroundImage = 'url("images/back.png")';
				selected[0].className = '';
				selected[1].className = '';
				selected = [];
				posed = false;
				if (usedCards == 16) {
					reset.style.display = 'block';
				};
			}, 600)
		}
	}
}

resetBtn.onclick = function() {
	location. reload()
}