alert("Seja bem vindo(a) à nossa calculadora de dano!")

const primeiroPersonagem = prompt("Nome do primeiro personagem:")
const poderAtkPrimeiro = parseFloat(prompt("Insira o poder de ataque do personagem '" + primeiroPersonagem + "':")) // parseFloat nos cálculos
const segundoPersonagem = prompt("Insira o nome do segundo personagem:")
const pontosVida = parseFloat(prompt("Insira os pontos de vida do personagem '" + segundoPersonagem + "':")) // parseFloat nos cálculos
const poderDefSegundo = parseFloat(prompt("Insira os pontos de defesa do personagem '" + segundoPersonagem + "':"))
const possuiEscudo = confirm("O personagem '" + segundoPersonagem + "' possui escudo?")

let danoCausado = null
let morte = false

if (poderAtkPrimeiro > poderDefSegundo && possuiEscudo == false) { // usei o OU e nesse caso era o E 
    danoCausado = poderAtkPrimeiro - poderDefSegundo
} else if (poderAtkPrimeiro > poderDefSegundo && possuiEscudo == true) {
    danoCausado = (poderAtkPrimeiro - poderDefSegundo)/2
} else if (poderAtkPrimeiro <= poderDefSegundo) {
    danoCausado = 0
}

pontosVidaAtualizado = pontosVida - danoCausado

if (pontosVidaAtualizado <= 0) {
    morte = true
}

if (morte === true) {
    alert(
        "Pontos de Vida do " + segundoPersonagem + " antes do confronto: " + pontosVida +
        "\nPontos de Vida do " + segundoPersonagem + ": " + pontosVidaAtualizado + " (O personagem morreu)"
    )
} else if (morte === false) {
    alert(
        "Pontos de Vida do " + segundoPersonagem + ":" + pontosVidaAtualizado
    )
}