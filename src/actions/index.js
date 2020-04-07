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
    jsonPlaceholder.get(`/users/${id}`)
    .then((response) => {
      dispatch({ type: 'FETCH_USER', payload: response.data})
    });   
  };
