import { UPDATE_CURRENT_GOAL, ADD_USER, UPDATE_CURRENT_XP, UPDATE_DEFAULT_GOAL } from '../actions/user-actions';
import { IUserData } from '../interface/i-user';

const initialState: IUserData = {
    username: '',
    skills: [],
    currentSkill: '',
    currentXP: 0,
    goalXP: 0,
    startedXP: 0
};

function rootReducer(state = initialState, action: any): any {
    switch (action.type) {
        case ADD_USER:
            return action.user;
        case UPDATE_CURRENT_XP:
            return {
                ...state,
                currentXP: action.xp
            }
        case UPDATE_DEFAULT_GOAL:
            return {
                ...state,
                currentXP: action.user.currentXP,
                currentSkill: action.user.currentSkill,
                goalXP: action.user.goalXP,
                startedXP: action.user.startedXP
            }
        case UPDATE_CURRENT_GOAL:
            return {
                ...state,
                currentXP: action.objective.currentXP,
                currentSkill: action.objective.currentSkill,
                goalXP: action.objective.goalXP,
                startedXP: action.objective.startedXP
            }
        default:
            return state;
    };
}

export default rootReducer;