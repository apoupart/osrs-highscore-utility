import PostService from './post';
import { URL } from '../enum/url';
import { addUser, updateCurrentXP, setDefaultGoal, addNewObjective } from '../actions/user-actions';
import store from '../store/store';
import { IUserSkills } from '../interface/i-user';

class UserInteraction {
    fetchUserToStore(name: string): void {
        const userObject: object = {
            name
        };
        PostService.httpPost(URL.GET_PLAYER, userObject).then((response) => {
            if (response && response.data && response.data.username) {
                store.dispatch(addUser(response.data));
            }
        });
    }

    setCurrentXPFromCurrentSkill(xp: number) {
        store.dispatch(updateCurrentXP(xp));
    }

    setAccountToDefaultState() {
        const account = {
            currentXP: 0,
            goalXP: 0,
            startedXP: 0,
            currentSkill: ''
        };

        store.dispatch(setDefaultGoal(account));
    }

    getSkillListName(): Array<string> {
        const skillArray: Array<string> = [];
        const state = store.getState();
        const skillList: Array<IUserSkills> = state.skills;
        skillList.forEach((skill: IUserSkills) => {
            if (skill.name) {
                skillArray.push(skill.name);
            }
        });
        return skillArray;
    }

    getSelectedSkillFromList(currentSkill: string, skillList: Array<IUserSkills>): Array<IUserSkills> {
        const filteredSkillList: Array<IUserSkills> = skillList.filter((skill: IUserSkills) => {
            return skill.name === currentSkill;
        });
        return filteredSkillList;
    }

    getSelectedSkill() {
        const state = store.getState();
        const currentSkill: string = state.currentSkill;
        const skillList: Array<IUserSkills> = state.skills;
        const filteredSkillList = this.getSelectedSkillFromList(currentSkill, skillList);

        return filteredSkillList[0] || [];
    }

    getXPFromCurrentSkill(): number {
        const filteredSkillList = this.getSelectedSkill();
        const currentXP: number = filteredSkillList.xp || 0;
        this.setCurrentXPFromCurrentSkill(currentXP);

        return currentXP;
    }

    setXPGain() {
        const state = store.getState();
        let currentXP: number = state.currentXP || 0;
        let goalXP: number = state.goalXP || 0;
        currentXP += 50;
        this.setCurrentXPFromCurrentSkill(currentXP);
        if (currentXP >= goalXP) {
            this.setAccountToDefaultState();
        }
    }

    setSkill(skill: string) {
        const state = store.getState();
        const skillList: Array<IUserSkills> = state.skills;
        const filteredSkillList: Array<IUserSkills> = this.getSelectedSkillFromList(skill, skillList);

        if (filteredSkillList.length) {
            const currentXP: number = filteredSkillList[0].xp || 0;
            const startedXP: number = filteredSkillList[0].xp || 0;
            const goalXP: number = filteredSkillList[0].xp + 1000 || 0;

            const objective: any = {
                currentSkill: skill,
                currentXP,
                startedXP,
                goalXP
            }
            store.dispatch(addNewObjective(objective));
        }
    }

    getGainedXPSinceStart(): number {
        const state = store.getState();
        const { currentXP, startedXP } = state;
        const differenceBetweenStartAndCurrent: number = (currentXP || 0) - startedXP;
        
        return differenceBetweenStartAndCurrent;
    }

    getXPDifferenceBetweenStartAndEnd(): number {
        const state = store.getState();
        const { goalXP, startedXP } = state;
        const differenceBetweenStartAndEnd: number = goalXP - startedXP;
        
        return differenceBetweenStartAndEnd;
    }
}

export default new UserInteraction();
