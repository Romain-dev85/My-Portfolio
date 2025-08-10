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
			<h2>
				"Ici, je partage mon univers de développeur : mes compétences
				techniques, mes projets, et la passion qui m’anime au quotidien."
			</h2>
			<section>
				<article>
					<p>
						"Je m’épanouis aussi dans la musique, le sport et la nature. Que ce
						soit derrière un écran ou sur un vélo, j’aime aller au bout des
						choses avec énergie et enthousiasme."
					</p>
				</article>
				<article>
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
				</article>
			</section>
			<nav>
				<Link to="/project">PROJETS</Link>
				<Link to="/contact">CONTACT</Link>
			</nav>
		</div>
	);
};

export default Home;
