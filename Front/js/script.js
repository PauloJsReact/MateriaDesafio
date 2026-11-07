console.log("aqui fica a logica")
let id ="/6aee7855a633e8462f33b4dd";
const url = "http://localhost:3000/usuario";
const urlUsers = url+id;

//metodo Get
function carregarDb() {
        fetch(urlUsers).then(response =>{
            return response.json();
        }).then(data =>{
            
        if (data !=0) {
            print(data)
        }
            console.log(data)
            
        }).catch()

}

function print(params) {
    const texto = document.getElementById("usuario");
    texto.innerHTML="";

    params.forEach(element => {
        texto.innerHTML +=`
            <p>nome :${element.name}</p>
            <p>nome :${element.email}</p>
        `
    });
}
//Metodo POST

const formulario = document.getElementById("formularioCadastro")
formulario.addEventListener('submit', async () => {
   
    event.preventDefault(); 
    console.log("Enviando...");
    await enviar();
    
}  );  

async function enviar() {
        const imputNome = document.getElementById("Nome");
        const imputEmail  = document.getElementById("Email");
        const imputPassword = document.getElementById("Senha");
    const dados = {
        name:imputNome.value,
        email:imputEmail.value,
        saldo:"0",
        password:imputPassword.value
  }

  console.log(dados)
   const resposta = await fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(dados)
    })

    if (!resposta.ok) {
        throw new Error(`Erro no servidor ${resposta.status}`)
    }
    
    const res = await resposta.json();
    console.log(res);
}

