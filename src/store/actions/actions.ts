import { Task, UserType } from "../../types/types"

export enum Actions {
    INIT_USER = "INIT_USER",
    RESET_STATE = "RESET_STATE",
    POPULATE_TASKS = "POPULATE_TASKS",
    ADD_TASK = "ADD_TASK"
}

export interface InitUserAction {
    type: Actions
    payload: UserType
}

export interface  ResetStateAction {
    type: Actions.RESET_STATE;
}

export interface PopulateTasksActions {
    type: Actions.POPULATE_TASKS;
    payload: Task[] | null;
}

export interface CreateTaskAction {
    type: Actions.ADD_TASK;
    payload: Task
}

export type ActionType = InitUserAction | ResetStateAction | PopulateTasksActions | CreateTaskAction

