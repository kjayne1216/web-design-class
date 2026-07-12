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
    answer.textContent = "Return the baby to where it was found and observe it from a distance to see if the mother returns. If it is injured, cold, or the mother does not return after a reasonable time, contact a rehabilitator.";
}
function ans2() {
    heading.style.display = "block";
    answer.textContent = "Signs of rabies can include abnormal behavior, aggression, uncoordinated movements, or excessive salivation. However, only a professional can properly diagnose rabies. Keep your distance and contact animal control.";
}
function ans3() {
    heading.style.display = "block";
    answer.textContent = "No, birds have a poor sense of smell. If the baby is uninjured, you can safely return it to the nest. The parents will not abandon it just because it has been touched by a human.";
}
function ans4() {
    heading.style.display = "block";
    answer.textContent = "You can volunteer by filling out the application form on our Contact Us page, or by calling our main office during business hours to learn about upcoming orientation sessions.";
}
