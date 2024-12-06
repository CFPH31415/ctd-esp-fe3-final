import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState } from '../Constants';
const reducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return { ...state, theme: 'dark' };
    case 'LIGHT':
      return { ...state, theme: 'light' };
    case 'ADD_FAV':
      return { ...state, favs: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
