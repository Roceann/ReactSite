import  { useState } from 'react';
import "./Contact.scss";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <h1 className="contact-title">Formulaire de contact</h1>
            {submitted ? (
                <p>Merci {name}, votre message a été envoyé avec succès !</p>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="contact-label">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="contact-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email" className="contact-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="contact-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="message" className="contact-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className="contact-textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button type="submit" className="contact-button">Envoyer</button>
                </form>
            )}
        </>
    );
}