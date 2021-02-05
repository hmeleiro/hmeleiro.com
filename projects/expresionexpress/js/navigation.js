function GoHome() {
    document.getElementById("inicio").style.display = "block";
    document.getElementById("mainpanel").style.display = "none";
    document.getElementById("contacto").style.display = "none";

}

function GoContact() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("mainpanel").style.display = "none";
    document.getElementById("contacto").style.display = "block";

}

function importwords(i) {

    var i = i
    var packs = ['words/basic.txt', 'words/pack2.txt', 'words/RAE.txt', 'words/borges.txt', 'words/quijote.txt'];

    var client = new XMLHttpRequest();
    client.open('GET', packs[i]);
    client.onreadystatechange = function() {
        var words = client.responseText.split("\n");
        //console.log(words);
        //console.log(words[0]);
        window.words = words;

    }
    client.send();

    document.getElementById("inicio").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById("mainpanel").style.display = "block";
    document.getElementById("word").innerHTML = "";

}