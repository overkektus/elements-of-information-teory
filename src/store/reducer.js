import * as actionType from './actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.DELETE_RESULT:
      const updatedArray = state.results.filter(result => result.id !== action.resultId);
      return {
        ...state,
        results: updatedArray
      }
    case actionType.MAKE_CALCULATION:
      return {
        ...state,
        results: state.results.concat(action.result)
      }
  };
  return state;
};

export default reducer;