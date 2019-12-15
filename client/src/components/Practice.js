import React from 'react';
import './styles.scss';
import edit from '../images/edit.png';
import deleteimg from '../images/delete.png';

class Practice extends React.Component {

    render()
    {
        return (
            <div className="container">
                  <table className="auto" border="2" width="100%">
                     <tr>
                         <td width="20%"> 
                              1000000000000000000000000
                         </td>
                         <td width="40%">
                              1000000
                         </td>
                         <td width="40%">
                            1000
                         </td>
                     </tr>
                  </table>

                  <table className="empty">
                      <tr>
                         
                          <th>Title </th>
                          <th>Body</th>
                          <th>Actions</th>
                      </tr>
                      <tr>
                          <td className="empty">Value</td>
                          <td className="empty">Value</td>
                          <td className="empty">
                              <img className="imgstyle" alt="edit" src={edit}/>
                              <img className="imgstyle" alt="delete" src={deleteimg}/>
                          </td>
                      </tr>
                      <tr>
            
                          <td className="empty">value</td>
                          <td className="empty"></td>
                          <td className="empty"></td>
                      </tr>
                  </table>

            </div>
        )
    }
}

export default Practice;