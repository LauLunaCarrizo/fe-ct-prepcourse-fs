/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   if(x == y){
      return ("true");
   }
   else if (x != y){
      return ("false");
   }
   // De lo contrario, retorna false.
   // Tu código:
}

function tienenMismaLongitud(str1, str2) {
   if (str1 == str2){
      return ("true");
   }
   else if (str1 != str2){
      return ("false")
   }

   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
}

function menosQueNoventa(num) {
   if (num<90){

      return("true");
   }
   else if (num>=90) {

      return ("false");
   }
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
}

function mayorQueCincuenta(num) {
   if (num>50){
      return("true");
   }
   else {
      return("false");
   }
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
}

function esPar(num) {
   
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
