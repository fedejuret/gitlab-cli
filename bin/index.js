#! /usr/bin/env node



require('dotenv').config();
const yargs = require("yargs");

const usage = `\nUsage: ${process.env.COMMAND_NAME} --help to see all options.\n`;
module.exports = yargs
    .usage(usage)
    .option("r", {
        alias: "repositories",
        describe: "List all repositories from a user"
    })
    .option("at", {
        alias: "access_token",
        describe: "Set your GitLab access token"
    })
    .help(true)
    .argv;

require('./commands/index');