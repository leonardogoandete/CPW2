let nome = prompt('Digite o nome do aluno:');
let nota1 = parseFloat(prompt('Digite a primeira nota:'));
let nota2 = parseFloat(prompt('Digite a segunda nota:'));
let nota3 = parseFloat(prompt('Digite a terceira nota:'));
//console.log(nota1);
//console.log(nota2);
//console.log(nota3);
let media = parseFloat((nota1 + nota2 + nota3)/3).toFixed(2);

function situacao(media){
	if(media >= 8){
		return "aprovado!";
	}else{
		return "reprovado!";
	}
}

alert("Aluno "+nome+" com media "+media+" esta "+situacao());
