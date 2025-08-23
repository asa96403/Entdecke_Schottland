let orte = ["Edinburgh Castle", //0
     "Oban", "Isle of Mull, Iona, Staffa", "Tobermory", //1, 2, 3
     "Dundee", "Royal Research Ship Dundee", "V&A Dundee", "Science Center Dundee", "Caird Hall Dundee", // 4, 5, 6, 7, 8
     "Samye Ling",  // 9
     "Steall Falls",    // 10
     "Glenfinnan-Viadukt"]; // 11
//Graph in Adjaszenzlistendarstellung
let graph = [
    [[1, 121], [4, 56.1], [9, 57.2], [10, 139], [11, 160]],                       //Adj Edinburgh              0
    [[0, 123], [2, 20],[3, 31.9], [4, 116], [9, 170], [10, 50.8], [11, 60.5]],    //Adj Oban                   1
    [[1, 20]],     //Adj Mull, Iona, Staffa    2
    [[1, 31.8]],   //Adj Tobermory             3
    [[0, 56.1], [1, 116], [5, 0.5], [6, 0.5], [7, 0.5], [8, 0.2], [9, 109], [10, 132], [11, 139]],    //Adj Dundee                 4
    [[4, 0.5], [6, 0.043], [7, 0.3], [8, 0.3]],   //Adj Royal Research Ship   5
    [[4, 0.5], [5, 0.043], [7, 0.4], [8, 0.3]],   //Adj V&A                   6
    [[4, 0.5], [5, 0.3], [6, 0.4], [8, 0.4]],     //Adj Science Center        7
    [[4, 0.2], [5, 0.3], [6, 0.3], [7, 0.4]],     //Adj Caird Hall            8
    [[0, 56.6], [1, 175], [4, 114], [10, 193], [11, 202]],                      //Adj Samye Ling             9
    [[0, 140], [1, 50.8], [4, 132], [9, 194], [11, 22.6]],                      //Adj Steall Falls           10
    [[0, 160], [1, 60.5], [4, 139], [9, 204], [10, 22.6] ],                     //Glenfinnan-Viadukt         
];

//konvertiere Graph in Adjaszezenzliste mit eingehenden Kanten
function konvertiereGraph(g) {
    let In =[];
    for (let i=0; i<graph.length; i++) { //Initialisieren des neuen Array
        In[i] = [];
    }
    for (let i=0; i<graph.length; i++) {
        for (let j=0; j<graph[i].length; j++){
            In[graph[i][j][0]].push([i, graph[i][j][1]]);
        }
    }
    return In;
}

//Bellmann-Ford Algorithmus (verbesserte Version) zum ermitteln von kürzesten Wegen
function bellmannFord(g, s) { //g::Graph als Adjaszenzliste mit eingehenden Kanten , s: Index des Startknotens
    let In= konvertiereGraph(g); //speichere in In die eingehende Adjaszenzliste
    console.log(In);
    let d= [];
    for (let i = 0; i < orte.length; i++) {
        d.push(1000000) //Dummy-Wert 1 Mio
    }
    d[s]=0
    console.log(d);
    console.log(orte.length);
    for (let k=0; k<(orte.length-1); k++) {
        for (let v=0; v<orte.length; v++) {
            for (let s=0; s<In[v].length; s++) {
                if (d[In[v][s][0]] + In[v][s][1]<d[v]) {
                    d[v] = d[In[v][s][0]] + In[v][s][1];
                }
            }
        }
    }
    return d;
}

function verarbeiteWeg(start, ziel) {
    let iStart=0;
    let iZiel = 0;
    for (let i=0; i<orte.length; i++) {
        if(orte[i]==start) {
            iStart=i;
        } else if (orte[i]==ziel) {
            iZiel=i;
        }
    }
    let d= bellmannFord(graph, iStart);
    return(d[iZiel]);
}

function berechneWeg(){
    start = document.getElementById("startWahl").value;
    ziel = document.getElementById("zielWahl").value;
    if(start=="noSelection" || ziel=="noSelection") {
        modal.style.display = "block";
        return;
    }
    wegLänge=verarbeiteWeg(start, ziel);
    document.getElementById("ergebnis").innerHTML="Der kürzeste Weg von " + start + " nach " + ziel + " ist " + wegLänge + " Meilen lang."
}

function setup() {
    let options="<option value='noSelection'>--bitte wählen--</option>";
    for (let i=0; i<orte.length; i++) {
        options += "<option value='" + orte[i] + "'>" + orte[i] + "</option>"
    }
    document.getElementById("startWahl").innerHTML=options;
    document.getElementById("zielWahl").innerHTML=options;
}

setup();

//W3 Schools Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 