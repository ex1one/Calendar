import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
  isLoading: boolean;
  error: string | null;
}

export enum EEventActionTypes {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
  SET_REMOVE_EVENT = 'SET_REMOVE_EVENT',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface SetGuestsAction {
  type: EEventActionTypes.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: EEventActionTypes.SET_EVENTS;
  payload: IEvent[];
}

export interface SetRemoveEventAction {
  type: EEventActionTypes.SET_REMOVE_EVENT;
  payload: IEvent;
}

export interface SetEventIsLoadingAction {
  type: EEventActionTypes.SET_IS_LOADING;
  payload: boolean;
}

export interface SetEventErrorAction {
  type: EEventActionTypes.SET_ERROR;
  payload: string | null;
}

export type EventAction =
    SetGuestsAction |
    SetEventsAction |
    SetRemoveEventAction |
    SetEventIsLoadingAction |
    SetEventErrorAction;
