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
                             {/* (student.id)=>{handleClick(student.id)} */}
                            <button value = {student.id} onClick = {handleClick} className="btn btn-default btn-xs"> 
                            <span value = {student.id} className="glyphicon glyphicon-remove"></span>
                            </button>
                        </td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
        <div>
             <AddStudentForm/> 
        </div>
        </div>


    )

}


function handleClick(event){
   console.log(event.target.value)
}

export default Students