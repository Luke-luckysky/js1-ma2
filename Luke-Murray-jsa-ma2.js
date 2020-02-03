//Question 1

const myFunctionExpression = function() {
  console.log("Luke");
};


//Question 2

const clickmeBtn = document.querySelector(".btn");

const q2Click = function() {
  console.log("A click event happened");
};

clickmeBtn.addEventListener("click", q2Click);


//Question 3

const pressMe = document.querySelector("#firstName");

const q3Press = function() {
  console.log(event.key);
};
pressMe.addEventListener("keydown", q3Press);


//Question 4

const hoverMe = document.querySelector("button");

function q4Hover() {
  hoverMe.classList.add("hover");
}

hoverMe.addEventListener("mouseover", q4Hover);


//Question 5

const removeMe = document.querySelector("[data-animal]");

function q5Remove() {
  removeMe.classList.remove("hover");
}

removeMe.addEventListener("mouseout", q5Remove);


//Question 6

const loopList = document.querySelectorAll("li");

function q6loopOver(animal) {
    
    for(let i = 0; i = loopList.length; i++) {
        loopList[i].addEventList("mouseover", q6loopOver);
        
        // Can't get any further then this :(
    }
}


//Question 7

const animal = "bird";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}


// Question 8

const sheep = ["Malcolm", "Anders", "Marie"];

function q8callTheSheep(sheep) {
  console.log(sheep);
}

sheep.forEach(q8callTheSheep);

// sheep.forEach(function(sheep) {
//     console.log(sheep);
// });   // I LIKE THE ONE ABOVE BETTER


// Question 9

const stopwatch = setInterval(q9timer, 500);

let timer = 0;

function q9timer() {
  console.log("hello");

  if (timer === 4) {
    clearInterval(stopwatch);
  }

  timer++;
}


//Question 10

const updateText = document.querySelector("div.container");

const container = setInterval(updateDiv, 1500);

let counter = "Text updated";

function updateDiv() {
  updateText.innerText = counter;
}