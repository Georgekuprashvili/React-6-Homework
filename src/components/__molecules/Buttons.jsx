import { useState } from "react";
import '../__molecules/Sections.css'


function Buttons() {

const [numbers,  setvalue] = useState([1,2,3,4,5])

    return(
        <>
        <div className="buttons_cont">
            {numbers.map((number,key) => {
                return <button className="buttons" key = {key}>{number}</button>
            })}
        </div>
        
        
        </>
    )
    
}
export default Buttons;