// src >> App.js

import React, { Component } from 'react';
import PostList from './containers/PostList';
import NewPost from './components/NewPost';
import Practice from './components/Practice';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const stylesApp = {
//   marginTop: 40
// }

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
              <Link to={'/postList'} className="nav-link" >
              Post List
              </Link>
              
            </li>
            <li className="nav-link">
            <Link to={'/addPost'} className="nav-link" >
              Add Post
              </Link>
            </li>
            <li className="nav-link">
            <Link to={'/practice'} className="nav-link">
              Practice
            </Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route exact path='/postList' component= {PostList} />
            <Route exact path='/addPost'  render={() => <NewPost key="1" />} />
            <Route exact path='/practice' component = {Practice}/>
            <Route exact path='/editPost/:id' render={() => <NewPost key="2" />}/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;