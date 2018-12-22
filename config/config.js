const configJSON = require("./config.json");
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configJSONObjects = configJSON[process.env.NODE_ENV];

for(let key in configJSONObjects) {
    process.env[key] = configJSONObjects[key];
}