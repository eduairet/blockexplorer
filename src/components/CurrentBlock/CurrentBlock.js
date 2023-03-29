import { useContext } from 'react';
import { EthereumContext } from '../../store/ethereum-context';
import classes from './CurrentBlock.module.css';

export default function CurrentBlock() {
    const { alchemy, currentBlock } = useContext(EthereumContext);
    const network = alchemy.core.config.network.replace('eth-', '');
    return (
        <h1 className={classes.header}>
            {currentBlock !== null ? (
                <span>
                    {`Current ${network} Block: `}
                    <span className={classes['block-number']}>
                        {currentBlock}
                    </span>
                </span>
            ) : (
                <span>Loading Current Block...</span>
            )}
        </h1>
    );
}
