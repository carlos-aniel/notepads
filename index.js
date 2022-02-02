const express = require('express');
const app = express();
const port = process.env.PORT || 7070;
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const connect = require('./data_base/connectdb.js');
const Usuario = require('./data_base/migration/Usuario.js');
const Nota = require('./data_base/migration/Nota.js');

connect.authenticate()
        .then(()=>{
            console.log('Conexão com banco de dados realizada com sucesso...')
        })
        .catch((error)=>{
            console.log(`Conexão não estabelecida com banco de dados...\nErro:\t${error}`);
        })


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.get('/home',(req, res)=>{
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
app.post('/sendsingin',(req, res)=>{
    var login = true;
    var nome = req.body.name;
    var senha = req.body.password;
        //Consulta sql
    res.redirect('/home')
});

app.post('/sendsingup', (req, res)=>{
    var usuario = req.body.name;
    var email = req.body.email;
    var senha = String(req.body.password);
    Usuario.create({
        username: usuario,
        email: email,
        password: senha

    });
    res.redirect('/home');
});


try{
    app.listen(port,()=>{console.log(`Servidor rodando na porta ${port}`)});
}catch(error){
    console.log(`Servidor não iniciadom ERROR => ${ERROR}`)
}