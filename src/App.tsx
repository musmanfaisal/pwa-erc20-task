import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Addresses, LedgerTable } from "./components";
import { AppContext } from "./context";
import "./App.scss";
import { IContextValues } from "./types";

function App() {
	const { selectedAddress, theme, setTheme } = useContext(
		AppContext
	) as IContextValues;

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
	};

	return (
		<div className={`app app-${theme}`}>
			<Container className={`pt-3 ${theme === "light" ? "" : "bg-dark"}`}>
				<Addresses />
				<Button variant={theme} onClick={toggleTheme} className="m-2">
					Switch to {theme === "light" ? "Dark" : "Light"} theme
				</Button>
				<h6>{selectedAddress}</h6>
				<LedgerTable />
			</Container>
		</div>
	);
}

export default App;
