// I tipi letterali -> con i tipi letterali possiamo definire un set customizzato di valori possibili
// non solo string, number, boolean ma possiamo specificare dei valori esatti che le nostre stringhe e numeri possono avere
// lo uso quando voglio riddure i casi potenziali possibili
type testResult = "passato" | "fallito" | "incompleto"
let myResult: testResult;   // i valori possibili sono solo quelli che ho elencato
myResult = "incompleto"     // ok
myResult = "passato"        // ok
// myResult = "geniale"     // invalida

type dado = 1 | 2 | 3 | 4 | 5 | 6
let tirodado: dado;
tirodado = 1; // valido
tirodado = 6; // valido
// tirodado = 7; // non valido