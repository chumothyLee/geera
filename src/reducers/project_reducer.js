import * as types from '../actions/action_types';
import initialState from './initial_state';


export default function projectReducer(state = initialState.projects, action) {
    console.log("PROJECT REDUCER: " + action.type)
  switch (action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return action.projects;

    case types.CREATE_PROJECT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.project)
      ];

    case types.UPDATE_PROJECT_SUCCESS:
      return [
        ...state.filter(project => project.name !== action.project.name),
        Object.assign({}, action.project)
      ];

    default:
      return state;
  }
}
