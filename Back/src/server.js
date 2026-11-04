const express = require("express");
const bodyParse = require("body-parser");

const  app = express();

///Json Parse
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))

//Data
var User = [];
User.push(
    {
        id:36,
        name:"Silvestre Esta Longe",
        email:"silvestreestalonje@ovi.com",
        saldo:0
    },
    {
        id:24,
        name:"Rasputinho",
        email:"Rasputinho@ovi.com",
        saldo:2
    }
)

const port  = "3000";
// Metodo Get 
app.get("/",function (req,res,next) {
    res.status(200).send("<h1>Hello word</h1>");
})

app.get("/loja",function (req,res,next) {
    res.status(200).send("<h1>bem vindo a loja</h1>");
})
app.get("/usuario",function (req,res,next) {
    res.status(200).send(User);
})

//receber o parametro via id

app.get("/usuario/:id",function (req,res,next) {
    var resultData =[];
   User.forEach(element => {
    if (element.id == req.params.id) {
       resultData.push(element);
    }
   });
    if (resultData.length >0) {
    res.status(200).send(resultData);
        }else{
    res.status(404).send([{erro:"Usuario não encontrado"}]);
    }
})


//metodo Post
app.post("/usuario",function(req,res,next) {
     User.push(req.body);
     res.status(200).send([{mensagen:"Done"}])
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