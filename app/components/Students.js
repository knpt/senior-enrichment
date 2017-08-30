//this is a dumb component

import React from 'react';
import { Link } from 'react-router-dom';

const Students = function(props){
    const students = props.students;

    return (
        <div className = "container">
                <h3> STUDENTS </h3>
                <ul>
                {
                    students.map(student=> {
                        return (
                            <div key = {student.id}> 
                            <li>
                              <p>
                              <Link className = "studentlink" to={`/students/${student.id}`}>
                                <span> {student.name} | Campus ID: {student.campusId} </span>
                              </Link> 
                              </p>
                            </li>
                            </div>
                        )
                    })
                }
                </ul>   
            </div>
    )

}

export default Students