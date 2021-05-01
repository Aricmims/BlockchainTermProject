pragma solidity ^0.6.0;

contract Betting {
        address payable public owner;
        address payable[] public players;
        uint numElements = 0;

        mapping (address => bytes32) public openBets;

        receive() external payable {}

        constructor() public {
                owner = msg.sender;
        }

         function bet(bytes32 _teamSelected) public payable {
	     	require(validBet(msg.sender));
                openBets[msg.sender] == _teamSelected;
                players.push(msg.sender);
                owner.transfer(1 ether);
        }

        function validBet(address payable _bettorAddress) view public returns (bool) {
                for(uint i = 0; i < players.length; i++) {
                        if(players[i] == _bettorAddress) {
                                return false;
                        }
                }
                return true;
        }
/*
        function payWinners() public {
                // Call oracle
                address payable[100] memory winners;
                // winners returned from oracle
                for(uint i = 0; i < players.length; i++) {
                        for(uint j = 0; j < winners.length; j++) {
                                if(openBets[players[i]] == winners[j]) {
                                        winners[j].transfer(1 ether);
                                }
                        }
                }
        }
*/

}
