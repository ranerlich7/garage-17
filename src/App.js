import { useState } from "react"
import "./App.css"
import Car from "./components/Car"

function App() {
  const [cars, setCars] = useState([
    { name: "Honda", number: "12-412-56" },
    { name: "Tesla", number: "13-246-63" },
  ])
  const [carName, setCarName] = useState("")
  const [carNumber, setCarNumber] = useState("")
  const [search, setSearch] = useState("")

  function addCar() {
    const newCar = { name: carName, number: carNumber }
    setCars([...cars, newCar]) // spread operator example
    setCarName("")
    setCarNumber("")
  }
  // Function to handle car deletion
  function deleteCar(index) {
    const updatedCars = cars.filter((car, carIndex) => carIndex !== index)
    setCars(updatedCars)
  }

  function searchCars(e) {
    let value = e.target.value
    const updatedCars = cars.filter((car) => car.name.startsWith(search))
    setSearch(value)
    setCars(updatedCars)
  }
  return (
    <>
      Search:
      <input value={search} onChange={searchCars} />
      <br></br>
      {cars.map((car, index) => (
        <Car key={index} car={car} deleteCar={deleteCar} index={index} />
      ))}
      <div className="card">
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
