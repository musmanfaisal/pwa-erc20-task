import Web3 from "web3";
import { coins } from "./data";

declare type getWalletInformationType = (args: { address: string; setData: any }) => Promise<void>;
declare global {
    interface Window {
        ethereum?: any;
    }
}

export const getWalletInformation: getWalletInformationType = async ({ address, setData }) => {
    const provider = "https://mainnet.infura.io/v3/6246707008c04969805a13694dff7951"
    const web3 = new Web3(new Web3.providers.HttpProvider(provider));
    const minABI = [
        {
            "constant": true,
            "inputs": [{
                "name": "who",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
    ];
    const balances = [];

    for (let coin of coins) {
        try {
            const contract = new web3.eth.Contract(minABI as any, coin.address);
            const coinBalance = await contract.methods.balanceOf(address).call();
            balances.push({ name: coin.name, balance: coinBalance });
        } catch (e) {
            console.log(e);
        }
    }

    console.log(balances);
    setData(balances);

}
