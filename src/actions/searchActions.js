import { SEARCH_FILE, FETCH_FILES, FETCH_FILE, LOADING } from './types';
import axios from 'axios';
export const searchFile = text => dispatch => {
  dispatch({
    type: SEARCH_FILE,
    payload: text
  });
};
export const fetchFiles = text => dispatch => {
  console.log(`https://peer-hub.herokuapp.com/api/search?fileName=${text}`)
  axios
    .get(`https://peer-hub.herokuapp.com/api/search?fileName=${text}`) 
    .then((response) => {
        dispatch({
          type: FETCH_FILES,
          payload: response.data
        })  
      }
    )
    .catch(err => console.log(err));
};

export const fetchFile = id => dispatch => {
  axios
    .get(`https://peer-hub.herokuapp.com/api/details?id=${id}`) //`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`
    .then(response =>
      dispatch({
        type: FETCH_FILE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};
export const setLoading = () => {
  return {
    type: LOADING
  };
};