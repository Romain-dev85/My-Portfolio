import { Link } from "react-router";
import "./Header.css";

const Header = () => {
	return (
		<nav className="header-container">
			<section>
				<img src="/assets/images/me.png" alt="miniature de Romain Auvinet" />
				<p>ROMAIN AUVINET</p>
			</section>
			<section>
				<Link to="/">ACCUEIL</Link>
				<Link to="/">A PROPOS</Link>
				<Link to="/">PROJETS</Link>
				<Link to="/">CV</Link>
				<Link to="/">CONTACT</Link>
			</section>
		</nav>
	);
};

export default Header;
