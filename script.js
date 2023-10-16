"use strict";

const toggle = document.querySelector("input[name=theme]");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("theme-dark");
});
