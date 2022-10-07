export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {},
    actions: {
      getCharacters: () => {
        fetch("https://www.swapi.tech/api/people/1/")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      },
      getCharacters: () => {
        fetch("https://www.swapi.tech/api/planets/1/")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      },
      getCharacters: () => {
        fetch("https://www.swapi.tech/api/vehicles/1/")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      },
    },
  };
};
