import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  let [limite, setLimite] = useState("")


  // let counter = 100

  const addVlue = () => {
    
      if (counter === 20){
        setLimite ("you are riched the highest limit on counter 20")
      }
      else{
        setCounter(counter + 1);
      }
    
  }
  const removeVlue = () => {
    if(counter === 0){
      setLimite ("you and can not remove anymore, you are on 0")
    }
    else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Anish</h1>
      <h2>counter value: {counter}</h2>
      <p>{limite}</p>

      <button onClick={addVlue}>Add value</button>
      <br />
      <button onClick={removeVlue}>remove value</button>
    </>
  )
}

export default App
