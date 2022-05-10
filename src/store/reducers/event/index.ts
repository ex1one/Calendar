import { EEventActionTypes, EventAction, EventState } from './types';

const initialState: EventState = {
  error: null,
  events: [],
  guests: [],
  isLoading: false,
};

export default function EventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EEventActionTypes.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EEventActionTypes.SET_EVENTS:
      return { ...state, events: action.payload };
    case EEventActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case EEventActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
