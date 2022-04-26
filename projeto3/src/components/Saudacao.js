function Saudacao({nome}){

   function gerarSaudacao(algunNome){
       return `Olá ${algunNome}, tudo bem com você?`
   } 
    return(
        <div>
           { nome && <p>{gerarSaudacao(nome)}</p>}
        </div>
    )
}
export default Saudacao