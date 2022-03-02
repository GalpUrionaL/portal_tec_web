<?php 
/* Realizando una simulacion desde el lado de servidor */
    $datos = array(
        array(
            'id' => 1,
            'nombre' =>'Juan José Roca León',
            'edad' => 26
        ),
        array(
            'id' => 2,
            'nombre' => 'Luis Marcelo Rojas Flores',
            'edad' => 23
        ),
        array(
            'id' => 3,
            'nombre' => 'Kevin Andres Torrez Angulo',
            'edad' => 22
        ),
        array(
            'id' => 4,
            'nombre' => 'Galia Paola Uriona Larraín',
            'edad' => 26
        ),
    );
    /* php contiene un funcion que codifica un array de php para convertir
    en formato JSON */

    echo json_encode($datos); // pasamos y ponemos echo para imprimir

?>