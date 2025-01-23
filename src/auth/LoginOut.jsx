import { useAuth } from "./AuthProvider";
import { useState } from "react";
import "./LoginOut.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button type="submit" className="login-button">Se connecter</button>
    </form>
  );
}

function Logout() {
  const { logout } = useAuth();

  return <button onClick={logout} className="logout-button">Se déconnecter</button>;
}

export { Login, Logout };