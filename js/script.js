
const tarjetas = [
    {
        pregunta: "¿Qué es JavaScript?",
        respuesta: "Es un lenguaje de programación que permite crear páginas web interactivas."
    },
    {
        pregunta: "¿Qué es una variable?",
        respuesta: "Es un espacio donde podemos almacenar información."
    },
    {
        pregunta: "¿Qué es una función?",
        respuesta: "Es un bloque de código que realiza una tarea específica."
    },
    {
        pregunta: "¿Qué es un array?",
        respuesta: "Es una estructura que permite almacenar varios elementos."
    },
    {
        pregunta: "¿Qué es el DOM?",
        respuesta: "Es una representación de los elementos HTML que JavaScript puede modificar."
    },
    {
        pregunta: "¿Qué es un objeto?",
        respuesta: "Es una estructura que almacena información mediante propiedades y valores."
    },
    {
        pregunta: "¿Qué es un evento?",
        respuesta: "Es una acción que ocurre en una página, como hacer clic en un botón."
    },
    {
        pregunta: "¿Qué es una condición?",
        respuesta: "Es una estructura que permite ejecutar código dependiendo de una condición."
    }
];

let tarjetaActual = 0;
let mostrandoRespuesta = false;

const pregunta = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");
const tarjeta = document.getElementById("tarjeta");

const contador = document.getElementById("contador");
const porcentaje = document.getElementById("porcentaje");
const progresoBarra = document.getElementById("progresoBarra");

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const botonVoltear = document.getElementById("voltear");

function mostrarTarjeta() {

    pregunta.textContent = tarjetas[tarjetaActual].pregunta;
    respuesta.textContent = tarjetas[tarjetaActual].respuesta;

    tarjeta.classList.remove("volteada");

    mostrandoRespuesta = false;

    botonVoltear.textContent = "Voltear tarjeta";

    contador.textContent = `Tarjeta ${tarjetaActual + 1} de ${tarjetas.length}`;

    let avance = ((tarjetaActual + 1) / tarjetas.length) * 100;

    progresoBarra.style.width = avance + "%";

    porcentaje.textContent = Math.round(avance) + "%";

    botonAnterior.disabled = tarjetaActual === 0;

    botonSiguiente.disabled = tarjetaActual === tarjetas.length - 1;
}

function voltearTarjeta() {

    mostrandoRespuesta = !mostrandoRespuesta;

    tarjeta.classList.toggle("volteada");

    if (mostrandoRespuesta) {
        botonVoltear.textContent = "Ver pregunta";
    } else {
        botonVoltear.textContent = "Voltear tarjeta";
    }
}

function siguienteTarjeta() {

    if (tarjetaActual < tarjetas.length - 1) {

        tarjetaActual++;

        mostrarTarjeta();
    }
}

function anteriorTarjeta() {

    if (tarjetaActual > 0) {

        tarjetaActual--;

        mostrarTarjeta();
    }
}

botonVoltear.addEventListener("click", voltearTarjeta);

tarjeta.addEventListener("click", voltearTarjeta);

botonSiguiente.addEventListener("click", siguienteTarjeta);

botonAnterior.addEventListener("click", anteriorTarjeta);

mostrarTarjeta();
