import emailjs from "@emailjs/browser";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
	const lengthMinMessage = 10;
	const lengthMaxMessage = 400;
	const lengthMaxName = 50;

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || "";

		const formData = new FormData(event.currentTarget);
		const formObj = Object.fromEntries(formData) as {
			name?: string;
			email?: string;
			message?: string;
		};

		try {
			await emailjs.send(
				"service_ogcl9gr",
				"template_ogcl9gr",
				{
					name: formObj.name,
					email: formObj.email,
					message: formObj.message,
				},
				EMAILJS_PUBLIC_KEY,
			);
			toast.success("Message envoyé avec succès 👍");
		} catch (err) {
			toast.error("Erreur lors de l'envoi du message 👎");
			console.error("Erreur lors de l’envoi du message :", err);
		}
	};

	return (
		<div className="contact-container">
			<h1>CONTACT</h1>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label htmlFor="name">
					Nom
					<input
						id="name"
						type="text"
						placeholder="Nom"
						name="name"
						required
						maxLength={lengthMaxName}
					/>
				</label>
				<label htmlFor="email">
					Email
					<input
						id="email"
						type="email"
						placeholder="Adresse mail"
						name="email"
						required
					/>
				</label>
				<label htmlFor="message">
					Message
					<textarea
						id="message"
						name="message"
						placeholder="Message"
						minLength={lengthMinMessage}
						maxLength={lengthMaxMessage}
						required
					></textarea>
				</label>
				<button type="submit" value="Envoyer" className="button-submit">
					Envoyer
				</button>
				<button
					className="rgpd-button"
					popoverTarget="rgpd"
					type="button"
					popoverTargetAction="show"
				>
					Mentions RGPD
				</button>
				<div id="rgpd" popover="auto">
					<p>
						Les informations recueillies dans ce formulaire sont enregistrées
						par <strong>Romain Auvinet</strong> afin de répondre à votre
						message.
					</p>
					<p>
						Elles sont uniquement destinées à <strong>Romain Auvinet</strong>.
					</p>
					<p>
						Conformément au RGPD, vous pouvez exercer vos droits en me
						contactant à : <strong>r.auvinet@gmail.com</strong>.
					</p>
				</div>
			</form>
		</div>
	);
};

export default Contact;
