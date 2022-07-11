export default class Users {
    static Base_url = "https://blog-m2.herokuapp.com"

    static token = JSON.parse(localStorage.getItem("token"))

    static async postUsuario(id){
        return await fetch(`${this.Base_url}/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(erro => {
            console.log(erro)
        })
    }
}


