

const num = window.prompt("Ingrese un número");
const ingreso_num = parseInt(num);


for(i = ingreso_num; i >= 1 ; i--) {

    for(x = i; x >= 1; x--) {
        document.write(i);
    }

    document.write("<br>");

}

