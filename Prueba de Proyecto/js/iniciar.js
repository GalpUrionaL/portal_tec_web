function iniciar() {

    let usuario = document.getElementById('USUARIO').value;
    let contrasenia = document.getElementById('CONTRASENIA').value;

    if (usuario.length > 9) {
        if (contrasenia.length >= 8) {
            alert('BIENVENIDO A NATUS VINCERE');
        } else {
            alert('Contraseña incorrecta');
            event.preventDefault();
        }
    } else {
        alert('Usuario incorrecto');
        event.preventDefault();
    }
}