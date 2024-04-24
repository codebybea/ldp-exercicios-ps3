// exercicio 3

const exercicio = require("prompt-sync")({sigint:true});
let usuario;

let dia = 10;
let mes = 1;
let ano = 2003;

let tentativas = 4
usuario = exercicio("Digite um número. Sendo ele um dia, um mês ou um ano. Forma dd/mm/aaaa: ");
usuario = Number(usuario)

    for (i = 0; i < tentativas - 1; i++) {
        
        
        while (usuario !== dia && usuario !== mes && usuario !== ano){
            console.log("Você errou!");  
            usuario = exercicio("Digite um número. Sendo ele um dia, um mês ou um ano. Forma dd/mm/aaaa: ");       
            usuario = Number(usuario)
            break;
        }
    }

    if (usuario == dia || usuario == mes || usuario == ano) {
        console.log("Você acertou! A data era " + dia + "/" + mes + "/" + ano)
    } else {
        console.log("FIM!")
    }
