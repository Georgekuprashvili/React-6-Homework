
import { useState } from "react";
import '../__molecules/Sections.css';

function Buttons() {
  const [numbers, setValue] = useState([1, 2, 3, 4, 5]);
  const [clickedButton, setClickedButton] = useState(); 

  return (
    <div className="buttons_cont">
      {numbers.map((number, key) => {
        return (
          <button
            className={`buttons ${clickedButton === number ? 'active' : ''}`} 
            key={key}
            onClick={() => setClickedButton(number)} 
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
