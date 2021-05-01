pragma solidity ^0.6.0;

import "hardhat/console.sol";

contract Betting {
        address public owner;
        address payable[] public players;
        
        mapping (address => string) public openBets;
        mapping (address => string[]) public betResults;
        
        uint randNonce = 0;
        uint private modulus = 2;
        uint amount = 20 ether;

        fallback() external payable {}
        
        receive() external payable {}

        constructor() public {
                owner = msg.sender;
        }

         function bet(string memory _teamSelected) public payable {
                require(msg.sender != owner);
                require(validBet(msg.sender));
                openBets[msg.sender] = _teamSelected;
                players.push(msg.sender);
                address(this).transfer(1 ether);
        }
        
        function validBet(address payable _bettorAddress) view public returns (bool) {
                for(uint i = 0; i < players.length; i++) {
                        if(players[i] == _bettorAddress) {
                                return false;
                        }
                }
                return true;
        }
        
        function sendEther() public payable {
            require(msg.sender == owner);
            address(this).transfer(amount);
        }
        
        function payWinners() public {
                require(msg.sender == owner);
                uint payout = 2 ether;
                for(uint i = 0; i < players.length; i++) {
                        randNonce++;
                        uint result = uint(keccak256(abi.encodePacked(now, players[i], randNonce))) % modulus;
                        if(result > 0) {
                                console.log("You Won!");
                                players[i].transfer(payout);
                                betResults[players[i]].push('Winner');
                                betResults[players[i]].push(openBets[players[i]]);
                        }
                        else {
                                console.log("Sorry you lost :(");
                                betResults[players[i]].push('Loser');
                                betResults[players[i]].push(openBets[players[i]]);
                        }
                }
                delete players;
        }
}
