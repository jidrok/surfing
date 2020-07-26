"use strict";

console.log("llll");

function app() {
  var nav = $(".nav_content");
  var burger = $("#burger");

  console.log('t');

  burger.on("click", function i() {
    event.preventDefault();
    nav.toggleClass('show');
    console.log('f');
  });
};