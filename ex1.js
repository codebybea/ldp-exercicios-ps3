// exercicio 1

const receber = require("prompt-sync")({ sigint: true });
const letra = receber("Digite um caractere: ");
const vogalMinuscula = /[aeiou]/; 

if (vogalMinuscula.test(letra)) {
  console.log(letra + " eh uma vogal.");
} else {
  console.log(letra + " não eh uma vogal é uma consoante");
}

