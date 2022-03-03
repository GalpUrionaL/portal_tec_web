/* *Ejercicio 3 : Algoritmo FizzBuzz* */

function MenuDesplegable() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function fizzbuzz() {

    for (let i = 1; i <= 100; i++) {
        if (((i % 3) == 0) && ((i % 5) == 0)) {
            document.write(i + ".-" + " " + "FizzBuzz");
            document.write("<br>");
        } else if ((i % 3) == 0) {
            document.write(i + ".-" + " " + "Fizz");
            document.write("<br>");
        } else if ((i % 5) == 0) {
            document.write(i + ".-" + " " + "Buzz");
            document.write("<br>");
        } else {
            document.write(i + ".-");
            document.write("<br>");
        }

    }
}