import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<p>© Copyright 2025. Réalisé par Romain Auvinet</p>
			<nav>
				<a
					href="https://github.com/Romain-dev85"
					target="blank"
					rel="noopener noreferrer"
				>
					<img src="/assets/images/github.svg" alt="logo linkedin" />
				</a>
				<a
					href="https://linkedin.com/in/romain-auvinet-103793328"
					target="blank"
					rel="noopener noreferrer"
				>
					<img src="/assets/images/linkedin.svg" alt="logo github" />
				</a>
			</nav>
		</div>
	);
};

export default Footer;
