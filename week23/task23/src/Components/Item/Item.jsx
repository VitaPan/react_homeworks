import styles from './Item.module.css'

export default function Item(props){
    const cardClass = props.active 
        ? `${styles.Card} ${styles.Active}` 
        : styles.Card;

    return (
        <div className={cardClass}>
            <h3>{props.name}</h3>
            <h2>{props.price}</h2>
            <p>{props.speed}</p>
            <p>{props.info}</p>
        </div>
    )
}