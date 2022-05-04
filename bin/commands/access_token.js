const fs = require('fs');
const homedir = require('os').homedir();
const chalk = require('chalk');
const boxen = require('boxen');

const options = require('../index');

if (options.access_token || options.at) {

    const folderName = process.env.FOLDER_NAME;
    const fileName = process.env.ACCESS_TOKEN_FILE_NAME;

    const destinationFolder = `${homedir}/${folderName}`;

    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder);
    }

    fs.writeFileSync(`${destinationFolder}/${fileName}`, options.access_token);

    console.log(chalk.green(boxen(`Your GitLab access token has been saved in ${destinationFolder}/${fileName}`, {padding: 1})));

}