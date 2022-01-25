const express = require('express');
const app = express();
const port = process.env.PORT || 7070;
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const connection = require('./data_base/dbconnect.js')

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão com banco de dados estabelecida');
    })
    .catch((error)=>{
        console.log(`Erro ao estabelecer conexão... ERRO => {error}`)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.get('/',(req, res)=>{
    var login = false;
    res.render('home.ejs',{login: login});
});

//Functions
app.get('/publicnotes',(req, res)=>{
    res.render('publicnotes.ejs');
});

app.get('/folders',(req, res)=>{
    res.render('folders.ejs');
});

app.get('/files',(req, res)=>{
    res.render('files.ejs');
});

//Sign
app.get('/signin',(req, res)=>{
    res.render('sign-in-form.ejs');
});

app.get('/signup',(req, res)=>{
    res.render('sign-up-form.ejs');
});

//POSTS
app.post('/',(req, res)=>{
    var login = true;
    var nome = req.body.name;
    var senha = req.body.password;
    res.render('home.ejs',{
        nome: nome,
        senha: senha,
        login: login
    })
});


try{
    app.listen(port,()=>{console.log(`Servidor rodando na porta ${port}`)});
}catch(error){
    console.log(`Servidor não iniciadom ERROR => ${ERROR}`)
}