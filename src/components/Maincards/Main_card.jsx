import '../Maincards/Main_card.css'
import Image from "../First_card_sections/Image";
import Paragraph from "../First_card_sections/Paragraph";
import Buttons from "../First_card_sections/Buttons";
import Submit from "../First_card_sections/Submit";




function Main_card() {
    return (
        <>
        <div className="container">

<Image/>
<Paragraph/>
<Buttons/>
<Submit/>



        </div>
        
        </>
    )
    
}
export default Main_card;