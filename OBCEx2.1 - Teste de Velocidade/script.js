alert("Bem vindo ao teste de velocidade!")

const nomePrimeiroVeiculo = prompt("Insira o nome do primeiro veículo:") // Mesma coisa que o último código: se fosse executar em loop, seria melhor usar let
const velPrimeiroVeiculo = parseFloat(prompt("Insira a velocidade do primeiro veículo:"))
const nomeSegundoVeiculo = prompt("Insira o nome do segundo veículo:")
const velSegundoVeiculo = parseFloat(prompt("Insira a velocidade do segundo veículo:"))

if (velPrimeiroVeiculo > velSegundoVeiculo) {
    alert(nomePrimeiroVeiculo + " é mais rápido que " + nomeSegundoVeiculo)
} else if (velSegundoVeiculo > velPrimeiroVeiculo) {
    alert(nomeSegundoVeiculo + " é mais rápido que " + nomePrimeiroVeiculo)
} else if (velPrimeiroVeiculo === velSegundoVeiculo) {
    alert(nomePrimeiroVeiculo + " e " + nomeSegundoVeiculo + " possuem a mesma velocidade.")
} else {
    alert("houve algum erro com seu cálculo")
}