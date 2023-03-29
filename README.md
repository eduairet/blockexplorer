# Ethereum block explorer

Ethereum Block Explorer by Eduardo Aire

## Demo

[blockexplorer-ebon.vercel.app/](https://blockexplorer-ebon.vercel.app/)

## Features

-   This project runs on the Sepolia Network with an Alchemy API Key
-   Loads the last block when the DApp is loaded
    -   API method `alchemy.core.getBlockNumber()`
-   Displays the data retrieved by the block
    -   API method `alchemy.core.getBlockWithTransactions()`
-   Allows querying any block with an input field
    -   API method `alchemy.core.getBlock()`
-   If the block has transactions, you can click on them to see who sent them and who received them.
    -   API method `alchemy.core.getTransactionReceipt()`
