import { useEffect, useCallback } from 'react';

const useCurrentBlock = (alchemy, setCurrentBlock) => {
    const core = alchemy.core;

    // Helper function to get the latest block
    const getBlockNumber = useCallback(async () => {
        try {
            setCurrentBlock(await core.getBlockNumber());
        } catch (err) {
            alert(err);
        }
    }, [core, setCurrentBlock]);

    // Check for newest block
    useEffect(() => {
        getBlockNumber();
    }, [getBlockNumber]);
};

export default useCurrentBlock;
