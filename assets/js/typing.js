var text = document.getElementsByClassName('typing');
var writeHere = document.getElementById('writeHere')
console.log();


var res = text[0].innerText.split("");
text[0].innerHTML = "";
var div = document.createElement('span');
var cursor = document.createElement('div');
cursor.classList.add('cursor');
writeHere.appendChild(div);
writeHere.appendChild(cursor);

var i = 0;
var interval = setInterval(function () {
    var string = res[i];
    if (string == undefined) {
        clearInterval(interval)
        var twingkile = setInterval(function () {
            if (cursor.classList.value == 'cursor') {
                cursor.classList.remove('cursor');
            } else {
                cursor.classList.add('cursor');
            }
        }, 500)
    } else {
        clearInterval(twingkile)
        typing(string);
        ++i;
    }
}, 50);


function typing(string) {
    div.innerHTML += string;
}
