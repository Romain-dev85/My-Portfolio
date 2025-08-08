import { Link } from "react-router";
import "./Home.css";
import {
	SiCss3,
	SiExpress,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiMysql,
	SiNodedotjs,
	SiReact,
	SiTypescript,
} from "react-icons/si";

const Home = () => {
	return (
		<div className="home-container">
			<h1>BIENVENUE, JE SUIS ROMAIN AUVINET</h1>
			<p>
				"Passionné par un code propre et soigné, je mène chaque projet à terme
				avec rigueur et exigence."
			</p>
			<h2>MES COMPETENCES</h2>
			<ul>
				<li>
					<SiReact />
					React
				</li>
				<li>
					<SiJavascript />
					Javascript
				</li>
				<li>
					<SiTypescript />
					Typescript
				</li>
				<li>
					<SiNodedotjs />
					Node.js
				</li>
				<li>
					<SiExpress />
					Express.js
				</li>
				<li>
					<SiMysql />
					Mysql
				</li>
				<li>
					<SiGit />
					Git
				</li>
				<li>
					<SiHtml5 />
					Html
				</li>
				<li>
					<SiCss3 />
					Css
				</li>
			</ul>
			<nav>
				<Link to="/project">PROJETS</Link>
				<Link to="">CONTACT</Link>
			</nav>
		</div>
	);
};

export default Home;
