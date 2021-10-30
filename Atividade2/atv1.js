let saida = "";

while(true){
    let entrada = prompt('Utilize <fim> ou <sair> para encerrar a leitura!\nDigite o nome:');
    if(entrada == "fim" || entrada == "sair"){
        break;
    }
    entrada +=  "    ";
    entrada +=  saida;
    saida    =  entrada;
}
alert(saida);
