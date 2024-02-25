import { AdminUser, ProjectWithContributors, TeamMember, TeamMemberUser, Task, } from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TaskState = { [taskId: string]: Task };
export type TeamMemberState = { [teamMemberId: string]: TeamMember };
export type ProjectState = { [projectId: string]: ProjectWithContributors}

export interface GlobalState {
    user: UserState;
    adminPersonalTasks: TaskState;
    teamMembers: TeamMemberState;
    projects: ProjectState
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: {},
    teamMembers: {},
    projects: {}
};
