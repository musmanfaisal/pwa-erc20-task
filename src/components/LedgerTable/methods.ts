import Web3 from "web3";
import { coins, minABI } from "./data";

declare type getWalletInformationType = (address: string) => Promise<any>;
declare global {
    interface Window {
        ethereum?: any;
    }
}

const web3 = new Web3(window.ethereum);

export const getWalletInformation: getWalletInformationType = async (address) => {
    const balances = [
        {
            name: "ETH",
            balance: await web3.eth.getBalance(address)
        }
    ];

    for (let coin of coins) {
        try {
            const contract = new web3.eth.Contract(minABI as any, coin.address);
            const coinBalance = await contract.methods.balanceOf(address).call();
            balances.push({ name: coin.name, balance: coinBalance });
        } catch (e) {
            console.log(e);
        }
    }

    return {
        data: balances
    };
}
