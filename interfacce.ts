// TypeScript fa un controllo sulla forma (sul tipo di dato), ma fa anche un controllo di tipo strutturale
// il type syste di typeScript è di tipo strutturale "Structural type system" -> controllo e comparazione avviene anche sulla struttura
// function inviaMessaggio(msg: {email:string, messaggio:string}) {   
    // parametro msg indica che viene accettato un oggetto che ha almeno le proprietà email e messaggio e che sono di tipo stringa
    // mailSender.sendTo(msg.email, msg.messaggio); // supponiamo che esista un oggetto mailSender x inviare un'email 
// }
// var mioMessaggio = {email: "mario.rossi@epicode.it", messaggio: "Buongiorno!"}  // questa chiamata è coretta
// inviaMessaggio(mioMessaggio) 
//var mioMessaggio = {messaggio: "Buongiorno!"}
//inviaMessaggio(mioMessaggio)            // errore non contiene la proprieta email

// -> una volta che viene dichiarata una struttura di dati prevista (in questo caso per i parametri della funzione)
// TypeScript verifica che effettivamente venga passato un oggetto con quella struttura
// -> interfaccia (interface) -> ci permette di definisre la struttura dei dati (in questo caso di un parametro)
interface Messaggio {
    email:string;
    messaggio:string
}
function inviaMessaggio(msg:Messaggio) {
// mailSender.sendTo(msg.email, msg.messaggio)
}
// il costrutto interface -> definisce contemporaneamente la struttura e il tipo di dato
// questa viene comparata da TypeScript nel momento della compilazione
// -> possiamo utilizzare Messaggio (riga 19) come se fosse un tipo di dato predefinito
// -> un tipo di dato predefinito (come Messaggio) è poi riutilizzabile dentro la nostra applicazione
// la struttura dichiarata dell'interfaccia rappresenta gli elementi minimi che un oggetto deve avere:
var mioMessaggio = {
    email: "mario.rossi@epicode.it",
    messaggio: "Buongiorno",
    data: new Date()    // il fatto che data non sia previsto nella definizione dell'interfaccia non pregiudica la compatibilità
};
inviaMessaggio(mioMessaggio);

// possiamo creare delle strutture con elementi opzionali
interface mioMessaggio3 {
    email: string,
    nomeDestinatario?: string, // il punto interrogativo indica che queste proprietà sono opzionali
    oggetto?: string,          // TypeScript accetta il dato se è presente ma non segnala errore se è assente
    messaggio: string
}

var mioMessaggio3 = {
    email: "mario.rossi@epicode.it",
    oggetto: "un saluto",
    messaggio: "Buongiorno",
    data: ""
}
inviaMessaggio(mioMessaggio)

// interfacce non definiscono solo oggetti ma anche altre strutture del linguaggio (ad esempio funzioni)
interface FunzioneSuiNumeri {   // funzione che prende due valori numerici come parametri e restituisce un numero
    (x:number, y:number):number
}

var somma: FunzioneSuiNumeri;
somma = function(a:number, b:number) {  // la dichairazione di tipo in FunzioneSuiNumeri non ci obbliga a usare gli stessi nomi dei parametri
    return a + b;                       // l'unica cosa importante è che i parametri siano corrispondenti
}

// interfacce possono definire anche degli array
interface ArrayDiStringhe {
    [index:number]: string              // indice dell'array è un numero (ma può essere anche una stringa)
}
var x: ArrayDiStringhe = ["uno", "due", "tre"];
/*
interface Dizionario {
    [index:string]: string 
}
var y: Dizionario;
y["chiave1"] = "valore1";
*/