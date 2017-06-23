const clase9 = {
  title: 'Clase 9: ',
  n: 9,
  tags: ['estructuras'],
  brief:`Aqui aprenderás a usar un conjunto de datos en forma de estructura`,
  text: `ESTRUCTURAS
Struct  Una estructura de datos es una forma de organizar un conjunto de datos elementales con el objeto de facilitar su manipulación.
La estructura de datos define la organización e interrelación de éstos y un conjunto de operaciones que se pueden realizar sobre ellos
Las estructuras es la agrupación de elementos de distintos tipos de datos:
Struct nombre_estructura {
        Tipo_1    nombre_tipo_1;
        Tipo_2    nombre_tipo_1;
        …
        Tipo_n    nombre_tipo_n;
};
Ejemplo:
Struct cuenta_banco{
String nombre;
Long float saldo;
Long int cuenta;
String RUT;
};
Para almacenar datos en la variable se debe escribir:
<variable>.<nombre_campo>
por ejemplo cta1.
Struct cuenta_banco Cta1;
scanf("%s", Cta1.nombre);  
Cta2.saldo = 4300;
scanf("%i", Cta1.cuenta);  
scanf("%s",Cta1.Rut);  
Tambien puedes ocupar un arreglo para hacer varias variables e ir rellenándola
Por ejemplo:
int main()
{
    int i;
    struct ficha cliente[10];
    for (i=0;i<10;i++){
       printf("Ingrese nombre: ");
       scanf("%s", cliente[i].nombre);  

    }
    return 0;
}
Además también se pueden agregar estructuras dentro de otras estructuras, como muestra el siguiente ejemplo:
#include <stdio.h>
#include <cs50.h>
struct ficha{
	string nombre;
	int   sexo;
	string RUT;
	int   edad;
};
struct familia{
	struct ficha padre;
 	struct ficha madre;
   	struct ficha hijo[4];
};
int main()
{
  struct familia fm1;

  printf("Ingrese nombre hijo 1: ");
  scanf("%s", fm1.hijo[0].nombre);
  return 0; 
}

Ejercicio
Realice un programa que almacene los datos personales de una persona: Nombre, apellido, RUT, teléfono, edad, y luego imprima los datos ingresados
Implemente un programa que almacene los datos de 3 personas: nombre, día de nacimiento, mes de nacimiento, y año de nacimiento (que se deben almacenar en una tabla de structs). Después deberá repetir lo siguiente: Elegir un numero de mes y mostrar en pantalla los datos de las personas que cumplan los años durante ese mes.
`
}

export default clase9;
