// uso più variabili di tipo 
// se faccio una funzione che accetta due parametri possso usare due generics per assegnare tipi diversi a ogni parametro (e al tipo restituito)
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}
let returnNumber = identity<number, string>(100, 'Ciao');
let returnString = identity<string, string>('100', 'Ciao');
let returnBoolean = identity<boolean, string>(true, 'Ciao');

returnNumber = returnNumber * 100; // ok
// returnString = returnString * 100; // errore
// returnBoolean = returnBoolean * 100; // errore