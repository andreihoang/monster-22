const Card = (props) => {
 
    const {id, name, email} = props.monster;
    return (
        <div className="card-container" key={id}>
            <img alt={'monster'} src={`https://robohash.org/${id}?set=set2&size=190x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
         </div>
    )
    
}

export default Card;