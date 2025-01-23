import { Link } from "react-router";
import "./Home.scss";


export default function Home() {
  return (
    <div className="home-container">
      <h1> 
        Bienvenue sur le site de l'association "Le paradis des chiens"
      </h1>
      <p>
        Vous trouverez ici des chiens en tout genre
      </p>
      <Link to="/chien">
        <button>Voir les Chiens</button>
      </Link>
    </div>
  );
}