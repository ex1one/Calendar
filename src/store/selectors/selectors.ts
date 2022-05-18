import { RootState } from '../index';

const selectors = {
  auth: (state: RootState) => state.auth,
  event: (state:RootState) => state.event,
};
export default selectors;
