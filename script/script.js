document.writeln("hola mundo desde un archivo externo");
/*
Variable: Es un espacio de memoria donde se almacena un dato, que se puede
cambiar durante la ejecucion del programa y se puede eliminar cuando ya no se necesite.
Tipos de Variables:
-primitivas: almacenan datos simples
-variables de tipo objeto: almacenan datos complejos.
-Tipos de datos:
1. Numericas: Enteros y decimales.
2. Variables de tipo objeto: cadena de texto, booleanos, arreglos, objetos.
3. especiales: null y undefined.
Declaraciones de variables:
1. var: Declaracion de variable con alcance global o locar a una funcion, pero no a un bloque
2.let: Declaracion de variable con alcance de bloque
3. const: Declaracion de variable con alcance de bloque, pero su valor no puede cambiar.

Sintaxis: una variable no puede contener un nombre con palabras reservadas, espacios, iniciar con numero, Se recomienda camelCase

*/

var edad=30;
var nombre="Juan";
var estatura=1.75;
var esSoltero=true;
var hijo=null;
var direccion=undefined;
var paises=["Argentina", "Brasil", "Colombia"];
document.writeln("<br>");
document.writeln("<h1>Manejo de Java script</h1>")
document.writeln("<br>");
document.writeln("mi edad es: "+ edad);
//funciones en JavaScript:
function mostrarNombre(){
    let nombre="Pedro"
    document.writeln("<br>")
    document.writeln("Mi nombre es:" + nombre);
    
}
mostrarNombre();
document.writeln("<br> nombre" + nombre)
