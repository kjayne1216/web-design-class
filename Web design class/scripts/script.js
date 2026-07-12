/*
Student Name: Kelly Meadows
File Name: script.js
Date: "07/12/2026
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
        var menuicon = document.getElementById("icon");
        if (navlinks.style.display === "block") {
            navlinks.style.display = "none";
                menuicon.style.color = "#2a1f14";
        } else {
            navlinks.style.display = "block";
                menuicon.style.color = "#f6eee4";
        }
}

function ans1() {
    heading.style.display = "block";
    answer.textContent = "";
}
function ans2() {
    heading.style.display = "block";
    answer.textContent = "";
}
function ans3() {
    heading.style.display = "block";
    answer.textContent = "Step back and observe the situation for a few minutes. Wait to see if a parent arrives. If the animal is in immediate danger of a predator or is in the road, remove the baby and bring to a rescue center.";
}
function ans4() {
    heading.style.display = "block";
    answer.textContent = "";
}
