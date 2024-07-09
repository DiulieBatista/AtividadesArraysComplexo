// organização de inventário  de produtos 
const ler =require('readline-sync')


let produtos =[

    {produto:"Arroz", quantidade:46 },
    {produto:"feijao", quantidade:24 }, 
    {produto:"oleo", quantidade :19 },
    {produto:"cafe", quantidade:21 }

];

console.table(produtos);

let produto =[{}];

let check= true;

while (check) {
    let produto = ler.question("digite  um produto:  ");
    let quantidade = ler.questionInt("imforme uma quantidade:  ");



    produtos.push({produto: produto,quantidade :quantidade });

    let x=ler.question("dados cadrastrados deseja cadastra outros produto  ou 'sair' para finalizar ").toLowerCase();

    if (x==='sair') {
        check= false;
        console.log("sistema finalizado")

}


}
let ordem_alfa= produtos.sort((a,b)=>a.produto.localeCompare(b.produto));
let quant =ordem_alfa.filter(c=>c.quantidade>0);
console.table(quant);
