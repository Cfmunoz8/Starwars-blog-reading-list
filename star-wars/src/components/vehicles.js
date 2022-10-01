import React from "react";

function Vehicles(props) {
  return (
    <div>
      <h2>Vehículos</h2>
      <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly">
        <div className="card text-center m-3 ">
          <img
            src="http://fakeimg.pl/400x200"
            className="card-img-top"
            alt="..."
            style={{ height: "11rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.vehicleName}</h5>
            <p className="card-text">{props.vehicleText}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-outline-primary" type="button">
                  ¡Conocer más!
                </button>
                <button class="btn btn-outline-danger" type="button">
                  Fav
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
