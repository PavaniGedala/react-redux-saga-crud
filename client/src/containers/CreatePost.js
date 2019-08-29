// CreatePost.js

import { connect } from 'react-redux';
import { ADD_TEST,GET_STARTED } from '../actions';
import NewPost from '../components/NewPost';

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPost: post => {
//       dispatch(createPost(post));
//       //createPost(post);
//     }
//   };
// };

export default connect(
  null,
  {ADD_TEST,GET_STARTED}
)(NewPost);