import React, { useState, createContext, JSXElementConstructor } from "react";
import { IBalances, IContextValues } from "../types";

export const AppContext = createContext<IContextValues | null>(null);

const WithAppContext = ({ children }: JSX.ElementChildrenAttribute) => {
	const [addresses, setAddresses] = useState<string[]>([]);
	const [balances, setBalances] = useState<IBalances[]>([]);
	const [selectedAddress, setSelectedAddress] = useState<string | undefined>();

	return (
		<AppContext.Provider
			value={{
				addresses,
				balances,
				selectedAddress,
				setAddresses,
				setBalances,
				setSelectedAddress,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default WithAppContext;
