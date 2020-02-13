import { IUserData } from '../interface/i-user';
export const ADD_NOTE = 'ADD_NOTE';
export const ADD_USER = 'ADD_USER';
export const UPDATE_CURRENT_XP = 'UPDATE_CURRENT_XP';
export const UPDATE_CURRENT_GOAL = 'UPDATE_CURRENT_GOAL';
export const UPDATE_DEFAULT_GOAL = 'UPDATE_DEFAULT_GOAL';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export function addNote(title: string, content: string) {
  return { type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id: string) {
  return { type: REMOVE_NOTE, id: id };
}

export function addUser(user: IUserData) {
    return {
        type: ADD_USER,
        user
    };
}
export function updateCurrentXP(xp: number) {
    return {
        type: UPDATE_CURRENT_XP,
        xp
    };
}
export function addNewObjective(objective: any) {
    return {
        type: UPDATE_CURRENT_GOAL,
        objective
    };
}
export function setDefaultGoal(user: any) {
    return {
        type: UPDATE_DEFAULT_GOAL,
        user
    };
}