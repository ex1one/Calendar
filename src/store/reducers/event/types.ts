import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';

export interface IEventState {
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

export interface ISetGuestsAction {
  type: EEventActionTypes.SET_GUESTS;
  payload: IUser[];
}

export interface ISetEventsAction {
  type: EEventActionTypes.SET_EVENTS;
  payload: IEvent[];
}

export interface ISetRemoveEventAction {
  type: EEventActionTypes.SET_REMOVE_EVENT;
  payload: IEvent;
}

export interface ISetEventIsLoadingAction {
  type: EEventActionTypes.SET_IS_LOADING;
  payload: boolean;
}

export interface ISetEventErrorAction {
  type: EEventActionTypes.SET_ERROR;
  payload: string | null;
}

export type TEventAction =
    ISetGuestsAction |
    ISetEventsAction |
    ISetRemoveEventAction |
    ISetEventIsLoadingAction |
    ISetEventErrorAction;
