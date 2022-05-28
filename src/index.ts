/*Ejercicio: Divisores

• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior*/

let numero: number = Number(prompt("Ingrese un numero"));
let indice: number;
let cantidad: number = 0;
let calcularDivisores = (
  numero1: number,
  cantidadDivisores: number,
  i: number
): number => {
  for (i = 0; i <= numero1; i++) {
    if (numero1 % i == 0) {
      cantidadDivisores++;
    }
  }

  return cantidadDivisores;
};
console.log(
  "La cantidad de divisores es " + calcularDivisores(numero, cantidad, indice)
);
