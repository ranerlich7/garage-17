import axios from "axios"

const cars = [
  { name: "Honda", number: "12-412-56", price: 1500 },
  { name: "Tesla", number: "13-246-63", price: 2500 },
  { name: "Suzuki", number: "44-444-63", price: 1200 },
]

export const getAllCars = async () => {
  // call server to get cars
  const response = await axios.get("http://localhost:3005/cars")
  return response.data
}
