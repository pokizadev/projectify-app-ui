import { UserType } from "../../types/types";

export interface GlobalState {
    user: UserType | null;
}

export const initialState: GlobalState = {
    user: null
};
