# Ethereum Block Explorer

Ethereum Block Explorer by Eduardo Aire

## Demo

[blockexplorer-ebon.vercel.app/](https://blockexplorer-ebon.vercel.app/)

## Features

-   This project works on the Sepolia Network with an Alchemy API Key
-   It loads the latest block when the DApp is loaded
    -   API method `alchemy.core.getBlockNumber()`
-   It displays the data retreived by the block
    -   API method `alchemy.core.getBlockWithTransactions()`
-   It allows you to query any block with an input field
    -   API method `alchemy.core.getBlock()`
-   If the block has transactions you can click on them to see who sent them and wo receive
    -   API method `alchemy.core.getTransactionReceipt(tx)`
