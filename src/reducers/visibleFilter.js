
import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions/actionTypes';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
    	console.log('COMPLETED',action.filter);
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;