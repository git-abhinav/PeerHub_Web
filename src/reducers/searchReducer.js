import {
  SEARCH_FILE,
  FETCH_FILES,
  FETCH_FILE,
  LOADING
} from '../actions/types';
const initialState = {
  text: '',
  files: [],
  loading: false,
  file: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FILE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_FILES:
      return {
        ...state,
        files: action.payload,
        loading: false
      };
    case FETCH_FILE:
      return {
        ...state,
        file: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}