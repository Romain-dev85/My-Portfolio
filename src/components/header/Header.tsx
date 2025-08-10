import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router";
import "./Header.css";
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="header-container">
				<section>
					<Link to="/">
						<img
							src="/assets/images/me.png"
							alt="miniature de Romain Auvinet"
						/>
					</Link>
					<p>ROMAIN AUVINET</p>
				</section>
				<section className="nav-menu">
					<Link to="/">ACCUEIL</Link>
					<Link to="/project">PROJETS</Link>
					<a
						href="/assets/images/CV.auvinet_romain.pdf"
						target="blank"
						rel="noopener noreferrer"
					>
						CV <MdOutlineFileDownload />
					</a>
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
					id="projects"
					className="menu-item"
					to="/project"
					onClick={() => setIsOpen(false)}
				>
					PROJETS
				</Link>
				<a
					href="/assets/images/CV.auvinet_romain.pdf"
					target="blank"
					rel="noopener noreferrer"
					id="cv"
					className="menu-item"
					onClick={() => setIsOpen(false)}
				>
					CV <MdOutlineFileDownload />
				</a>
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
