import Item from "./Item"

function Lista(){
    return(
        <>
            <ul>
                <Item marca='Fiat' ano_lancamento ={2004}/>
                <Item />
            </ul>
        </>
    )
}

export default Lista