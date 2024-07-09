const ler = require ('readline-sync')

let funcionarios  =[];

let check= true;

while (check) {
    let nome  = ler.question("digite seu nome");
    let departamnto  = ler.question("imforme o departamento que trabalha ");
    let cargo = ler.question("digite seu  cargo  :");
    let tempo  = ler.questionFloat("quanto tempo trabalha na empresa ?")


    funcionarios.push({nome: nome,departamnto:departamnto,cargo:cargo,tempo:tempo });

    let x=ler.question("dados cadrastrados deseja cadastra outros funcionarios  ou 'sair' para finalizar ").toLowerCase();

    if (x==='sair') {
        check= false;
        console.log("sistema finalizado")
        
    } else {
        
    }
}
console.log(cliente);
console.log("Imforme umas das opçãoes:");
console.log("1.exibir todos funcionarios registrados ");
console.log("2. lista clientes em ordem alfabetica");
console.log("3. sair");
 let opt = ler.questionInt("=>");

 if (opt == 1) {
    console.table(funcionarios);
    
 } else if(opt==2) {// buscar nome do funcionario  e mostrar detalhes 


 }else{// encerrar programa 
    check= false;
 }

 while (check) {
    console.log("sistema finalizado");
    
 }

