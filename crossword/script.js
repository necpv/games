var start = document.querySelector("#start");
var crossword = document.querySelector("#crossword");
var container = document.querySelector("#letter-container");
var list = document.querySelector(".list");
var word = document.getElementsByClassName(".word");
var congratulations = document.querySelector("#congratulations");

var wordOne = document.querySelector("#word-1");
var wordTwo = document.querySelector("#word-2");
var wordThree = document.querySelector("#word-3");
var wordFour = document.querySelector("#word-4");
var wordFive = document.querySelector("#word-5");
var wordSix = document.querySelector("#word-6");
var wordSeven = document.querySelector("#word-7");
var wordEight = document.querySelector("#word-8");
var wordNine = document.querySelector("#word-9");

var li = list.getElementsByTagName("li");

var done = 0;

start.onclick = function() {
	crossword.style.display = "block";
	start.style.display = "none";

	wordOne.style.display = "block";
	wordTwo.style.display = "block";
	wordThree.style.display = "block";
	wordFour.style.display = "block";
	wordFive.style.display = "block";
	wordSix.style.display = "block";
	wordSeven.style.display = "block";
	wordEight.style.display = "block";
	wordNine.style.display = "block";
  showTime();
}

//треба буде натиснути ще раз після неправильного слова, щоб повторити
wordOne.onclick = function() {

 var click = 0;
 container.style.display = "block";

 var caliber = ["к", "а", "л", "і", "б", "р"];
 var randomLetter = Math.floor(Math.random() * caliber.length);

 for (var i = 0; i < 6; i = i + 1) {
  var li = document.createElement("li");
  list.appendChild(li);
  li.className = "word";
  li.id = i;
  li.innerText = caliber[randomLetter];
   
  caliber.splice(randomLetter, 1);
  randomLetter = Math.floor(Math.random() * caliber.length);
 }

 list.addEventListener("click", pressLetter);
 function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordOne.innerText = wordOne.innerText + e.target.innerText;
            click = click + 1;
          }

        if (wordOne.innerText == "калібр") {
   		 	container.style.display = "none";
    		wordOne.style.cursor = "default";
    		wordOne.onclick = "";
        done++;
        check();
        list.removeEventListener("click", pressLetter);
   		} else if (click == 6) {
    		wordOne.innerText = "";
    		wordOne.innerHTML = "";
    		click = 0;
    		//word.style.display = "block";
    		list.removeEventListener("click", pressLetter);
   		}
   };
}


wordTwo.onclick = function() {
	var click = 0;
 	container.style.display = "block";

 	var transporter = ["б", "р", "о", "н", "е", "т", "р", "а", "н", "с", "п", "о", "р", "т", "е", "р"];
 	var randomLetter = Math.floor(Math.random() * transporter.length);

 	for (var i = 0; i < 16; i = i + 1) {
  		var li = document.createElement("li");
  		list.appendChild(li);
  		li.className = "word";
  		li.id = i;
  		li.innerText = transporter[randomLetter];
   
  		transporter.splice(randomLetter, 1);
  		randomLetter = Math.floor(Math.random() * transporter.length);
 	}


 	list.addEventListener("click", pressLetter);
 	function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordTwo.innerText = wordTwo.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordTwo.innerText == "бронетранспортер") {
    			container.style.display = "none";
    			wordTwo.style.cursor = "default";
    			wordTwo.onclick = "";
          done++;
          check();
          list.removeEventListener("click", pressLetter);
   			} else if (click == 16) {
    			wordTwo.innerText = "";
    			wordTwo.innerHTML = "";
    			click = 0;
    			//word.style.display = "block";
    			list.removeEventListener("click", pressLetter);
   			}
   	};
}


wordThree.onclick = function() {

 var click = 0;
 container.style.display = "block";

 var ship = ["к", "р", "е", "й", "с", "е", "р"];
 var randomLetter = Math.floor(Math.random() * ship.length);

 for (var i = 0; i < 7; i = i + 1) {
  var li = document.createElement("li");
  list.appendChild(li);
  li.className = "word";
  li.id = i;
  li.innerText = ship[randomLetter];
   
  ship.splice(randomLetter, 1);
  randomLetter = Math.floor(Math.random() * ship.length);
 }


 list.addEventListener("click", pressLetter);
 function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordThree.innerText = wordThree.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordThree.innerText == "крейсер") {
    			container.style.display = "none";
    			wordThree.style.cursor = "default";
    			wordThree.onclick = "";
          done++;
          check();
    			list.removeEventListener("click", pressLetter);
   		} else if (click == 7) {
    		wordThree.innerText = "";
    		wordThree.innerHTML = "";
    		click = 0;
    //word.style.display = "block";
    		list.removeEventListener("click", pressLetter);
   		}
   };
}


wordFour.onclick = function() {

 	var click = 0;
 	container.style.display = "block";

	var  chor = ["ч", "о", "р", "н", "о", "б", "а", "ї", "в", "к", "а"];
 	var randomLetter = Math.floor(Math.random() * chor.length);

 	for (var i = 0; i < 11; i = i + 1) {
  		var li = document.createElement("li");
  		list.appendChild(li);
  		li.className = "word";
  		li.id = i;
  		li.innerText = chor[randomLetter];
   
  		chor.splice(randomLetter, 1);
  		randomLetter = Math.floor(Math.random() * chor.length);
 	}


 	list.addEventListener("click", pressLetter);
 	function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordFour.innerText = wordFour.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordFour.innerText == "чорнобаївка") {
    			container.style.display = "none";
    			wordFour.style.cursor = "default";
    			wordFour.onclick = "";
          done++;
          check();
    			list.removeEventListener("click", pressLetter);
   			} else if (click == 11) {
    			wordFour.innerText = "";
    			wordFour.innerHTML = "";
    			click = 0;
    			//word.style.display = "block";
    			list.removeEventListener("click", pressLetter);
   			}
   };
}

wordFive.onclick = function() {
 	var click = 0;
 	container.style.display = "block";

	var  aircraft = ["л", "і", "т", "а", "к"];
 	var randomLetter = Math.floor(Math.random() * aircraft.length);

 	for (var i = 0; i < 5; i = i + 1) {
  		var li = document.createElement("li");
  		list.appendChild(li);
  		li.className = "word";
  		li.id = i;
  		li.innerText = aircraft[randomLetter];
   
  		aircraft.splice(randomLetter, 1);
  		randomLetter = Math.floor(Math.random() * aircraft.length);
 	}


 	list.addEventListener("click", pressLetter);
 	function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordFive.innerText = wordFive.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordFive.innerText == "літак") {
    			container.style.display = "none";
    			wordFive.style.cursor = "default";
    			wordFive.onclick = "";
          done++;
          check();
    			list.removeEventListener("click", pressLetter);
   			} else if (click == 5) {
    			wordFive.innerText = "";
    			wordFive.innerHTML = "";
    			click = 0;
    			//word.style.display = "block";
    			list.removeEventListener("click", pressLetter);
   			}
   };
}

wordSix.onclick = function() {
	var click = 0;
 	container.style.display = "block";

	var  helicopter = ["г", "е", "л", "і", "к", "о", "п", "т", "е", "р"];
 	var randomLetter = Math.floor(Math.random() * helicopter.length);

 	for (var i = 0; i < 10; i = i + 1) {
  		var li = document.createElement("li");
  		list.appendChild(li);
  		li.className = "word";
  		li.id = i;
  		li.innerText = helicopter[randomLetter];
   
  		helicopter.splice(randomLetter, 1);
  		randomLetter = Math.floor(Math.random() * helicopter.length);
 	}


 	list.addEventListener("click", pressLetter);
 	function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordSix.innerText = wordSix.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordSix.innerText == "гелікоптер") {
    			container.style.display = "none";
    			wordSix.style.cursor = "default";
    			wordSix.onclick = "";
          done++;
          check();
    			list.removeEventListener("click", pressLetter);
   			} else if (click == 10) {
    			wordSix.innerText = "";
    			wordSix.innerHTML = "";
    			click = 0;
    			//word.style.display = "block";
    			list.removeEventListener("click", pressLetter);
   			}
   };
}

wordSeven.onclick = function() {
		var click = 0;
 	container.style.display = "block";

	var  terrorism = ["т", "е", "р", "о", "р", "и", "з", "м"];
 	var randomLetter = Math.floor(Math.random() * terrorism.length);

 	for (var i = 0; i < 8; i = i + 1) {
  		var li = document.createElement("li");
  		list.appendChild(li);
  		li.className = "word";
  		li.id = i;
  		li.innerText = terrorism[randomLetter];
   
  		terrorism.splice(randomLetter, 1);
  		randomLetter = Math.floor(Math.random() * terrorism.length);
 	}


 	list.addEventListener("click", pressLetter);
 	function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordSeven.innerText = wordSeven.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordSeven.innerText == "тероризм") {
    			container.style.display = "none";
    			wordSeven.style.cursor = "default";
    			wordSeven.onclick = "";
          done++;
          check();
    			list.removeEventListener("click", pressLetter);
   			} else if (click == 8) {
    			wordSeven.innerText = "";
    			wordSeven.innerHTML = "";
    			click = 0;
    			//word.style.display = "block";
    			list.removeEventListener("click", pressLetter);
   			}
   };
}

wordEight.onclick = function() {
	var click = 0;
 	container.style.display = "block";

	var  grenade = ["г", "р", "а", "н", "а", "т", "о", "м", "е", "т"];
 	var randomLetter = Math.floor(Math.random() * grenade.length);

 	for (var i = 0; i < 10; i = i + 1) {
  		var li = document.createElement("li");
  		list.appendChild(li);
  		li.className = "word";
  		li.id = i;
  		li.innerText = grenade[randomLetter];
   
  		grenade.splice(randomLetter, 1);
  		randomLetter = Math.floor(Math.random() * grenade.length);
 	}


 	list.addEventListener("click", pressLetter);
 	function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordEight.innerText = wordEight.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordEight.innerText == "гранатомет") {
    			container.style.display = "none";
    			wordEight.style.cursor = "default";
    			wordEight.onclick = "";
          done++;
          check();
    			list.removeEventListener("click", pressLetter);
   			} else if (click == 10) {
    			wordEight.innerText = "";
    			wordEight.innerHTML = "";
    			click = 0;
    			//word.style.display = "block";
    			list.removeEventListener("click", pressLetter);
   			}
   };
}

wordNine.onclick = function() {
	var click = 0;
 	container.style.display = "block";

	var orcs = ["о", "р", "к", "и"];
 	var randomLetter = Math.floor(Math.random() * orcs.length);

 	for (var i = 0; i < 4; i = i + 1) {
  		var li = document.createElement("li");
  		list.appendChild(li);
  		li.className = "word";
  		li.id = i;
  		li.innerText = orcs[randomLetter];
  		orcs.splice(randomLetter, 1);
  		randomLetter = Math.floor(Math.random() * orcs.length);
 	}


 	list.addEventListener("click", pressLetter);
 	function pressLetter(e) {
          if(e.target && e.target.nodeName == "LI") {
            e.target.style.display = "none";
            wordNine.innerText = wordNine.innerText + e.target.innerText;
            click = click + 1;
          }

           if (wordNine.innerText == "орки") {
    			container.style.display = "none";
				wordNine.style.cursor = "default";
				wordNine.onclick = "";
        done++;
          check();
				list.removeEventListener("click", pressLetter);
   			} else if (click == 4) {
    			wordNine.innerText = "";
    			wordNine.innerHTML = "";
    			click = 0;
    			//word.style.display = "block";
    			list.removeEventListener("click", pressLetter);
   			}
   };
}

function check() {
	if (done == 2) {
    endGame();
  }
}

function endGame() {
  clearInterval(interval);
  document.querySelector('#end h4').innerText = (
    'Час проходження: ' + time.innerText
  );
  game.innerText = '';
  end.style.display = '';
  game.style.display = 'none';
}

//Count time

let interval;
let time;
let endBtn = document.querySelector('#end button')

function showTime(){
  let start = new Date();
  time = document.createElement('h1');
  time.style = `font-family: 'Roboto Slab', serif;
  font-size: 50px;
  color: white;`
  time.style.position = 'absolute';
  time.style.top = '780px';
  time.style.left = '100px';
  game.appendChild(time);
  
  interval = setInterval(() => {update(time,start)}, 1000);
  update(time,start);
};

function update(time,start) {
  let date = new Date(new Date() - start);
  let hours = date.getHours() - 3;
  if (hours < 10) hours = '0' + hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;

  time.innerText = hours + ':' + minutes + ':' + seconds;
}

endBtn.onclick = () => {
  location.reload();
};