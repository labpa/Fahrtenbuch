
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

//Array wird erstellt
function createExampleData(){
    let data = [];
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
        let id = i+1;
         text += "<tr>" +"<td>"+ id + "</td>"
         text += "<td>" + data[i].Kennzeichen + "</td>"
         text += "<td>" + data[i].Fahrer + "</td>"
         text += "<td>" + data[i]["Kilometerstand Beginn"] + "</td>"
         text += "<td>" + data[i]["Kilometerstand Ende"] + "</td>"
         text += "<td>" + data[i].Reisezweck + "</td>"
         text += "<td>" + data[i].Datum + "</td>"
         text += "<td>" + "<button id = 'btnLoeschen' onclick = 'zeileLoeschen("+ (id -1 )+")' >Löschen</button>"+ "</td>"
         text += "</tr>";
     }
     text += "</table>";
    document.getElementById("ausgabe").innerHTML = text;
}

function zeileLoeschen(id){
    loeschenMitSchleife(id)
    anzeigeTabelle(data);
    lokalesSpeichern()
}

function loeschenMitFilter(id){
    let newData = data.filter((inhalt, index, array)=>{
        if(index !== id) return true
        return false   
    })
    data = newData;
}

function loeschenMitSchleife(id){
    let newData = [];
    for(let index in data){
        if(id.toString() !== index){
            newData.push(data[index])
        }
    }
    data = newData;
}

//Ueberschriften werden erzeugt
function anzeigeUeberschrift(){
    return " <tr class ='testcss'> <td>Nummer</td> <td>Kennzeichen</td> <td>Fahrer</td> <td>Kilometerstand Beginn</td> <td>Kilometerstand Ende</td> <td>Reisezweck</td> <td>Datum</td><td>Löschen</td></tr>" ;
}

//Erzeucht ein neues Element. Das Element wird per .push() dem Array angehängt
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

 //todo: die liste braucht noch eine checkbox
 //auswahl checkbox = element zu löschen
 //funktion elementLoeschen() nimmt die ausgewählte Nummer und entfernt entsprechenden EIntrag aus Liste
 function elementLoeschen(){
    console.log("Hallo Welt!");
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
