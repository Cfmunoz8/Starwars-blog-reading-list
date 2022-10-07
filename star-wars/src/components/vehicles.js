import React from "react";
import { Link } from "react-router-dom";

function Vehicles(props) {
  return (
    <div className="pt-5" id="scrollspyVehicles">
      <h2>Vehículos</h2>
      <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly">
        <div className="card text-center text-bg-secondary m-3 ">
          <img
            src="http://fakeimg.pl/400x200"
            className="card-img-top"
            alt="..."
            style={{ height: "11rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Nombre: {props.vehicleName}</h5>
            <p className="card-text">Modelo: {props.vehicleText}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <div className="d-grid gap-2 d-md-block">
                <Link
                  className="btn btn-outline-primary"
                  type="button"
                  to="/selection"
                >
                  ¡Conocer más!
                </Link>
                <button className="btn btn-outline-danger" type="button">
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
