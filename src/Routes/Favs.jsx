import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((fav) => <Card key={fav.id} {...fav} />)
        ) : (
          <p>No hay favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
