//Chiedere il numero di km che si vogliono percorrere
var km = prompt('Quanti km devi percorrere?');
//Chiedere l'età al passegero
var eta = prompt('Quanti anni hai?');
//Prezzo di base
var prezzo = ( km * 0.21 );
//Condizione sconto over 65
if ( eta >= 65 ) {
 var prezzo = ( prezzo - ( prezzo  / 100 * 40 ) + " $");
}
//Condizione sconto under 18
if ( eta < 18 ) {
 var prezzo = ( prezzo - ( prezzo  / 100 * 20 ) + " $");
}
//Stampa Prezzo
console.log( prezzo );
document.getElementById('prezzobiglietto').innerHTML = prezzo ;
