import _ from 'lodash'; 
//would use if using memoized fetchuser


import jsonPlaceholder from "../apis/jsonPlaceholder";


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  
  await dispatch(fetchPosts());

//lodash map and uniq
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  
  userIds.forEach(id => dispatch(fetchUser(id)));

  //optional refactor to function above with .chain form lodash
  
  //_.chain(getState().posts)
  //  .map('userId')
  //  .uniq()
  //  .forEach(id => dispatch(fetchUser(id)))
  //  .value()     value executes all the steps above

}

//fetch all posts

// export const fetchPosts = () => (dispatch, getState) => {
//     jsonPlaceholder.get("/posts")
//     .then((response) => {
//       dispatch({ type: 'FETCH_POSTS', payload: response.data})
//     });   
//   };

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

//fetch individual users (see id parameter)

  export const fetchUser = (id) => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    
    dispatch({ type: 'FETCH_USER', payload: response.data})  
  };

  // export const fetchUser = (id) => (dispatch, getState) => {
  //   jsonPlaceholder.get(`/users/${id}`)
  //   .then((response) => {
  //     dispatch({ type: 'FETCH_USER', payload: response.data})
  //   });   
  // };




//alternative option below for fetchuser to only make one xhr request, 
//however only able to call user once

  // //fetch individual users (see id parameter)

  // export const fetchUser = (id) => (dispatch, getState) => {
  //   _fetchUser(id, dispatch);
  // };


  // //helper function to only make 1 xhr call per user for fetchUser action

  // const _fetchUser = _.memoize((id, dispatch) => {
  //   jsonPlaceholder.get(`/users/${id}`)
  //   .then((response) => {
  //     dispatch({ type: 'FETCH_USER', payload: response.data})
  //   });   
  // })