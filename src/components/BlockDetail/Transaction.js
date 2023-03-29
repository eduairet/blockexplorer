import { useState, useContext } from 'react';
import { EthereumContext } from '../../store/ethereum-context';
import classes from './BlockDetail.module.css';

export default function Transaction({ tx }) {
    const [showDetail, setShowDetail] = useState(false),
        [receipt, setReceipt] = useState(null),
        { alchemy } = useContext(EthereumContext);

    const handleDetail = async _ => {
        try {
            setShowDetail(prevDetail => !prevDetail);
            if (!receipt) {
                const receipt = await alchemy.core.getTransactionReceipt(tx);
                setReceipt(receipt);
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <p className={classes.tx} onClick={handleDetail}>
            <span>{tx}</span>
            {showDetail && receipt ? (
                <span className={classes.detail}>
                    <span className={classes.receipt}>
                        From: {receipt.from}
                    </span>{' '}
                    <span className={classes.receipt}>To: {receipt.to}</span>{' '}
                </span>
            ) : null}
        </p>
    );
}
