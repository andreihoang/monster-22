
import Card from "../card/card";

const CardList = (props) => {
        return (
            <div className="card-list">
                {props.filterMonster.map((monster) => {
                    return <Card monster={monster}/>
                }   
                )}
            </div>
        )
    }

export default CardList;