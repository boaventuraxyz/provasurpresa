import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/index.js';
import Acai from './Pages/Acai/index.js';
import Signo from './Pages/Signo/index.js';
import Sorveteria from './Pages/Sorveteria/index.js'

export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/acai" element={<Acai />} />
				<Route path="/signo" element={<Signo />} />
				<Route path="/sorveteria" element={<Sorveteria />} />
			</Routes>
		</BrowserRouter>
	);
}
