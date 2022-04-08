import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Addresses, LedgerTable } from "./components";
import { AppContext } from "./context";
import "./App.scss";
import { IContextValues } from "./types";

function App() {
	const { selectedAddress } = useContext(AppContext) as IContextValues;

	return (
		<Container className="pt-3">
			<Addresses />
			<h6>
				{selectedAddress}
			</h6>
			<LedgerTable />
		</Container>
	);
}

export default App;
