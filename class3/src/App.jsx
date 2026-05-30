import React from 'react'
import Cards from './components/Cards.jsx'
import Button from './components/Button.jsx'


const App = () => {
  const names = ['Arian','Mahin','Sikder']
  return (
    <div className='flex h-full w-screen flex-wrap'>
        {
          names.map((elem)=>{
             return <Cards name = {elem}/>
          })
        }
    </div>
  )
}

export default App 