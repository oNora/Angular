import { Action } from '@ngrx/store';

export enum UserActionTypes {
  MASK_USER_NAME = '[User] Mask User Name'
}

export class MaskUserName implements Action {
  readonly type = UserActionTypes.MASK_USER_NAME;

  constructor(public payload: boolean) { }
}

export type UserActions = MaskUserName;