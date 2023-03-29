import React from 'react';
import classes from './BlockDetail.module.css';

const DetailRecord = ({ label, value }) => {
    return (
        <p className={classes.record}>
            <strong className={classes.label}>{`${label}: `}</strong>
            <span className={classes.value}>{value}</span>
        </p>
    );
};

export default React.memo(DetailRecord);
