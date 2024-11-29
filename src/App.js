import { useState } from "react"
import "./App.css"

function App() {
  const [cars, setCars] = useState([
    { name: "Honda", number: "12-412-56" },
    { name: "Tesla", number: "13-246-63" },
  ])

  return (
    <>
      {cars.map((car, index) => (
        <div className="card" key={index}>
          <div className="card-title">
            <h3>{car.name.toUpperCase()}</h3>
            <div className="car-button">{car.number}</div>
          </div>
          <div className="card-action">
            <button>Click</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default App
