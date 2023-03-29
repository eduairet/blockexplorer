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
    currentBlock: null,
    updateCurrentBlock() {},
});
// Alchemy provider
const alchemy = new Alchemy(settings);
// Ethereum context provider construction
export default function EthereumContextProvider(props) {
    const [currentBlock, setCurrentBlock] = useState(null),
        updateCurrentBlock = async block => {
            try {
                const blockRes = await alchemy.core.getBlock(block);
                if (blockRes && blockRes.number) {
                    setCurrentBlock(blockRes.number);
                } else {
                    throw new Error('Block above the last block!');
                }
            } catch (err) {
                alert(err);
            }
        };
    // Hook that updates latest block
    useCurrentBlock(alchemy, setCurrentBlock);
    return (
        <EthereumContext.Provider
            value={{
                alchemy,
                currentBlock,
                updateCurrentBlock,
            }}
        >
            {props.children}
        </EthereumContext.Provider>
    );
}
