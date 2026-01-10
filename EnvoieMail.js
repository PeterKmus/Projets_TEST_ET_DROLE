// 🦁 trouve un moyen pour remplacer prompt
import { prompt } from "./helper.js";

console.log("NODE-MAILER ™️");

// 🦁 Récupère le mail, l'objet et le message

const mail = await prompt(" Entrez le mail du destinateur : ");
const objetMessage = await prompt(" Entrez l'objet de votre mail : ");
const message = await prompt(" Entrez votr message : ");

// 🦁 Affiche un log

const testmail = mail.length;
const validMail = mail.includes("@") && mail.includes(".") && testmail > 5;
const testMessage = message.length;

if (testMessage > 0 && validMail) {
  console.log(` Envoie du mail .....
    Destinataire : ${mail}
    Objet : ${objetMessage}
    Message : ${message}`);
} else {
  console.log(
    "Erreur : Veuillez vérifier l'adresse mail ou entrez un message supérieur à 0 caractère"
  );
  process.exit(1);
}
// - Indiquant que le mail est en train d'être envoyé
// - Le mail du destinataire
// - L'objet du mail
// - Le message du mail
