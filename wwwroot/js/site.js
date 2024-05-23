// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

"use strict";

const mailto = document.getElementById("mailto");

window.onload = init;

function init() {
    mailto.addEventListener("click", sendEmail);
}

function sendEmail() {
    window.location.href = "mailto:amab2201@student.miun.se";
}