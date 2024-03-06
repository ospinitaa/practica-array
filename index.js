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

const array = [5, 4, 3, 2, 1];
const longitud = array.length;
console.log("Longitud del array:", longitud);

let arrayoriginal = [1, 2, 3, 4, 5];
console.log("Array original:", array);

array.push(6);
console.log("Array después de agregar un elemento:", array);

array.push(7, 8, 9);
console.log("Array después de agregar varios elementos:", array);

//Eliminar el último elemento del array usando pop()
let arraypop = [1, 2, 3, 4, 5];
console.log("Array original:", array);

let elementoEliminado = array.pop();
console.log("Elemento eliminado:", elementoEliminado);
console.log("Array después de eliminar el último elemento:", array);

let arrayelementoeli= [1, 2, 3, 4, 5];
console.log("Array original:", array);

array.unshift(0);
console.log("Array después de agregar un elemento al principio:", array);

array.unshift(-2, -1);
console.log("Array después de agregar varios elementos al principio:", array);

// Eliminar el primer elemento del array usando shift() :
let arrayusandoshift = [1, 2, 3, 4, 5];
console.log("Array original:", array);

// Eliminar el primer elemento del array
let elementoEliminadoshift = array.shift();
console.log("Elemento eliminado:", elementoEliminadoshift);
console.log("Array después de eliminar el primer elemento:", arrayusandoshift);

//Obtener una porción del array usando slice() 
let arrayslice = [1, 2, 3, 4, 5];
console.log("Array original:", array);

// Obtener una porción del array desde el índice 1 hasta el índice 3 (sin incluirlo)
let porcion = array.slice(1, 3);
console.log("Porción del array:", porcion);











