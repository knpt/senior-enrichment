import React, { Component } from 'react';
import { connect } from 'react-redux';

function AddStudentForm(props){

    return(
        <div className = "container">
            <h3> ADD A NEW STUDENT </h3>
        <form >
            <div className = "form-group">
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




export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm)