const LIMITE_VELOCIDAD = 110;
const EXCESO_LEVE = 20;
const MULTA_LEVE = 5000;
const MULTA_GRAVE = 10000;

function limpiarPatente(texto) {
  if (texto === null) {
    return "";
  }
  return texto.trim().toUpperCase();
}

function validarPatente(patente) {
  return patente.length >= 6 && patente.length <= 7;
}

function convertirVelocidad(texto) {
  if (texto === null || texto.trim() === "") {
    return NaN;
  }
  return Number(texto);
}

function pedirVelocidad() {
  let velocidad = convertirVelocidad(prompt("Ingresá la velocidad del vehículo en km/h:"));

  while (isNaN(velocidad) || velocidad < 0) {
    velocidad = convertirVelocidad(prompt("Velocidad inválida. Ingresá un número mayor o igual a 0:"));
  }

  return velocidad;
}

function calcularMulta(velocidad) {
  if (velocidad <= LIMITE_VELOCIDAD) {
    return 0;
  } else if (velocidad <= LIMITE_VELOCIDAD + EXCESO_LEVE) {
    return MULTA_LEVE;
  } else {
    return MULTA_GRAVE;
  }
}

let patente = limpiarPatente(prompt("Ingresá la patente del vehículo:"));

while (!validarPatente(patente)) {
  patente = limpiarPatente(prompt("Patente inválida. Debe tener entre 6 y 7 caracteres. Ingresala de nuevo:"));
}

let velocidad = pedirVelocidad();
let multa = calcularMulta(velocidad);

console.log(`Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${multa}`);
