
function calculo()
{
    var numero = Math.floor( Math.random() * 3);
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];


var cpu = calculo(0,2);

var jugador = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Tu jugaste " + opciones[jugador]);
alert("La CPU jugó " + opciones[cpu]);

if(jugador == piedra)
{
    if(cpu == piedra)
    {
        alert("El resultafo fue: empate.");
    }
    else if(cpu == papel)
    {
        alert("El resultado fue: perdiste. ");
    }
    else if(cpu == tijera)
    {
        alert("Felicidades el resultado fue: ganaste.");
    }
}
else if(jugador == papel)
{
    if(cpu == piedra)
    {
        alert("Felicidades el resultado fue: ganaste.");
    }
    else if(cpu == papel)
    {
        alert("El resultafo fue: empate.");
    }
    else if(cpu == tijera)
    {
        alert("El resultado fue: perdiste. ");
    }
}
else if(jugador == tijera)
{
    if(cpu == piedra)
    {
        alert("El resultado fue: perdiste. ");
    }
    else if(cpu == papel)
    {
        alert("Felicidades el resultado fue: ganaste.");
    }
    else if(cpu == tijera)
    {
        alert("El resultafo fue: empate.");
    }
}
else
{
    alert("Por favor selecciona una opción valida.");
}