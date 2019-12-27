/*
CHECKLIST
Petra: funkcie openSideMenu, closeSideMenu, hideAllCrossroads, openCrossroad, closeCrossroad, moveLeft, moveRight,
        animateCrossroad1-5, playDemo, cleanSelected, printCarOrder, selectObject
*/
var selected = [];
var carOrder = [];
//TODO dorobit kontrolu spravnej odpovede
var correctCarOrder=[
    ["pink-car1","black-car1","yellow-car1"],
    ["green-car2","red-car2"],
    ["blue-car3","grey-car3","yellow-car3"],
    ["pink-car4","black-car4"],
    [
        ["cyclist5","green-car5","red-car5"],
        ["green-car5","cyclist5","red-car5"]
    ],
    [],[],[],[],[],
    [],[],[],[],[]
];
var activeCrossroadIndex = 0;


function cleanSelected() {
    selected = [];
    carOrder = [];
}


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

//vsetky svg krizovatky nastavene na display:none
function hideAllCrossroads(){
  var crossroads = document.getElementsByClassName("crossroad");
  var crossroadsCount = crossroads.length;

  for (var i = 0; i < crossroadsCount; i++){
    var crossroadId = "crossroad"+(i+1)+"-fullsize";
    var crossroad = document.getElementById(crossroadId);
    crossroad.style.display = "none";
  }
}

//otvorenie okna svg krizovatky s cislom crossroadNum (1 az 15)
function openCrossroad(crossroadNum) {
  var fullsizeView = document.getElementById("fullsizeView");
  var crossroadId = "crossroad"+crossroadNum+"-fullsize";

  cleanSelected();
  printCarOrder();
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

//zatvorenie okna svg krizovatky
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
  cleanSelected();
  printCarOrder();
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
  cleanSelected();
  printCarOrder();
  hideAllCrossroads();
  crossroads[activeCrossroadIndex].style.display = "flex";
}

// vygenerovanie aktualneho datumu {matus}
function date(){
  var month = new Array("január","február","marec","apríl","máj","jún","júl","august","september","október","november","december");
  var d = new Date();
  var actualDate = d.getDate() + "." + month[d.getMonth()] + " "+ d.getFullYear();
  var out = document.getElementById("nDate");

  out.innerHTML = "Dnes je " + actualDate ;
  //sss
}

//function dateMeniny(){
// var name = " ";
// }

//***********************************************************************ANIMACIE***********************************************************************

//krizovatka 1: 1) ruzove, 2) cierne, 3) zlte
function animateCrossroad1() {
  //povodne pozicie a rotacie aut
  var pinkCar = document.getElementById('pink-car1');
  pinkCar.style.transform = 'rotate(-90deg)';

  var blackCar = document.getElementById('black-car1');
  blackCar.style.transform = 'rotate(0deg)';

  var yellowCar = document.getElementById('yellow-car1');
  yellowCar.style.transform = 'rotate(90deg)';

  //casova os: animacie sa vykonavaju postupne za sebou
  var timeline1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  //pridanie animacii

  //animacia pohybu ruzoveho auta
  timeline1.add({
        targets: '#pink-car1',
        right: {
          value: ['15%','55%'],
          easing: 'easeInSine',
        },
        rotate:{
          value:'-=90',
          delay: 200,
          easing: 'easeInSine'
        },
        top: {
          value: ['24%','100%'],
          delay: 1000,
          easing: 'easeInSine'
        },
        easing: 'easeInSine',
        duration:2000
      });

  //animacia pohybu cierneho auta
  timeline1.add({
        targets: '#black-car1',
        bottom: {
          value: ['20%','55%'],
          easing: 'easeInSine'
        },
        rotate:{
          value:'-=90',
          delay: 200,
          easing: 'easeInSine'
        },
        right: {
          value: ['37%','105%'],
          easing: 'easeInSine',
          delay:1000
        },
        easing: 'easeInSine',
        duration:2000
      });

  //animacia pohybu zlteho auta
  timeline1.add({
        targets: '#yellow-car1',
        left: {
          value: ['7%','105%'],
          easing: 'easeInSine',
        },
        easing: 'easeInSine',
        duration:2000
      });
}

//krizovatka 2: 1) zelene, 2) cervene
//TODO pohyb po kruhaci
function animateCrossroad2() {
  //povodne pozicie a rotacie aut
  var greenCar = document.getElementById('green-car2');
  greenCar.style.transform = 'rotate(90deg)';

  //casova os: animacie sa vykonavaju postupne za sebou
  var timeline2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  //pridanie animacii

  //animacia pohybu zeleneho auta
  /*timeline2.add({
   targets: '#green-car2',
   easing: 'easeInSine',
   duration:2000
 });*/

  //animacia pohybu cerveneho auta
  timeline2.add({
    targets: '#red-car2',
    bottom: {
      value: ['1%','35%'],
      easing: 'easeInSine'
    },
    rotate:{
      value:'+=90',
      delay: 200,
      easing: 'easeInSine'
    },
    right: {
      value: ['37%','-15%'],
      easing: 'easeInSine',
      delay: 1000
    },
    easing: 'easeInSine',
    duration:2000
  });

  /*
  keyframes: [
    {translateY: -40},
    {translateX: 250},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],

  nime({
  targets: '.property-keyframes-demo .el',
  translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 1000 },
    { value: 0, duration: 500, delay: 1000 }
  ],
  scaleX: [
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],
  scaleY: [
    { value: [1.75, 1], duration: 500 },
    { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 },
    { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
    { value: 1, duration: 450 }
  ],
  easing: 'easeOutElastic(1, .8)',
  loop: true
});



   */
}

//krizovatka 3: 1) modre, 2) sive, 3) zlte
function animateCrossroad3() {
  //povodne pozicie a rotacie aut
  var blueCar = document.getElementById('blue-car3');
  blueCar.style.transform = 'rotate(90deg)';

  var greyCar = document.getElementById('grey-car3');
  greyCar.style.transform = 'rotate(0deg)';

  var yellowCar = document.getElementById('yellow-car3');
  yellowCar.style.transform = 'rotate(-180deg)';

  //casova os: animacie sa vykonavaju postupne za sebou
  var timeline3 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  //pridanie animacii

  //animacia pohybu modreho auta
  timeline3.add({
    targets: '#blue-car3',
    left: {
      value: ['8%','105%'],
      easing: 'easeInSine',
    },
    easing: 'easeInSine',
    duration:2000
  });

  //animacia pohybu siveho auta
  timeline3.add({
        targets: '#grey-car3',
        bottom: {
          value: ['15%','33%'],
          easing: 'easeInSine'
        },
        rotate:{
          value:'+=90',
          delay: 200,
          easing: 'easeInSine'
        },
        right: {
          value: ['37%','-15%'],
          easing: 'easeInSine',
          delay:1000
        },
        easing: 'easeInSine',
        duration:2000
      });

  //animacia pohybu zlteho auta
  timeline3.add({
        targets: '#yellow-car3',
        top: {
          value: ['15%','47%'],
          easing: 'easeInSine'
        },
        rotate:{
          value:'-=90',
          delay: 200,
          easing: 'easeInSine'
        },
        right: {
          value: ['55%','-15%'],
          easing: 'easeInSine',
          delay:1000
        },
        easing: 'easeInSine',
        duration:2000
      });

}

//krizovatka 4: 1) ruzove, 2) cierne - da prednost ruzovemu a chodcom
function animateCrossroad4() {
  //povodne pozicie a rotacie aut
  var pinkCar = document.getElementById('pink-car4');
  pinkCar.style.transform = 'rotate(90deg)';

  var blackCar = document.getElementById('black-car4');
  blackCar.style.transform = 'rotate(0deg)';

  var timeline4 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  //pridanie animacii

  //animacia pohybu ruzoveho auta
  timeline4.add({
      targets: '#pink-car4',
      left: {
        value: ['5%','105%'],
        easing: 'easeInSine',
      },
      easing: 'easeInSine',
      duration:2000
  });

  //animacia pohybu cierneho auta
  timeline4.add({
        targets: '#black-car4',
        bottom: {
          value: ['2%','33%'],
          easing: 'easeInSine'
        },
        rotate:{
          value:'+=90',
          delay: 200,
          easing: 'easeInSine'
        },
        right: {
          value: ['27%','-15%'],
          easing: 'easeInSine',
          delay:1000
        },
        easing: 'easeInSine',
        duration:2000
      });

}

//krizovatka 5: 1) cyklista a zelene naraz, potom 2) cervene
function animateCrossroad5() {
  //povodne pozicie a rotacie aut
  var greenCar = document.getElementById('green-car5');
  greenCar.style.transform = 'rotate(0deg)';

  var redCar = document.getElementById('red-car5');
  redCar.style.transform = 'rotate(90deg)';

  var cyclist = document.getElementById('cyclist5');
  cyclist.style.transform = 'rotate(90deg)';

  //2 casove osi: cyklista a zelene auto idu naraz

  //cyklista a cervene auto
  var timeline5 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });
  //zelene auto
  var timeline5_2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

  //pridanie animacii

  //animacia pohybu cyklistu
  timeline5.add({
    targets: '#cyclist5',
    left: {
      value: ['15%','37%'],
      easing: 'easeInSine'
    },
    rotate: {
      value:'+=90',
      delay: 200,
      easing: 'easeInSine'
    },
    top: {
      value: ['55%','100%'],
      easing: 'easeInSine',
      delay:1000
    },
    easing: 'easeInSine',
    duration:2000
  });
  //animacia pohybu cerveneho auta
  timeline5.add({
        targets: '#red-car5',
        left: {
          value: ['7%','37%'],
          easing: 'easeInSine'
        },
        rotate: {
          value:'+=90',
          delay: 200,
          easing: 'easeInSine'
        },
        top: {
          value: ['41%','100%'],
          easing: 'easeInSine',
          delay:1000
        },
        easing: 'easeInSine',
        duration:2000
      });

//animacia pohybu zeleneho auta
  timeline5_2.add({
    targets: '#green-car5',
    bottom: {
      value: ['10%','35%'],
      easing: 'easeInSine'
    },
    rotate:{
      value:'+=90',
      delay: 200,
      easing: 'easeInSine'
    },
    right:{
      value: ['37%','-15%'],
      easing: 'easeInSine',
      delay:1000
    },
    easing: 'easeInSine',
    duration:2000
  });

}

//TODO dorobit funkcie
function animateCrossroad6(){}
function animateCrossroad7(){}
function animateCrossroad8(){}
function animateCrossroad9(){}
function animateCrossroad10(){}
function animateCrossroad11(){}
function animateCrossroad12(){}
function animateCrossroad13(){}
function animateCrossroad14(){}
function animateCrossroad15(){}

//spustenie animacie po kliknuti na tlacidlo "Spusti demo"
function playDemo(){
  switch (activeCrossroadIndex){
    case 0:
      animateCrossroad1();
      break;
    case 1:
      animateCrossroad2();
      break;
    case 2:
      animateCrossroad3();
      break;
    case 3:
      animateCrossroad4();
      break;
    case 4:
      animateCrossroad5();
      break;
    case 5:
      animateCrossroad6();
      break;
    case 6:
      animateCrossroad7();
      break;
    case 7:
      animateCrossroad8();
      break;
    case 8:
      animateCrossroad9();
      break;
    case 9:
      animateCrossroad10();
      break;
    case 10:
      animateCrossroad11();
      break;
    case 11:
      animateCrossroad12();
      break;
    case 12:
      animateCrossroad13();
      break;
    case 13:
      animateCrossroad14();
      break;
    case 14:
      animateCrossroad15();
      break;
  }
}

function printCarOrder(){
    var p = document.getElementById("car-order");
    p.innerHTML = "Poradie: ";
    for (var i = 0; i < carOrder.length; i++){
        p.innerHTML += carOrder[i];
        (i !== carOrder.length-1) ? (p.innerHTML+=", "):p.innerHTML+=". "
    }
}

function selectObject(object){

    if (selected[object.id]){
        object.style.border="none";
        selected[object.id] = false;
        var index = carOrder.indexOf(object.id);
        if (index !== -1)
            carOrder.splice(index, 1);
        printCarOrder();
    }
    else{
        object.style.border="1px solid blue";
        selected[object.id] = true;
        carOrder.push(object.id);
        printCarOrder();
    }
}

