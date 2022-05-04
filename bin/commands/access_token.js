const fs = require('fs');
const homedir = require('os').homedir();
const chalk = require('chalk');
const boxen = require('boxen');

const options = require('../index');
const { writeAccessToken } = require('../utils/files');

if (options.access_token || options.at) {

    writeAccessToken(options.access_token || options.at);

    console.log(chalk.green(boxen(`Your GitLab access token has been saved`, { padding: 1 })));

}