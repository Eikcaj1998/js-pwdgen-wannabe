console.log('JS OK')
const UserName = prompt ('Inserisci il tuo nome','Nome');
console.log (UserName);
const UserLastName = prompt('Inserisci il tuo cognome','Cognome');
console.log (UserLastName);
const UserFavColor = prompt ('Inserisci il tuo colore preferito','Colorepreferito');
console.log (UserFavColor);
const UserNumber = "21";
const NewPassword = `La tua nuova password è  <b> ${UserName}${UserLastName}${UserFavColor}${UserNumber}</b>`;
document.getElementById ('New-Password').innerHTML =NewPassword;
console.log(NewPassword);