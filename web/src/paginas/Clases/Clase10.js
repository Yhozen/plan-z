const clase10 = {
  title: 'Clase 10: ',
  n: 10,
  tags: ['archivos'],
  brief:`Aprenderás a crear, escribir y leer, dentro de un archivo de texto`,
  text: `ARCHIVOS
Lectura de archivos:
      Abrir archivo: Los archivos pueden ser abiertos para lectura, escritura o insersión. Para ello debemos especificar que queremos hacer.
	w abre un archivo para escritura. Se crea si no existe
        a  abre un archivo para escritura al final del archivo
        r  abre un archivo para lectura(el archivo debe existir
        w+  Crea un archivo para lectura y escritura
       a+  abre/crea un archivo para lectura y escritura al final del archivo
        r+  abre un archivo para lectura y escritura (el archivo debe existir)
Para crear una variable de tipo archivo debemos escribir FILE* (nombrevariable);
Para abrir el archivo ocupamos fopen:
La función fopen tiene dos argumentos. En el primero escribimos el nombre del archivo. En el segundo el tipo de apertura.
archivo = fopen ("ejemplo.txt", "r");
Es importante que después de abrir un archivo siempre debemos cerrarlo con fclose
fclose(archivo);
Leer archivos:
Para leer archivos ocupamos la función fgets, que nos permitirá leer una determinada cantidad de caracteres.
fgets(buffer, caracteres,file)
por ejemplo:
#include<stdio.h>
int main()
{
  FILE *archivo;
  char buffer[100];
  archivo = fopen("ejemplo.txt", "r");
  fgets(buffer, 12, archivo);
  printf("%s",buffer);
  fclose (archivo);
  return 0;
}
La función fscanf es casi lo mismo que scanf excepto que el primer argumento es el puntero del archivo.
fscanf(*file, format, *char)
por ejemplo:
#include<stdio.h>
int main()
{
 FILE *archivo;
 char buffer[100];
 archivo = fopen("ejemplo.txt", "r");
 fscanf(archivo, "%s",buffer);

 printf("%s",buffer);
 fclose (archivo);
 return 0;
}
Tambien tenemos la función feof que devuelve cero(Falso) si NO es encontrado el final del archivo, esta la podemos ocupar para poder leer el archivo completo como muestra el siguiente ejemplo:
#include<stdio.h>
int main()
{
  FILE *archivo;
  char buffer[100];
  archivo = fopen("ejemplo.txt", "r" );
  if (archivo!=NULL)
  {
    while (!feof(archivo))
    {
      fscanf(archivo, "%s",buffer);
      printf("%s",buffer);
    }
    fclose (archivo);
  }
  else
  {
    printf("Error: Archivo no pudo ser abierto");
  }
  return 0;
}
Escritura de Archivos:
Para la escritura de archivos ocupamos la función fprintf que es casi lo mismo que printf excepto que el primer argumento es el puntero de archivo.
fprintf(*FILE, formato, *char)
ejemplo:
#include<stdio.h>
int main()
{
 FILE *archivo;
 char buffer[100]= "chao a todos";
 archivo = fopen("ejemplo.txt", "r+");
 fprintf(archivo,"%s", buffer);

 fclose (archivo);
 return 0;
}`
}
export default clase10;
