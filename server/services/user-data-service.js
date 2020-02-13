const request = require('request-promise');

async function getUserHighscore(name) {
    return await request({
        method: 'GET',
        uri: `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${name}`,
    });
}

module.exports.getUserHighscore = getUserHighscore;