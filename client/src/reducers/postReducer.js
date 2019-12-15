// postReducer.js

import { ADD_POST, GET_SUCCESS, EDIT_POST } from '../actions/types';

const defaultState = {posts:[],
                     editPost:{},
                     update:false,
                     updateSubmit: false,
                     updateSuccess: false,
                     addSuccess: false
                    }

export default function postReducer(state =defaultState , action) {
  switch (action.type) {
    case ADD_POST:
      //return [...state, action.payload];
      return {...state,updateSuccess:false,update: false}
      case 'ADD_POST_RELOAD':
      //return [...state, action.payload];
      return {...state,updateSuccess:false,update: false}  
    case 'ADD_POST_SUCCESS':
      return {...state,addSuccess:true}  
    // case DELETE_POST:
    //   return state.filter(post => post.id !== action.payload.id);
    case GET_SUCCESS:
      // return [...state.posts,...action.payload] 
      //return Object.assign({},state,{posts:action.payload});
      return {...state,
              posts: action.payload,
              update: false,
            updateSuccess: false,
          addSuccess: false} 
    
    case EDIT_POST:
      return {...state,
        editPost: action.payload
        } 
    case 'EDIT_POST_SUCCESS':
      return {...state,
          editPost: action.payload,
          update: true
          }
    case 'UPDATE_POST':
      return {
        ...state,
        updateSubmit: true,
        updateSuccess: false
      }
      case 'UPDATE_POST_SUCCESS':
          return {
            ...state,
            updateSubmit: false,
            updateSuccess: true,
            update: true
          }               
    default:
      return state;
  }
}