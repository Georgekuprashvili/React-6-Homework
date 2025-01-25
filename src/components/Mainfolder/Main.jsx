import Main_card from "../Maincards/Main_card";
import Second_card from "../Maincards/Second_card";

function Main() {

    
  

const [showMainCard, setShowMainCard] = useState(true);

const handleSubmit = () => {
  setShowMainCard(false); 
};

return (
  <>
    {showMainCard && <Main_card />} 
    {!showMainCard && <Second_card />} 

    <Submit onSubmit={handleSubmit} /> 
  </>
);
        
        
    
}
export default Main;