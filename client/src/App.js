// src >> App.js

import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>
            React Crud Example
          </h2>
          <nav className="navbar">
          <ul className="navbar-nav mr-auto">
            <li >
              <Link to={'/'} className="nav-link" >
              Post List
              </Link>
              
            </li>
            <li className="nav-link">
            <Link to={'/addPost'} className="nav-link" >
              Add Post
              </Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route exact path='/' component= {PostList} />
            <Route exact path='/addPost' component= {CreatePost} />

          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;