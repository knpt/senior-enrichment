//this is a dumb component

import React from 'react';
import { Link } from 'react-router-dom';
import AddStudentForm from './AddStudentForm'

const Students = function(props){
    const students = props.students;
    const currentCampus = props.currentCampus
    console.log("STUDENT PROPS SHOULD INCLUDE CURRENT CAMPUS!! ", currentCampus)
    console.log("STUDENT PROPS ARE HERE", props)
    return (
        <div className = "container">
            <h3> STUDENTS: </h3> 
        <table className = 'table'>
            <thead>
                <tr>
                    <th></th>
                    <th> Students </th> 
                    <th> Campus </th>
                </tr>
            </thead>
            <tbody>
                {students.map(student=> (
                    <tr key = {student.id}>
                        <td> </td>
                        <td> 
                            <Link className = "studentlink" to={`/students/${student.id}`}>
                                {student.name} 
                            </Link>
                        </td>
                        <td>  
                                {student.campusId} 
                        </td>
                         <td>
                            <button className="btn btn-default btn-xs"> 
                            <span className="glyphicon glyphicon-remove"></span>
                            </button>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
        <div>
            <AddStudentForm campuses = {currentCampus}/>
        </div>
        </div>

        // <div className = "container">
        //         <h3> STUDENTS </h3>
        //         <ul>
        //         {
        //             students.map(student=> {
        //                 return (
        //                     <div key = {student.id}> 
        //                     <li>
        //                       <p>
        //                       <Link className = "studentlink" to={`/students/${student.id}`}>
        //                         <span> {student.name} | Campus ID: {student.campusId} </span>
        //                       </Link> 
        //                       </p>
        //                     </li>
        //                     </div>
        //                 )
        //             })
        //         }
        //         </ul>   
        //     </div>
    )

}

export default Students