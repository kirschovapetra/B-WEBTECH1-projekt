var selected = [];
var carOrder = [];
var correctCarOrder=[
    ["pink-car1","black-car1","yellow-car1"],
    ["green-car2","red-car2"],
    ["blue-car3","grey-car3","yellow-car3"],
    [
        ["pink-car4","black-car4", "orange-car4"],
        ["pink-car4","black-car4"]
    ],
    [
        ["cyclist5","green-car5","red-car5"],
        ["green-car5","cyclist5","red-car5"]
    ],
    [
        ["green-car6","red-car6","pink-car6"],
        ["red-car6","green-car6","pink-car6"]
    ],
    [
        ["tram7", "green-car7", "black-car7", "yellow-car7"],
        ["tram7", "black-car7", "green-car7", "yellow-car7"],
        ["green-car7", "tram7", "black-car7", "yellow-car7"],
        ["green-car7", "black-car7", "tram7", "yellow-car7"],
        ["black-car7", "tram7", "green-car7", "yellow-car7"],
        ["black-car7", "green-car7", "tram7", "yellow-car7"],
    ],
    [
        ["yellow-car8", "black-car8", "pink-car8"],
        ["black-car8", "yellow-car8", "pink-car8"],
        ["yellow-car8", "black-car8"],
        ["black-car8", "yellow-car8"]
    ],
    [
        ["orange-car9", "blue-car9", "black-car9"],
        ["blue-car9", "orange-car9", "black-car9"],
    ],
    [
        ["pink-car10","green-car10","black-car10","yellow-car10"],
        ["pink-car10","green-car10","yellow-car10","black-car10"],
        ["green-car10", "pink-car10","yellow-car10","black-car10"],
        ["green-car10", "pink-car10","black-car10","yellow-car10"],

    ],
    ["blue-car11","black-car11"],
    ["red-car12","blue-car12","black-car12","yellow-car12"],
    [
        ["black-car13","green-car13","blue-car13"], ["green-car13","black-car13","blue-car13"]
    ],
    [
        ["tram14","tram14a","yellow-car14","blue-car14"],["tram14a","tram14","yellow-car14","blue-car14"]
    ],
    ["red-car15","orange-car15","blue-car15"]
];
var activeCrossroadIndex = 0;
var animations = [];
var isClickable = true;

/**************************ODSTRANENIE ZMIEN, VRATENIE DO POVODNEHO STAVU [Petra, Simona, Matus]***********************/

//vyprazdnenie poli "selected" a "carOrder", odstranenie oznacenia aut [Petra]
function cleanSelected() {
    for (var i=0; i< carOrder.length; i++){
        document.getElementById(carOrder[i]).style.border="none";
    }
    selected = [];
    carOrder = [];
}

//nastavenie povodnych pozicii a rotacii aut [Petra, Simona, Matus]
function revertCarPositions(){
    /************************************[Petra]*****************************************/
        //blinkre
    var turnsignals = document.getElementsByClassName("turnsignal");
    for (var i = 0; i < turnsignals.length; i++)
        turnsignals[i].style.opacity = "0";

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

    /************************************[Simona]*****************************************/
        //krizovatka6
    var redCar6 = document.getElementById('red-car6');
    redCar6.style.bottom = '5%';
    redCar6.style.right = '43%';
    redCar6.style.transform = 'rotate(0deg)';

    var greenCar6 = document.getElementById('green-car6');
    greenCar6.style.top = '8%';
    greenCar6.style.right = '67%';
    greenCar6.style.transform = 'rotate(180deg)';

    var pinkCar6 = document.getElementById('pink-car6');
    pinkCar6.style.top = '28%';
    pinkCar6.style.left = '67%';
    pinkCar6.style.transform = 'rotate(-90deg)';

    //krizovatka7
    var yellowCar7 = document.getElementById('yellow-car7');
    yellowCar7.style.bottom = '8%';
    yellowCar7.style.right = '35%';
    yellowCar7.style.transform = 'rotate(0deg)';

    var blackCar7 = document.getElementById('black-car7');
    blackCar7.style.top = '2%';
    blackCar7.style.right = '53%';
    blackCar7.style.transform = 'rotate(180deg)';

    var greenCar7 = document.getElementById('green-car7');
    greenCar7.style.top = '53%';
    greenCar7.style.right = '74%';
    greenCar7.style.transform = 'rotate(90deg)';

    var tram7 = document.getElementById('tram7');
    tram7.style.top = '28%';
    tram7.style.right = '74%';
    tram7.style.transform = 'rotate(90deg)';

    //krizovatka8
    var yellowCar8 = document.getElementById('yellow-car8');
    yellowCar8.style.bottom = '5%';
    yellowCar8.style.right = '37%';
    yellowCar8.style.transform = 'rotate(0deg)';

    var blackCar8 = document.getElementById('black-car8');
    blackCar8.style.top = '12%';
    blackCar8.style.right = '51%';
    blackCar8.style.transform = 'rotate(180deg)';

    var pinkCar8 = document.getElementById('pink-car8');
    pinkCar8.style.top = '32%';
    pinkCar8.style.right = '13%';
    pinkCar8.style.transform = 'rotate(-90deg)';

    //krizovatka 9
    var blueCar9 = document.getElementById('blue-car9');
    blueCar9.style.top= '48%';
    blueCar9.style.left = '7%';
    blueCar9.style.transform = 'rotate(90deg)';

    var orangeCar9 = document.getElementById('orange-car9');
    orangeCar9.style.top = '22%';
    orangeCar9.style.right = '12%';
    orangeCar9.style.transform = 'rotate(-90deg)';

    var blackCar9 = document.getElementById('black-car9');
    blackCar9.style.bottom = '12%';
    blackCar9.style.right = '33%';
    blackCar9.style.transform = 'rotate(0deg)';

    //krizovatka 10
    var yellowCar10 = document.getElementById('yellow-car10');
    yellowCar10.style.bottom= '8%';
    yellowCar10.style.right = '33%';
    yellowCar10.style.transform = 'rotate(0deg)';

    var blackCar10 = document.getElementById('black-car10');
    blackCar10.style.top = '2%';
    blackCar10.style.right = '57%';
    blackCar10.style.transform = 'rotate(180deg)';

    var greenCar10 = document.getElementById('green-car10');
    greenCar10.style.top = '53%';
    greenCar10.style.right = '74%';
    greenCar10.style.transform = 'rotate(90deg)';

    var pinkCar10 = document.getElementById('pink-car10');
    pinkCar10.style.top = '32%';
    pinkCar10.style.right = '13%';
    pinkCar10.style.transform = 'rotate(-90deg)';

    /************************************[Matus]*****************************************/
        //krizovatka 11
    var black11 = document.getElementById('black-car11');
    black11.style.top = '23%';
    black11.style.right = '14%';
    black11.style.transform = 'rotate(-90deg)';

    var blue11 = document.getElementById('blue-car11');
    blue11.style.top = '46%';
    blue11.style.left = '15%';
    blue11.style.transform = 'rotate(90deg)';

    //krizovatka 12
    var black12 = document.getElementById('black-car12');
    black12.style.top = '5%';
    black12.style.right = '57%';
    black12.style.transform = 'rotate(180deg)';

    var yellow12 = document.getElementById('yellow-car12');
    yellow12.style.top = '30%';
    yellow12.style.right = '10%';
    yellow12.style.transform = 'rotate(-90deg)';

    var red12 = document.getElementById('red-car12');
    red12.style.bottom = '10%';
    red12.style.right = '37%';
    red12.style.transform = 'rotate(0deg)';

    var blue12 = document.getElementById('blue-car12');
    blue12.style.top = '53%';
    blue12.style.right = '74%';
    blue12.style.transform = 'rotate(90deg)';

    //krizovatka 13
    var black13 = document.getElementById('black-car13');
    black13.style.top = '29%';
    black13.style.right = '15%';
    black13.style.transform = 'rotate(-90deg)';

    var blue13 = document.getElementById('blue-car13');
    blue13.style.top = '53%';
    blue13.style.left = '13%';
    blue13.style.transform = 'rotate(90deg)';

    var green13 = document.getElementById('green-car13');
    green13.style.bottom = '9%';
    green13.style.right= '34%';
    green13.style.transform = 'rotate(0deg)';

    //krizovatka 14
    var blue14 = document.getElementById('blue-car14');
    blue14.style.bottom = '7%';
    blue14.style.right = '34%';
    blue14.style.transform = 'rotate(0deg)';

    var yellow14 = document.getElementById('yellow-car14');
    yellow14.style.top = '5%';
    yellow14.style.left = '35%';
    yellow14.style.transform = 'rotate(180deg)';

    var tram14 = document.getElementById('tram14');
    tram14.style.top = '26%';
    tram14.style.right = '15%';
    tram14.style.transform = 'rotate(-90deg)';

    var tram14a = document.getElementById('tram14a');
    tram14a.style.top = '40%';
    tram14a.style.left = '15%';
    tram14a.style.transform = 'rotate(90deg)';

    //krizovatka 15
    var red15 = document.getElementById('red-car15');
    red15.style.top = '8%';
    red15.style.left = '34%';
    red15.style.transform = 'rotate(180deg)';

    var orange15 = document.getElementById('orange-car15');
    orange15.style.top = '53%';
    orange15.style.left = '15%';
    orange15.style.transform = 'rotate(90deg)';

    var blue15 = document.getElementById('blue-car15');
    blue15.style.bottom = '7%';
    blue15.style.right = '32%';
    blue15.style.transform = 'rotate(0deg)';
}

//vsetky svg krizovatky nastavene na display:none [Petra]
function hideAllCrossroads(){
    var crossroads = document.getElementsByClassName("crossroad");
    var crossroadsCount = crossroads.length;

    for (var i = 0; i < crossroadsCount; i++){
        var crossroadId = "crossroad"+(i+1)+"-fullsize";
        var crossroad = document.getElementById(crossroadId);
        crossroad.style.display = "none";
    }
}

//odstranenie vyberu, zastavenie animacii, vratenie aut na povodnu poziciu [Petra]
function revert(){
    cleanSelected();
    showAnswerButton();
    stopAllAnimations();
    revertCarPositions();
}

/*******************************************************MENU [Petra]***************************************************/

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

    var heading = document.getElementById("crossroad-heading");
    heading.innerHTML = "Križovatka č."+crossroadNum;

    isClickable = true;
    revert();
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

//posun vlavo (prepnutie na predchadzajucu krizovatku)
function moveLeft(){
    var crossroads = document.getElementsByClassName("crossroad");

    isClickable = true;

    activeCrossroadIndex--;
    if (activeCrossroadIndex < 0){
        activeCrossroadIndex = crossroads.length-1;
    }
    revert();
    printCarOrder();
    hideAllCrossroads();
    crossroads[activeCrossroadIndex].style.display = "flex";

    var heading = document.getElementById("crossroad-heading");
    heading.innerHTML = "Križovatka č."+(activeCrossroadIndex+1);
}

//posun vpravo (prepnutie na nasledujucu krizovatku)
function moveRight(){
    var crossroads = document.getElementsByClassName("crossroad");

    isClickable = true;
    activeCrossroadIndex++;
    if (activeCrossroadIndex >= crossroads.length){
        activeCrossroadIndex = 0;
    }
    revert();
    printCarOrder();
    hideAllCrossroads();
    crossroads[activeCrossroadIndex].style.display = "flex";

    var heading = document.getElementById("crossroad-heading");
    heading.innerHTML = "Križovatka č."+(activeCrossroadIndex+1);
}

/******************************************KALENDAR [Petra, Simona, Matus]*********************************************/

// vygenerovanie aktualneho datumu s menom [Matus]
function date(){
    var months = ["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"];
    var d = new Date();

    var actualDate = d.getDate() + "." + months[d.getMonth()] + " "+ d.getFullYear();
    var out = document.getElementById("nDate");

    out.innerHTML = "Dnes je " + actualDate;

    var day = (d.getDate() < 10) ? "0"+d.getDate() : ""+d.getDate();
    var month = ((d.getMonth()+1) < 10) ? "0"+(d.getMonth()+1) : ""+(d.getMonth()+1);

    var dateString = month+day;
    var xmlDoc = loadXMLDoc("Mena.xml");
    var x = xmlDoc.getElementsByTagName("den");
    var sk="",skd="",skSviatky="";

    for (var i = 0; i < x.length; i++) {
        var currentDate = xmlDoc.getElementsByTagName("den")[i].childNodes[0].nodeValue;

        if (currentDate === dateString) {
            sk = "";
            skd = "";
            skSviatky = "";
            var zaznam = xmlDoc.getElementsByTagName("zaznam")[i].childNodes;
            for (var k = 0; k < zaznam.length; k++) {

                if (zaznam[k].nodeType == 1) {
                    if (zaznam[k].nodeName == "SK") {
                        sk = ", meniny má " + zaznam[k].firstChild.nodeValue;
                    }
                    if (zaznam[k].nodeName == "SKd" && zaznam[k].firstChild.nodeValue != "-") {
                        skd = ", meniny má " + zaznam[k].firstChild.nodeValue;
                    }
                    if (zaznam[k].nodeName == "SKsviatky") {
                        skSviatky = "," + zaznam[k].firstChild.nodeValue;
                    }
                }
            }
        }
    }
    if (sk!="")
        out.innerHTML += sk;
    if (sk == "" && skd != "")
        out.innerHTML += skd;
    if (skSviatky != "")
        out.innerHTML += skSviatky;

}

// vyhladanie menin podla datumu [Matus, Simona, Petra]
function searchXMLdate() {

    var xmlDoc = loadXMLDoc("Mena.xml");
    var x = xmlDoc.getElementsByTagName("den");
    var text = document.getElementById("datumMeniny");
    var input = text.value;
    var den,mesiac,upravenyInput,date;
    var vysledok = document.getElementById("meninyVysledok");
    var size = input.length;
    var divTextLines = [];

    vysledok.innerHTML = "";

    /**************cast na kontrolu datumu ak je zly vyskoci tooltip [Matus]***************/

    var tooltip = document.getElementById("tooltipID");
    var dateformat = /^(\d{1,2}[.]\d{1,2}[.])$/;
    // Porovnanie formatu dátumu pomocou regulárneho výrazu
    if(text.value.match(dateformat)) {
        tooltip.style.display = "none";
    }else{
        tooltip.style.display = "block";
        return;
    }

    /**********************kontrola, ci je datum v rozsahu [Matus]***********************/

    if (input == null || input == "")
    {
        document.getElementById("meninyVysledok").innerHTML= "Zadaj datum!";
        return false;
    }

    if(size == 4){
        den = input.slice(0, 1);  //prejde od 0 po 1 index
        mesiac = input.slice(2, size); // bola tam 3ka

        for(var j = 1; j < 10; j++){

            if(input[0] == j){
                input = "0" + input;
                size++;
            }
        }
    }
    if(size == 5){
        if(input[2] == "."){
            den = input.slice(0, 2);
            mesiac = input.slice(3, size);
            upravenyInput = mesiac + den;
            for(var j = 1; j < 10; j++){

                if(mesiac[0] == j){
                    upravenyInput = upravenyInput.replace(".", "");
                    upravenyInput = "0" + upravenyInput;
                    upravenyInput = upravenyInput.replace(".", "");
                    break;
                }
            }
        }
        else if(input[1] == "."){
            for(var j = 1; j < 10; j++){

                if(input[0] == j){
                    input = "0" + input;
                    den = input.slice(0, 2);
                    mesiac = input.slice(3, 5);
                    upravenyInput = mesiac + den;
                    upravenyInput = upravenyInput.replace(".", "");
                    upravenyInput = upravenyInput.replace(".", "");
                    break;
                }

            }
        }
    }
    if(size == 6){
        den = input.slice(0, 2);
        mesiac = input.slice(3, 5);
        upravenyInput = mesiac + den;
        upravenyInput = upravenyInput.replace(".", "");
        upravenyInput = upravenyInput.replace(".", "");
    }

    /*********************************overenie datumu [Simona]***************************/
    var day, month;
    day = parseInt(den);
    month = parseInt(mesiac);
    if (isNaN(month)) {
        month = parseInt(mesiac.replace("."));
    }
    switch (month) {
        // januar, marec, maj, jul, august, oktober, december -> max 31
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            if (day < 1 || day > 31) {
                tooltip.style.display = "block";
                return;
            }
            break;
        // februar -> max 29
        case 2:
            if (day < 1 || day > 29) {
                tooltip.style.display = "block";
                return;
            }
            break;
        // april, jun, september, november -> max 30
        case 4: case 6: case 9: case 11:
            if (day < 1 || day > 30) {
                tooltip.style.display = "block";
                return;
            }
            break;
        // neexisujuci mesiac
        default:
            tooltip.style.display = "block";
            return;
    }

    /**************************vypis menin a sviatkov [Petra]***************************/
    for (var i = 0; i < x.length; i++) {
        date = xmlDoc.getElementsByTagName("den")[i].childNodes[0].nodeValue;

        if (date === upravenyInput) {
            var zaznam = xmlDoc.getElementsByTagName("zaznam")[i].childNodes; //cely zaznam
            for (var k = 0; k < zaznam.length; k++) { //v cykle sa vypisuje kazda jeho polozka v tvare "nodeName: nodeValue"

                if (zaznam[k].nodeType === 1 && zaznam[k].nodeName !== "den")
                    divTextLines.push(zaznam[k].nodeName + ": " + zaznam[k].firstChild.nodeValue + "<br />");
            }
        }
    }
    if (divTextLines.length === 0)
        vysledok.innerHTML = "Neexistuje";
    else {
        for (var i = 0; i < divTextLines.length; i++) {
            vysledok.innerHTML += divTextLines[i];
        }
    }

}

//vyprazdnenie inputu pri obnoveni stranky [Simona]
function vymazInput() {
    document.getElementById("mena").value = "";
}

//funkcie, ktore sa spustia pro nacitani "body" [Simona]
function onloadfunction() {
    vymazInput();
    date();
}

//nacitanie XML [Simona]
function loadXMLDoc(dname) {
    var xhttp;
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

//hladanie slov s a bez diakritiky [Simona]
function diaConvert(str) {
    let accents = 'AÁÂAÄAaáâaäaßOÓÔOOÖOoóôoöoĎďDŽdžEÉEËeéeë?ÇçČč?IÍÎIiíîiUÚUÜuúuüĽĹľĺNŇňnŔŕřŠšŤťYÝyýŽž';
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

//vyhladavanie v XML [Simona]
function searchXML() {
    var vysledky = [];
    var xmlDoc,x,input,size,meno,datum,divText;

    var vysledok =  document.getElementById("vysledok");
    vysledok.innerHTML = "";

    stat = ["SKd","PL","HU","AT","CZ"];

    for(j=0; j < stat.length; j++){
        let kontrola = 0;
        let statIndex = stat[j];
        xmlDoc = loadXMLDoc("Mena.xml");
        x = xmlDoc.getElementsByTagName(statIndex);
        input = document.getElementById("mena").value;
        size = input.length;
        input = diaConvert(input).toLowerCase();
        regEx = new RegExp("\\b" + input + "\\b");

        if (input == null || input == "")
        {
            document.getElementById("vysledok").innerHTML= "Zadaj meno!";
            return false;
        }

        for (i=0;i<x.length;i++)
        {
            meno = xmlDoc.getElementsByTagName(statIndex)[i].childNodes[0].nodeValue;
            meno = diaConvert(meno).toLowerCase();
            if (regEx.test(meno))
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
            vysledky.push(divText);
        }
    }

    for (var i = 0; i < vysledky.length; i++){
        vysledok.innerHTML += vysledky[i] + "<br>";
    }
}

/******************************************************ANIMACIE********************************************************/
//zastavenie vsetkych animacii [Petra]
function stopAllAnimations(){
    for (var i = 0; i < animations.length; i++){
        animations[i].pause();
    }
}

//animacia blikania smeroviek [Petra]
function animateTurnSignals(){

    var timeline;

    /*pri krizovatke s indexom 1 (kruhovy objazd) chcem, aby zacali blinkre
    / svietit az ked odbocuje na cestu (pridany delay)*/
    if (activeCrossroadIndex === 1){
        timeline = anime.timeline({
            duration: 500,
            delay:500,
            loop:true
        });
    }
    else{ //blinkre svietia od zaciatku animacie
        timeline = anime.timeline({
            duration: 750,
            loop:true
        });
    }
    animations.push(timeline);

    timeline.add({
        targets:".turnsignal",
        opacity:0, //zmiznutie smerovky
        duration:400
    });
    timeline.add({
        targets:".turnsignal",
        opacity:1, //zobrazenie smerovky
        duration:400
    });
}

/*********************************krizovatky 1-5 [Petra]***************************/

//krizovatka 1: 1) ruzove, 2) cierne, 3) zlte
function animateCrossroad1() {

    //casova os: animacie sa vykonavaju postupne za sebou
    var timeline1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline1);

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

    animations.push(timeline2);

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

    animations.push(timeline3);

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

//krizovatka 4: 1) ruzove, 2) cierne
function animateCrossroad4() {

    var timeline4 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline4);

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
            delay: 350,
            easing: 'easeInSine'
        },
        right: {
            value: ['27%','-15%'],
            easing: 'easeInSine',
            delay:1100
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

    animations.push(timeline5);
    animations.push(timeline5_2);


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

//animacia pohybu zeleneho auta (v 2. timeline)
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

/*********************************krizovatky 6-10 [Simona]***************************/

//krizovatka 6
function animateCrossroad6(){

    //casova os: animacie sa vykonavaju postupne za sebou
    var timeline6 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    var timeline6_1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline6);
    animations.push(timeline6_1);

    //pridanie animacii

    //animacia pohybu cerveneho auta
    timeline6.add({
        targets: '#red-car6',
        bottom: {
            value: ['5%','33%'],
            easing: 'easeInSine'
        },
        rotate:{
            value:'+=90',
            delay: 200,
            easing: 'easeInSine'
        },
        right: {
            value: ['43%','-15%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });

    //animacia pohybu zeleneho auta
    timeline6_1.add({
        targets: '#green-car6',
        top: {
            value: ['8%','100%'],
            easing: 'easeInSine'
        },
        easing: 'easeInSine',
        duration:2000
    });

    //animacia pohybu ruzoveho auta
    timeline6_1.add({
        targets: '#pink-car6',
        left: {
            value: ['67%','27%'],
            easing: 'easeInSine'
        },
        rotate: {
            value:'-=90',
            delay: 200,
            easing: 'easeInSine'
        },
        top: {
            value: ['28%','100%'],
            easing: 'easeInSine',
            delay:1300
        },
        easing: 'easeInSine',
        duration:2000
    });
}

//krizovatka 7
function animateCrossroad7(){

    //casova os: animacie sa vykonavaju postupne za sebou
    var timeline7 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    var timeline7_1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    var timeline7_2 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline7);
    animations.push(timeline7_1);
    animations.push(timeline7_2);

    //pridanie animacii

    //animacia pohybu elektricky
    timeline7.add({
        targets: '#tram7',
        right: {
            value: ['74%','-25%'],
            easing: 'easeInSine'
        },
        easing: 'easeInSine',
        duration:2000
    });

    //animacia pohybu zeleneho auta
    timeline7_1.add({
        targets: '#green-car7',
        right: {
            value: ['74%','55%'],
            easing: 'easeInSine'
        },
        rotate: {
            value:'+=90',
            delay: 200,
            easing: 'easeInSine'
        },
        top: {
            value: ['53%','100%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });
    timeline7_2.add({
        targets: '#black-car7',
        top: {
            value: ['2%','26%'],
            easing: 'easeInSine'
        },
        rotate:{
            value:'+=90',
            delay: 200,
            easing: 'easeInSine'
        },
        right: {
            value: ['53%','110%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });

    //animacia pohybu zlteho auta
    timeline7_2.add({
        targets: '#yellow-car7',
        bottom: {
            value: ['8%','55%'],
            easing: 'easeInSine'
        },
        rotate:{
            value:'-=90',
            delay: 200,
            easing: 'easeInSine'
        },
        right: {
            value: ['35%','110%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });
}

//krizovatka 8
function animateCrossroad8(){
    //casova os: animacie sa vykonavaju postupne za sebou
    var timeline8 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    var timeline8_1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline8);
    animations.push(timeline8_1);

    //animacia pohybu zlteho auta
    timeline8.add({
        targets: '#yellow-car8',
        bottom: {
            value: ['5%','50%'],
            easing: 'easeInSine'
        },
        rotate:{
            value:'-=90',
            easing: 'easeInSine'
        },
        right: {
            value: ['37%','110%'],
            easing: 'easeInSine',
            delay:500
        },
        easing: 'easeInSine',
        duration:2000
    });

    timeline8_1.add({
        targets: '#black-car8',
        top: {
            value: ['12%','50%'],
            easing: 'easeInSine'
        },
        rotate:{
            value:'-=90',
            delay: 100,
            easing: 'easeInSine'
        },
        right: {
            value: ['51%','-20%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });


}

//krizovatka 9
function animateCrossroad9(){
    var timeline9 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    var timeline9_1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline9);
    animations.push(timeline9_1);

    timeline9.add({
        targets: '#orange-car9',
        right: {
            value: ['12%','110%'],
            easing: 'easeInSine'
        },
        easing: 'easeInSine',
        duration:2000
    });


    timeline9_1.add({
        targets: '#blue-car9',
        left: {
            value: ['7%','30%'],
            easing: 'easeInSine'
        },
        rotate: {
            value:'+=90',
            delay: 200,
            easing: 'easeInSine'
        },
        top: {
            value: ['48%','100%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });

    timeline9_1.add({
        targets: '#black-car9',
        bottom: {
            value: ['12%','55%'],
            easing: 'easeInSine'
        },
        rotate:{
            value:'-=90',
            delay: 200,
            easing: 'easeInSine'
        },
        right: {
            value: ['33%','110%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });
}

//krizovatka 10
function animateCrossroad10(){
    var timeline10 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    var timeline10_1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline10);
    animations.push(timeline10_1);

    timeline10_1.add({
        targets: '#pink-car10',
        right: {
            value: ['13%','110%'],
            easing: 'easeInSine'
        },
        easing: 'easeInSine',
        duration:2000
    });

    timeline10.add({
        targets: '#green-car10',
        right: {
            value: ['74%','-15%'],
            easing: 'easeInSine',
        },
        easing: 'easeInSine',
        duration:2000
    });

    timeline10.add({
        targets: '#yellow-car10',
        bottom: {
            value: ['8%','30%'],
            easing: 'easeInSine'
        },
        rotate:{
            value:'+=90',
            delay: 200,
            easing: 'easeInSine'
        },
        right: {
            value: ['33%','-15%'],
            easing: 'easeInSine',
            delay:1000
        },
        easing: 'easeInSine',
        duration:2000
    });

    timeline10_1.add({
        targets: '#black-car10',
        top: {
            value: ['2%','100%'],
            easing: 'easeInSine'
        },
        easing: 'easeInSine',
        duration:2000
    });
}

/*********************************krizovatky 11-15 [Matus]***************************/

//krizovatka 11
function animateCrossroad11(){
    var timeline11 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });

    animations.push(timeline11);
    //pohyb modreho auta
    timeline11.add({
        targets: '#blue-car11',
        left: {value: ['15%','105%'],easing: 'easeInSine',},
        easing: 'easeInSine',duration:2000
    });
    //pohyb cierneho auta
    timeline11.add({
        targets: '#black-car11',
        right: { value:['14%','55%'], easing:'easeInSine' },
        rotate:{value:'-=90', delay: 200, easing: 'easeInSine'},
        top: { value: ['23%','100%'], delay: 1000, easing: 'easeInSine'},
        easing: 'easeInSine', duration:2000
    });
}

//krizovatka 12
function animateCrossroad12(){
    var timeline12 = anime.timeline({easing:'easeOutExpo',duration: 750});
    animations.push(timeline12);
    //pohyb cerveneho
    timeline12.add({
        targets: '#red-car12',
        right: { value:['37%','105%'], delay: 1000, easing:'easeInSine' },
        rotate:{value:'-=90', delay: 200, easing: 'easeInSine'},
        bottom: { value: ['10%','55%'], easing: 'easeInSine'},
        easing: 'easeInSine', duration:3000
    });

    //pohyb modreho auta
    timeline12.add({
        targets: '#blue-car12',
        right: { value:['74%','-15%'], easing:'easeInSine' },
        easing: 'easeInSine',duration:2000
    });
    //pohyb cierneho auta
    timeline12.add({
        targets: '#black-car12',
        right: { value:['57%','-15%'],  delay: 1000, easing:'easeInSine'},
        rotate:{value:'-=90', delay: 200, easing: 'easeInSine'},
        top: { value: ['5%','50%'], easing: 'easeInSine'},
        easing: 'easeInSine', duration:2000
    });
    //pohyb zlteho auta
    timeline12.add({
        targets: '#yellow-car12',
        right: { value:['10%','55%'], easing:'easeInSine' },
        rotate:{value:'-=90', delay: 200, easing: 'easeInSine'},
        top: { value: ['30%','100%'], delay: 1000, easing: 'easeInSine'},
        easing: 'easeInSine', duration:2000
    });

}

//krizovatka 13
function animateCrossroad13(){
    // pre cierne zelene a modre
    var timeline13A = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    //zelene,cierne,modre
    var timeline13B = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    //pre prípad číslo 1
    animations.push(timeline13A);
    timeline13A.add({
        targets: '#black-car13',
        right: { value:['15%','55%'], easing:'easeInSine' },
        rotate:{value:'-=90', delay: 200, easing: 'easeInSine'},
        top: { value: ['29%','100%'], delay: 1000, easing: 'easeInSine'},
        easing: 'easeInSine', duration:2000
    });

    timeline13A.add({
        targets: '#blue-car13',
        left: {value: ['13%','105%'],easing: 'easeInSine',},
        easing: 'easeInSine',duration:2000
    });

    // pre to aby sla aj druha naraz s prvou
    animations.push(timeline13B);
    timeline13B.add({
        targets: "#green-car13",
        bottom:{value:['9%','28%'],easing:'easeInSine'},
        rotate: {value:'+=90',delay:200,easing:'easeInSine'},
        right: {value:['34%','-15%'],delay:1000,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    });
}

//krizovatka 14
function animateCrossroad14(){
    var timeline14 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    var timeline14B = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    animations.push(timeline14);
    animations.push(timeline14B);
    //prva elektricka
    timeline14.add({
        targets: "#tram14",
        right:{value:['15%','115%'],delay:1000,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    });
    //zlte auto
    timeline14.add({
        targets: "#yellow-car14",
        top:{value:['5%','100%'],delay:1000,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    });
    //modre auto
    timeline14.add({
        targets: "#blue-car14",
        bottom:{value:['7%','55%'],easing:'easeInSine'},
        rotate:{value:'-=90',delay:200,easing:'easeInSine'},
        right:{value:['34%','105%'],delay:1150,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    });
    //spolocne elektricky
    timeline14B.add({
        targets: "#tram14a",
        left:{value:['15%','115%'],delay:1000,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    });
}

//krizovatka 15
function animateCrossroad15(){
    var timeline15 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
    });
    animations.push(timeline15);
    //prejde cervene auto
    timeline15.add({
        targets: "#red-car15",
        top:{value:['8%','50%'],delay:20,easing:'easeInSine'},
        rotate:{value:'-=90deg',delay:200,easing:'easeInSine'},
        left:{value:['34%','105%'],delay:1000,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    });
    //prejde orandzove auto
    timeline15.add({
        targets: "#orange-car15",
        left:{value:['15%','105%'],delay:10,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    });
    //a nakoniec modre auticko
    timeline15.add({
        targets: "#blue-car15",
        bottom:{value:['7%','30%'],delay:20,easing:'easeInSine'},
        rotate:{value:'+=90deg',delay:200,easing:'easeInSine'},
        right:{value:['32%','-15%'],delay:1000,easing:'easeInSine'},
        easing:'easeInSine',duration:2000
    })
}

//spustenie animacie spravnej odpovede [Petra]
function playCorrectAnswer(){
    isClickable = false;
    revert();

    animateTurnSignals();

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

//spustenie animacie po kliknuti na tlacidlo "Spusti demo" [Petra]
function playDemo(){
    revert();
    printCarOrder();
    playCorrectAnswer();
}


/*****************************VYBER PORADIA AUT, VYPIS, KONTROLA SPRAVNEJ ODPOVEDE [Petra]*****************************/

//vypis zvoleneho poradia aut
function printCarOrder(){
    var p = document.getElementById("car-order-text");
    p.style.color='black';
    p.innerHTML = "Poradie: ";
    for (var i = 0; i < carOrder.length; i++){
        //Id v tvare "black-car1","black-car11", "tram1", "tram14", "tram14a" , vypisat bez cisel a znaku "a" na konci
        var parsedCarId = carOrder[i].replace('-',' '); //odstrani sa '-'
        parsedCarId = parsedCarId.slice(0,parsedCarId.length-1); //odstrani sa cislo/znak na konci

        if (!isNaN(parseInt(parsedCarId[parsedCarId.length-1])))
            parsedCarId = parsedCarId.slice(0,parsedCarId.length-1); //odstrani sa cislo, ak sa v id este nejake nachadza

        /*v krizovatke c. 14 je pripad s 2 elektrickami, pre ich rozlisenie sa vypisuju v tvare "tram" a "tram1",
        preto z id "tram14a" neodstranujem dalsie cislo z konca, ale nechavam v tvare "tram1" */

        p.innerHTML += parsedCarId;
        (i !== carOrder.length-1) ? (p.innerHTML+=", "):p.innerHTML+=". "
    }
}

//vyber objektu na krizovatke
function selectObject(object){
    if (!isClickable) //ked je spustena animacia, neda sa klikat na obrazok
        return;

    //ak je auto oznacene a klikne sa nan, zrusi sa oznacenie a odstrani sa zo zoznamu vybranych aut
    if (selected[object.id]){
        object.style.border="none";
        selected[object.id] = false;

        var index = carOrder.indexOf(object.id);
        if (index !== -1)
            carOrder.splice(index, 1);
    }
    else{ //oznaci sa a oramuje na modro, prida sa do zoznamu oznacenych aut
        object.style.border="2px solid blue";
        selected[object.id] = true;
        carOrder.push(object.id);
    }

    printCarOrder();
    showAnswerButton();
}

//tlacidlo "Skontroluj odpoveď" a vypisane poradie aut sa zobrazi iba ak bolo vybrane aspon 1 auto
function showAnswerButton(){
    var answer = document.getElementById('answer-wrap');
    if (carOrder.length > 0){
        answer.style.visibility = "visible";
    }
    else{
        answer.style.visibility = "hidden";
    }
}

//porovnanie 2 poli
function compare(arr1,arr2){
    if (arr1.length !== arr2.length)
        return false;

    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

//nastavenie farby oramovania aut
function setBorderColor(color){
    for (var i=0; i< carOrder.length; i++){
        document.getElementById(carOrder[i]).style.border="2px solid "+color;
    }
}

//kontrola odpovede
function checkAnswer(){
    var correctAnswer = correctCarOrder[activeCrossroadIndex];
    var p = document.getElementById("car-order-text");

    //viacero moznych odpovedi pre krizovatku
    if (typeof(correctAnswer[0]) == 'object'){
        for (var i = 0; i < correctAnswer.length; i++){
            //ak bola odpoved spravna, spusti sa animacia
            if (compare(correctAnswer[i], carOrder)) {
                p.style.color='#78f542';
                p.innerHTML = "Správna odpoveď! :)";
                playCorrectAnswer();
                return;
            }
        }
        //ak bola odpoved nespravna, auta sa oznacia na cerveno
        p.style.color='red';
        p.innerHTML = "Nesprávna odpoveď! :(";
        setBorderColor('red');
        showAnswerButton();
    }
    //iba jedina spravna moznost
    else {
        //ak bola odpoved spravna, spusti sa animacia
        if (compare(correctAnswer, carOrder)) {
            p.style.color='#78f542';
            p.innerHTML = "Správna odpoveď! :)";
            playCorrectAnswer();
        } else { //ak bola odpoved nespravna, auta sa oznacia na cerveno
            p.style.color='red';
            p.innerHTML = "Nesprávna odpoveď! :(";
            setBorderColor('red');
            showAnswerButton();
        }
    }
}

//po kliknuti na tlacidlo "Znova" sa krizovatka resetuje
function restartCrossroad(){
    isClickable = true;
    revert();
    printCarOrder();
}

/*******************************************POCITADLO NAVSTEVNOSTI [Matus]*********************************************/
// zdroj: https://code-maven.com/on-load-counter-with-javascript-and-local-storage
function counterJS(){
    var n = localStorage.getItem('on_load_counter');

    if (n === null) {
        n = 0;
    }
    n++;

    localStorage.setItem("on_load_counter", n);

    document.getElementById('counter').innerHTML = " Počet návštev: "+n;
}

/*****************************VYSVETLENIE SPRAVNEHO RIESENIA KRIZOVATKY (Matus)****************************************/
function zobrazVysvetlenie(number) {
    var text = document.getElementsByClassName("crossroadVysvetlenie");
    var tlacidlo = document.getElementsByClassName("vysvetlenie-button");

    if (text[number - 1].style.display === "block") { //je vidno
        text[number - 1].style.display = "none";  //schova text
        tlacidlo[number - 1].value = "Zobraz vysvetlenie"; //nadpis buttonu
    } else {
        text[number - 1].style.display = "block";
        tlacidlo[number - 1].value = "Schovaj vysvetlenie";
    }
}

