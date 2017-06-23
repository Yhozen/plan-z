const clase0 = {
  title: 'Clase 0: Introducción',
  n: 0,
  tags: ['funciones', 'variables', 'básico', 'librerias', 'hello', 'world', 'main', 'tipo', 'datos'],
  brief:`Este es el punto de partida. Aprenderás lo más básico de la programación.`,
  text: `¿Qué es una función?
  Una función es un bloque de código que realiza alguna operación.
  Parámetros:
  Una función debe definir parámetros de entrada que permiten a los llamadores pasar argumentos a la función.
  Return:
  Una función también puede devolver un valor como salida.
  Librerías:
  Es un conjunto o colección de subprogramas usados para desarrollar software
  Se pueden entender como un conjunto de funciones reutilizables.
  Por ejemplo si necesitas crear un programa relacionado con las matemáticas, no es necesario crear las funciones que multipliquen o dividan, ya que están en una librería (#include<math.h>)
  Siempre se deben escribir como #include<nombre_libreria.h>
  Ejemplos de algunas funciones que contienen las librerías más comunes:

  Math.h :
  Ceil
  Floor
  Pow
  Ctype.h:
  Toupper
  Stdio.h:
  Fclose
  Feof
  Fgets
  Fopen
  Printf
  Stdlib.h:
  Atof
  Malloc
  String.h :
  Strlen

  Main:
  Es la función principal.
  La función main es el punto de entrada de cualquier programa en c, es donde se inicia la ejecución del programa.
  Cada programa en c tiene una función main ()
  La función principal se trata igual que todas las funciones, es decir, tiene un tipo de retorno y parámetros de entrada(void). La única diferencia es que la función principal es “llamada” por el sistema cuando el usuario ejecuta el programa.
  Por lo tanto, la función principal es siempre el primer código ejecutado cuando se inicia el programa, recuerda siempre terminar con return 0;
  El main debe estar entre corchetes, y además siempre será int main(void),
  Ejemplo:
  #include<stdio.h>

  int main (void) {
  código a ejecutar.
  }

  Variables : ¿Qué son? ¿Para que sirven? ¿Qué tipos hay? (locales y globales)
  Permiten almacenar información, se puede facilitar la comprensión de una variable si son entendidas como una caja que guarda algo.
  Para definir una variable debemos asignarle un tipo:
  Char ➔ para guardar un carácter
  Int ➔  para guardar enteros
  Long ➔ para guardar enteros largos
  Float ➔ para guardar decimales simples
  Double ➔ para guardar decimales dobles
  String ➔ sirve para guardar un arreglo de caracteres, es decir un conjunto de char, por ejemplo string s=“hola”;
  En la caja s quedara la palabra hola

  Syntax ➔
  Aquí declaramos una variable
  Tipo_variable nombre = value;
  Donde el tipo seria, char , int, etc.
  Nombre es el que le queremos dar a la variable
  Tener en cuenta que: el nombre de una variable no puede tener espacio, se recomienda utilizar guión bajo para reemplazar el espacio, además también se recomienda colocarle un nombre que podamos identificar, para facilitar su uso y la lectura del código posteriormente
  Y con el = le asignamos el valor (value)
  Ejemplo : int b = 3;
  La variable b, es de tipo int, y tendrá el valor 3.
  Se puede entender como una caja llamada “b”, la cual guarda solo números enteros(porque se definió como int) y en este caso particular se está asignando el valor  3, por lo tanto dentro de la caja “b”, se encuentra guardado el numero 3
  Para utiliza una variable, debe ser primero declarada.
  Las variables se pueden guardar global y localmente.
  Variables locales: estas variables serán las que tienen ese valor solamente en alguna función o dentro del main, por lo que solo tendrán ese valor dentro de la misma función o del main y fuera de estos, la variable no existe
  Variables globales: son las que están afuera del main y de alguna función, por lo que cuando se utilicen siempre tendrán el mismo valor


  Instrucciones:
  printf(“Hola, mundo!”); ➔ imprime en la pantalla lo que esta entre comillas.
  Para ocupar una variable se coloca % y la letra que identifique el tipo de variable que se esta ocupando, por ejemplo si vamos a ocupar un número que es un (int) colocaremos %i y luego nombrarla.
  Char ➔ %c
  Double ➔ %f
  Float ➔ %f
  Int ➔ %i o %d
  String ➔ %s

  Ejemplo:
  Int x=8;
  Printf(“El numero asignado a x es %i”, x);

  Y en la pantalla mostrará “el numero asignado a x es 8”


  EJERCICIO CLASE 0
  Cree un programa que sume dos variables e imprima el resultado.
  Paso 1: Incluir librerías necesarias
  Paso 2: crea el main
  Paso 3: define dos variables del tipo que necesites con sus respectivos valores (pista: si necesitar sumar números enteros ocupa int, si necesitas sumar números decimales simples ocupa float, y no olvides cerrar la definición de variable con un ;)
  Paso 4: Crea una tercera variable que guarde el resultado de la suma, para esto asignamos el valor cero a esta nueva variable
  Paso 5: Ocupa tu tercera variable y asígnale la suma de tus dos primeras variables (pista: la suma se escribe así: resultado= 3+ 2; )
  Paso 6: ocupa printf para imprimir tu variable (pista: recuerda que para utilizar tu variable debemos colocar %i (según el tipo de tu variable) y luego nombrarla.
  Recuerda cerrar todos los corchetes y colocar los ; donde corresponda`
}

export default clase0;
