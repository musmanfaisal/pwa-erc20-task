import { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { LedgerTableData } from "./data";
import { getWalletInformation } from "./methods";
import { AppContext } from "../../context";
import { IContextValues } from "../../types";

interface LedgerTableProps { }

const LedgerTable: (props: LedgerTableProps) => JSX.Element = ({ }) => {
	const { theme, selectedAddress } = useContext(AppContext) as IContextValues;
	const [data, setData] = useState<any>();

	useEffect(() => {
		if (selectedAddress) getWalletInformation({ address: selectedAddress, setData });
	}, [selectedAddress]);

	return (
		<Container>
			<Table striped bordered hover variant={theme}>
				<thead>
					<tr>
						<th>#</th>
						<th>Token Name</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{LedgerTableData.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{item.name}</td>
							<td>{item.balance}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default LedgerTable;
