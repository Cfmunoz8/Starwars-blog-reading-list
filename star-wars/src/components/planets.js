import React from "react";
import { Link } from "react-router-dom";

function Planets(props) {
  return (
    <div className="pt-5" id="scrollspyPlanets">
      <h2>Planetas</h2>
      <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly">
        <div className="card text-center text-bg-secondary m-3 ">
          <img
            src="http://fakeimg.pl/400x200"
            className="card-img-top"
            alt="..."
            style={{ height: "11rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Nombre: {props.planetName}</h5>
            <p className="card-text"> Población: {props.planetText}</p>
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

export default Planets;
