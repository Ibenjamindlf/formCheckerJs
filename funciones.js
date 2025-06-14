// Se implementa una sola funcion debido a que el checkeo se debe hacer al presionar el boton, por ende la unica funcion que se habilita es la siguiente: 
function validar()
{   
    // Obtengo todas las referencias a los elementos y los guardo en variables
    const $nombre = document.getElementById("nombre");
    const $apellido = document.getElementById("apellido");
    const $email = document.getElementById("email");
    const $obra = document.getElementById("obras_sociales");
    const $dia = document.getElementById("dia");
    const $mes = document.getElementById("mes");
    const $anio = document.getElementById("anio");
    // Observaciones no se utiliza debido a que no es pedido como validacion
    const $observaciones = document.getElementById("observaciones");

    // expresión regular para validar correos electrónicos
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    // Verifico si los campos (nombre,apellido,email y obras_sociales) estan vacios, en el caso que si, se pinta su borde de color
    // El else se agrega por un tema de visualidad, no cumple ninguna funcion en especifico, ya que sin este, se sigue cumpliendo la consigna
    if($nombre.value == ""){
        document.getElementById("nombre").style.border = "solid red";
    }
    else{
        document.getElementById("nombre").style.border = "solid 1px #cccccc";
    }

    if($apellido.value == ""){
        document.getElementById("apellido").style.border = "solid red";
    }else{
        document.getElementById("apellido").style.border = "solid 1px #cccccc";
    }

    if($email.value == ""){
        document.getElementById("email").style.border = "solid red";
    }else{
        document.getElementById("email").style.border = "solid 1px #cccccc";
    }

    if($obra.value == ""){
        document.getElementById("obras_sociales").style.border = "solid red";
    }else{
        document.getElementById("obras_sociales").style.border = "solid 1px #cccccc";
    }

    // Ademas de validar si los campos (dia,mes y año) esten vacios, valido que no me ingresen un valor negativo en ellos}
    // mismo funcionamiento del las condiciones anteriores
    if($dia.value == "" || $dia.value < 0){
        document.getElementById("dia").style.border = "solid red";
    }else{
        document.getElementById("dia").style.border = "solid 1px #cccccc";
    }

    if($mes.value == "" || $mes.value < 0 || $mes.value > 12){
        document.getElementById("mes").style.border = "solid red";
    }else{
        document.getElementById("mes").style.border = "solid 1px #cccccc";
    }

    if($anio.value == "" || $anio.value < 0){
        document.getElementById("anio").style.border = "solid red";
    }else{
        document.getElementById("anio").style.border = "solid 1px #cccccc";
    }

    // Validar meses de 31 dias
    // Primera condicion (Si el el valor mes es igual a algunos de los meses que contienen 31 dias en el calendario) Entonces
    if($mes.value == 1 || $mes.value == 3 || $mes.value == 5 || $mes.value == 7 || $mes.value == 8 || $mes.value == 10 || $mes.value == 12){
        // Valido si el campo dia del mes ingresado es valido (se encuentra en el rango)
        if($dia.value <= 31 && $dia.value > 0){
            // Si el dia esta entre 0 y 31 mantengo el estilo
            document.getElementById("dia").style.border = "solid #cccccc";
        }else{
            // Si no, por ejemplo que se ingrese 32, pinto el borde de rojo
            document.getElementById("dia").style.border = "solid red";
        }
    }
    // Validar meses de 30 dias
    // Segunda condicion (Si el el valor mes es igual a algunos de los meses que contienen 30 dias en el calendario) Entonces
    else if($mes.value == 4 || $mes.value == 6 || $mes.value == 9 || $mes.value == 11){
        // Valido si el campo dia del mes ingresado es valido (se encuentra en el rango)
        if($dia.value <= 30 && $dia.value > 0){
            // Si el dia esta entre 0 y 30 mantengo el estilo
            document.getElementById("dia").style.border = "solid #cccccc";
        }else{
            // Si no, por ejemplo que se ingrese 31, pinto el borde de rojo
            document.getElementById("dia").style.border = "solid red";
        }
    }
    
// Validar año bisiesto
// Tercera condición: si el valor del mes es igual a 2 (Febrero)
else if($mes.value == 2){
    // Verifica si el año es bisiesto (divisible por 4)
    if($anio.value % 4 == 0){
        
        // Si es bisiesto, se permiten días del 1 al 29
        // También se valida que el año sea mayor a 0
        if($dia.value <= 29 && $dia.value > 0 && $anio.value > 0){
            // Día válido → se restaura el borde al color normal
            document.getElementById("dia").style.border = "solid #cccccc";
        }else{
            // Día inválido → se marca el borde en rojo
            document.getElementById("dia").style.border = "solid Violet";
        }
    }else{
        // Si el año no es bisiesto, solo se permiten días del 1 al 28
        if($dia.value <= 28 && $dia.value > 0 && $anio.value > 0){
            // Día válido → se restaura el borde al color normal
            document.getElementById("dia").style.border = "solid #cccccc";
        }else{
            // Día inválido → se marca el borde en rojo
            document.getElementById("dia").style.border = "solid Violet";
        }
    }
}
    // Verifica si el valor ingresado en el campo "email" cumple con el patrón definido por la expresión regular
    if (emailRegex.test(email.value)) {
        // Si el email es válido, se aplica un borde gris claro al campo (estilo por defecto)
        document.getElementById("email").style.border = "solid 1px #cccccc";
    } else {
        // Si el email NO es válido, se aplica un borde rojo al campo para indicar error
        document.getElementById("email").style.border = "solid red";
    }
}

