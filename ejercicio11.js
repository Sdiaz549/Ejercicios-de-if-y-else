let computador= prompt("ingrese lo que le paso a su computadora en el siguiente formato ('no' emite un pitido")
switch (computador){
    case "emite un pitido y el disco duro gira":

     alert ("usted ingreso $(computador) asi que la computadora esta averiada");
     break;

    case "emite un pitido y la unidad gira":

     alert("usted ingreso $(computador) asi que póngase en contacto con el técnico apoyo");
     break;

    case "emite un pitido y la unidad no gira":

     alert("usted ingreso $(computador) asi que pongase a verificar contactos de la unidad");
     break;
 
    case "no emite un pitido y el disco duro no gira":

     alert ("usted ingreso $(computador) asi que traiga la computadora para repararla en la central.");
     break;

    case "no emite un pitido y el disco duro gira":
     alert("usted ingreso $(computador) asi que compruebe las conexiones de altavoces");
     break;
    default:
    alert("no ingreso una opcion valida");
    break;
     }