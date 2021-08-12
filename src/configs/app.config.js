const fs = require('fs');
const path = require('path');


const configPath = path.resolve(__dirname + '/../config.json');
const appConf = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

module.exports = {
    appConf
}