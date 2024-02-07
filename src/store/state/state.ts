import { Task, User} from "../../types/types";

export interface GlobalState {
    user: User | null;
    adminPersonalTasks: Task[]
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: []
};
