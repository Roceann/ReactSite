import "./Header.scss";
import { useAuth } from "../../auth/AuthProvider";
import { Login, Logout } from "../../auth/LoginOut";

export default function Header() {
  const { user } = useAuth();
  return (
    <>
      <header className="header">
        <h1><a href="/">Le paradis des chiens</a></h1>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/contact">Contact</a></li>

            <li className="auth-container">{user ? <Logout /> : <Login />}</li>
          </ul>
        </nav>
      </header>
    </>
  );
}