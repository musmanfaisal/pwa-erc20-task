import { useState } from "react";
import { Container } from "react-bootstrap";
import { LedgerTable } from "./components";
import "./App.scss";

function App() {
	return (
		<Container className="pt-3">
			<LedgerTable />
		</Container>
	);
}

export default App;
