
import React, { useState } from 'react'

const App = () => {
    const [gender, setGender] = useState('Male')
    const changeGender = ()=>{
      if(gender == "Male"){
        setGender('Female')
      }
      else {
        setGender('Male')
      }
      
    }
  return (


    <div>
        <div className="parent">
          <h1>{gender}</h1>
          <button onClick={changeGender}>Change the gender</button>
        </div>
    </div>
  )
}

export default App