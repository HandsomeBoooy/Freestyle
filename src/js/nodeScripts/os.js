const os = require('os');
const fs = require('fs');

let cpus = os.cpus();
let platform = os.platform();
let release = os.release();
console.log(platform + '\n' + release);