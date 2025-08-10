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
			<h2>
				"Vous trouverez ici des projets que j’ai créés en formation (en groupe
				ou en solo), ainsi que mes projets personnels."
			</h2>
			<section>
				<article>
					<div>
						<img
							src="/assets/images/gard-malin.png"
							alt="screenshot Gard'Malin website"
						/>
					</div>
					<div>
						<h3>Gard'Malin</h3>
						<a
							href="https://github.com/Romain-dev85/GardMalin"
							target="blank"
							rel="noopener noreferrer"
						>
							<SiGithub />
						</a>
						<p>
							Site web de réservation de crèche. L’objectif était de créer un
							site afin de pouvoir reservé une place en crèche pour un enfant.
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
					</div>
				</article>
				<article>
					<div>
						<img
							src="/assets/images/savor-safari.png"
							alt="screenshot Savor Safari website"
						/>
					</div>
					<div>
						<h3>Savor Safari</h3>
						<a
							href="https://github.com/Romain-dev85/SavorSafari"
							target="blank"
							rel="noopener noreferrer"
						>
							<SiGithub />
						</a>
						<p>
							Site web permettant d’afficher une liste de recette en
							sélectionnant un pays.
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
					</div>
				</article>
				<article>
					<div>
						<img
							src="/assets/images/iconic-album-cover.png"
							alt="screenshot Iconic Album Cover website"
						/>
					</div>
					<div>
						<h3>Iconic Album Cover</h3>
						<a
							href="https://github.com/Romain-dev85/album_cover"
							target="blank"
							rel="noopener noreferrer"
						>
							<SiGithub />
						</a>
						<p>
							Application web développée avec un CRUD complet (Create, Read,
							Update, Delete), permettant la gestion de pochettes d’albums :
							ajout, modification et suppression, incluant la gestion d’images.
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
					</div>
				</article>
			</section>
		</div>
	);
};

export default Project;
