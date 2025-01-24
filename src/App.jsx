import { useState } from 'react'

import './App.css'
import Main_card from './components/__organisms/Main_card'
import Second_card from './components/__organisms/Second_card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

<Main_card/>

<Second_card/>

    </>
  )
}

export default App
