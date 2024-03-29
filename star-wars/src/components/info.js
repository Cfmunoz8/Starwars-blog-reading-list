import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/context";
import Card from "./card";

function Info() {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
  }, []);
  return (
    <div>
      <div className="pt-5" id="scrollspyCharacters">
        <h2>Personajes</h2>
        <div className="d-flex justify-content-evenly row row-cols-auto">
            {store.people?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  className="col"
                  cardName={item.name}
                  cardLink= {"/character/"+ item.uid}
                  buttonClick= {() => { actions.addFavorite(item) }}
                />
              );
            })}
        </div>
      </div>
      <div className="pt-5" id="scrollspyPlanets">
        <h2>Planetas</h2>
        <div className="d-flex justify-content-evenly row row-cols-auto">
            {store.planets?.map((item) => {
              return (
                <Card
                  key={item.uid}
                  className="col"
                  cardName={item.name}
                  cardLink= {"/planet/"+ item.uid}
                  buttonClick= {() => { actions.addFavoritePlanet(item) }}

                />
              );
            })}
        </div>
      </div>
      <div className="pt-5" id="scrollspyVehicles">
        <h2>Vehículos</h2>
        <div className="d-flex justify-content-evenly row row-cols-auto">
            {store.vehicles?.map((item, uid) => {
              return (
                <Card
                  key={item.uid}
                  className="col"
                  cardName={item.name}
                  cardLink= {"/vehicle/"+ item.uid}
                  buttonClick= {() => { actions.addFavoriteVehicle(item) }}

                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Info;
