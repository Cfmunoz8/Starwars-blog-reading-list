export const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
      character: [],
      planet: [],
      vehicle: [],
      favorites: [],
      favoritesPlanet: [],
      favoritesVehicle: [],
    },
    actions: {
      getPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ people: data.results });
            console.log(data.results, "people");
          })
          .catch((err) => console.error(err));
      },
      getPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ planets: data.results });
            console.log(data.results, "planets");
          })
          .catch((err) => console.error(err));
      },
      getVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicles: data.results });
            console.log(data);
          })
          .catch((err) => console.error(err));
      },
      getCharacter: (uid) => {
        fetch("https://www.swapi.tech/api/people/" + uid)
          .then((res) => res.json())
          .then((data) => {
            setStore({ character: data.result });
            console.log(data.result, "character");
          })
          .catch((err) => console.error(err));
      },
      getPlanet: (uid) => {
        fetch("https://www.swapi.tech/api/planets/" + uid)
          .then((res) => res.json())
          .then((data) => {
            setStore({ planet: data.result });
            console.log(data.result, "planet");
          })
          .catch((err) => console.error(err));
      },
      getVehicle: (uid) => {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicle: data.result });
            console.log(data.result, "vehicle");
          })
          .catch((err) => console.error(err));
      },
      addFavorite: (favorite) => {
        const store = getStore();
        const one = store.favorites.some((item) => item.uid === favorite.uid);
        if (one === true) {
          return;
        } else {
          setStore(store.favorites.push(favorite));
        }
      },
      deleteFavorite: (index) => {
        const { favorites } = getStore();
        favorites.splice(index, 1);
        setStore(...favorites);
      },
      addFavoritePlanet: (favorite) => {
        const store = getStore();
        const one = store.favoritesPlanet.some((item) => item.uid === favorite.uid);
        if (one === true) {
          return;
        } else {
          setStore(store.favoritesPlanet.push(favorite));
        }
      },
      deleteFavoritePlanet: (index) => {
        const { favoritesPlanet } = getStore();
        favoritesPlanet.splice(index, 1);
        setStore(...favoritesPlanet);
      },
      addFavoriteVehicle: (favorite) => {
        const store = getStore();
        const one = store.favoritesVehicle.some((item) => item.uid === favorite.uid);
        if (one === true) {
          return;
        } else {
          setStore(store.favoritesVehicle.push(favorite));
        }
      },
      deleteFavoriteVehicle: (index) => {
        const { favoritesVehicle } = getStore();
        favoritesVehicle.splice(index, 1);
        setStore(...favoritesVehicle);
      },
    },
  };
};
