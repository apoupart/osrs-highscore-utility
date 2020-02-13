export interface IUserData {
    username: string,
    skills: Array<IUserSkills>,
    currentSkill: string,
    goalXP: number,
    currentXP ?:number,
    startedXP: number
};

export interface IUserSkills {
    name: string,
    level: number,
    xp: number
}