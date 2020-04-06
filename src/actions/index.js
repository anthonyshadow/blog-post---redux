import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => (dispatch, getState) => {
    jsonPlaceholder.get("/posts")
    .then((response) => {
      dispatch({ type: 'FETCH_POSTS', payload: response})
    });   
  };

// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// }