import expect from 'expect';
import ajaxStatusReducer from './ajax_status_reducer';
import * as actions from '../actions/ajax_status_actions';

describe('AJAX Status Reducer', () => {
    
    it('begin the AJAX Call', () => {

      const initialState = [
        { name  : "Project One",
          team  : "Sherman Lee" },
        { name  : "Project Two",
          team  : "Tiffany Huang" },
        { name  : "Project Three",
          team  : "Luis Llobrera" }
      ];

      const action = actions.beginAjaxCall();

      //act
      const newState = ajaxStatusReducer(initialState, action);
  
      //assert
      expect(newState.length).toEqual(48);
      expect(newState[0].name).toEqual();
      expect(newState[1].team).toEqual();
      expect(newState[2].name).toEqual();
    
    });

    it('checks AJAX errors', () => {

      const initialState = [
        { name  : "Project One",
          team  : "Sherman Lee" },
        { name  : "Project Two",
          team  : "Tiffany Huang" },
        { name  : "Project Three",
          team  : "Luis Llobrera" }
      ];

      const action = actions.ajaxCallError();

      //act
      const newState = ajaxStatusReducer(initialState, action);
  
      //assert
      expect(newState.length).toBe();

    });
  
});
  