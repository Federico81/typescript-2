// i generics sono modelli di codice riutilizzabili
// forniscono un modo per indicare alle funzioni, alle classi, alle interfacce il tipo che si vuole usare al momento della chiamata
// assomiglia al paramentro di una funzione con la differenza che abbiamo anche il tipo di dato da aspetarsi
// i generics funzionano con ampie gamme di dati, i dati vengono usati in più punti
// + consentono il riutilizzo del codice + riducono l'utilizzo di any + offrono maggiore flessibilità quando usiamo i tipi
/*
function getArray(items : any[]): any {
    return new Array().concat(items);   // una funzione che genera un array di tipo:any
}
*/
/*
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Html', 'Css', 'Javascript']);
numberArray.push(25);               // ok
stringArray.push("TypeScript")      // ok
numberArray.push("Non un numero")   // ok
stringArray.push(30)                // ok
*/
// se voglio stabilire il tipo di dati che l'array contiene -> uso i generics
function getArray<T>(items: T[]) :T[]{
    return new Array<T>().concat(items);
}
// i generics definiscono una variabile di tipo (possono definire anche più di una variabile di tipo)
// questa variabile passa tra le parentesi < > ; T è prassi ma possiamo chiamarlo come vogliamo
// una volta specificata la variabile di tipo poi la possiamo usare al posto del tipo nei parametri
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);               // ok
//numberArray.push("Non un numero") // no
let stringArray = getArray<string>(['Html', 'Css', 'Javascript']);
stringArray.push("TypeScript")      // ok
// stringArray.push(30)             // no
// il parametro che passiamo non è un dato ma è un tipo di dato
// se omettiamo il tipo di dato lo deduce (ma attenzione! deduce solo tipi di dati semplici) 