const core = require('@actions/core');

const nameToGreet = core.getInput("username");

console.log(`Hello ${nameToGreet}`);