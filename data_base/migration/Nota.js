const Sequelize = require('sequelize');
const connect = require('../connectdb.js');

const Nota = connect.define('nota',{
    titulo:{
        type: Sequelize.STRING ,
        allownull: false
    },
    conteudo:{
        type:Sequelize.TEXT ,
        allownull: false
    },
    username:{
        type: Sequelize.STRING ,
        allownull: false
    },
    classe:{
        type: Sequelize.TEXT,
        allownull: false
    }
});

Nota.sync({force: false})
    .then(()=>{
        console.log('Tabela Nota criada com sucesso...')
    })
    .catch((error)=>{
        console.log(`Erro ao criar tabela Nota.\nErro => ${error}`)
    });

module.exports = Nota;