function enviar() {
    // alert('Se registro correctamente');
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correoElectronico').value;
    let num = document.getElementById('numeroTelefono').value;


    if (nombre.length >= 3) {
        if (correo.length > 9) {
            if (contra.length >= 8) {
                alert('Se registro correctamente');
            } else {
                alert('La cantidad de caractares para la contraseña es insuficiente');
                event.preventDefault();
            }
        } else {
            alert('Correo no valido');
            event.preventDefault();

        }
    } else {
        alert('Verifique los datos ingresados');
        event.preventDefault();
    }
}