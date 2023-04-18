import { RootState } from "../../store"
import { ErrorMessage } from "../constants/errorMassages"

export type AsyncThunkConfig = {
    state: RootState, 
    rejectValue: ErrorMessage
}