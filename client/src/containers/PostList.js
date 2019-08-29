// PostList.js

import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost,GET_STARTED } from '../actions';
class PostList extends React.Component {
 
  componentDidMount()
  {
     this.props.getPosts();
  }
  render(){

    const {posts,onDelete} = this.props;
    return   (
    <div> 
        {posts.posts.length?posts.posts.map(post => {
             return (
               <Post post={ post } onDelete={ onDelete } key={ post.id } />
            );
           }):'No data'}
        </div>)
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    },
    getPosts: () => {
      dispatch(GET_STARTED());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);