import { prompt } from "./helper.js";

console.log("ADDITION-MASTER ™️");

const firstNumber = Number(await prompt("Entrez le premier nombre : "));
const secondNumber = Number(await prompt("Entrez le deuxième nombre : "));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Erreur : Veuillez entrer des nombres valides.");
  process.exit(1);
} else {
  const sum = firstNumber + secondNumber;
  console.log(
    `Le résultat de l'addition de ${firstNumber} et ${secondNumber} est : ${sum}`
  );
}
