let primeiroValor = parseFloat(prompt("Insira o primeiro valor:")) // Aqui eu poderia usar um const por conta da estrutura do código, mas como mais pra frente eu poderia fazer isso em loop, 
let segundoValor = parseFloat(prompt("Insira o segundo valor:")) // o mais indicado seria manter com o let, já que essa variável vai mudar com o loop.

//primeiroValor = parseFloat(primeiroValor) //tinha deixado parseInt(primeiroValor) mas parseFloat faz mais sentido
//segundoValor = parseFloat(segundoValor) //tinha deixado parseInt(primeiroValor) mas parseFloat faz mais sentido

const soma = primeiroValor + segundoValor
const subtracao = primeiroValor - segundoValor
const multiplicacao = primeiroValor * segundoValor
const divisao = primeiroValor / segundoValor

// Preciso lidar com os possíveis erros de divisão por zero, por exemplo

// Como faço com que os valores de prompt sejam analisados como int e não string? -> Utilizando parseInt

alert("Os resultados são: Soma = " + soma + "; subtração = " + subtracao + "; multiplicação = " + multiplicacao + " e divisão = " + divisao)