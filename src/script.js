
/*
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
*/

function openSideMenu() {

  var sideMenu = document.getElementById("side-menu");
  if (sideMenu.style.display === "block") {
    sideMenu.style.display = "none";
  } else {
    sideMenu.style.display = "block";
  }

  
}

function closeSideMenu() {
	var sideMenu = document.getElementById("side-menu");
    sideMenu.style.display = "none";
}