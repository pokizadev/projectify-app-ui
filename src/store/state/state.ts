import { Task, UserType } from "../../types/types";

export interface GlobalState {
    user: UserType | null;
    adminPersonalTasks: Task[] | null
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: null
};
