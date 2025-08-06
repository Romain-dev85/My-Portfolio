import { Outlet } from "react-router";
import "./global.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
