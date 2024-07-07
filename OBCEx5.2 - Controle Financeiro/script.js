alert("Atividade de Controle Financeiro")

const dinheiroInicial = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível?"))
let respostaMenu = prompt("Seu valor atual é de: " + dinheiroInicial + "\n\n Escolha uma opção do menu: \n 1 - Adicionar \n 2 - Remover \n 3 - Sair")
let valorFinal = dinheiroInicial
do {
    if (respostaMenu == 1) {
        let valorSomado = parseFloat(prompt("Insira o valor a ser somado: "))
        valorFinal += valorSomado
    } else if (respostaMenu == 2) {
        let valorSubtraido = parseFloat(prompt("Insira o valor a ser subtraido: "))
        valorFinal -= valorSubtraido
    }  
    respostaMenu = prompt("Seu valor atual é de: " + valorFinal + "\n\n Escolha uma opção do menu: \n 1 - Adicionar \n 2 - Remover \n 3 - Sair")
} while (respostaMenu != 3)

alert("Obrigada por usar nossa ferramenta")

