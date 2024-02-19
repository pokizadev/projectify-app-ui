import { Task, AdminUser, TeamMember, TeamMemberUser} from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TaskState = Task[];
export type TeamMemberState = {[teamMemberId: string]: TeamMember}

export interface GlobalState {
    user: UserState
    adminPersonalTasks: TaskState
    teamMembers: TeamMemberState
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: [],
    teamMembers: {}
};
