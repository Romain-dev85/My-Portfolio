import {
	SiCss3,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiMysql,
	SiReact,
} from "react-icons/si";
import "./Project.css";

const Project = () => {
	return (
		<div className="project-container">
			<h1>PROJETS</h1>
			<p>
				Vous trouverez ici des projets que j'ai crée en formation (en groupe ou
				en solo), mais également mes propres projets
			</p>
			<section>
				<article>
					<div>
						<img
							src="/assets/images/gard-malin.png"
							alt="screenshot Gard'Malin website"
						/>
					</div>
					<h2>Gard'Malin</h2>
					<a
						href="https://github.com/wildcodeschool-2025-03/JS-WestDevs-P3-GardMalin"
						target="blank"
					>
						<SiGithub />
					</a>
					<p>
						Site web de réservation de crèche. L’objectif était de créer un site
						afin de pouvoir reservé une place en crèche pour un enfant
					</p>
					<ul>
						<li>
							<SiHtml5 />
						</li>
						<li>
							<SiCss3 />
						</li>
						<li>
							<SiJavascript />
						</li>
						<li>
							<SiReact />
						</li>
						<li>
							<SiMysql />
						</li>
					</ul>
				</article>
				<article>
					<div>
						<img
							src="/assets/images/savor-safari.png"
							alt="screenshot Savor Safari website"
						/>
					</div>
					<h2>Savor Safari</h2>
					<a
						href="https://github.com/wildcodeschool-2025-03/JS-WestDevs-P2-SavorSafari"
						target="blank"
					>
						<SiGithub />
					</a>
					<p>
						Site web permettant d’afficher une liste de recette en sélectionnant
						un pays
					</p>
					<ul>
						<li>
							<SiHtml5 />
						</li>
						<li>
							<SiCss3 />
						</li>
						<li>
							<SiJavascript />
						</li>
						<li>
							<SiReact />
						</li>
					</ul>
				</article>
				<article>
					<div>
						<img
							src="/assets/images/iconic-album-cover.png"
							alt="screenshot Iconic Album Cover website"
						/>
					</div>
					<h2>Iconic Album Cover</h2>
					<a href="https://github.com/Romain-dev85/album_cover" target="blank">
						<SiGithub />
					</a>
					<p>
						Site web permettant de réaliser un CRUD complet. Possibilité
						d’ajouter une pochette d’album, de la modifier et de la supprimer.
					</p>
					<ul>
						<li>
							<SiHtml5 />
						</li>
						<li>
							<SiCss3 />
						</li>
						<li>
							<SiJavascript />
						</li>
						<li>
							<SiReact />
						</li>
						<li>
							<SiMysql />
						</li>
					</ul>
				</article>
			</section>
		</div>
	);
};

export default Project;
