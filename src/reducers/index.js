import {combineReducers} from 'redux';
import projects from './project_reducer';
import ajaxCallsInProgress from './ajax_status_reducer';

const rootReducer = combineReducers({
  projects,
  ajaxCallsInProgress
});

export default rootReducer;
