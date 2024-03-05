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

//Crear un array mediante la repetición de un valor utilizando el método array fill 
let repetidoArray = new Array(5).fill("repetido");
console.log(repetidoArray);

//Crear un array a partir de una cadena de texto usando el método String.split() :
let cadena = "Hola, cómo, estás , pipe";
let arrayDesdeCadena = cadena.split(", ");
console.log(arrayDesdeCadena);

//Crear un array combinando dos arrays existentes utilizando el operador spread ( ... ):
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado);

//Crear un array con valores únicos utilizando el método Set() y el operador spread ( ... ):
let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
let arrayUnico = [...new Set(arrayConDuplicados)];
console.log(arrayUnico);

//Crear un array con una función que genere valores dinámicamente:
function generarValores(cantidad) {
    let array = [];
    for (let i = 1; i <= cantidad; i++) {
        array.push(i);
    }
    return array;
}
let arrayGenerado = generarValores(5);
console.log(arrayGenerado);






