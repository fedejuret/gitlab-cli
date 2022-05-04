const fs = require('fs');
const homedir = require('os').homedir();

exports.getAccessToken = () => {
    const folderName = process.env.FOLDER_NAME;
    const fileName = process.env.ACCESS_TOKEN_FILE_NAME;

    const destinationFolder = `${homedir}/${folderName}/${fileName}`;

    if (!fs.existsSync(destinationFolder)) {
        return false;
    }

    const accessToken = fs.readFileSync(destinationFolder, 'utf8');

    return accessToken;
}

exports.writeAccessToken = (accessToken) => {

    const folderName = process.env.FOLDER_NAME;
    const fileName = process.env.ACCESS_TOKEN_FILE_NAME;

    const destinationFolder = `${homedir}/${folderName}`;

    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder);
    }

    fs.writeFileSync(`${destinationFolder}/${fileName}`, accessToken);

}