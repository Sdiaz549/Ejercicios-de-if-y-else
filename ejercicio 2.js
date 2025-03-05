let genero = prompt ("ingresa tu genero");
let edad = parseInt (prompt ("ingresa tu edad"));
let payment;
if ( genero == "mujer" && edad > 50){
    payment = 150000;
}else if (genero == "mujer" && (edad >= 30)){
   payment = 100000;

}else if (genero == "mujer" && age < 30){
   payment = 0;
}else if (genero == "hombre"){
payment = 40000;
}
alert("El valor de ayuda mensual es: $(payment).")
