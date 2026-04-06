cd verified-agent-identity\scripts
node createNewEthereumIdentity.js
node manualLinkHumanToAgent.js --challenge "{\"name\":\"CryptoInd\",\"description\":\"Crypto Agent\"}" > out.txt
