import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
]);

function App() {
	return (
		<>
			<Toaster />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
