// Input Checkbox checked Property
// EXAMPLE 1
function check() {
    document.getElementById("myCheck").checked = true;
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
}


// EXAMPLE 2
function example2() {
    var a = document.getElementById("myCheck2").checked;
    document.getElementById('demo2').innerHTML = a;
}


// EXAMPLE 3
function example3() {
    document.getElementById("fname").value =
        document.getElementById("fname").value.toUpperCase();
}


// EXAMPLE 4
function example4() {
    var coffee = document.forms[0];
    var txt = "";
    var i;

    for (let i = 0; i < coffee.length; i++) {
        if (coffee[i].checked) {
            txt = txt + coffee[i].value + " ";
        }
    }

    document.getElementById("order").value = "You ordered a coffee with : " + txt;
}