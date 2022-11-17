//var tempoPipoca = 10;
//var tempoMacarrao = 8;
//var tempoCarne = 15;
//var tempoFeijao = 12;
//var tempoBrigadeiro = 8;
//var tempo = 1;
let readlineSync = require('readline-sync');

//Questionario
console.log(`
Seja bem-vindo ao meu SUPER MICROONDAS QUEBRADO

Escolhe alguma coisa ai meu: 

1 - AQUELA PIPOQUINHA QUEIMADA :P
2 - AQUELE MACARRÃO SEM GOSTO
3 - AQUELA CARNE BORACHA
4 - AQUELE FEIJÃO SEM TEMPEIRO 
5 - AQUELE BRIGADEIRO QUEIMADO <3
`);
let opcao = readlineSync.question('Escolha o tipo de Prato: ');
let tempo = readlineSync.question('Escolha o tempo: ');
console.log("-------------------------------")
console.log("Você escolheu o prato: " + opcao);
console.log("Você colocou: " + tempo + " Segundos");
console.log("-------------------------------")

//todas as funções dos pedidos
function rodarPipoca(tempo){
    if (tempo > 3 * 10){
        console.log("LIGA PRO BOMBEIRO EXPLODIU TUDO")
    } else if (tempo > 2 * 10){
        console.log("POXA CARA DEIXOU A COMIDA QUEIMAR")
    } else {
        console.log("Ta pronto chefia PI PI PI")
    }
};

function tempoMacarrao(tempo){
    if (tempo > 3 * 8){
        console.log("LIGA PRO BOMBEIRO EXPLODIU TUDO")
    } else if (tempo > 2 * 8){
        console.log("POXA CARA DEIXOU A COMIDA QUEIMAR")
    } else {
        console.log("Ta pronto chefia PI PI PI")
    }
};

function tempoCarne(tempo){
    if (tempo > 3 * 15){
        console.log("LIGA PRO BOMBEIRO EXPLODIU TUDO")
    } else if (tempo > 2 * 15){
        console.log("POXA CARA DEIXOU A COMIDA QUEIMAR")
    } else {
        console.log("Ta pronto chefia PI PI PI")
    }
};

function tempoFeijao(tempo){
    if (tempo > 3 * 12){
        console.log("LIGA PRO BOMBEIRO EXPLODIU TUDO")
    } else if (tempo > 2 * 15){
        console.log("POXA CARA DEIXOU A COMIDA QUEIMAR")
    } else {
        console.log("Ta pronto chefia PI PI PI")
    }
};

function tempoBrigadeiro(tempo){
    if (tempo > 3 * 8){
        console.log("LIGA PRO BOMBEIRO EXPLODIU TUDO")
    } else if (tempo > 2 * 8){
        console.log("POXA CARA DEIXOU A COMIDA QUEIMAR")
    } else {
        console.log("Ta pronto chefia PI PI PI")
    }
};

// Puxador de funções kkkkk
switch(opcao) {
    case '1':
        console.log("Você selecionou aquela pipoquinha")
        rodarPipoca(tempo)
      break;
    case '2':
        tempoMacarrao(tempo)
      break;
    case '3':
        tempoCarne(tempo)
      break;
    case '4':
        tempoFeijao(tempo)
      break;
    case '5':
        tempoBrigadeiro(tempo)
      break;
    default:
      console.log("Chefia a opção que você escolheu não existe, entre em contato com o TI para adicionar mais pedidos");
  }