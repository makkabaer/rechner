function rechner (){

let number1 = Number(document.getElementById("Zahl1").value)
let number2 = Number(document.getElementById("Zahl2").value)
let operationen = (document.getElementById("Operationen").value)

let result = 0

if (operationen == "Addition"){
   result = number1 + number2
}
else if (operationen == "Subtraktion"){
    result = number1 - number2
}
else if (operationen == "Multiplikation"){
    result = number1 * number2
}
else {
    result = number1 / number2
}

document.getElementById("ergebnis").textContent = result
}