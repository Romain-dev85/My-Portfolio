import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";

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
		],
	},
]);

export default router;
