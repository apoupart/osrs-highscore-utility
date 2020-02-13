const getXp = xp => {
    return xp.split('\n')[0];
}

function getAttack(users) {
    return {
        name: 'attack',
        level: users[3],
        xp: getXp(users[4])
    };
}

function getDefence(users) {
    return {
        name: 'defence',
        level: users[5],
        xp: getXp(users[6])
    };
}

function getStrength(users) {
    return {
        name: 'strength',
        level: users[7],
        xp: getXp(users[8])
    };
}

function getHitpoint(users) {
    return {
        name: 'hitpoint',
        level: users[9],
        xp: getXp(users[10])
    };
}

function getRanged(users) {
    return {
        name: 'ranged',
        level: users[11],
        xp: getXp(users[12])
    };
}

function getPrayer(users) {
    return {
        name: 'prayer',
        level: users[13],
        xp: getXp(users[14])
    };
}

function getMagic(users) {
    return {
        name: 'magic',
        level: users[15],
        xp: getXp(users[16])
    };
}

function getCooking(users) {
    return {
        name: 'cooking',
        level: users[17],
        xp: getXp(users[18])
    };
}

function getWoodcutting(users) {
    return {
        name: 'woodcutting',
        level: users[19],
        xp: getXp(users[20])
    };
}

function getFletching(users) {
    return {
        name: 'fletching',
        level: users[21],
        xp: getXp(users[22])
    };
}

function getFishing(users) {
    return {
        name: 'fletching',
        level: users[23],
        xp: getXp(users[24])
    };
}

function getFiremaking(users) {
    return {
        name: 'firemaking',
        level: users[25],
        xp: getXp(users[26])
    };
}

function getCrafting(users) {
    return {
        name: 'crafting',
        level: users[27],
        xp: getXp(users[28])
    };
}

function getSmithing(users) {
    return {
        name: 'smithing',
        level: users[29],
        xp: getXp(users[30])
    };
}

function getMining(users) {
    return {
        name: 'mining',
        level: users[31],
        xp: getXp(users[32])
    };
}

function getHerblore(users) {
    return {
        name: 'herblore',
        level: users[33],
        xp: getXp(users[34])
    };
}

function getAgility(users) {
    return {
        name: 'agility',
        level: users[35],
        xp: getXp(users[36])
    };
}

function getThieving(users) {
    return {
        name: 'thieving',
        level: users[37],
        xp: getXp(users[38])
    };
}
function getSlayer(users) {
    return {
        name: 'slayer',
        level: users[39],
        xp: getXp(users[40])
    };
}
function getFarming(users) {
    return {
        name: 'farming',
        level: users[41],
        xp: getXp(users[42])
    };
}
function getRunecrafting(users) {
    return {
        name: 'runecrafting',
        level: users[43],
        xp: getXp(users[44])
    };
}
function getHunter(users) {
    return {
        name: 'hunter',
        level: users[45],
        xp: getXp(users[46])
    };
}
function getConstruction(users) {
    return {
        name: 'construction',
        level: users[47],
        xp: getXp(users[48])
    };
}

function getSkillsList(users) {
    return [
        getAttack(users),
        getDefence(users),
        getStrength(users),
        getHitpoint(users),
        getRanged(users),
        getPrayer(users),
        getMagic(users),
        getCooking(users),
        getWoodcutting(users),
        getFletching(users),
        getFishing(users),
        getFiremaking(users),
        getCrafting(users),
        getSmithing(users),
        getMining(users),
        getHerblore(users),
        getAgility(users),
        getThieving(users),
        getSlayer(users),
        getFarming(users),
        getRunecrafting(users),
        getHunter(users),
        getConstruction(users),
    ]
}

module.exports.getSkillsList = getSkillsList;