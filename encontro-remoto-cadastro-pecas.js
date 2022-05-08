const entrada = require("readline-sync");

let listaPecas = parseInt(entrada.question("Informe a quantidade de pecas cadastradas no sistema: "));
if (listaPecas < 10) {
    console.log("Você tem espaco suficiente para castrar!");
    console.log("Continue>> ");

    let pesoPecas = parseInt(entrada.question("Informe o peso da peça em gramas: "));

    if (pesoPecas >= 100){
        console.log("A peça tem peso suficiente para cadastrar!");
        console.log("Continue>> ");

        let nomePecas = entrada.question("Digite o nome da peça: ");

        if (nomePecas.length >3) {
            console.log("A peca foi cadastrada com sucesso!")
            console.log("FIM DO PROGRAMA")

        } else {console.log("O nome digitado é muito curto, peça NÃO cadastrada")
                console.log("FIM DO PROGRAMA");
            }

    }else {console.log("A peça não possui peso suficiente para cadastrar!");
            console.log("FIM O PROGRAMA.");
        }

} else {console.log("A peça não pode ser cadastrada! Você não possui espaço sucifiente")
        console.log("FIM DO PROGRAMA");
    }


