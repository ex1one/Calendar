import AuthActionCreators from './auth/action-creators';
import EventActionCreators from './event/action-creators';

const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};

export default allActionCreators;
