import expect from 'expect';
import projectReducer from './project_reducer';
import * as actions from '../actions/project_actions';

describe('Project Reducer', () => {

  it('should add project when passed CREATE_PROJECT_SUCCESS', () => {

    // arrange
    const initialState = [
      { name  : "Project One",
        team  : "Sherman Lee" },
      { name  : "Project Two",
        team  : "Tiffany Huang" },
      { name  : "Project Three",
        team  : "Luis Llobrera" }
    ];

    const newProject = { name  : "Project Four",
                         team  : "Vanessa Chou" };

    const action = actions.createProjectSuccess(newProject);

    //act
    const newState = projectReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(4);
    expect(newState[0].name).toEqual('Project One');
    expect(newState[1].name).toEqual('Project Two');
    expect(newState[2].name).toEqual('Project Three');
  
  });

  it('should update project when passed UPDATE_PROJECT_SUCCESS', () => {

    // arrange
    const initialState = [
      { name  : "Project One",
        team  : "Sherman Lee" },
      { name  : "Project Two",
        team  : "Tiffany Huang" },
      { name  : "Project Three",
        team  : "Luis Llobrera" }
    ];

    const newProject = { name  : "Project Four",
                         team  : "Vanessa Chou" };

    const action = actions.updateProjectSuccess(newProject);

    // act
    const newState = projectReducer(initialState, action);
    const updatedProject = newState.find(a => a.name == newProject.name);
    const updatedTeam = newState.find(a => a.team == newProject.team);
    const untouchedProject = newState.find(a => a.name == 'Project One');

    // assert
    expect(updatedProject.name).toEqual('Project Four');
    expect(updatedTeam.team).toEqual('Vanessa Chou');
    expect(untouchedProject.name).toEqual('Project One');
    expect(newState.length).toEqual(4);

  });
  
});
