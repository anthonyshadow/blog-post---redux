// export default (state = [], action) => {
//   if (action.type === 'FETCH_POSTS') {
//     return action.payload
//   }

//   return state;
// };

//the above reducer is the same thing

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};