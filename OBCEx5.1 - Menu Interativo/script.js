alert("Atividade do Menu Interativo")
let usersChoice = null // o professor deixou como ""

do {
    usersChoice = prompt("Escolha entre 1, 2, 3, 4 ou 5: \n - 1) Opção1 \n - 2) Opção2 \n - 3) Opção3 \n - 4) Opção4 \n - 5) Encerrar \n") // O uso do switch aqui faria bem mais sentido 
    if (usersChoice != 5) {
        alert(usersChoice)
    } 
} while (usersChoice != 5) {
	alert("Encerrando!")
}