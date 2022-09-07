'use strict';

let start = document.querySelector('#start');
let startBtn = document.querySelector('#start button');
let game = document.querySelector('#game');
let audioPlayer = document.querySelector('audio');
let sound = document.querySelector('#sound img');
sound.isPlay = false;
let player = document.querySelector('#player');
let lifes = document.querySelector('#lifes');
let countLifes = 7;
let score = document.querySelector('#score');
let end = document.querySelector('#end');
let endBtn = document.querySelector('#end button');
let skin1 = document.querySelector('#select-player').children[0];
let skin2 = document.querySelector('#select-player').children[1];
let interval;

//change skin
skin1.onclick = () => {
	skin2.className = '';
	skin1.className = 'selected';
	player.className = 'skin_1'
}

skin2.onclick = () => {
	skin1.className = '';
	skin2.className = 'selected';
	player.className = 'skin_2'
}

//натискання кнопки старт
startBtn.onclick = startGame;

function startGame() {
	start.style.display = 'none';
	game.style.display = '';
	createEnemy();
	showLifes();
};

//вмикання / вимикання звуку
sound.onclick = () => {
	sound.isPlay = !sound.isPlay;
	if (sound.isPlay) {
		audioPlayer.pause();
		sound.src = 'images/mute_sound.png';
	} else {
		audioPlayer.play();
		sound.src = 'images/sound_on.png';
	}
}

//керування
document.onkeydown = (event) => {
	if (game.style.display == '') {
		if (event.keyCode == '83'
			&& player.offsetTop + player.clientHeight + 20 < document.documentElement.clientHeight) {
			player.style.top = player.offsetTop + 40 + 'px';
		};
		if (event.keyCode == '87' && player.offsetTop > 60) {
			player.style.top = player.offsetTop - 40 + 'px';
		};
		if (event.keyCode == '32') {
			shot();
		};
	};
}

// show lifes
function showLifes() {
	lifes.innerHTML = '';
	while (lifes.children.length < countLifes) {
		lifes.appendChild(document.createElement('SPAN'));
	};
	if (countLifes < 1) {
		endGame();
	}
}

// enemys
function createEnemy() {
	interval = setInterval(() => {
		let enemy = document.createElement('DIV');
		enemy.className = 'enemy type-' + Math.round(Math.random()+1);
		enemy.style.visibility = 'hidden';
		game.appendChild(enemy);
		enemy.style.top = 100 + Math.round (Math.random()
			* (document.documentElement.clientHeight - enemy.clientHeight - 200)) + 'px';
		enemy.style.visibility = '';
		moveEnemy(enemy, 40);
	}, 1000);

}

function moveEnemy(enemy, delay) {
	let timer = setInterval(() => {
		enemy.style.left = enemy.offsetLeft - 10 + 'px';
		if (enemy.offsetLeft < -100) {
			enemy.remove();
			countLifes -= 1;
			showLifes();
			clearInterval(timer);
		}
	}, delay)
};

//shot
function shot() {
	let bullet = document.createElement('DIV');
	bullet.className = 'bullet';
	bullet.style.top = player.offsetTop + 140 + 'px';
	game.appendChild(bullet);
	moveBullet(bullet);
};

function moveBullet(bullet) {
	let timer = setInterval(() => {
		bullet.style.left = bullet.offsetLeft + 20 + 'px';
		isBoom(bullet);
		if (bullet.offsetLeft > document.documentElement.clientWidth + 100) {
			bullet.remove();
			clearInterval(timer);
		}
	}, 30)
}

function isBoom(bullet) {
	let enemys = document.querySelectorAll('.enemy');
	enemys.forEach((enemy) => {
		if (enemy && bullet.offsetTop > enemy.offsetTop
			&& bullet.offsetTop + bullet.clientHeight < enemy.offsetTop + enemy.clientHeight
			&& bullet.offsetLeft > enemy.offsetLeft
		) {
			boom(bullet.offsetTop, bullet.offsetLeft);
			bullet.remove();
			enemy.remove();
		};
	});
}

function boom(x, y) {
	let boom = document.createElement('DIV');
	plusScore();
	boom.className = 'boom';
	boom.style.top = x - 100 + 'px';
	boom.style.left = y - 100 + 'px';
	game.appendChild(boom);
	setTimeout(() => boom.remove(), 1000)
}

// plus score
function plusScore () {
	score.firstElementChild.innerText = +score.firstElementChild.innerText + 1;
}

function endGame() {
	clearInterval(interval);
	document.querySelector('#end h1').innerText = (
		'Your score: ' + score.firstElementChild.innerText
	);
	game.innerText = '';
	end.style.display = '';
	game.style.display = 'none';
}

endBtn.onclick = () => {
	location.reload();
};