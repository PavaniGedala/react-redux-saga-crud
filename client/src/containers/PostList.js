// PostList.js

import React from 'react';
import { connect } from 'react-redux';
import GridComponent from '../components/GridComponent';
import { deletePost,GET_STARTED,editPost } from '../actions';
import '../components/styles.scss'
class PostList extends React.Component {
 
  componentDidMount()
  {
     this.props.getPosts();
  }
  render(){
    const {posts,onDelete,onEdit} = this.props;
    const headings = ['Title','Body','Actions'];
    return   (
      <div className="container">
          {posts.posts.length?<GridComponent 
                                headings={headings}
                                values={posts.posts}
                                deleteAction={onDelete}
                                editAction={onEdit}/>:'No data'}
      </div>

     
    // <div className="container"> 
    // <table className="empty">
    //   <tr>
    //     <th>Title</th>
    //     <th>body</th>
    //     <th>Actions</th>
    //   </tr>
    //   {posts.posts.length?posts.posts.map(post => {
    //          return (
    //            <Post post={ post } onDelete={ onDelete } key={ post.id } />
    //         );
    //        }):'No data'}

    // </table>
        
    //     </div>
        
        )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    editData: state.editPost
  };
};

export default connect(
  mapStateToProps,
  {onDelete: deletePost,
   onEdit: editPost,
   getPosts: GET_STARTED
  }
)(PostList);