import { ReactFragment } from "react";
const Recipe = ({title,calories,image,ingredients}) =>
{
    return(

        <div > 
            <h1> heading</h1>
            <p> {calories} </p>
            <img src = {image} alt=" " />
        </div>
        )

};
export default Recipe;