
let vacio= " ";
let texto;
do {
    texto = prompt ("Ingrese una cadena de texto: ");  
        		vacio += '</br>' + "-" + texto;
}while (confirm ("Desea seguir?"));
   document.write (vacio);

