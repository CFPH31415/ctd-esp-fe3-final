// Recupera los favoritos guardados en localStorage
const savedFavs = JSON.parse(localStorage.getItem('favs')) || [];

export const initialState = {
  theme: 'light',
  favs: savedFavs,
};
