/*11) Realiza un script que invierta los datos de un arreglo.*/
let datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let inverso = [];
console.log(`Datos originales: ${datos}`);
for (let i = 0; i < datos.length; i++) {
  inverso[i] = datos[datos.length - 1 - i];
}
console.log(`Datos invertidos: ${inverso}`);
