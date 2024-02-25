import { produce } from "immer";
import { ActionType, Actions, AddProjectAction } from "../actions";
import { ProjectState } from "../state";

const projectsReducer = produce((draft: ProjectState, action: ActionType) => {
    switch (action.type) {
        case Actions.ADD_PROJECT: {
            const payload = action.payload as AddProjectAction["payload"];
            draft[payload.id] = payload;
            return draft
        }
    }
});

export { projectsReducer };