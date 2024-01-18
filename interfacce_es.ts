// interfaccia è un contratto sintattico che stabilisce la sintassi a cui deve aderire un'entità
// interfaccia definisco proprietà e metodi che sono contenuti
// sarà nelle classi derivate (ad esempio) che andremo a definire i membri contenuti
interface IPerson {
    firstname:string,
    lastname:string,
    sayHi:()=>string
}
var customer:IPerson = {    // l'oggetto è tipo IPerson quindi vicola l'oggetto nelle sue proprietà (forma + struttura)
    firstname:"Federico",
    lastname:"De Ambrosis",
    sayHi:():string=>{return "Ciao"}
}

// tipo unione -> descrive un valore che può essere di diversi tipi
// lo usiamo quando un valore non è sotto il nostro controllo (può essere string o number)
// non uso any per limitare i tipi di dati possibili
let multiType: number | boolean;
multiType = 20; // valido
multiType = true // valido
//multiType = "Fede"  // non valido

// ho dei valori che possono essere numeri o stringhe -> se sono entrambe numeri somma | se entrambe stringhe concatena
function add(x:number | string, y:number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    } 
    throw new Error ('I paramentri devono essere numeri o stringhe')
}
console.log(add('one','two'));  // returns "onetwo"
console.log(add(1,2));          // returns 3
//console.log(add(1,'two'));      // errore

// duck-typing -> due oggetti sono considerati dello stesso tipo se condivididono lo stesso insieme di proprietà
// duck-typing -> verifica la presenza delle proprietà e dei metodi negli oggetti
interface IPoint {
    x:number
    y:number
}
function addPoints(p1:IPoint,p2:IPoint):IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x, y:y}
}
var newPoint = addPoints({x:3,y:4},{x:5,y:1}) // valido
// var newPoint2 = addPoints({x:3},{x:5,y:1})    // non valida