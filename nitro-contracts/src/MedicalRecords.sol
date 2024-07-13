pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract MedicalRecords is ERC721, Ownable {
    event ReportCreated(uint256 reportId);

    uint256 public nextReportId;

    struct AvailMetadata {
        bytes32 blockHash;
        bytes32 txHash;
        string reportName;
    }

    mapping(uint256 => AvailMetadata) public reportMetadata;  

    constructor(address initialOwner)
        ERC721("Medical Records", "MEDREC")
    {
        transferOwnership(initialOwner);
    }

    

    function storePatientData(AvailMetadata memory _reportMetadata) public onlyOwner {
        uint256 tokenId = nextReportId++;

        reportMetadata[tokenId].blockHash = _reportMetadata.blockHash;
        reportMetadata[tokenId].txHash = _reportMetadata.txHash;
        reportMetadata[tokenId].reportName = _reportMetadata.reportName;

        _mint(msg.sender, tokenId);

        emit ReportCreated(tokenId);
    }

    function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721)
    returns (string memory)
    {
        string memory url = "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/1.png";

        string memory name = reportMetadata[tokenId].reportName;

        bytes memory dataURI = abi.encodePacked(
            "{",
            '"image": "',
            url,
            '",',
             '"name": "',
            name,
            '"'
            "}"
        );

        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(dataURI)
                )
            );
    }


    // The following functions are overrides required by Solidity.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}