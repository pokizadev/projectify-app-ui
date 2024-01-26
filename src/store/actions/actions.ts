import { UserType } from "../../types/types"

export interface InitUserAction {
    type: "INIT_USER"
    payload: UserType
}