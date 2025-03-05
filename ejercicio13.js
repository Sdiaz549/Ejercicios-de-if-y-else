export let operador = prompt ("ingrese su operador (claro, tigo o movistar)")
let minutos = parseInt (prompt ("ingrese su numero de minutos internacionales consumidos"))
let almacenamiento;
export let paquete;
let unidadminutos;
let cargo;

if (operador == "claro"){
    almacenamiento = 30000 +(100 * minutos) + 18000;
    paquete= 18000;
    unidadminutos = 100;
    cargo = 30000

} else if (operador = "tigo"){
    almacenamiento = 45000 + ( 200* minutes) + 12000;
    paquete = 12000;
    unidadminutos = 200;
    cargo = 45000;

}else if (operador == "movistar") {
    almacenamiento = 4000
    paquete = 8000;
    unidadminutos = 250;
    cargo = 40000;

}
alert(`señor/a usted tiene como operador ${operador}, el valor de paquete vale ${paquete}, \n
     los minutos internaciones valen ${unidadminutes}, y el cargo fijo cuesta ${cargo}. In 
     señor/a usted utilizo $(minutes) minutos internacionales asi que en total debe pagar ${almacenamiento}`)
