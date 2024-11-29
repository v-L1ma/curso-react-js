import { useState } from "react"

function Condicional(){
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    console.log('funfou')
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }

    return(
        <div>
            <h1>cadastre seu email:</h1>
            <form >
                <input type="text" placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>

                {userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )   
}

export default Condicional