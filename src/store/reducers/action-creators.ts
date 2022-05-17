import AuthActionCreators from './auth/action-creators';
import EventActionCreators from './event/action-creators';

const actionCreators = {
  Auth: AuthActionCreators,
  Event: EventActionCreators,
};

export default actionCreators;
