
let data;

if(lokalesLaden() == null){
    data = createExampleData();
} else {
    data = lokalesLaden();
}




anzeigeTabelle(data);
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

    data[3] = new Object();
    data[3] ["Kennzeichen"] = "L-SD-666";
    data[3] ["Fahrer"] = "Schmidt";
    data[3] ["Kilometerstand Beginn"] = 2712;
    data[3] ["Kilometerstand Ende"] = 3590;
    data[3] ["Reisezweck"] = "Langurlaub";
    data[3] ["Datum"] = "13.12.2022";

    return data;
}


//Lokales Speichern 
function lokalesSpeichern(){
    var json = JSON.stringify(data);
    localStorage.setItem("fahrtenbuch", json);

}

//Lokales Laden -> Ausgabe 
function lokalesLaden(){
    var dataFromLocalstorage = JSON.parse (localStorage.getItem ("fahrtenbuch"));
   return dataFromLocalstorage;
}

//die Tabelle wird ersellt und angezeigt.
function anzeigeTabelle(data){  
    let inhaltLaenge = data.length;
     let text = "<table>";
     text += anzeigeUeberschrift();
     for (let i = 0; i < inhaltLaenge; i++) {
         text += "<tr>" +"<td>"+ data[i].Kennzeichen + "</td>"
         text += "<td>" + data[i].Fahrer + "</td>"
         text += "<td>" + data[i]["Kilometerstand Beginn"] + "</td>"
         text += "<td>" + data[i]["Kilometerstand Ende"] + "</td>"
         text += "<td>" + data[i].Reisezweck + "</td>"
         text += "<td>" + data[i].Datum + "</td>"
         text += "</tr>";
     }
     text += "</table>";
    document.getElementById("ausgabe").innerHTML = text;
}

//Ueberschriften werden erzeugt
function anzeigeUeberschrift(){
    return " <tr> <td>Kennzeichen</td> <td>Fahrer</td> <td>Kilometerstand Beginn</td> <td>Kilometerstand Ende</td> <td>Reisezweck</td> <td>Datum</td></tr>" ;
}

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
//html
//1. input field in html 
//2. button hinzufügen

//js
//3. funktionalität button click wenn button klick
    //1. holen alle werte aus input
    //2. neues Objekt erzeugen aus werten von input -> gleiche namen/bezeichnungen wie bestehden
    //3. hinzufügen zum bestehenden Array
    //4. AnzeigeTabelle erneut aufrufen (erneuern)
    
function neuesElement(data){
   let neuerEintarg = new Object();
    neuerEintarg["Kennzeichen"] = document.getElementById("insertKennzeichen").value;
    neuerEintarg["Fahrer"] = document.getElementById("insertFahrer").value;
    neuerEintarg["Kilometerstand Beginn"] = document.getElementById("insertKmBeginn").value;
    neuerEintarg["Kilometerstand Ende"] = document.getElementById("insertKmEnde").value;
    neuerEintarg["Reisezweck"] = document.getElementById("insertReisezweck").value;
    neuerEintarg["Datum"] = document.getElementById("insertDatum").value; //todo: Datum umwandeln in richtiges format
    data.push(neuerEintarg);
    lokalesSpeichern()
    anzeigeTabelle(data)
}