// NewPost.js

import React from 'react';
import { withRouter } from "react-router-dom";
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createPost,GET_STARTED,editPost, UPDATE_POST,addPageReload } from '../actions';
//import axios from 'axios';
class NewPost extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }
 


  componentDidMount()
  {
     const { match: { params:{id} },editPostAction,addPageReload } = this.props;
     if(id){
      editPostAction(id);
     }
     else{
      addPageReload({});
     }

  }


  componentWillReceiveProps(nextProps){
    const {editData,updateSuccess,addSuccess,update} = nextProps;
    if(Object.keys(editData).length>0)
    {
      const {title,body} = editData;
      if(update)
      this.setState({title,body});
    }

    if(updateSuccess || addSuccess){
      this.props.history.push(`/postList`);
    }
    
  }


  // static getDerivedStateFromProps(props, state) {
  //   // Store prevId in state so we can compare when props change.
  //   // Clear out previously-loaded data (so we don't render stale stuff).
  //   if (props.id !== state.prevId) {
  //     return {
  //       externalData: null,
  //       prevId: props.id,
  //     };
  //   }

  //   // No state update necessary
  //   return null;
  // }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {UPDATE_POST,update,createPost} = this.props;
    if (this.state.title.trim() && this.state.body.trim()) {
      const { match: { params:{id} } } = this.props;
      const {title,body} = this.state;
      if(update){
        UPDATE_POST({id,title,body});
      }
      else{
        createPost(this.state);
      }
      
      this.handleReset();  
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    const {update} = this.props;
    return (
      <div className="container">
          <form id="create_post_form" onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Title"
              className="form-control"
              name = "title"
              onChange={ this.handleInputChange }
              value={ this.state.title }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Body"
              name="body"
              className="form-control"
              onChange={ this.handleInputChange }
              value={ this.state.body }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">{update?'Update Post':'Add Post'}</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default compose(connect(
  state=>({
    editData: state.posts.editPost,
    update: state.posts.update,
    updateSuccess: state.posts.updateSuccess,
    addSuccess: state.posts.addSuccess
  }),
  {createPost,GET_STARTED,editPostAction:editPost,UPDATE_POST,addPageReload}
),withRouter)(NewPost);