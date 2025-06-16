import styles from './Item.module.css'

export default function Item({ active, name, price, speed, info, onClick }) {
const cardClass = active
? `${styles.Card} ${styles.Active}`
: styles.Card;

return (
<div className={cardClass} onClick={onClick}>
<h3>{name}</h3>
<h2>{price}</h2>
<p>{speed}</p>
<p>{info}</p>
</div>
)
}