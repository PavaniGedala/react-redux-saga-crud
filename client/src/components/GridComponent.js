import React from 'react';
import './styles.scss';
import { withRouter } from "react-router-dom";
import edit from '../images/edit.png';
import deleteimg from '../images/delete.png';

class GridComponent extends React.Component {


     editPost=  (id)=>
    {
       //editAction(id);
       this.props.history.push(`/editPost/${id}`);
    }

    render()
    {

        const {headings,values,deleteAction} = this.props;
        return (
            
                 <table className="empty">
                     <tbody>
                     <tr key="row">
                         {headings.map(heading=>{
                             return (
                                 <th key={heading}>{heading}</th>
                             )
                         })}
                     </tr>
                     {
                        values.map(value=>{
                            return (
                                
                      <tr key={value.id}>
                      <td className="empty">{value.title}</td>
                      <td className="empty">{value.body}</td>
                      <td className="empty">
                        
                          <img className="imgstyle" alt="edit" src={edit} onClick={() => this.editPost(value.id)}/>
                          <img className="imgstyle" alt="delete" src={deleteimg} onClick={() => deleteAction(value.id)}/>

                      </td>
                  </tr>
                            )
                        })
                     }
                    </tbody>
                 </table>
        )
    }
}

export default withRouter(GridComponent);