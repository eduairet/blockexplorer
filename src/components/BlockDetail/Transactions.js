import React from 'react';
import classes from './BlockDetail.module.css';
import Transaction from './Transaction';

const Transactions = ({ txs }) => {
    return (
        <div className={classes.txs}>
            <p className={classes.label}>Transactions:</p>
            {txs
                ? txs.map((tx, i) => (
                      <Transaction key={`tx-${i}`} tx={tx.hash} />
                  ))
                : null}
        </div>
    );
};

export default React.memo(Transactions);
