import { prompt } from "./helper.js";

console.log("ADDITION-MASTER ™️");

// 🦁 Affiche une log en utilisant les template string pour expliquer que l'utilisateur doit choisir entre
// 1. Addition
// 2. Soustraction
console.log(` Choisissez une opération : 
  1. Addition
  2. Soustraction
  3. Multiplication
  4. Division
`);

let operator = 0;
const maxNumber = 100000000000000;

while (operator === 0) {
  // 🦁 Demande avec `await prompt` la réponse de l'utilisateur. (dans une variable `operator`)
  let tempoperator = Number(
    await prompt("Entrer le numéro de l'opérator (1 ,2,3 ou 4):")
  );

  // 🦁 Si la réponse n'est pas égale à 1 ou 2, affiche une log d'erreur et quitte le programme avec `process.exit(1)`
  // 💡 Pour ça, on va utiliser deux conditions dans notre if
  if (
    tempoperator !== 1 &&
    tempoperator !== 2 &&
    tempoperator !== 3 &&
    tempoperator !== 4
  ) {
    console.log("Error: operator must be 1 or 2 or 3 or 4");
  } else {
    operator = tempoperator;
    console.log(`Vous avez choisi l'opération : ${operator}`);

    const firstNumber = Number(await prompt("Enter le premier nombre : "));

    if (Number.isNaN(firstNumber) || Math.abs(firstNumber) > maxNumber) {
      console.log(
        "Error : firstNumber is not a number ou trop grand que 100000000000000 ou plus petit que -100000000000000"
      );
      process.exit(1);
    }

    const secondNumber = Number(await prompt("Enter le second nombre : "));

    if (Number.isNaN(secondNumber) || Math.abs(secondNumber) > maxNumber) {
      console.log(
        "Error : secondNumber is not a number ou trop grand que 100000000000000 ou plus petit que -100000000000000"
      );
      process.exit(1);
    }

    // 📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
    // 💡 if (condition1 && condition2)
    // 💡 On vérifie que la condition1 est vraie mais AUSSI la condition2 !

    // 🦁 Utilise switch pour gérer les différents cas
    // 📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    // 💡 switch (operator) {
    // 💡   case '1':
    // 💡     ...
    // 💡     break;
    // 💡   ...

    let result;
    switch (operator) {
      case 1:
        result = firstNumber + secondNumber;
        break;
      case 2:
        result = firstNumber - secondNumber;
        break;
      case 3:
        result = firstNumber * secondNumber;
        break;
      case 4:
        if (secondNumber === 0) {
          console.log("Error : Division par zéro n'est pas permise");
          process.exit(1);
        } else {
          result = firstNumber / secondNumber;
        }
        break;
      default:
        console.log("Error: opérator inconnu");
        process.exit(1);
    }

    console.log(`Le résultat est : ${result}`);
  }
}
// 💡 }
