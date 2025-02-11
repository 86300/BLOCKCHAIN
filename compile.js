// compile code will go here
const path = require('path'); //cross platform possible
const fs = require('fs');
const solc = require('solc');

const inboxpath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxpath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];