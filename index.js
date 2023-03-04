alert("Bienvenido a Fitness store")
let producto = parseInt(prompt("Seleccione el numero del producto que desea comprar. 1-Proteina $5000  2-Creatina $7000  3-Preworkout $4000  4-Mass Builder $4500  0-Ir al carrito"))
let cantidad;
let total = 0

if (producto > 4) {
    alert("El numero ingresado no coincide con ninguno de los productos. Vuelva a intentarlo")
}


while (producto != 0) {
    switch (producto) {

        case 1:
            console.log("Proteina");
            cantidad = parseInt(prompt("Usted eligio proteina, indique cantidad"))
            console.log(cantidad);
            precioXCantidad(5000)
            total += montoTotal(cantidad, 5000)
            break;

        case 2:
            console.log("Creatina");
            cantidad = parseInt(prompt("Usted eligio creatina, indique cantidad"))
            console.log(cantidad);
            precioXCantidad(7000)
            total += montoTotal(cantidad, 7000)
            break;

        case 3:
            console.log("Preworkout");
            cantidad = parseInt(prompt("Usted eligio preworkout, indique cantidad"))
            console.log(cantidad);
            precioXCantidad(4000)
            total += montoTotal(cantidad, 4000)
            break;

        case 4:
            console.log("Mass builder");
            cantidad = parseInt(prompt("Usted eligio mass builder, indique cantidad"))
            console.log(cantidad);
            precioXCantidad(4500)
            total += montoTotal(cantidad, 4500)
            break;
        default:
            break;
    }
    producto = parseInt(prompt("Seleccione el numero del producto que desea comprar. 1-Proteina $5000  2-Creatina $7000  3-Preworkout $4000  4-Mass Builder $4500  0-Ir al carrito"))
}

alert("El total de la compra es de $" + total)
console.log("El monto total de la compra es de $" + total);

// Esta function muestra en la consola la cantidad seleccionada multiplicada por el precio del producto escogido.
function precioXCantidad(precio) {
    console.log(cantidad * precio);
}
// Esta function multiplica la cantidad seleccionada por el precio, acompañado de un acumulador.
function montoTotal(cant, price) {
    return cant * price
}




/*  ---------------------------- FORMA DE PAGO ---------------------------- */


let formaDePago = parseInt(prompt("Elija una forma de pago  1-Visa  2-Mastercard."))

if (formaDePago === 0 || formaDePago >2) {
    alert("Asegurese de que haya ingresado los datos de la tarjeta")
}

let numeroDeTarjeta;
let nombreDeTarjeta;


while (formaDePago !=0) {
    switch (formaDePago) {
        case 1:
                console.log("Visa");
                numeroDeTarjeta = parseInt(prompt("Ingrese el numero de la tarjeta. Solo se puede ingresar 16 digitos"))
                if (numeroDeTarjeta < 1000000000000000) {
                    alert("Numero de tarjeta ingresado incorrectamente. Error: Faltan digitos. Vuelva a intentarlo")
                } else if (numeroDeTarjeta > 9999999999999999) {
                    alert("Numero de tarjeta ingresado incorrectamente. Error: Sobran digitos. Vuelva a intentarlo")
                } else {
                    console.log(numeroDeTarjeta);
                    nombreDeTarjeta = prompt("Ingrese nombre de la tarjeta")
                    console.log(nombreDeTarjeta);
                }
            break;
    

        case 2:
            console.log("Mastercard");
            numeroDeTarjeta = parseInt(prompt("Ingrese el numero de la tarjeta. Solo se puede ingresar 16 digitos"))
            if (numeroDeTarjeta < 1000000000000000) {
                alert("Numero de tarjeta ingresado incorrectamente. Error: Faltan digitos. Vuelva a intentarlo")
            } else if (numeroDeTarjeta > 9999999999999999) {
                alert("Numero de tarjeta ingresado incorrectamente. Error: Sobran digitos. Vuelva a intentarlo")
            } else {
                console.log(numeroDeTarjeta);
                nombreDeTarjeta = prompt("Ingrese nombre de la tarjeta")
                console.log(nombreDeTarjeta);
            }
        break;

        default:
            break;
    }
    formaDePago = parseInt(prompt("Elija una forma de pago  1-Visa  2-Mastercard. Si ingresó los datos correctamente, presione 0 para continuar"))
}


//Fecha de vencimiento

let fechaDeVencimiento = parseInt (prompt ("Ingrese la fecha de vencimiento. Solo se puede insertar 3/4 numeros (MM/AA)"))

if (fechaDeVencimiento <423 || fechaDeVencimiento >1230) {
    alert("El mes actual es Marzo de 2023, por ende su respuesta no puede ser inferior a 423 y tampoco superior a 1230 (Diciembre de 2030)")
}

while (fechaDeVencimiento <=422 || fechaDeVencimiento >=1231 ) {
    fechaDeVencimiento = parseInt (prompt ("Ingrese la fecha de vencimiento. Solo se puede insertar 3/4 numeros (MM/AA)"))
}

if (fechaDeVencimiento >422 && fechaDeVencimiento <1231 ) {
    console.log("La fecha de vencimiento de la tarjeta es "+fechaDeVencimiento);
}


//Codigo de seguridad


let codigoDeSeguridad = parseInt(prompt("Ingrese el codigo de seguridad. Solo se puede ingresar 3 digitos"))

while (codigoDeSeguridad <99 || codigoDeSeguridad >999) {
    codigoDeSeguridad = parseInt(prompt("Ingrese el codigo de seguridad. Solo se puede ingresar 3 digitos"))   
}

if (codigoDeSeguridad >=100 || codigoDeSeguridad <=1000 ) {
    console.log("El codigo de seguridad es "+codigoDeSeguridad);
}

//Confirmacion

alert("Gracias por comprar!")


