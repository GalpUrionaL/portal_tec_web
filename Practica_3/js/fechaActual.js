/* *Ejercicio 4 : Fecha Actual* */

function fechaActual() {
    let tiempo = new Date();

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    let actual = (semana[tiempo.getDay()] + ' ' + tiempo.getDate() + ' ' + 'de  ' + mes[tiempo.getMonth()] + ' ' + 'del ' + tiempo.getFullYear());
    //console.log(tiempo.getDay());
    //var diaS = [tiempo.getDay()];
    //var nMes = mes[tiempo.getMonth()];
    document.getElementById('fecha').value = actual;
}