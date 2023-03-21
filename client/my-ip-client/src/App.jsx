import { useState } from 'react'
import axios from "axios";
import './App.css'

// const API = process.env.API
function App() {
  const [ip, setIp] = useState("")

  const getMyIp = () => {
    axios.get(`http://localhost/get-my-ip`).then((response) => {
      console.log(response.data)
      setIp(response.data)
    })
  }
  return (
    <>
    <div class="center">
      <h1>Get My IP</h1>
     <button onClick={getMyIp}>Click me :)</button>
     <p>{ip}</p>
    </div>
    </>
  )
}

export default App
