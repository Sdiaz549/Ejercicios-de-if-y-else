let days = prompt("ingrese el tiempo que va estar en el gimnasio (15 dias, 30 dias y 3 meses)")
switch (dias) {
    case "15 dias":
        alert ("usted va a estar ${dias) debe pagar 18000");
        break;
case "30 dias":
    alert("usted va a estar ${dias) debe pagar 35000");
    break;

     case "3 meses" :
     alert("usted va a estar ${dias) debe pagar 86000");
     break;

default:
    alert("no ha elegido una opcion valida");

    break;
}   
