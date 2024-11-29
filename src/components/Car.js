function Car({ car, deleteCar, index }) {
  return (
    <>
      <div className="card">
        <div className="card-title">
          <h3>{car.name}</h3>
          <div className="car-button">{car.number}</div>
        </div>
        <div className="card-action">
          <button onClick={() => deleteCar(index)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Car
