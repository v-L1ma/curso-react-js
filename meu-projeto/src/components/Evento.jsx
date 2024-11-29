import Button from "./Button"

function Evento(){
    function meuEvento(){
        window.alert('opa fui disparado')
    }

    return(
        <div>
            <p>Clique para disparar</p>
            <Button event={meuEvento} text="clica ai"/>
        </div>
    )
}

export default Evento