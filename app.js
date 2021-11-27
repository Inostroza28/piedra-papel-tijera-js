
function calculo()
{
    var numero = Math.floor( Math.random() * 3);
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];
var juegos = prompt("Bienvenido, jugaremos al piedra, papel o tijera ¿Cuantas veces quieres jugar?");

var pointsJugador = 0;
var pointsCPU = 0;

async function executeGame(){

    var cpu = calculo(0,2);
    var jugador = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

    alert("Tu jugaste " + opciones[jugador]);
    alert("La CPU jugó " + opciones[cpu]);

    if(jugador == piedra)
    {
        if(cpu == piedra)
        {
            alert("El resultado fue: empate.");
        }
        else if(cpu == papel)
        {
            alert("El resultado fue: perdiste. ");
            pointsCPU++
        }
        else if(cpu == tijera)
        {
            alert("Felicidades el resultado fue: ganaste.");
            pointsJugador++;
        }
    }
    else if(jugador == papel)
    {
        if(cpu == piedra)
        {
            alert("Felicidades el resultado fue: ganaste.")
            pointsJugador++;
        }
        else if(cpu == papel)
        {
            alert("El resultado fue: empate.");
        }
        else if(cpu == tijera)
        {
            alert("El resultado fue: perdiste. ");
            pointsCPU++;
        }
    }
    else if(jugador == tijera)
    {
        if(cpu == piedra)
        {
            alert("El resultado fue: perdiste. ");
            pointsCPU++;
        }
        else if(cpu == papel)
        {
            alert("Felicidades el resultado fue: ganaste.");
            pointsJugador++;
        }
        else if(cpu == tijera)
        {
            alert("El resultado fue: empate.");
            
        }
    }
    else
    {
        alert("Por favor selecciona una opción valida.");
    }
}

async function executeForGame(){
    for(i = 1; i <= juegos; i++){
        await executeGame();
    }

    if(pointsJugador == pointsCPU) {
        alert("El resultado final termino en empate")
    }else {
        if(pointsJugador > pointsCPU){
            alert("Felicidades ganaste !");
        }else{
            alert("Lastima! Perdiste...")
        }
    }
}

executeForGame();
