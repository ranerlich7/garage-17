import axios from "axios"

export async function getAllCars() {
  // call server to get cars
  const response = await axios.get("http://localhost:3005/cars")
  return response.data
}

export async function addCarApi(newCar) {
  await axios.post("http://localhost:3005/cars", newCar)
}

export async function deleteCarApi(carID) {
  await axios.delete(`http://localhost:3005/cars/${carID}`)
}
