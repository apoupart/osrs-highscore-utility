const request = require('request-promise');
const fs = require('fs');

const dataFile = './users.json';
const userDataService = require('../services/user-data-service');
const skillService = require('../services/skills-service');

const getXp = xp => {
    return xp.split('\n')[0];
}

const readFile = (path, opts = 'utf8') =>
  new Promise((resolve, reject) => {
    fs.readFile(path, opts, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })

const writeFile = (path, data, opts = 'utf8') =>
    new Promise((resolve, reject) => {
        fs.writeFile(path, data, opts, (err) => {
            if (err) reject(err)
            else resolve()
        })
})

exports.get_current_user = async (req, res) => {
    let rankingObject = {};
    let fileData = [];
    const getUserRequest = await userDataService.getUserHighscore(req.body.name)
    try {
        const userArray = getUserRequest.split(',');
        rankingObject = {
            username: req.body.name || 'N/A',
            skills: skillService.getSkillsList(userArray),
            currentSkill: null,
            currentXP: null
        }
    } catch(e) {
        console.error('error', e);
    }
    if (rankingObject && rankingObject !== {} && rankingObject !== []) {
        const fileRead = await readFile('./mock.json').catch((err) => {
            console.error('error while reading file', err);
            return null;
        });
        if (fileRead) {
            fileData = JSON.parse(fileRead);
        }
    
    }
    const getUserGoalByUsername = fileData.find(user => {
        return user.username === 'username';
    })
    if (getUserGoalByUsername) {
        res.send(getUserGoalByUsername);
        // Send current details
    } else {
        res.send({username: 'N/A'})
        // Send 
    }
};

exports.get_user_by_name = async (req, res) => {
    let fileData = [];
    const fileRead = await readFile('./users.json').catch((err) => {
        console.error('error while reading file', err);
        return null;
    });
    if (fileRead) {
        fileData = JSON.parse(fileRead);
    }
    
    const getUserGoalByUsername = fileData.find(user => {
        return user.username === req.body.name;
    });
    if (getUserGoalByUsername) {
        res.send(getUserGoalByUsername);
        // Send current details
    } else {
        res.send({username: 'N/A'})
        // Send 
    }
};