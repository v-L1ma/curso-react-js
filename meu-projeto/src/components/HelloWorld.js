import Frase from "./Frase"
import styles from './HelloWorld.module.css'

function HelloWorld() {

    return(
        <div>
            <Frase />
            <p className={styles.Frase}>Meu prmeiro componente</p>
            <Frase />
        </div>

    )

}

export default HelloWorld