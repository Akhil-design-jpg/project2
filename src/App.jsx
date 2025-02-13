import { useState } from 'react'
import Card from './Components/Card'
import './App.css'
function App({}) {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [showCard, setShowCard] = useState(false)


  const Cardshow = () =>{
    if(username === "" || password === ""){
        setShowCard(false)
        console.log(false);
        

      alert("Please fill out the details")
  }
  else{
        setShowCard(true)
        console.log(true);
        
  }
  }

  return (

    
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0b061f] to-[#1a044b] relative overflow-hidden">

  <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
  {showCard && (
    <div className="text-black text-2xl font-semibold bg-white shadow-lg p-6 rounded-lg mb-6">
          <Card className = 'text-black' username={`Welcome back ${username}`} />

    </div>
  )}
       
       
    <div className="flex bg-blue-500 flex-col space-y-4 border-2 h-96 w-96  p-6 shadow-xl rounded-lg">
      
  <input
    
    type="text"
    placeholder="Enter your username"
    value={username}
    
    onChange={(e) => setUsername(e.target.value)}
    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  <input
    type="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button  to = "/card"   className="h-12 w-24 bg-white text-black font-bold rounded-lg hover:bg-blue-600 transition duration-300 self-center"
 onClick={Cardshow}>
        Submit
    </button>


    </div>
    <div className="absolute -bottom-16 -left-10 w-80 h-80 bg-gradient-to-r from-[#ff6b6b] to-[#ff9472] opacity-30 rounded-full blur-3xl"></div>
  <div className="absolute -top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#6b6bff] to-[#9472ff] opacity-30 rounded-full blur-3xl"></div>
</div>
</div>
  )
}
export default App
