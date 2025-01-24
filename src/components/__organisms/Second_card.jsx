import "../__organisms/Second_card.css"
import Phone_img from "../__molecules/Phone_img";
import Second_card_paragraph from "../__molecules/Second_card_paradgraph";


function Second_card() {
    return(
        <>
        <div className="Second_card">
        <Phone_img/>
        <Second_card_paragraph/>
        </div>
        </>
    )

    
}
export default Second_card;