import { useState } from "react"
import "./App.css"

function App() {
  const [cars, setCars] = useState([
    { name: "Honda", number: "12-412-56" },
    { name: "Tesla", number: "13-246-63" },
  ])
  const [carName, setCarName] = useState("")
  const [carNumber, setCarNumber] = useState("")

  function addCar() {
    const newCar = { name: carName, number: carNumber }    
    setCars([...cars, newCar])        // spread operator example 
    setCarName("")
    setCarNumber("")
  }
  return (
    <>
      {cars.map((car, index) => (
        <div className="card" key={index}>
          <div className="card-title">
            <h3>{car.name}</h3>
            <div className="car-button">{car.number}</div>
          </div>
          <div className="card-action">
            <button>Click</button>
          </div>
        </div>
      ))}
      <div>
        Name:
        <input value={carName} onChange={(e) => setCarName(e.target.value)} />
        <br></br>
        Number:
        <input
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
        />
        <br />
        <button onClick={addCar}>Add Car</button>
      </div>
    </>
  )
}

export default App
