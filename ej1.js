//Realiza un script que le pida al usuario una serie de números cualquiera y que solo dejaremos
//de hacerlo cuando el usuario ingrese un número igual a cero.
function ej1() {
  const prompt = require(`prompt-sync`)();
  let usuario;
  do {
    usuario = Number(prompt("ingrese un numero: "));
  } while (usuario !== 0);
  console.log("usted ingreso un cero. boludin.");
}

/*2) Realiza un script que pida al usuario cadenas de texto (strings) hasta que escriba “cancelar”. Al 
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión - */
function ej2() {
  const prompt = require("prompt-sync")();
  let usuario = "";
  let almacena = "";
  do {
    usuario = prompt("ingrese una palabra: ");
    if (usuario !== "cancelar") {
      almacena = almacena + usuario + " - ";
    }
  } while (usuario !== "cancelar");
  console.log(almacena);
}

/*3) Realiza un script que muestre por pantalla los valores pares que se encuentran entre los 
números 500 y 1000*/
function ej3() {

  for (let i = 200; i <= 850; i = i + 2) {
    console.log(i);
  }
}
/*4) Realiza un script que solicite un numero al usuario y muestre por pantalla una cuenta regresiva 
desde el numero ingresado hasta el valor 0.*/
function ej4() {
  const prompt = require("prompt-sync")();
  let usuario = Number(prompt(" ingrese un numera un numero che "));

  for (let i = usuario; i >= 0; i--) {
    console.log(i);
  }
}
