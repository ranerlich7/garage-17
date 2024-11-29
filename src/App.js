import { useState } from "react"
import "./App.css"

function App() {
  const [cars, setCars] = useState(["Honda", "Toyota", "Tesla"])

  return (
    <>
      {cars.map((car, index) => (
        <h1 key={index}>{car}</h1>
      ))}
    </>
  )
}

export default App
