/*
	Student Name: John Humkey
	File Name: script.js 
	Date: 4/12/24
*/

//Hamburger menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}