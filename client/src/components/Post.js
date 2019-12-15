// Post.js

import React from 'react';
import './styles.scss';
import edit from '../images/edit.png';
import deleteimg from '../images/delete.png';
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { title, body, id }, onDelete }) => {
  return (
    
    
                      <tr>
                          <td className="empty">{title}</td>
                          <td className="empty">{body}</td>
                          <td className="empty">
                              <img className="imgstyle" alt="edit" src={edit} onClick={() => onDelete(id)}/>
                              <img className="imgstyle" alt="delete" src={deleteimg} onClick={() => onDelete(id)}/>
                          </td>
                      </tr>
                

    
    // <div style={ styles }>
    //   <h2>{ title }</h2>
    //   <p>{ body }</p>
    //   <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
    //     Remove
    //   </button>
    // </div>
  );
};