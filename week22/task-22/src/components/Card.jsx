
function Card(props) {
    console.log(props)
    const {title,universe,alterego,occupation,friends,superpowers,url} = props.hero;
    return(
        <div className="card">
                <h2 className="card-title">{title}</h2>
                <p>{props.index+1}</p>
                <p className="universe">Вселенная: {universe}</p>
                <p className="alterego">Альтер эго: {alterego}</p>
                <p className="occupation">Род деятельности: {occupation}</p>
                <p className="friends">Друзья: {friends}</p>
                <p className="superpowers">Суперсила: {superpowers}</p>
                <img src={url} alt={title}/>

        </div>
    )
}
export default Card;