// tuple è un nuovo tipo di dato introdotto da TypeScript
// ci permette di definire un array con elementi di tipo diverso
// fissano il numero di elementi che devono avere un certo tipo -> definiscono uno schema preciso dell'array
// ho un array che memorizza il nome e l'età di una persona
var persona = ["Mario Rossi", 25, "Pippo", "Pluto"];
persona[3] = "Roma"; // doppio controllo di TypeScript: 1. tipo di dato 2.struttura
// Tuple dà garanzia (vincola) il tipo di dato e controlla la struttura
/*
var mytuple = [10, "Hello"] // deduce i tipi di dati
// la tupla contiene automaticamente valori di tipo numerico e stringa
console.log(mytuple[0])
console.log(mytuple[1])
*/
// posso operare sulle tuple come opero sugli array
var mytuple = [10, "Hello", "World", "TypeScript"];
console.log("Items before push " + mytuple.length); // restotuisce la lunghezza della tuple
mytuple.push(12);
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " Popped da tuple"); // rimuove l'ultimo
