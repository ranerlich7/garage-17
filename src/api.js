import axios from "axios"

export async function getAllCars() {
  // call server to get cars
  const response = await axios.get("http://localhost:3005/cars")
  return response.data
}
