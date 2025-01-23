import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Le paradis des chiens</h2>
                <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
                <nav>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}