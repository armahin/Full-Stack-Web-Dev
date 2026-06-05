import React, { useState } from 'react'
const App = () => {
const [value, setvalue] = useState("")
const [email, setemail] = useState("")

const [alluser, setuser] = useState([])

  return (
    
    <div className='UI'>
      <div>
      <form onSubmit={(e)=>{
          e.preventDefault()    
          const newAlluser = [...alluser]
          newAlluser.push({value,email})
          setuser(newAlluser)
          console.log(newAlluser);
          setvalue("")
          setemail("")
          
      
        }}>
        <input type="text" placeholder='Name' required value = {value} onChange={(e)=>{
          setvalue(e.target.value)
        }} />

        <input type="text" placeholder='Email' required value = {email} onChange={(e)=>{
          setemail(e.target.value)
        }} />
        <button type='submit' >Submit</button>
      </form>
      </div>
        <div className='phone'>
        {
          alluser.map((e)=>{
            return <div className='contact-list'>
              <div className='contact'>
                <h1>{e.value}</h1>
                <p>{e.email}</p>
              </div>
            </div>
          })
        }
       </div>

    </div>
  )
}

export default App