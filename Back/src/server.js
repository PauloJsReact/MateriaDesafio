const express = require("express");
const bodyParse = require("body-parser");

const  app = express();

const port  = "3000";
// Metodo Get 
app.get("/",function (req,res,next) {
    res.status(200).send("<h1>Hello word</h1>");
})
app.get("/loja",function (req,res,next) {
    res.status(200).send("<h1>bem vindo a loja</h1>");
})
app.get("/usuario",function (req,res,next) {
    res.status(200).send("<h1>bem vindo a loja</h1>");
})

//receber o parametro via id
app.get("/usuario/:id",function (req,res,next) {
    res.status(200).send("Usuario Id "+req.params.id+"..");
})

//metodo Post
app.post("/usuario",function(req,res,next) {
     res.status(200).send("usuario criado com exito");
})

// metodo Put 
app.put("/usuario",function (req,res,next) {
     res.status(200).send("put");
})
// metodo Delete 
app.delete("/usuario",function (req,res,next) {
     res.status(200).send("Delete");
})


app.listen(port,function(){
    console.log("Server litering on  port "+port);
});