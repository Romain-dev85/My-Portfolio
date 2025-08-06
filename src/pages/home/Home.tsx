import { Link } from "react-router";
import "./Home.css";

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
				<li>React</li>
				<li>Javascript</li>
				<li>Typescript</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>Express.js</li>
				<li>MySQL</li>
			</ul>
			<Link to="">PROJETS</Link>
		</div>
	);
};

export default Home;
