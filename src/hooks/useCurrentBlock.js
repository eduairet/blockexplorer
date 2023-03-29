import { useEffect, useCallback } from 'react';

const useCurrentBlock = (alchemy, setCurrentBlock) => {
    const core = alchemy.core;

    // Helper function to get the latest block
    const getBlockNumber = useCallback(async () => {
        setCurrentBlock(await core.getBlockNumber());
    }, [core, setCurrentBlock]);

    // Check for newest blocks every second
    useEffect(() => {
        getBlockNumber();
    });
};

export default useCurrentBlock;
