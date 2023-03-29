import React, { useState, useEffect, useContext, useMemo } from 'react';
import { EthereumContext } from '../../store/ethereum-context';
import { Utils } from 'alchemy-sdk';
import DetailRecord from './DetailRecord';
import classes from './BlockDetail.module.css';
import Transactions from './Transactions';

const hexToInt = hex => parseInt(Utils.hexlify(hex));

export default function BlockDetail() {
    const { alchemy, currentBlock } = useContext(EthereumContext),
        core = alchemy.core,
        [blockData, setBlockData] = useState(null);

    useEffect(() => {
        if (currentBlock) {
            (async () => {
                try {
                    const blockDataRes = await core.getBlockWithTransactions(
                        currentBlock
                    );
                    setBlockData(blockDataRes);
                } catch (err) {
                    alert(err);
                }
            })();
        }
    }, [core, currentBlock]);

    const mapData = data => {
        const { hash, parentHash, miner, difficulty, transactions } = data,
            nonce = parseInt(data.nonce),
            gasLimit = hexToInt(data.gasLimit),
            gasUsed = hexToInt(data.gasUsed),
            baseFeePerGas = hexToInt(data.baseFeePerGas);

        return (
            <div className={classes.container}>
                <DetailRecord label='Hash' value={hash} />
                <DetailRecord label='ParentHash' value={parentHash} />
                <DetailRecord label='Miner' value={miner} />
                <DetailRecord label='Nonce' value={nonce} />
                <DetailRecord label='Difficulty' value={difficulty} />
                <DetailRecord label='GasLimit' value={gasLimit} />
                <DetailRecord label='GasUsed' value={gasUsed} />
                <DetailRecord label='BaseFeePerGas' value={baseFeePerGas} />
                <Transactions txs={transactions} />
            </div>
        );
    };

    return blockData ? mapData(blockData) : <p>Loading Block Data...</p>;
}
