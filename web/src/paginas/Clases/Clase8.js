const clase8 = {
  title: 'Clase 8: ',
  n: 8,
  tags: ['punteros', 'swap', 'memoria'],
  brief:`Aquí aprenderás punteros y podrás hacer un swap en la variable original y no en una copia`,
  text: `Punteros
Un puntero es una variable que contiene la dirección de memoria de otra variable.
Los punteros permiten código más compacto y eficiente; utilizándolos en forma
ordenada dan gran flexibilidad a la programación.
La dirección de memoria de una variable se obtiene con el operador unario &.
El operador unario * permite la desreferencia de un variable puntero; es decir, permite
el acceso a lo apuntado por un puntero.
Dado el ejemplo
int x = 1, y = 2;
int *ip; /* ip es un puntero a int */
ip = &x; /* ip apunta a x */
y = *ip; /* a y se le asigna lo apuntado por ip */
*ip = *ip + 3; /* incrementa lo apuntado por ip, x */
ip = NULL; /* ip apunta a direcc. especial (nada) */

Para el cambio de variables ocupamos el swap anteriormente explicado en la clase 5
Pero este solamente genera una copia de la variable pero no cambia la original de valor. Para poder cambiar la original de valor hacemos un swap con punteros, como se muestra a continuación:
#include <stdio.h>
void intercambio(int *a, int *b);
int main(void)
{
  int a=1;
  int b=3;

  printf("Valor de a: %i. Valor de b: %i\\n", a,b);
  intercambio(&a,&b);
  printf("Valor de a: %i. Valor de b: %i\\n", a,b);
  return 0;
}
void intercambio(int *a,int *b)
{
  int aux;

  aux=*b;
  *b =*a;
  *a =aux;
  printf("Dentro de función, a: %i, b:%i\\n", *a,*b);
}

Si a una función se le entregan las direcciones de memoria de las variables (en vez de sus valores), la función puede acceder directamente al original (el contenido de la variable).

EJERCICIO:
Realice un programa que haga un swap con punteros.
`
}

export default clase8;
