export default class Login {
    static Base_url = "https://blog-m2.herokuapp.com"

    static async login(dados){
        const response = await fetch(`${this.Base_url}/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
          })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            localStorage.setItem("userId", JSON.stringify(res.userId))
            localStorage.setItem("token", JSON.stringify(res.token))
            return res
          })
          .catch(err => console.log(err))
          window.location.href = "http://127.0.0.1:5500/src/pages/post.html"
          return response
        }

    static pegarDadosLogin(){

      let btnLogin = document.getElementById("btn-login")
    
      btnLogin.addEventListener("click", (e)=>{
        e.preventDefault()
    
        let email = document.getElementById("email").value
        let senha = document.getElementById("password").value

        let body = {
          "email": email,
          "password": senha
        }             
        console.log(body)
        if(email, senha != ""){
          this.login(body)
        }
    
      })
    }
}

Login.pegarDadosLogin()


