if(!!process.env.NODE_ENV){
    return;
}
process.env.NODE_ENV = 'development';
const configJSON = require("./config.json");

const configJSONObjects = configJSON[process.env.NODE_ENV];

for(let key in configJSONObjects) {
    process.env[key] = configJSONObjects[key];
}




