// un interfaccia è un modo di definire tipi personalizzati in TypeScript
// anche per le classi possiamo definire delle interfacce
// interfaccia è un vincolo rispetto a un contratto -> definisce i membri (coppie chiave/valore) che una classe deve avere
// gli oggetti che interagiscono con le istanze dichiarata sanno quali proprietà e quali metodi devono avere

interface IPersona {    // stabilisco che una classe che voglia aderire a questo contratto deve avere queste proprietà e metodi
    nome: string;
    cognome: string;
    visualizzaNomeCognome(): string;
}
/////// esempio di implementazione dell'interfaccia IPersona
class Persona implements IPersona { // la classe Persona dichiara di implementare l'interfaccia IPersona tramite la parola chiave implements
    nome: string;
    cognome: string;
    constructor (nome:string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
    }
    visualizzaNomeCognome(): string {
        return this.nome + " " + this.cognome;
    }
}
enum Materie {Html, Css, Javascript, TypeScript};
/*
class Studente implements IPersona {
    nome: string;
    cognome: string;
    materie: Materie[];             // implemento una proprietà non prevista nell'interfaccia 
                                    // non ho problemi perché l'interfaccia definisce i membri minimi
    constructor (nome:string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
}
visualizzaNomeCognome(): string {
    return this.nome + " " + this.cognome;
    }
}
*/

// è anche possibile per una classe avere più interfacce
interface IStudio {
    materie: Materie [];
}
/*
class Studente implements IPersona, IStudio {
    nome: string;
    cognome: string;
    materie: Materie[];
    constructor (nome:string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
}
    visualizzaNomeCognome(): string {
    return this.nome + " " + this.cognome;
    }
}
*/
// TypeScript prevede l'estendibilità delle interfacce -> definisco un'interfaccia ereditando le caratteristiche da un'altra
// IStudente a partire da IPersona
interface IStudente extends IPersona {
    materie: Materie[];
}
class Studente implements IStudente {
    nome: string;
    cognome: string;
    materie: Materie[];
    constructor (nome:string, cognome: string) { // constructor è una funzione di dichiarazione che permette di genereare oggetti con caratteristiche simili
        this.nome = nome;
        this.cognome = cognome;
        this.materie = [];
}
    visualizzaNomeCognome(): string {
    return this.nome + " " + this.cognome;
    }
}