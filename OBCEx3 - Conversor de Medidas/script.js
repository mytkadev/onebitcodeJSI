const valorMetros = parseFloat(prompt("Informe um valor em metros: "))
const medidaNova = prompt(
    "Informe qual unidade de medida esse valor deve ser convertido: (A, B, C, D, E ou F) \n" +
    "\nA • milímetro(mm)" + 
    "\nB • centímetro(cm)" + 
    "\nC • decímetro(dm)" + 
    "\nD • decâmetro(dam)" + 
    "\nE • hectômetro(hm)" + 
    "\nF • quilômetro(km)"
 ).toLowerCase() // melhoria: tornar tudo lower ou upper case -> fiz com .toLowerCase mas tinha dado erro -> esqueci de colocar os parenteses ()

 switch (medidaNova) {
    case "a":
        valorConvertido = valorMetros * 1000;
        alert(valorMetros + " metros é igual a " + valorConvertido + " milímetros (mm)");
        break;
    case "b":
        valorConvertido = valorMetros * 100;
        alert(valorMetros + " metros é igual a " + valorConvertido + " centímetros (cm)");
        break;
    case "c":
        valorConvertido = valorMetros * 10;
        alert(valorMetros + " metros é igual a " + valorConvertido + " decímetros (dm)");
        break;
    case "d":
        valorConvertido = valorMetros / 10;
        alert(valorMetros + " metros é igual a " + valorConvertido + " decâmetros (dam)");
        break;
    case "e":
        valorConvertido = valorMetros / 100;
        alert(valorMetros + " metros é igual a " + valorConvertido + " hectômetros (hm)");
        break;
    case "f":
        valorConvertido = valorMetros / 1000;
        alert(valorMetros + " metros é igual a " + valorConvertido + " quilômetros (km)");
        break;
    default:
        alert("escolha uma letra válida")
 }