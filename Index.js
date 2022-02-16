let listaDeParticipantes = ["Helena", "Chico", "Mário", "José", "Maria" ]
let quantidadeDeParticipantes = listaDeParticipantes.length;
if (quantidadeDeParticipantes <= 5) {
    listaDeParticipantes.push("João");
    console.log(listaDeParticipantes);
} else {
    console.log("Não é possivel inserir mais participantes no evento")
}

let dataAtual = new Date();
let dia = dataAtual.getDate();
let mes = (dataAtual.getMonth()+1);
let ano = dataAtual.getFullYear();
let Hoje = (dia + "/" + mes + "/" + ano);
let DiadoEvento = 17
if (DiadoEvento <= dia) {
    console.log ("Data inválida")
} else {
    console.log ("Data permitida" )
}

let qualsuaidade = 15
if (qualsuaidade >= 18){
    console.log ("Cadastro Permitido")
 }else {
     console.log("Cadastro premitido para maiores de 18anos")
 }

