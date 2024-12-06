import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    const updatedFavorites = state.favs.some((fav) => fav.id === id)
      ? state.favs.filter((fav) => fav.id !== id)
      : [...state.favs, { name, username, id }];
    
    // Actualizamos el estado global y LocalStorage
    dispatch({ type: 'ADD_FAV', payload: updatedFavorites });
    localStorage.setItem('favs', JSON.stringify(updatedFavorites));
  };

  const isFavorite = state.favs.some((fav) => fav.id === id);

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Doctor" className="doctor-image" />
      <h3>
        <Link to={`/dentist/${id}`}>{name}</Link>  {/* Hacemos que el nombre sea un enlace */}
      </h3>
      <p>{username}</p>
      <button onClick={addFav} className="favButton">
        {isFavorite ? 'Remove from Fav' : 'Add to Fav'}
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
