// postReducer.js

import { ADD_POST, GET_SUCCESS } from '../actions/types';

export default function postReducer(state = {posts:[]}, action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    // case DELETE_POST:
    //   return state.filter(post => post.id !== action.payload.id);
    case GET_SUCCESS:
      // return [...state.posts,...action.payload] 
      return Object.assign({},state,{posts:action.payload}); 
    default:
      return state;
  }
}