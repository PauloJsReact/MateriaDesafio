console.log("aqui fica a logica")
let id ="6aec56766f237b9f4f0fa655";
const urlUsers = "http://localhost:3000/usuario/"+id;


fetch(urlUsers).then(response =>{
    return response.json();
}).then(data =>{
    
   if (data !=0) {
    print(data)
   }
    console.log(data)
    
}).catch()

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