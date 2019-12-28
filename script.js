/*
CHECKLIST
Petra: funkcie openSideMenu, closeSideMenu, hideAllCrossroads, openCrossroad, closeCrossroad, moveLeft, moveRight,
        animateCrossroad1-5, playDemo, cleanSelected, printCarOrder, selectObject
*/


//TODO dorobit tlacidlo "Spustit znova"


var selected = [];
var carOrder = [];
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

/************************************ODSTRANENIE ZMIEN, VRATENIE DO POVODNEHO STAVU************************************/

//vyprazdnenie poli "selected" a "carOrder", odstranenie oznacenia aut
function cleanSelected() {
    for (var i=0; i< carOrder.length; i++){
        document.getElementById(carOrder[i]).style.border="none";
    }
    selected = [];
    carOrder = [];
}

//nastavenie povodnych pozicii a rotacii aut
function revertCarPositions(){
    //krizovatka 1
    var pinkCar1 = document.getElementById('pink-car1');
    pinkCar1.style.transform = 'rotate(-90deg)';
    pinkCar1.style.top = '24%';
    pinkCar1.style.right = '15%';

    var blackCar1 = document.getElementById('black-car1');
    blackCar1.style.transform = 'rotate(0deg)';
    blackCar1.style.bottom = '20%';
    blackCar1.style.right = '37%';

    var yellowCar1 = document.getElementById('yellow-car1');
    yellowCar1.style.transform = 'rotate(90deg)';
    yellowCar1.style.top = '40%';
    yellowCar1.style.left = '7%';

    //krizovatka 2
    var greenCar2 = document.getElementById('green-car2');
    greenCar2.style.transform = 'rotate(90deg)';
    greenCar2.style.bottom = '32%';
    greenCar2.style.left = '7%';

    var redCar2 = document.getElementById('red-car2');
    redCar2.style.transform = 'rotate(0deg)';
    redCar2.style.bottom = '1%';
    redCar2.style.right = '37%';

    //krizovatka 3
    var blueCar3 = document.getElementById('blue-car3');
    blueCar3.style.transform = 'rotate(90deg)';
    blueCar3.style.top = '47%';
    blueCar3.style.left = '8%';

    var greyCar3 = document.getElementById('grey-car3');
    greyCar3.style.transform = 'rotate(0deg)';
    greyCar3.style.bottom = '15%';
    greyCar3.style.right = '37%';

    var yellowCar3 = document.getElementById('yellow-car3');
    yellowCar3.style.transform = 'rotate(-180deg)';
    yellowCar3.style.top = '15%';
    yellowCar3.style.right = '55%';

    //krizovatka 4
    var pinkCar4 = document.getElementById('pink-car4');
    pinkCar4.style.transform = 'rotate(90deg)';
    pinkCar4.style.bottom = '33%';
    pinkCar4.style.left = '5%';

    //TODO oranzove?

    var blackCar4 = document.getElementById('black-car4');
    blackCar4.style.transform = 'rotate(0deg)';
    blackCar4.style.bottom = '2%';
    blackCar4.style.right = '27%';

    //krizovatka 5
    var greenCar5 = document.getElementById('green-car5');
    greenCar5.style.transform = 'rotate(0deg)';
    greenCar5.style.bottom = '10%';
    greenCar5.style.right = '37%';

    var redCar5 = document.getElementById('red-car5');
    redCar5.style.transform = 'rotate(90deg)';
    redCar5.style.top = '41%';
    redCar5.style.left = '7%';

    var cyclist5 = document.getElementById('cyclist5');
    cyclist5.style.transform = 'rotate(90deg)';
    cyclist5.style.top = '55%';
    cyclist5.style.left = '15%';

    //TODO krizovatky 6-15
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

/************************************************************MENU******************************************************/

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

//otvorenie okna svg krizovatky s cislom crossroadNum (1 az 15)
function openCrossroad(crossroadNum) {
  var fullsizeView = document.getElementById("fullsizeView");
  var crossroadId = "crossroad"+crossroadNum+"-fullsize";

  cleanSelected();
  printCarOrder();
  revertCarPositions();
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

//posun vlavo (prepnutie na predchadzajucu krizovatku)
function moveLeft(){
  var crossroads = document.getElementsByClassName("crossroad");
  activeCrossroadIndex--;
  if (activeCrossroadIndex < 0){
    activeCrossroadIndex = crossroads.length-1;
  }
  cleanSelected();
  printCarOrder();
  revertCarPositions();
  hideAllCrossroads();
  crossroads[activeCrossroadIndex].style.display = "flex";
}

//posun vpravo (prepnutie na nasledujucu krizovatku)
function moveRight(){
  var crossroads = document.getElementsByClassName("crossroad");
  activeCrossroadIndex++;
  if (activeCrossroadIndex >= crossroads.length){
    activeCrossroadIndex = 0;
  }
  cleanSelected();
  printCarOrder();
  revertCarPositions();
  hideAllCrossroads();
  crossroads[activeCrossroadIndex].style.display = "flex";
}

/*******************************************************KALENDAR*******************************************************/

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

//Simona
function vymazInput() {
    document.getElementById("mena").value = "";
}

function onloadfunction(){
    vymazInput();
    date();
}
function loadXMLDoc(dname)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",dname,false);
    xhttp.send();
    return xhttp.responseXML;
}

// s a bez diakritiky
function diaConvert(str) {
    let accents = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøĎďDŽdžÈÉÊËèéêëðÇçČčÐÌÍÎÏìíîïÙÚÛÜùúûüĽĹľĺÑŇňñŔŕřŠšŤťŸÝÿýŽž';
    let accentsOut = "AAAAAAaaaaaasOOOOOOOooooooDdDZdzEEEEeeeeeCcCcDIIIIiiiiUUUUuuuuLLllNNnnRrrSsTtYYyyZz";
    str = str.split('');
    str.forEach((letter, index) => {
        let i = accents.indexOf(letter);
        if (i !== -1) {
            str[index] = accentsOut[i];
        }
    });
    return str.join('');
}

//vyhladavanie v XML 
function searchXML()
{
    stat = ["SKd","PL","HU","AT","CZ"];
    for(j=0; j < stat.length; j++){
        let kontrola = 0;
        let statIndex = stat[j];
        xmlDoc = loadXMLDoc("Mena.xml");
        x = xmlDoc.getElementsByTagName(statIndex);
        input = document.getElementById("mena").value;
        size = input.length;
        input = diaConvert(input).toLowerCase();

        if (input == null || input == "")
        {
            document.getElementById("vysledok").innerHTML= "Zadaj meno!";
            return false;
        }

        for (i=0;i<x.length;i++)
        {
            meno = xmlDoc.getElementsByTagName(statIndex)[i].childNodes[0].nodeValue;
            meno = diaConvert(meno).toLowerCase();
            if (meno.search(input) >= 0 )
            {
                meno = xmlDoc.getElementsByTagName(statIndex)[i].childNodes[0].nodeValue;
                datum = xmlDoc.getElementsByTagName("den")[i+1].childNodes[0].nodeValue;

                datum = datum.substr(2,2)  + "." + datum.substr(0,2);


                divText = datum + " " + statIndex + "<br>" + meno;
                kontrola = 1;
                break;
            }
            else
            {
                divText = "Neexistuje meno";
            }
        }
        if(kontrola===1){
            break;
        }
    }
    document.getElementById("vysledok").innerHTML= divText;
}

/******************************************************ANIMACIE********************************************************/

//krizovatka 1: 1) ruzove, 2) cierne, 3) zlte
function animateCrossroad1() {

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
function animateCrossroad2() {

   //casova os: animacie sa vykonavaju postupne za sebou
  var timeline2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });

    //pridanie animacii

    //animacia pohybu zeleneho auta
    timeline2.add({
        targets: '#green-car2',
        easing: 'easeInOutSine',
        duration: 4000,
        bottom: [
            {value: ['32%','18%'], delay: 600},
            {value:['18%','18%'],duration:20},
            {value:['18%','32%'], duration:800}
        ],
        left: ['7%', '105%'],
        rotate: [
            {value: '+=45', duration: 800, delay: 300},
            {value: '-=45',duration: 700},
            {value: '-=45',duration: 600},
            {value: '+=45',duration: 600}
        ]
    });

    //animacia pohybu cerveneho auta
    timeline2.add({
        targets: '#red-car2',
        easing: 'easeInOutSine',
        duration: 3000,
        bottom: ['1%','35%'],
        right: {
            value: ['37%', '-15%'],
            delay:800
        },
        rotate: [
            {value: '+=45',duration: 900, delay: 500},
            {value: '+=45',duration: 900, delay: 500}
        ]
    });
}

//krizovatka 3: 1) modre, 2) sive, 3) zlte
function animateCrossroad3() {

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
    revertCarPositions();

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

/**************************************************VYBER PORADIA AUT***************************************************/

//vypis zvoleneho poradia aut
function printCarOrder(){
    var p = document.getElementById("car-order-text");
    p.innerHTML = "Poradie: ";
    for (var i = 0; i < carOrder.length; i++){
        p.innerHTML += carOrder[i];
        (i !== carOrder.length-1) ? (p.innerHTML+=", "):p.innerHTML+=". "
    }
}

//vyber objektu na krizovatke
function selectObject(object){

    if (selected[object.id]){
        object.style.border="none";
        selected[object.id] = false;

        var index = carOrder.indexOf(object.id);
        if (index !== -1)
            carOrder.splice(index, 1);
    }
    else{
        object.style.border="2px solid blue";
        selected[object.id] = true;
        carOrder.push(object.id);
    }

    printCarOrder();
    showAnswerButton();
}

function showAnswerButton(){
    var answerButton = document.getElementById('answer-button-wrap');
    if (carOrder.length > 0){
        answerButton.style.display = "block";
    }
    else{
        answerButton.style.display = "none";
    }
}

//porovnanie 2 poli
function compare(arr1,arr2){
    if (arr1.length != arr2.length)
        return false;

    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] != arr2[i])
            return false;
    }
    return true;
}


function setBorderColor(color){
    for (var i=0; i< carOrder.length; i++){
        document.getElementById(carOrder[i]).style.border="2px solid "+color;
    }
}

function checkAnswer(){
    var correctAnswer = correctCarOrder[activeCrossroadIndex];
    var p = document.getElementById("car-order-text");

    //viacero moznych odpovedi
    if (typeof(correctAnswer[0]) == 'object'){
        for (var i = 0; i < correctAnswer.length; i++){
            if (compare(correctAnswer[i], carOrder)) {
                p.innerHTML = "Správna odpoveď! :)";
                setBorderColor('green');
                return true;
            }
        }
        p.innerHTML = "Nesprávna odpoveď! :(";
        setBorderColor('red');
        return false;
    }
    //iba jedina moznost
    else {
        if (compare(correctAnswer, carOrder)) {
            p.innerHTML = "Správna odpoveď! :)";
            setBorderColor('green');
            return true;
        } else {
            p.innerHTML = "Nesprávna odpoveď! :(";
            setBorderColor('red');
            return false;
        }
    }


}

