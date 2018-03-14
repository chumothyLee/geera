import * as types from './action_types';
import projectApi from '../api/mock_project_api';
import {beginAjaxCall, ajaxCallError} from './ajax_status_actions';

export function loadProjectsSuccess(projects) {
  console.log("loadProjectsSuccess action")
  console.log(projects)
  return { type: types.LOAD_PROJECTS_SUCCESS, projects};
}

export function createProjectSuccess(project) {
  return {type: types.CREATE_PROJECT_SUCCESS, project};
}

export function updateProjectSuccess(project) {
  return {type: types.UPDATE_PROJECT_SUCCESS, project};
}

export function loadProjects() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    console.log("PROJECT ACTIONS - loadProjects")
    return projectApi.getAllProjects().then(projects => {
      console.log("AFTER GET ALL PROJECTS")
      console.log(projects)
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveProject(project) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        console.log("PROJECT ACTION - saveProject")
        return projectApi.saveProject(project).then(project => {
            dispatch(createProjectSuccess(project));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

