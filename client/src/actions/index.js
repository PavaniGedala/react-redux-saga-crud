// actions >> index.js
import { ADD_POST, DELETE_POST, EDIT_POST } from './types';

export const createPost = ({ title, body }) => ({
  type: ADD_POST,
  payload: {
    title,
    body
  }
});

export const addPageReload = ()=>({
  type: 'ADD_POST_RELOAD',
  payload: {}
})

// export const ADD_TEST = ({ title, body }) => ({
//   type: 'ADD',
//   payload: {
//     title,
//     body
//   }
// });

export const UPDATE_POST = ({ title, body, id }) => ({
  type: 'UPDATE_POST',
  payload: {
    id,
    title,
    body
  }
});

export const GET_STARTED = ()  => ({
  type: 'GET_STARTED'
});

export const editPost = id => ({
  type: EDIT_POST,
  payload: {
    id
  }
});



export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});