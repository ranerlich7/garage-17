function Car({ car, deleteCar, index, setPrice }) {
  return (
    <>
      <div className="card">
        <div className="card-title">
          <h3>{car.name}</h3>
          <h3> ₪ {car.price}</h3>
          <input
            value={car.price}
            onChange={(e) => setPrice(index, e.target.value)}
          ></input>
          <br />
          <div className="car-button">{car.number}</div>
        </div>
        <div className="card-action">
          <button onClick={() => deleteCar(car.id)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Car
