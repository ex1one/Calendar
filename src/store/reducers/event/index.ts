import { EEventActionTypes, EventAction, EventState } from './types';

const initialState: EventState = {
  error: '',
  events: [],
  guests: [],
  isLoading: false,
};

export default function EventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EEventActionTypes.SET_GUESTS:
      return { ...state };
    case EEventActionTypes.SET_IS_LOADING:
      return { ...state };
    case EEventActionTypes.SET_ERROR:
      return { ...state };
    default:
      return state;
  }
}
