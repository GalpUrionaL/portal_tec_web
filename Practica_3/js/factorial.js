/* *Ejercicio 2  : Factorial* */

function factorial() {

    let n = parseInt(document.getElementById('num').value);

    if (n >= 1) {
        let cont = 1;
        let fact = 1;
        while (cont <= n) {
            fact = fact * cont;
            cont++;
        }
        document.getElementById('resultado').value = fact;
    }
}