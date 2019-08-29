// actions >> index.js

import uuidv4 from 'uuid/v4';
import { ADD_POST, DELETE_POST } from './types';

export const createPost = ({ title, body }) => ({
  type: ADD_POST,
  payload: {
    id: uuidv4(),
    title,
    body
  }
});

export const ADD_TEST = ({ title, body }) => ({
  type: 'ADD',
  payload: {
    title,
    body
  }
});

export const GET_STARTED = ()  => ({
  type: 'GET_STARTED'
});





export const deletePost = id => ({
  type: DELETE_POST,
  payload: {
    id
  }
});