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

//Funcion que recibr parametros
function sumar(a,b){
    let resultado;
    resultado=a+b;
    return resultado
}

//llamamos a la funcion sumar

var suma=sumar(40,50);
document.writeln("<br> la suma es: " +suma);
/* Operadores aritmeticos:
+: suma
-: resta
*:multiplicacion
/: division
%: modulo(residuo de una division)
++: incremento
--: decremento

Operadores de asignacion:
Estos operadores se utilizan para asignar valores a las variables.
=: Asignacion Simple
+= : Asignacion con suma (y += b es equivalente a y=y+b)
-= : asignacion con resta(y -= b  es equivalente a y=y-b)
=== : Igualdad Estricta (compara valor y tipo) 6=== "6"

Operadores de comparacion: se utilizan para comparar valores y  devuelven un valor booleano (true or false)

== : igualdad
!= : desigualdad
>: Mayor que
<: Menor que
>= Mayor o igual que
<= Menor o igual que

Operadores logicos:
Se utilizan para combinar expresiones booleanas

&& : AND Devuelve true si ambas condiciones son verdaderas
|| : OR devuelve true si almenos una de las condiciones es verdadera
! : NOT Invierte el valor de una condicion
/*



//la condicional nos permite ejecutar un bloque de codigo mientras cierta condicion se cumpla
//Sintaxis:

/*if(condicion){
    bloque de codigo a ejecutar si la condicion es verdadera
}else{ 
    Bloque de codigo a ejecutar si la condicion es falsa
           }*/


//Crear un script donde se verificque la edad mayor entre dos personas

var EdadJuan=30;
var EdadAlessandro=21;
if(EdadJuan>EdadAlessandro){
document.writeln("<br> Juan es Mayor que Alessandro")

} else{
    document.writeln("<br> Alessandro Es mayor que Juan")
}


