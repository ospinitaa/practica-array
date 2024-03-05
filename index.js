// inicializamos el proyecto para despues vincularlo con gitHub
let arrayVacio = [];
let miArray = ["elemento1", "elemento2", "elemento3"];
console.log(miArray);

// elementos de diferentes tipos de datos
let arrayDiverso = ["texto", 123, true, { nombre: "Juan", edad: 30 }, ["mora", "fresa", "naranja"]];
console.log(arrayDiverso);

// utilizando el constructor Array()array con una secuencia numérica usando el método Array.from()
let secuenciaNumerica = Array.from({ length: 10 }, (_, index) => index);
console.log(secuenciaNumerica);

//Crear un array utilizando el constructor Array()
let miArray2 = new Array("elemento1", "elemento2", "elemento3");
console.log(miArray);