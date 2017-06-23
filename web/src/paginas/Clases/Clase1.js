const clase1 = {
  title: 'Clase 1: ',
  n: 1,
  tags: ['scanf', 'condicionales', 'signos', 'if', 'for', 'iteraciones', 'ciclo'],
  brief: `Aquí aprenderás a crear ciclos de iteraciones, los usos de condicionales, entre otras cosas. lo que será muy útil para tus siguientes programas`,
  text: `SCANF
La función scanf() se utiliza principalmente para pedir información al usuario.
Por ejemplo:
#include <stdio.h>
int main(){
  char nombre[12];  
  printf("Introduce tu nombre: ");
  scanf("%s",nombre);  
  printf("Hola, %s :)\\n", nombre);
  return 0; 
}
Donde la pedimos la información al usuario, especificando el tipo de variable que entrara y su nombre
Scanf(“%s(tipo de variable)”, nombre de la variable);

Signos (< != || && \\\\ , %)

Para asignar un valor se utiliza =, para preguntar si un numero es igual a otro se utiliza ==, y para negar se utiliza !.
   Ejemplo de la negación:

  If( x != 3) {
    Código
}

Aquí estamos diciendo que “Si x es distinto de 3 realiza el código”.

Para comparar si es mayor, menor o igual se utiliza >, < y ==, respectivamente.


Para escribir “ y ” , se utiliza &&, por ejemplo:
           If (x ==3 && z ==4){
              Código
                       }
  En el ejemplo estamos diciendo “ Si x es tres Y z es 4, realiza el código”.


Para escribir “ o “, se utiliza || , por ejemplo:
If (x ==3 || z ==4){
Código
}
En el ejemplo estamos diciendo “Si x es 3 o z es 4, ejecuta el codigo

Condicionales
If ➔ Ocupamos esta iteración para ejecutar una acción solamente si se cumple una condición
Por ejemplo, Si x es menor que 7 , imprime en la pantalla “ soy menor a 7”
If(x<7){
Printf(“soy menor a 7”);
}
También podemos ocuparla , para que si se cumple la condición se ejecute una acción y si no, otra. Para esto ocuparemos else.
If(x<7){
Printf(“soy menor a 7”);
}else {
Printf(“soy igual o mayor a 7”);
}

Además también podemos ocupar else if

La condición “ else if ”, la usamos cuando hay mas de una condición, la primera se escribe con un “if”, las demás con “else if”, y lo restante queda dentro del código del “else” .

-Ejemplo :

  if(x>y) {
    printf(“el numero X es mayor que Y”); }

 else if(x<y){
   printf(“El numero X es menor que Y”); }

else {
   printf (“X e Y son iguales”); }



Estructuras iterativas/loop
for ➔ Ocupamos esta iteración para ejecutar una acción la cantidad de veces que necesitemos
y se expresa como
for (inicialización; condición de termino; actualización)
Por ejemplo si queremos que una acción se repita 10 veces.
For (int i=0; i<10; i++){
Acción ( puede ser un printf, o una suma, etc.)
}
Aquí el “i”, actuara como contador, es decir partirá en cero y cada vez que se ejecute la acción se le sumará 1 a i (i++) y volverá a ejecutarla hasta que se cumpla la condición (i<10), entonces cada vez que se cumpla la condición (TRUE) ejecutara el código de la acción, por el contrario si la condición no se cumple (FALSE), no se ejecuta el código.

EJERCICIO:
Cree variables de dos nombres de personas,
luego cree la edad de cada uno.
Cree un ciclo for que muestre al usuario la edad que tendra cada cierta cantidad de años(Por ejemplo cada 6 años) y ademas mostrando el año en el que tendra esos años, hasta los 100 años.
Ademas cree un if , para que si su edad es menor a 18 años, diga "no preocupes por la edad aún."
`
}

export default clase1;
