import styles from './Item.module.css'

export default function Item(props){
    return(
        <div className={styles.Card}>
            <h3 style={{ backgroundColor: props.color }}>{props.name}</h3>
            <h2 style={{ backgroundColor: props.color }}>{props.price}</h2>
            <p>{props.speed}</p>
            <p>{props.info}</p>
        </div>
    )
}