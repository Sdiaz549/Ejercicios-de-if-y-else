const { operador, paquete } = require("./ejercicio13");

let nombrel = prompt("ingrese su nombre")
let horas = parseint(prompt("ingrese el numero de horas que trabajó en la semana"))
let pago;

if (horas <= 10){

     pago =30000 * horas;

}else{
    pago= 33000 * horas;
}

