import { useState, useContext } from 'react';
import { EthereumContext } from '../../store/ethereum-context';
import classes from './BlockInput.module.css';

export default function BlockInput() {
    const { updateCurrentBlock } = useContext(EthereumContext),
        [blockInput, setBlockInput] = useState(1),
        handleBlockChange = e => {
            setBlockInput(e.target.value);
        },
        handleBlockSearch = e => {
            e.preventDefault();
            updateCurrentBlock(+blockInput);
        };

    return (
        <form className={classes.form} onSubmit={handleBlockSearch}>
            <div className={classes.input}>
                <label className={classes.label} htmlFor='block'>
                    Find another block
                </label>
                <input
                    id='block'
                    className={classes['input-field']}
                    type='number'
                    min={1}
                    onChange={handleBlockChange}
                    value={blockInput}
                    required={true}
                />
            </div>
            <button className={classes.submit} type='submit'>
                Find
            </button>
        </form>
    );
}
