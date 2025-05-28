import React from "react"
import Card from "./Card";
import superheroesArray from "../data/data";
function Content(){
    return(
    <div>
        {
            superheroesArray.map((hero,index) => (
                <Card hero={hero} key={index} index={index}/>
            ))
        }
    </div>
    )
}
export default Content;