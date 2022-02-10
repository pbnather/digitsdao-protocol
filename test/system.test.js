const { expect, assert } = require("chai");
const { network } = require("hardhat");

describe("Digits Contract", function() {
    
    let owner, buyer;

    beforeEach(async () => {
        // Getting the signers provided by ethers
        const signers = await ethers.getSigners();
        // Creating the active wallets for use
        owner = signers[0];
        buyer = signers[1];
    });
});
