
num1 = parseFloat(prompt("Escriba el primer número: "));
num2 = parseFloat(prompt("Escriba el segundo número: "));
num3 = parseFloat(prompt("Escriba el tercer número: "));

function ordenarNumeros(num1, num2, num3) {
  let numeros = [num1, num2, num3];
  numeros.sort(function (a, b) {
    return b - a;
  });

  if (num1 === num2 && num2 === num3) {
    return "Los números son iguales";
  }

  let mayor = Math.max(...numeros);
  let indiceDelCentro = Math.floor(numeros.length / 2);
  let centro = numeros[indiceDelCentro];
  let menor = Math.min(...numeros);

  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}
console.log(ordenarNumeros(num1, num2, num3));
module.exports = ordenarNumeros;
