//ler arquivo externo usando node
//vamos usar a lib fs (file system)

const fs = require('fs');

// fs.readFile('./dados.csv', (erro,data)=>{
//     if (erro){
//         console.log(erro)
//     }
//     else{
//         console.log(data.toString());
//     }
// })
// console.log("Segunda Operação")


//  console.log("Segunda operação");
//  let dados = fs.readFileSync('../aula_02/dados.csv');
//  console.log(dados.toString());


//simulando caminho errado 


let dados = "";
if (dados.existSync('../aula_02/dados.csv')){
dados = fs.readFileSync('../aula_02/dados.csv');
console.log(dados.toString())
}else{
    console.log('arquivo não encontrado')
}

