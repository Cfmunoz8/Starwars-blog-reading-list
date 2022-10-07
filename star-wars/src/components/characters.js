import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";

function Characters(props) {
  const state = useContext(Context);
  useEffect(() => {
    state.actions.getCharacter();
  }, []);
  return (
    <div className="pt-5" id="scrollspyCharacters">
      <h2>Personajes</h2>
      <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly">
        <div className="card text-center text-bg-secondary m-3 ">
          <img
            src="http://fakeimg.pl/400x200"
            className="card-img-top"
            alt="..."
            style={{ height: "11rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              Nombre: {state.store.character.result?.properties.name}
            </h5>
            <p className="card-text">Género:{props.characterText}</p>
            <p className="card-text">Color de cabello:{props.characterText}</p>
            <p className="card-text">Color de ojos: {props.characterText}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <div class="d-grid gap-2 d-md-block">
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

export default Characters;
