import styles from './Frase.module.css'

function SayMyName(props){

    return(
        <div>
            <p className={styles.containerContent}>O seu nome é {props.nome}</p>
        </div>
    )

}

export default SayMyName