import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/project",
				element: <Project />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

export default router;
