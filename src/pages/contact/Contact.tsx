import React from "react";
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
      toast.success("Message envoyé avec succès 👍")
		} catch (err) {
      toast.error("Erreur lors de l'envoi du message 👎")
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
						type="text"
						placeholder="Nom"
						name="name"
						required
						maxLength={lengthMaxName}
					/>
				</label>
				<label htmlFor="Email">
					Email
					<input
						type="email"
						placeholder="Adresse mail"
						name="email"
						required
					/>
				</label>
				<label htmlFor="Message">
					Message
					<textarea
						name="message"
						placeholder="Message"
						minLength={lengthMinMessage}
						maxLength={lengthMaxMessage}
						required
					></textarea>
				</label>
				<input type="submit" value="Envoyer" id="input-submit" />
			</form>
		</div>
	);
};

export default Contact;
