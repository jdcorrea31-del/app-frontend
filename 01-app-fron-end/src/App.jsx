
import { useEffect } from 'react'
import './App.css'
import { Card } from './components/Card'


function App() {
  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(response => response.json())
    .then(data=>console.log(data))
  },[])
  

  return (
    <>
    <h1>productos</h1>
    <div>Card</div>

    </>
  )
}

export default App
