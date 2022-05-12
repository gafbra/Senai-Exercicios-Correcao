const entrada = require("readline-sync");

//Entrada
let dia = entrada.question("Digite o DIA do evento:" ) // pesquisar para permitir somente dois digitos - NÃO ENCONTREI ATÉ A VERSÃO 1
let mes = entrada.question("Digite o MES do evento:") // pesquisar para permitir somente dois digitos - NÃO ENCONTREI ATÉ A VERSÃO 1
let ano = 2022
let dataEvento = new Date(`${ano}-${mes}-${dia}`)
let listaPart = ["Debora", "Roger", "Jose"]; //criando a lista de participantes
let listaPalestrantes = ["Professor Eduardo"]

if (dataEvento < new Date()) throw new Error('Data invalida!')

// Fazer o laço de repetição

while (listaPart.length <100){
    let nomePart = entrada.question("Digite o Seu Nome: ");
    // Entrada Idade
        let idade = parseInt(entrada.question("Informe a sua Idade: "));

        //Processamento Idade
        if (idade >= 18){
            console.log("Cadastro Permitido!");
            console.log("Continue>> ");

           if (listaPart.length < 100) {
                listaPart.push(nomePart);
                console.log(`Segue lista dos participantes cadastrados: ${listaPart}`);
                console.log(`Total de participantes cadastrados ${listaPart.length}`);
                console.log(`Segue lista dos palestrantes cadastrados: ${listaPalestrantes}`);
                console.log(`Total de palestrantes cadastrados ${listaPalestrantes.length}`);
            } else {
                console.log ("Cadastro Não Permitido, Todas as Vagas Foram preenchidas!");
                console.log("FIM DO PROGRAMA");
            }
                    
        } else {console.log("Cadastro Não Permitido Pela Idade!");
                console.log("FIM O PROGRAMA.");
            }

        }
 console.log("TODAS AS VAGAS FORAM PREENCHIDAS!");
