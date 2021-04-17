var score = 0;
var forceval = 1;
var forcecost = 30;

var generators = 0;
var generatorcost = 15;
var generators2 = 0;
var generatorcost2 = 30;
var generators3 = 0;
var generatorcost3 = 60;
var generators4 = 0;
var generatorscost4 = 100;

function addScore() {
  score = score + forceval;
  document.getElementById("score").innerHTML = score;
}

function increaseForce() {
  if (score >= forcecost) {
  score = score - forcecost;
  forceval = forceval + 1;
  forcecost = forcecost * 2;
  document.getElementById("score").innerHTML = score;
  document.getElementById("forceval").innerHTML = forceval;
  document.getElementById("forcecost").innerHTML = forcecost;
  }
}

function buyGenerator() {
  if (score >= generatorcost) {
    score = score - generatorcost;
    generators++;
    //increase cursor cost
    generatorcost = generatorcost * 2;
    document.getElementById("score").innerHTML = score;
  document.getElementById("generators").innerHTML = generators;
  document.getElementById("generatorcost").innerHTML = generatorcost;
  }
}

function buyGenerator2() {
  if (score >= generatorcost2) {
    score = score - generatorcost2;
    generators2++;
    //increase cursor cost
    generatorcost2 = generatorcost2 * 2;
    document.getElementById("score").innerHTML = score;
  document.getElementById("generators2").innerHTML = generators2;
  document.getElementById("generatorcost2").innerHTML = generatorcost2;
  }
}

function buyGenerator3() {
  if (score >= generatorcost3) {
    score = score - generatorcost3;
    generators3++;
    //increase cursor cost
    generatorcost3 = generatorcost3 * 2;
    document.getElementById("score").innerHTML = score;
  document.getElementById("generators3").innerHTML = generators3;
  document.getElementById("generatorcost3").innerHTML = generatorcost3;
  }
}

function buyGenerator4() {
  if (score >= generatorcost4) {
    score = score - generatorcost4;
    generators4++;
    //increase cursor cost
    generatorcost4 = generatorcost4 * 2;
    document.getElementById("score").innerHTML = score;
  document.getElementById("generators4").innerHTML = generators4;
  document.getElementById("generatorcost4").innerHTML = generatorcost4;
  }
}

setInterval(function() {
  score = score + generators + generators2 + generators3 + generators4;
  document.getElementById("score").innerHTML = score;
}, 1000);