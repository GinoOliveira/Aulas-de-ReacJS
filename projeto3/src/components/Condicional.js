import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [useEmail, setUseEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUseEmail(email)
       
    }

    function limparEmail(e){
        e.preventDefault()
        setUseEmail('')
    }
    
return(
    <div>
        <h2>Cadastre o seu e-mail: </h2>
        <form> 
        <label>E-mail: </label>
        <input type="e-mail" placeholder="Digite o seu e-mail..." onChange={(e)=> setEmail(e.target.value)}/>
        <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
        {useEmail && (
            <div>
                <p>O e-mail do usuário é: {email}</p>
                <button type="submit" onClick={limparEmail}>Limpar E-mail</button>
            </div>

        )}        

        </form>
    </div>
)
}

export default Condicional