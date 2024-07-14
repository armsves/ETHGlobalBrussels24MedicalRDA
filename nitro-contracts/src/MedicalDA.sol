pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MedicalDA is Ownable {
    event ReportCreated(address patient, bytes32 hashData);

    mapping(address => bytes32) public reportHash;  

    constructor(address owner) {
        transferOwnership(owner);
    }
    
    function storePatientData(address patient, string memory reportData) public onlyOwner {
        bytes32 hashedData = keccak256(abi.encodePacked(reportData, patient));

        reportHash[patient] = hashedData;

        emit ReportCreated(patient, hashedData);
    }

    function verifyPatientRecord(address patient, bytes32 hashedData) public view returns(bool) {
        if (reportHash[patient] != hashedData) return false;
        else return true;
    }
}