import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <nav className={state.theme}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>
          <span style={{ color: '#FF6347' }}>DH</span> Odonto
        </h1>
      </Link> 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favs">Favoritos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
