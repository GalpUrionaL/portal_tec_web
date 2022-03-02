let prueba = new XMLHttpRequest(); //
prueba.open('GET', 'servidor.php');
prueba.onload = function() {
    if (prueba.status === 200) {
        let json = JSON.parse(prueba.responseText);
        let template = ``;
        json.map(function() {
            template += `
            <h2>${(data.id)}</h2>
            <strong>${(data.nombre)}</strong>
            <p>${(data.edad)}</p><br>
            `;
            return template;
        })
        console.log(template);
        document.getElementById('pruebaJson').innerHTML = template;
    } else {
        console.log("Existe un error de tipo: " + prueba.status);
    }
}
prueba.send();