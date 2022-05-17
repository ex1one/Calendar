import { EEventActionTypes, IEventState, TEventAction } from './types';

const initialState: IEventState = {
  error: null,
  events: [],
  guests: [],
  isLoading: false,
};

export default function EventReducer(state = initialState, action: TEventAction): IEventState {
  switch (action.type) {
    case EEventActionTypes.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EEventActionTypes.SET_EVENTS:
      return { ...state, events: action.payload };
    case EEventActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case EEventActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case EEventActionTypes.SET_REMOVE_EVENT:
      return { ...state, events: state.events.filter((event) => event.description !== action.payload.description) };
    default:
      return state;
  }
}
