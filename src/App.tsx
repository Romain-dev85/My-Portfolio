import { Outlet } from "react-router";
import "./global.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<Header />
			<main>
				< ToastContainer position="top-center" theme="dark" closeOnClick={true} />
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
