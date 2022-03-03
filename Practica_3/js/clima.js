/* *Ejercicio 1 : Clima  * */

function MenuDesplegable() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function clima() {
    let grados = parseFloat(document.getElementById('temp').value);
    let estado = '';
    if (grados >= (-10) && grados <= 15) {
        estado = 'Frio';
    } else {
        if (grados >= 16 && grados <= 25) {
            estado = 'Templado';
        } else {
            if (grados >= 26 && grados <= 40) {
                estado = 'Calor';
            } else {
                estado = 'Ingrese de nuevo';
            }
        }
    }
    document.getElementById('resultado').value = estado;
}