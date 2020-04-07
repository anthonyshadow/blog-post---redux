import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";





//fetch all posts

export const fetchPosts = () => (dispatch, getState) => {
    jsonPlaceholder.get("/posts")
    .then((response) => {
      dispatch({ type: 'FETCH_POSTS', payload: response.data})
    });   
  };

//fetch individual users (see id parameter)

  export const fetchUser = (id) => (dispatch, getState) => {
    _fetchUser(id, dispatch);
  };


  //helper function

  const _fetchUser = _.memoize((id, dispatch) => {
    jsonPlaceholder.get(`/users/${id}`)
    .then((response) => {
      dispatch({ type: 'FETCH_USER', payload: response.data})
    });   
  })