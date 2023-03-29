import React, { useState } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import useCurrentBlock from '../hooks/useCurrentBlock';

// Never place this sensitive data in the client code,
// it can be exposed to bad actors.
const settings = {
    apiKey: process.env.REACT_APP_API_KEY,
    network: Network.ETH_SEPOLIA,
};
// Ethereum context initialization
export const EthereumContext = React.createContext({
    alchemy: {},
    currentBlock: 0,
});
// Alchemy provider
const alchemy = new Alchemy(settings);
// Ethereum context provider construction
export default function EthereumContextProvider(props) {
    const [currentBlock, setCurrentBlock] = useState(0);
    // Hook that updates latest block
    useCurrentBlock(alchemy, setCurrentBlock);
    return (
        <EthereumContext.Provider
            value={{
                alchemy,
                currentBlock,
            }}
        >
            {props.children}
        </EthereumContext.Provider>
    );
}
