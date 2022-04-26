import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("O cadastro realisado com sucesso!")
        console.log(nome)
        console.log(senha)
    }

    const [nome, setName] = useState()
    const [senha, setSenha] = useState()

  return(
      <div>
          <h1>Meu Cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="Nome">Nome: </label>
                <input type="text" id="nome" name="nome" placeholder="Digite o seu nome..." 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="senha">Senha: </label>
                <input type="password" id="senha" name="senha" placeholder="Digite a sua senha..."
                 onChange={(e) => setSenha(e.target.value)}  />
            </div>
            <div>
                <input type="submit" value="Enviar"/>
            </div>
        </form>
      </div>
  )
}

export default Form