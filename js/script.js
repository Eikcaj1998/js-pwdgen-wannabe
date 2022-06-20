console.log('JS OK')
// 1- recupero il nome utente
// 1- recupero il cognome utente
// 1- recupero il colore preferito utente
// 4- aggiungo un numero
// 5-inserisco il risultato nell'elemento che ottengongo tramite la somma di piu parti

//nome utente
const UserName = prompt ('Inserisci il tuo nome','Nome');
console.log (UserName);
//cognome utente
const UserLastName = prompt('Inserisci il tuo cognome','Cognome');
console.log (UserLastName);
//colore preferito
const UserFavColor = prompt ('Inserisci il tuo colore preferito','Colorepreferito');
console.log (UserFavColor);
//numer
const UserNumber = "21";
//nuova password generata
const NewPassword = `La tua nuova password è  <b> ${UserName}${UserLastName}${UserFavColor}${UserNumber}</b>`;
document.getElementById ('New-Password').innerHTML =NewPassword;
console.log(NewPassword);
