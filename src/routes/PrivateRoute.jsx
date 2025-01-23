import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router";
import "./PrivateRoute.scss";

export default function PrivateRoute({ children }) {
    const { user } = useAuth();
    
    return user ? (
        children) :(
        <div className="private-route-container">
            <p className="private-route-message">Accès refusé, merci de vous connecter</p>
            <Link to="/">
                <button className="private-route-button">Retour à la page d'accueil</button>
            </Link>
        </div>)
    ;
}
    