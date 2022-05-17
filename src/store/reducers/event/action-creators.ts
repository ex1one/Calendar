import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';
import {
  EEventActionTypes,
  ISetEventErrorAction,
  ISetEventIsLoadingAction,
  ISetEventsAction,
  ISetGuestsAction,
} from './types';
import { AppDispatch } from '../../index';
import getUsers from '../../../API/UserService';

const EventActionCreators = {
  setGuests: (payload: IUser[]): ISetGuestsAction => ({ type: EEventActionTypes.SET_GUESTS, payload }),
  setEvents: (payload: IEvent[]): ISetEventsAction => ({ type: EEventActionTypes.SET_EVENTS, payload }),
  setIsLoading: (payload: boolean): ISetEventIsLoadingAction => ({ type: EEventActionTypes.SET_IS_LOADING, payload }),
  setError: (payload: string): ISetEventErrorAction => ({ type: EEventActionTypes.SET_ERROR, payload }),
  removeEvent: (payload: IEvent) => (dispatch: AppDispatch) => {
    dispatch({ type: EEventActionTypes.SET_REMOVE_EVENT, payload });
    const events = JSON.parse(localStorage.getItem('events') || '[]') as IEvent[];
    const json = events.filter((event) => event.description !== payload.description);
    localStorage.setItem('events', JSON.stringify(json));
  },
  fetchGuests: () => (dispatch: AppDispatch) => {
    dispatch(EventActionCreators.setIsLoading(true));
    const response = getUsers();
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
