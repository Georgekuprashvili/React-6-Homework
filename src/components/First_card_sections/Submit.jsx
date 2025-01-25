import '../First_card_sections/Sections.css';
import { useState } from 'react';
import Main_card from '../Maincards/Main_card';
import Second_card from '../Maincards/Second_card';

function Submit() {

const [showcard, setshowcard] = useState(false)

function displaycard() {
    setshowcard(!showcard);
    
}

    return(
        <>
        <button onClick={displaycard} className='submit'>SUBMIT</button>
        {showcard && <Main_card/>}
        </>
    )
}
export default Submit;

