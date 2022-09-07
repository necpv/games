let words = [
  ['cats','Are cats?'],
  ['dog','Is dog?'],
  ['horse','Is horse?'],
  ['cow','Is cow?'],
  ['clown','Is clown?'],
  ['door','Is door?'],
];
let game = document.querySelector("#game");
let done = 0;
let isActiveWord = false;
let currentWord;

let ourWords = words
  .map((i) => [i, Math.random()])
  .sort((a,b) => a[1] - b[1])
  .map((i) => i[0])
  .slice(0,3);

ourWords.forEach(buildCrossword);
ourWords.forEach(buildQuestions);

function buildCrossword(word) {
  let line = document.createElement('div');
  line.isWord = true;
  line.word = word[0];
  line.className = 'line'
  game.firstElementChild.appendChild(line);
  let letters = word[0].split('');
  letters.forEach((i) => {
    sqr = document.createElement('div');
    sqr.className = 'sqr'
    line.appendChild(sqr);
  })
}

function buildQuestions(word) {
  let line = document.createElement('h2');
  line.innerText = word[1];
  game.children[1].appendChild(line);
}

game.firstElementChild.onclick = gess;

function gess(event) {
  if (isActiveWord) return;
  currentWord = event.target;
  if (!event.target.isWord) {
      currentWord = currentWord.parentElement;
  };
  if (currentWord.isDone) return;
  isActiveWord = true;
  let word = currentWord.word;
  let container = game.children[2];
  let list = document.createElement('div');
  list.className = 'line';
  container.appendChild(list);
  var click = 0;
  container.style.display = "block";

  var letters = word.split('');
  letters.push('abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)]);
  let wordLength = letters.length;
  var randomLetter = Math.floor(Math.random() * letters.length);

  for (var i = 0; i < wordLength; i++) {
    var li = document.createElement("div");
    list.appendChild(li);
    li.className = "sqr";
    li.innerText = letters[randomLetter];
    letters.splice(randomLetter, 1);
    randomLetter = Math.floor(Math.random() * letters.length);
  };
  list.addEventListener("click", pressLetter);
  let myGess = '';

  function pressLetter(e) {
    if(e.target.className == "sqr") {
      e.target.style.display = "none";
      currentWord.children[click].innerText = e.target.innerText;
      myGess += e.target.innerText;
      click = click + 1;
    }

    if (myGess == word) {
      currentWord.isDone = true;
      container.innerHTML = '';
      isActiveWord = false;
      done++;
      check();
      list.removeEventListener("click", pressLetter);
    } else if (click == wordLength-1) {
      for (let i=0; i<wordLength-1; i++) {
        currentWord.children[i].innerText = "";
      };
      container.innerHTML = '';
      isActiveWord = false;
      click = 0;
      list.removeEventListener("click", pressLetter);
    };
  };
}

function check() {
	if (done == ourWords.length) {
    endGame();
  }
}

function endGame() {
  game.innerText = '';
  game.style.display = 'none';
  setTimeout(() => {
    alert ('You won!');
    location.reload()
  }, 200);
}