function randomword(words) {

    var word = words[Math.floor(Math.random() * words.length)];

    document.getElementById("word").innerHTML = word
        //return thing;
}