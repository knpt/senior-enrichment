import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function AddStudentForm(props){

    return(
        <div>
            
            ADD A NEW STUDENT 
        <form >
            <div>
            <label htmlFor="name"> Name: </label>
            <input 
                type="text"
                name="newStudentName"
                placeholder=" Enter Student Name"
            />
            </div>
            <div>
            <label htmlFor="campus"> Campus:  
                <select>
                    <option value= "cauliflower"> CAULIFLOWER </option>
                </select>
            </label>
            <input type="submit" value="Submit"/>
            </div>

        </form> 
        </div>
    )
}

