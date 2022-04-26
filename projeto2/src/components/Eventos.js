import Button from "./Button"

function Eventos(){

    function meuEvento(){
        console.log(`Ativando primeiro evento `)
    }

    function segundoEvento(){
        console.log("Ativando segundo evento")
    }

    return(

        <>
        <p>Clique para disparar um evento</p>
        <Button event={meuEvento} text="Primeiro evento"/>
        <Button event={segundoEvento} text="Segundo evento"/>
        
       
        </>
    )
}

export default Eventos