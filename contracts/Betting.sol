pragma solidity ^0.6.0;

import "hardhat/console.sol";

contract Betting {
	address payable public owner;
	address payable[] public players;
	uint numElements = 0;
	uint randNonce = 0;
	uint private modulus = 2;

	mapping (address => bytes32) public openBets;

	mapping (address => bytes32[]) public betResults;

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

	function payWinners() public {
		require(msg.sender == owner);
		for(uint i = 0; i < players.length; i++) {
			randNonce++;
			uint result = uint(keccak256(abi.encodePacked(now, msg.sender, randNonce))) % modulus;
			if(result > 0) {
				console.log("You Won!");
				msg.sender.transfer(2 ether);
				betResults[msg.sender].push('Winner');
				betResults[msg.sender].push(openBets[msg.sender]);
			}
			else {
				console.log("Sorry you lost :(");
				betResults[msg.sender].push('Loser');
				betResults[msg.sender].push(openBets[msg.sender]);
			}
		}
		delete players;
	}
}
