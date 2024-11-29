import { useState } from "react"

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        window.alert(`Usuario cadastrado nome:${name} e senha:${password}`)
    }

    let [name, setName] = useState()
    let [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input 
                    type="text" 
                    placeholder="Usuario"
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form