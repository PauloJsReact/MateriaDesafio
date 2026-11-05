const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const  app = express();


//Db
mongoose.connect("mongodb+srv://paulo21engenharia_db_user:ArX9FEWAAh4vjlOm@cluster0.xntkff4.mongodb.net/");
const schemas =new Schema({
    name:{
        type:String,
        required:[true,"Nome é Obrigatorimo"],
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email é obrigatorio"],
        trim:true,
        unique:true
    },
    saldo:{
        type:String,
        
    }
})

const Client =mongoose.model("Client",schemas);

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
    Client.find().then(data =>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send({mensagem:"erro",erro:e});
    });
    
})

//receber o parametro via id

app.get("/usuario/:_id",function (req,res,next) {
    var resultData =[];
   Client.find({_id:req.params._id}).then(data =>{
    res.status(200).send(data);
   }
   ).catch(e=>{
    res.status(400).send({
        messagem:"erro",
        erro:e
    })
  });
})


//metodo Post
app.post("/usuario",function(req,res,next) {

     var userTemp = new Client(req.body);
     userTemp.save().then(data =>{
         res.status(200).send({mensagen:"Done"});
     }).catch(e =>{
        res.status(404).send({mensagem:"erro"})
     })
})

// metodo Put 
app.put("/usuario/:id",function (req,res,next) {
    User.forEach(element =>{
        if (element.id == req.params.id) {
            if (element.name != req.body.name) {
            element.name = req.body.name
            }
            if (element.email !=req.body.email) {
                element.email = req.body.email
            }
        }
    })
     res.status(200).send([{mensagen:"put"}]);
})
// metodo Delete 
app.delete("/usuario/:id",function (req,res,next) {
    User.forEach(element=>{
        if (element.id == req.params.id) {
            delete User[User.indexOf(element)]
        }
    })
     res.status(200).send([{mensagen:"Usuario deletado"}]);
})


app.listen(port,function(){
    console.log("Server litering on  port "+port);
});