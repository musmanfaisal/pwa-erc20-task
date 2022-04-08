import { useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { Addresses, LedgerTable } from "./components";
import { AppContext } from "./context";
import "./App.scss";
import { IContextValues } from "./types";

function App() {
	const { addresses, setAddresses, selectedAddress, setSelectedAddress } =
		useContext(AppContext) as IContextValues;
	const loadApp = () => {
		try {
			const _addresses = JSON.parse(localStorage.getItem("addresses") as any);
			if (_addresses?.length !== 0) setAddresses(_addresses);
		} catch (e) {
			console.log("ERROR GETTING ADDRESSES FROM LOCAL STORAGE", e);
		}
	};

	useEffect(() => {
		loadApp();
	}, []);

	return (
		<Container className="pt-3">
			<Addresses addresses={addresses} onSelect={setSelectedAddress} />
			<h6>{selectedAddress}</h6>
			<LedgerTable address={selectedAddress} />
		</Container>
	);
}

export default App;
