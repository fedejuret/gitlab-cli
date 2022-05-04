const axios = require('axios').default;
const chalk = require('chalk');
const boxen = require('boxen');

const { getAccessToken } = require('../utils/files');

const options = require('../index');

if (options.r || options.repositories) {

    const accessToken = getAccessToken();
    const groupId = process.env.GITLAB_GROUP_ID;

    if (!accessToken) {
        console.log(chalk.red(boxen('You need to provide a GitLab access token', { padding: 1 })));
        process.exit(1);
    }
    console.log(accessToken);
    console.log(chalk.green(boxen('Getting your repositories', { padding: 1 })));

    axios.get(`https://gitlab.com/api/v4/groups/${groupId}/projects?private_token=${accessToken}`)
        .then(response => {
            const projects = response.data;

            projects.forEach(project => {
                console.log(chalk.green(`${project.name} - ${project.ssh_url_to_repo}`));
            });
        })
        .catch(error => {
            console.log(chalk.red(boxen(error.response.data.message, { padding: 1 })));
            process.exit(1);
        });


}

