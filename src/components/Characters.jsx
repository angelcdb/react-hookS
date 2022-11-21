import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";
import "../Styles/Characters.css";
import { Search } from "./Search";
import { useCharacters } from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};
const TYPES ={
  ADD_TO_FAVORITE: "ADD_TO_FAVORITE",
  REMOVE_FAVORITO: "REMOVE_FAVORITO",
  RESET: "RESET"
}
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_FAVORITE:
      // const validation = state.favorites.filter((favorite) =>
      //   action.payload.id === favorite.id
      // );
      return {
        ...state,
        favorites: [...state.favorites, action.payload]

      // if (validation.length === 0) {
      //   return {
      //     ...state,
      //     favorites: [...state.favorites, action.payload],
      //   };
      // } else {
      //   return { ...state };
      }
    case TYPES.REMOVE_FAVORITO:
      return {
        ...state, favorites: state.favorites.filter((character) =>
          character.id !== action.payload),
      };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};
const API = "https://rickandmortyapi.com/api/character/";

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  //Busqueda con useMemo:
  const [search, setSearch] = useState('');
  //useRef:
  const searchInput = useRef(null);
  //useEffect:
  const characters = useCharacters(API);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/")
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data.results));
  // }, []);

  const handleFav = (favorite) => {
    dispatch({ type: TYPES.ADD_TO_FAVORITE, payload: favorite });
  };
  const handleReset = () => dispatch({ type: TYPES.RESET });
  const handleRemove =  (character) => dispatch({ type: TYPES.REMOVE_FAVORITO, payload: character.id});

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value)
  // }
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  //Filtrar personajes:
  // const filterUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });
  const filterUsers  = useMemo(() =>
    characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search]
  );

  return (
    <div>
    <div className="container-1">
        {favorites.favorites.map((favorite) => (
          <div>
            {/* <p className="a-ag" key={favorite.id}>
            {favorite.name}</p> */}
            <img className="img-ag" src={favorite.image} alt="img" />
          </div>
        ))}
      </div>

      <button type="button" className="button"
        onClick={handleReset}>
        Reset
      </button>

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      <h2 className="fav">Characters:</h2>

      <div className="container-2">
        {filterUsers.map((character) => (
          <div className="cart" key={character.id}>
              <img className="cart-img" src={character.image} alt="img" />
            <h2 className="h2">{character.name} Id:{character.id} </h2>

            {/* <p className="characters-pp">Id: {character.id}</p> */}
            <p className="characters-pp">Status: {character.status}</p>
            <p className="characters-pp">Specie: {character.species}</p>

            <button type="button" className="button-fav"
              onClick={() => handleFav(character)}>
              Favorito
            </button>

            <button type="button" className="button"
              onClick={() => handleRemove(character)}
              >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Characters };
