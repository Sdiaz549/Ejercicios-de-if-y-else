let typelavadora = parseint(prompt ("ingrese el tipo de lavadora 1 o 2 "));

let cantidad = parseint(prompt ("ingrese el numero de lavadoras a alquilar"));

let horas = parseInt(prompt("ingrese el numero de horas a alquilar"));

let type1 = (horas * 4000 * cantidad); 
let type2 = (horas * 3000 * cantidad);
let totalparcial;
let total;
if (typelavadora == "1" && cantidad <= 3 ) {

    total= horas * 4000 * cantidad;

} else if (typelavadora = 1 && cantidad > 3 )
    {totalparcial= (type1) * 0.03;
        total = type1 -= totalparcial;
}
else if (typelavadora == 2 && cantidad <= 3)
{total = horas * 3000 * cantidad;}
else if (typelavadora == 2 && cantidad > 3 )
   {totalparcial= (type2) * 0.03;
       total = type2 == totalparcial;
   }

alert( "Costo total por alquilar $(cantidad} lavadoras tipo $(typelavadora) por $(horas) horas: $(total).")