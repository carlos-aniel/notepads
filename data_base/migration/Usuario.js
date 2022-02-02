const Sequelize = require('sequelize');
const connect = require('../connectdb.js');

const Usuario = connect.define('usuario',{
    username:{
        type: Sequelize.STRING ,
        allownull: false
    },
    email:{
        type: Sequelize.TEXT ,
        allownull: false
    },
    password:{
        type: Sequelize.TEXT ,
        allownull:false
    }
});

Usuario.sync({force: false})
    .then(()=>{
        console.log('Tabela Usuario criada com sucesso...')
    })
    .catch((error)=>{
        console.log(`Erro ao criar tabela Nota.\nErro => ${error}`)
    });

module.exports = Usuario;