import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router";
import "./Header.css";
import { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="header-container">
				<section>
					<img src="/assets/images/me.png" alt="miniature de Romain Auvinet" />
					<p>ROMAIN AUVINET</p>
				</section>
				<section className="nav-menu">
					<Link to="/">ACCUEIL</Link>
					<Link to="/">A PROPOS</Link>
					<Link to="/">PROJETS</Link>
					<Link to="/">CV</Link>
					<Link to="/">CONTACT</Link>
				</section>
			</nav>
			<Menu
				right={true}
				isOpen={isOpen}
				onOpen={() => setIsOpen(!isOpen)}
				onClose={() => setIsOpen(!isOpen)}
			>
				<Link
					id="home"
					className="menu-item"
					to="/"
					onClick={() => setIsOpen(false)}
				>
					ACCUEIL
				</Link>
				<Link
					id="about"
					className="menu-item"
					to="/"
					onClick={() => setIsOpen(false)}
				>
					A PROPOS
				</Link>
				<Link
					id="projects"
					className="menu-item"
					to="/"
					onClick={() => setIsOpen(false)}
				>
					PROJETS
				</Link>
				<Link
					id="cv"
					className="menu-item"
					to="/"
					onClick={() => setIsOpen(false)}
				>
					CV
				</Link>
				<Link
					id="contact"
					className="menu-item"
					to="/"
					onClick={() => setIsOpen(false)}
				>
					CONTACT
				</Link>
			</Menu>
		</>
	);
};

export default Header;
