export default class FormularioCadastro {
    static Base_url = "https://blog-m2.herokuapp.com"

    static async cadastrarUsuario(login){
        const response = await fetch(`${this.Base_url}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(erro => {
            console.error(erro)
        })
        window.location.href = "http://127.0.0.1:5500/src/pages/login.html"
        return response
    }

    static async pegarDadosCadastro(){

        let btnCadastrar = document.getElementById("btn-cadastrar")

        btnCadastrar.addEventListener("click", (e) =>{
            e.preventDefault()
            let nome = document.getElementById("nome").value
            let email = document.getElementById("email").value
            let imagem = document.getElementById("avatar").value
            let senha = document.getElementById("password").value
            
            let body = {
                "username": nome,
                "email": email,
                "avatarUrl": imagem,
                "password": senha
              }             
        if(nome, email, imagem, senha != ""){
           this.cadastrarUsuario(body)
        }
            
        })

        
    }
}