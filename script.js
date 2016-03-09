var cookieCount = 0;
var cookie = document.getElementById('cookie');
var countElement = document.getElementById('count');
var cps = 0;
var cursorCount = 0;
var cursorCost = 0;
var heliumCount = 0;
var heliumCost = 0;
var lithCount = 0;
var lithiumCost = 0;
cookie.onclick = function () {
  cookieCount++;
  countElement.innerHTML = cookieCount;
}
document.getElementById("buyCursorBtn").onclick = function() {
  if (cookieCount >= cursorCost) {
    cookieCount -= cursorCost;
    cursorCount++;
    cps++;
  }
}
setInterval(function() {
  cookieCount += cps;
},1000);
cursorCountElement = document.getElementById("cursorCount");
setInterval(function() {
  cookieCount += cps;
  countElement.innerHTML = cookieCount;
},1000);
document.getElementById("buyCursorBtn").onclick = function() {
  cookieCount -= cursorCost;
  countElement.innerHTML = cookieCount;
  cursorCount++;
  cursorCountElement.innerHTML = cursorCount;
  cps++;
  countElement.innerHTML = countElement.innerHTML - 10;
}
function aboutHydro() {
  alert("Hydrogen in this game produces 2 atoms every second.");
}
document.getElementById("buyHeliumBtn").onclick = function() {
  if (cookieCount >= heliumCost) {
    cookieCount -= heliumCost;
    heliumCount++;
    cps++;
  }
}
setInterval(function() {
  cookieCount += cps;
},1000);
heliumCountElement = document.getElementById("heliumCount");
setInterval(function() {
  cookieCount += cps;
  countElement.innerHTML = cookieCount;
},1000);
document.getElementById("buyHeliumBtn").onclick = function() {
  cookieCount -= heliumCost;
  countElement.innerHTML = cookieCount;
  heliumCount++;
  heliumCountElement.innerHTML = heliumCount;
  cps++;
  countElement.innerHTML = countElement.innerHTML - 15;
}
function aboutHelium() {
  alert("Helium in this game produces 4 atoms per second.");
}
document.getElementById("buyLithiumBtn").onclick = function() {
  if (cookieCount >= lithiumCost) {
    cookieCount -= lithiumCost;
    lithiumCount++;
    cps++;
  }
}
setInterval(function() {
  cookieCount += cps;
},1000);
lithiumCountElement = document.getElementById("lithiumCount");
setInterval(function() {
  cookieCount += cps;
  countElement.innerHTML = cookieCount;
},1000);
document.getElementById("buyLithiumBtn").onclick = function() {
  cookieCount -= lithiumCost;
  countElement.innerHTML = cookieCount;
  lithiumCount++;
  heliumCountElement.innerHTML = lithiumCount;
  cps++;
  countElement.innerHTML = countElement.innerHTML - 15;
}
function aboutLithium() {
  alert("Lithium in this game produces 4 atoms per second.");
}
