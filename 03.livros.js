
const ler = require ('readline-sync')

let livros =[];

let check= true;

while (check) {
    let livro  = ler.question("digite  o nome de um livro  :  ").toLowerCase();
    let  categoria  = ler.question("digite a categoria do livro entre a 5 categorias romance,terro,ação,comedia e drama :  ").toLowerCase();

    livros.push({livro: livro,categoria :categoria });
    
let x = ler.question("livro registrado com sucesso digite enter para cadastrata outro livro ou 'sair'  ");
 
if (x==='sair'){
    check = false;
    console.log(" registro salvo com sucesso ");
}

}
console.table(livros);

let alguns_livros = [];
let ro = 0, dra = 0, com = 0, acao = 0, ter = 0;

let qtd_analisar = ler.questionFloat("didgite e quantiade de livros que quer analisar ");
alguns_livros = livros.slice(0, qtd_analisar);

console.table(alguns_livros);

  for (let i = 0; i < alguns_livros.length; i++) {
        

    if (alguns_livros.categoria === 'romance') {
         ro++;
    } else if (alguns_livros.categoria === 'drama') {
        dra++;
        
    } else if (alguns_livros.categoria === 'comedia') {
        com++;

    } else if (alguns_livros.categoria === 'açao') {
        acao++;
    
    } else if (alguns_livros.categoria === 'terror') {
       ter++;
        
        }else{

            console.log("opção invalida");
      }  
    }
// descobrir por que não esta mostrando a quantidade 

    console.log( "a quantidade de livros de romance e :"+ ro);
    console.log( "a quantidade de livros de drama e :"+ dra);
    console.log( "a quantidade de livros de  comedia e :"+ com);
    console.log( "a quantidade de livros de ação e :"+ acao); 
    console.log( "a quantidade de livros de terror e :"+ ter);

console.table(alguns_livros);
 /