import phoneimg from "../../assets/Online payment_Two Color(1) 2.svg";
import '../Second_card_sections/Second.css';


function Phone_img() {
    return (
        <>
<div className="image_container">        <img src={phoneimg}  />
<div className="number_box">
<p className="second_paragraph">You selected 4 out of 5</p>

</div>
</div>        
        </>
    )

    
}
export default Phone_img;