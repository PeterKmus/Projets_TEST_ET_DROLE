import readline from "readline";

/**
 * La function prompt permet de récupérer une valeur saisie par l'utilisateur
 * @param {string} question La question à poser à l'utilisateur
 * @returns {Promise<string>} Une promise qui sera résolue avec la valeur saisie par l'utilisateur
 */

export function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
