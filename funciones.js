function celsius(degrees) {
    var celsius = 5 / 9 * (degrees - 32);
    return celsius;
}


var degressFahrenheit = [60, 32, 100]; var degreesCelsius = []; var contador;



function b() {
    for (contador = 2; contador >= 0; contador--) {
        document.write("Valor " + contador + " es " + degreesFarhrenheit[contador] + ' Farhrenheit ');

        document.write(" el cual es " + degrees_celsius[contador] +
            " C");

        fc(dc[contador])
    }
}

function a() {
    for (contador = 0; contador <= 2; contador++) { dc[contador] = celsius(degreesFarhrenheit[contador]); }
}

function farhrenheitCalculation(aux) {
    if (aux > 25) {
        document.write('Hace calor <br />');
    } else
        if (aux < 15) {
            document.write(' Hace frio <br />');
        } else {
            document.write(' Ni fu ni fa <br />')
        }
}