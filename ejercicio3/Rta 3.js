let suma = 0;
let numero;


do {
    numero = window.prompt("Ingrese un numero");

    if(!isNaN(numero))

        {
            
            total = parseInt(numero);
            suma += total;
        } 

    else {

        if (numero != undefined) {
            alert("Por favor ingrese solo valores númericos"); 
        }

    }

    continuar = confirm ("Desea continuar?");

} 

while (continuar == true);


document.write(suma + " Es la suma de todos los números ingresados");



