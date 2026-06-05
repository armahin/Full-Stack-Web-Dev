import React, { useState } from 'react'
import Card from "../src/assets/components/Card.jsx"
const App = () => {
const [title, settitle] = useState("")
const [subtitle, setsubtitle] = useState("")
const [descrip, setdescrip] = useState("")
const [image, setimage] = useState("")
const [user, setuser] = useState([])

function submitHandler(e){
  e.preventDefault();
  const oldUser = [...user]
  oldUser.push(
    {title: title || "Arian Mahin Sikder",
    subtitle: subtitle || "Enthusiast",
    descrip: descrip || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, temporibus.",
    image : image || "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  )
  setuser(oldUser)
  console.log(oldUser)
  settitle("")
  setsubtitle("")
  setdescrip("")
  setimage("")
  
}
function deleteHandler(idx){
  console.log("deleted")
  const newUser = [...user]
  newUser.splice(idx,1)
  setuser(newUser)
}

  return (
    <div >
      <form onSubmit={submitHandler} className='bg-blue-300 p-5 flex flex-row flex-wrap justify-center gap-2' action="">
        <input 
        className='p-2 m-1 flex-wrap bg-blue-200 rounded-3xl w-[48%] ' 
        type="text" 
        placeholder='Title'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />

        <input 
        className='p-2 m-1 flex-wrap bg-blue-200 rounded-3xl w-[48%] ' 
        type="text" 
        placeholder='Subtitle'
        value={subtitle}
        onChange={(e)=>{
          setsubtitle(e.target.value)
        }}
         
        />

        <input 
        className='p-2 m-1 flex-wrap bg-blue-200 rounded-3xl w-[48%] ' 
        type="text" 
        placeholder='Description'
        value={descrip}
        onChange={(e)=>{
          setdescrip(e.target.value)
        }}
         
        />

        <input 
        className='p-2 m-1 flex-wrap bg-blue-200 rounded-3xl w-[48%] ' 
        type="text" 
        placeholder='Image'
        value={image}
        onChange={(e)=>{
          setimage(e.target.value)
        }}
         
        />

        <button className='bg-blue-200 px-6 py-2 rounded-3xl active:scale-97' >Submit</button>
      </form>
      <div className='flex flex-wrap'>
      {
        user.map((e,idx)=>{

          return <Card title = {e.title} subtitle = {e.subtitle} description ={e.descrip} image = {e.image} delete = {()=>deleteHandler(idx)} />


        })
      }
      </div>
    

    </div>
  )
}

export default App