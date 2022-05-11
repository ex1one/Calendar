import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';
import {
  EEventActionTypes,
  SetEventErrorAction, SetEventIsLoadingAction, SetEventsAction, SetGuestsAction,
} from './types';
import { AppDispatch } from '../../index';
import UserService from '../../../API/UserService';

const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EEventActionTypes.SET_GUESTS, payload }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EEventActionTypes.SET_EVENTS, payload }),
  setIsLoading: (payload: boolean): SetEventIsLoadingAction => ({ type: EEventActionTypes.SET_IS_LOADING, payload }),
  setError: (payload: string): SetEventErrorAction => ({ type: EEventActionTypes.SET_ERROR, payload }),
  fetchGuests: () => (dispatch: AppDispatch) => {
    dispatch(EventActionCreators.setIsLoading(true));
    const response = UserService.getUsers();
    response
      .then((resolve) => {
        dispatch(EventActionCreators.setGuests(resolve.data));
      })
      .catch((error) => {
        dispatch(EventActionCreators.setError(error));
      });
    dispatch(EventActionCreators.setIsLoading(false));
  },
  createEvent: (event: IEvent) => (dispatch: AppDispatch) => {
    const events = localStorage.getItem('events') || '[]';
    const json = JSON.parse(events) as IEvent[];
    json.push(event);
    dispatch(EventActionCreators.setEvents(json));
    localStorage.setItem('events', JSON.stringify(json));
  },
  fetchEvents: (userName: string) => (dispatch: AppDispatch) => {
    const events = localStorage.getItem('events') || '[]';
    const json = JSON.parse(events) as IEvent[];
    const currentUserEvent = json.filter((ev) => ev.author === userName || ev.guest === userName);
    dispatch(EventActionCreators.setEvents(currentUserEvent));
  },
};

export default EventActionCreators;
