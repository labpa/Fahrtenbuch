let data = createExampleData();
anzeige(data);


//Array wird erstellt und mit Beispieldaten gefüllt
function createExampleData(){
    let data = new Array();

    data[0] = new Object();
    data[0] ["Kennzeichen"] = "B-SP-1312";
    data[0] ["Fahrer"] = "Müller";
    data[0] ["Kilometerstand Beginn"] = 412;
    data[0] ["Kilometerstand Ende"] = 590;
    data[0] ["Reisezweck"] = "Kurzurlaub"

    data[1] = new Object();
    data[1] ["Kennzeichen"] = "L-SD-666";
    data[1] ["Fahrer"] = "Schmidt";
    data[1] ["Kilometerstand Beginn"] = 2712;
    data[1] ["Kilometerstand Ende"] = 3590;
    data[1] ["Reisezweck"] = "Langurlaub";

    data[2] = new Object();
    data[2] ["Kennzeichen"] = "B-SP-1312";
    data[2] ["Fahrer"] = "Eisenhauer";
    data[2] ["Kilometerstand Beginn"] = 590;
    data[2] ["Kilometerstand Ende"] = 721;
    data[2] ["Reisezweck"] = "Kurzurlaub";
    return data;
}

//Daten aus dem Array werden in index.html angezeigt
function anzeige(data){
    let anzeigeBox = document.getElementById("anzeigeBox");
    anzeigeBox.innerHTML = JSON.stringify(data);
    let string = JSON.stringify(data);
    let newData = JSON.parse(string);
}




