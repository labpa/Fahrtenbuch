let data = createExampleData();

anzeige(data);
newButtonDownload();
upload();
lokalesSpeichern();


//Array wird erstellt und mit Beispieldaten gefüllt
function createExampleData(){
    let data = new Array();

    data[0] = new Object();
    data[0] ["Kennzeichen"] = "B-SP-1312";
    data[0] ["Fahrer"] = "Müller";
    data[0] ["Kilometerstand Beginn"] = 412;
    data[0] ["Kilometerstand Ende"] = 590;
    data[0] ["Reisezweck"] = "Kurzurlaub"
    data[0] ["Datum"] = "13.12.2022";


    data[1] = new Object();
    data[1] ["Kennzeichen"] = "L-SD-666";
    data[1] ["Fahrer"] = "Schmidt";
    data[1] ["Kilometerstand Beginn"] = 2712;
    data[1] ["Kilometerstand Ende"] = 3590;
    data[1] ["Reisezweck"] = "Langurlaub";
    data[1] ["Datum"] = "13.12.2022";

    data[2] = new Object();
    data[2] ["Kennzeichen"] = "B-SP-1312";
    data[2] ["Fahrer"] = "Eisenhauer";
    data[2] ["Kilometerstand Beginn"] = 590;
    data[2] ["Kilometerstand Ende"] = 721;
    data[2] ["Reisezweck"] = "Kurzurlaub";
    data[2] ["Datum"] = "13.12.2022";
    return data;
}


//Lokales Speichern 
function lokalesSpeichern(){
    var json = JSON.stringify(data);
    localStorage.setItem("fahrtenbuch", json);

}

//Lokales Laden -> Ausgabe 
function lokalesLaden(){
    var com = JSON.parse (localStorage.getItem ("fahrtenbuch"));
    anzeige(com);
}

//Aktualisiert die Tabelle 
function anzeige(data){
    anzeigeRawJson(data);
    anzeigeTabelle(data);
}

function anzeigeRawJson(data){
    let anzeigeBox = document.getElementById("anzeigeBox");
    anzeigeBox.innerHTML = JSON.stringify(data);
}

function anzeigeTabelle(data){
    //hier einfügen Tabelle erstellen 
   let inhaltLaenge = data.length;
    let text = "<ul>";
    for (let i = 0; i < inhaltLaenge; i++) {
        console.log(i);
        for(let ueberschrift in data[i]){
            let anzeigeBoxZwei = document.getElementById("anzeigeBoxZwei");
            anzeigeBoxZwei.innerHTML = ueberschrift;
            console.log(ueberschrift);// -->Überschriften
            console.log(data[i][ueberschrift]);     // --> Inhalt Die werte die Ich brauche
        }
        text += "<li>" + data[i].Fahrer + "</li>";
    }
    text += "</ul>";
    document.getElementById("ausgabe").innerHTML = text;
}


//1. liste erstennen (passiert bereits)
//2. Iteriere schleifendurchlauf für Überschriften
//3. Schleifendurchlauf durch alle Array Elemente
    //4. in der Schleife in der Schleife alle Data stelle [i] und an stelle [Überschriften] zusammenfügen in einer Zeile
//5.generiertes Element hinzufügen (anzeigen lassen) 

//Erstellt den Download Button
function newButtonDownload(){
    let buttonDownload = document.createElement("button");
    buttonDownload.textContent  = "Download";
    document.getElementById("download").append(buttonDownload);
    buttonDownload.onclick = download;
}

//Erstellt die Download Datei
function download() {
    var element = document.createElement('a');
    let text = JSON.stringify(data);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "fahrtenbuch.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

//Upload möglichkeit -> muss noch gemacht werden
function upload(){
    var input = document.createElement('input');
    input.type="file";
    input.accept = "application/json"
    document.getElementById('upload').appendChild(input);
}
//todo: wie lese ich den Text aus einem file -> input. (maby onchange)