//criar arquivos em nosso projeto

let fs=require('fs');

//criar log na versão síncrona

let log = 'mensagem de log\n'
fs.writeFileSync('./logs.log' , log,{flag: 'a+'});
console.log('fim');

fs.writeFile('./logs2.log',log,{flag: 'a+'},(erro)=>{
    if (erro){
        console.log(erro)
    }
})


fs.rmSync('./logs2.log');
console.log('remover arquivos');

fs.unlinkSync('./logs.log')