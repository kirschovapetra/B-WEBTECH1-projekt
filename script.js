/*
CHECKLIST
Petra: funkcie openSideMenu, closeSideMenu, hideAllCrossroads, openCrossroad, closeCrossroad, moveLeft, moveRight
*/

var activeCrossroadIndex = 0;

//otvorenie bocneho menu
function openSideMenu() {
  var sideMenu = document.getElementById("side-menu");
  if (sideMenu.style.display === "block") {
    sideMenu.style.display = "none";
  } else {
    sideMenu.style.display = "block";
  }
}

//zatvorenie bocneho menu
function closeSideMenu() {
	var sideMenu = document.getElementById("side-menu");
    sideMenu.style.display = "none";
}

//zatvorenie vsetkych svg krizovatiek
function hideAllCrossroads(){
  var crossroads = document.getElementsByClassName("crossroad");
  var crossroadsCount = crossroads.length;

  for (var i = 0; i < crossroadsCount; i++){
    var crossroadId = "crossroad"+(i+1)+"-fullsize";
    var crossroad = document.getElementById(crossroadId);
    crossroad.style.display = "none";
  }
}

//otvorenie svg krizovatky
function openCrossroad(crossroadNum) {
  var fullsizeView = document.getElementById("fullsizeView");
  var crossroadId = "crossroad"+crossroadNum+"-fullsize";

  hideAllCrossroads();
  activeCrossroadIndex = crossroadNum-1;

  var crossroad = document.getElementById(crossroadId);

  fullsizeView.style.display = "block";
  crossroad.style.display = "block";

  //ked sa klikne mimo okna, tak sa okno zatvori
  window.onclick = function(event) {
    if (event.target === fullsizeView) {
      closeCrossroad();
    }
  }
}

//zatvorenie svg krizovatky
function closeCrossroad() {
  var fullsizeView = document.getElementById("fullsizeView");
  fullsizeView.style.display = "none";
}

//posun vlavo
function moveLeft(){
  var crossroads = document.getElementsByClassName("crossroad");
  activeCrossroadIndex--;
  if (activeCrossroadIndex < 0){
    activeCrossroadIndex = crossroads.length-1;
  }
  hideAllCrossroads();
  crossroads[activeCrossroadIndex].style.display = "flex";
}

//posun vpravo
function moveRight(){
  var crossroads = document.getElementsByClassName("crossroad");
  activeCrossroadIndex++;
  if (activeCrossroadIndex >= crossroads.length){
    activeCrossroadIndex = 0;
  }
  hideAllCrossroads();
  crossroads[activeCrossroadIndex].style.display = "flex";
}