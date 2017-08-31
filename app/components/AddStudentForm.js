import React, { Component } from 'react';
import { connect } from 'react-redux';


 export default class AddStudentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputName: '',
            selectCampus: ''
        }
        
    }

//   {newStudentEntry, handleSubmit, handleChange} = props
    render(){
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
                <select >
                    <option value= "cauliflower"> CAULIFLOWER </option>
                </select>
            </label>
            <input type="submit" value="Submit"/>
            </div>

        </form> 
        </div>
      )
    }

}

// const mapStateToProps = function(state){
//     return{
//         newStudentEntry = state.newStudentEntry
//     }
// }

// const mapDispatchToProps = function(dispatch){
//     return {
//         handleChange(evt){
//             const value = evt.target.newStudentName.value
//             dispatch(postStudent({value, }))
//         }
//     }
// }


//  export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm)