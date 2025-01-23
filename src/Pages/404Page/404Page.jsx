import "./404Page.scss";
import { Link } from "react-router";

export default function Page404() {
    return (
        <div className="page404-container">
            <h1>404</h1>
            <p>La page que vous cherchez n'existe pas</p>
            <Link to="/">
                <button>Revenir sur la page d'accueil</button>
            </Link>
        </div>
    )
}