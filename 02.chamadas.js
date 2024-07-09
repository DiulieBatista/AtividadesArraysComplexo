
const ler = require ('readline-sync')


let pacientes=[], chamadas =[], prioridade =[];
let normal=[];
let check = true;
do {

console.log("--------------------------------------------------------------");
console.log( "canal de antendimento de  emergencia digite uma opçaõ para ser tranferido para o setor responsavel ");
console.log("1.bombeiro ")
console.log("2.emergencia medica")
console.log("3.emergecia policial");
let opt = ler.questionInt("=>");


switch (opt) {
    case 1:
        console.log("Chamada para Incêndio selecionada. Favor fornecer os detalhes:");
        let detalhesIncendio = ler.question("Detalhes da ocorrência de Incêndio: ");
        pacientes.push({ tipo: "incendio", detalhes: detalhesIncendio });
        console.log("Chamada registrada com sucesso.");
        break;

    case 2:
        console.log("Chamada para Emergência Médica selecionada. Favor fornecer os detalhes:");
        let detalhesEmergenciaMedica = ler.question("Detalhes da emergência médica: ");
        pacientes.push({ tipo: "Emergência Médica", detalhes: detalhesEmergenciaMedica });
        console.log("Chamada registrada com sucesso.");
        break;

    case 3:
        console.log("Chamada para Urgência Policial selecionada. Favor fornecer os detalhes:");
        let detalhesUrgenciaPolicial = ler.question("Detalhes da urgência policial: ");
        pacientes.push({ tipo: "Urgência Policial", detalhes: detalhesUrgenciaPolicial });
        console.log("Chamada registrada com sucesso.");
        break;

    default:
        console.log("Opção inválida.");
        break;
}

let x = ler.question("chamadas registradas com sucesso digite  'sair' para a sua ligação ser passada para a autoridade selecionada ");
 
if (x==='sair'){
    check = false;
    console.log("atedimento finalizado ");
}

} while(check ); 
    
for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].tipo === "incendio") {
        prioridade.push(pacientes[i]);
    } else {
        normal.push(pacientes[i]);
    }
}

console.log("Chamadas prioritárias encaminhadas ao Corpo de Bombeiros:");
console.table(prioridade);
console.log("---------------------------------------------------------");
console.log("Outras chamadas:");
console.table(normal);
