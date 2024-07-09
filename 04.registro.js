
const ler = require ('readline-sync')

let participantes=["ana","breatriz","joaquim","maycon","gabriel","danilo","miguel","caio","gabriela","mateus","jonas"];
let part_removidos = [];

do {
    
let nome = ler.question("digite um nome: ").toLowerCase();
let x = participantes.indexOf(nome);
part_removidos = participantes.splice(x,1);


if (x >= 0) {

    console.log("o nome " + nome + " foi cadastrado com sucesso!");
}else{

    console.log("Nome não encontrado");

}
console.table(participantes);

} while (participantes.length !== 0);

console.table(part_removidos);
console.log(participantes);
console.log("todos os nomes foram cadatrados");