import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// const useActions = () => {
//   const dispatch = useDispatch();
//   return bindActionCreators(allActionCreators, dispatch);
// };

const useActions = (action) => {
  const dispatch = useDispatch();
  return bindActionCreators(action, dispatch);
};

export default useActions;
