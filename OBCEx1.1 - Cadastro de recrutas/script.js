const confirmacao = window.confirm("Iremos fazer algumas perguntas para que seus dados sejam propriamente armazenados, ok?")

if (confirmacao == true) {
    // usei o let pra todas as funções mas na aula corrigida, o professor usou o const, o que faz sentido porque não vou alterá-las no decorrer do código. 
    const primeiroNome = window.prompt("Insira seu nome:") 
    const sobreNome = window.prompt("Insira seu sobrenome:")
    const campoEstudo = window.prompt("Insira seu campo de estudo:")
    const anoNascimento = window.prompt("Insira o ano do seu nascimento:")

    const idade = 2024 - anoNascimento 

    // usei o console.log mas ele usou o alert pra aparecer pro usuário. faz mais sentido.
    alert(primeiroNome + " " + sobreNome + " estuda " + campoEstudo + " e tem " + idade + " anos")
} else {
    alert("Obrigada por usar nossa aplicação!")
}
