const nomeTurista = prompt("Insira seu nome: ")
let cidadesVisitadas = ""
let contagem = 0
let visitouCidade = true
visitouCidade = confirm("Você já visitou alguma cidade?")

while (visitouCidade) {
    if (visitouCidade) {
        let cidadeVisitada = prompt("Insira o nome da cidade que você visitou: ")
        cidadesVisitadas += cidadesVisitadas ? `, ${cidadeVisitada}` : cidadeVisitada
        contagem++ // ao invés de +1
        visitouCidade = confirm("Você já visitou alguma outra cidade?")
    }
}
if (contagem === 0) {
    alert(`${nomeTurista} não visitou nenhuma cidade`)
} else {
    alert(`${nomeTurista} visitou as seguintes cidades: ${cidadesVisitadas} (${contagem})`)
}
