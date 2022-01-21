const express = require('express');
const app = express();
const port = process.env.PORT || 7070;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routes
app.get('/',(req, res)=>{
    res.render('home.ejs');
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
app.get('/sign-in',(req, res)=>{
    res.render('sign-in-form.ejs');
});

app.get('/sign-up',(req, res)=>{
    res.render('sign-up-form.ejs');
});


try{
    app.listen(port,()=>{console.log(`Servidor rodando na porta ${port}`)});
}catch(error){
    console.log(`Servidor não iniciadom ERROR => ${ERROR}`)
}