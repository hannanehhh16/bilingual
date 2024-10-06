"use strict";

var btn = document.getElementById("btn");
var home = document.getElementById("home");
var rnd = Math.floor(Math.random() * 7);
document.body.style.backgroundImage = "url(img/".concat(rnd, ".jpg)");
document.body.style.backgroundSize = "100%";
var flag = true; // Event

btn.onclick = changeLang; // Function

function changeLang() {
  if (flag) {
    home.textContent = "home";
    btn.textContent = "FA";
    flag = false;
  } else {
    home.textContent = "خانه";
    btn.textContent = "EN";
    flag = true;
  }
}
//# sourceMappingURL=pompt.dev.js.map
