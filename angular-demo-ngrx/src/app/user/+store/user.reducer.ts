import { User } from "../user";
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
    maskUserName: boolean
}

const initialState: UserState = {
    maskUserName: false
}

export function reducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {

      case UserActionTypes.MASK_USER_NAME:
        return {
          ...state,
          maskUserName: action.payload
        };

      default:
        return state;
    }
}