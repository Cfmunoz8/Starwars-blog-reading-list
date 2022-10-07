export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      personaje: "Luke",
      character: {},
    },
    actions: {
      getCharacter: () => {
        fetch("https://www.swapi.tech/api/people/1/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ character: data });
            console.log(data);
          })
          .catch((err) => console.error(err));
      },
      getPlanet: () => {
        fetch("https://www.swapi.tech/api/planets/1/")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      },
      getVehicle: () => {
        fetch("https://www.swapi.tech/api/vehicles/1/")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      },
    },
  };
};
