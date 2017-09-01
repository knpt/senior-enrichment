import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postStudentThunk } from '../reducers/students'


class AddStudentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputName: '',
            selectCampus: '',
            email: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleCampusChange = this.handleCampusChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNameChange (event){
        const value = event.target.value
        this.setState({
            inputName: value
        })
    }

    handleEmailChange(event){
        const value = event.target.value
        this.setState({
            email: value
        })
    }
    handleCampusChange (event){
        const value = event.target.value
        this.setState({
            selectCampus: value
        })
    }

    handleSubmit (event){
        event.preventDefault()
        const credentials = {name: this.state.inputName, email: this.state. email, campus: this.state.selectCampus}
        console.log("I AM THE CREDENTIALS", credentials)
        this.props.postStudent(credentials)
    }
    

    
    render(){
        
        const campuses= this.props.campuses
        console.log("CAMPUSSESSSASSSKDJSHKFSJHFBS", campuses)
        console.log("KFJHKSJFBKSJFBS")

      return(
        <div className = "container">
            <h3> ADD A NEW STUDENT </h3>
        <form onSubmit = {this.handleSubmit}>
            <div className = "form-group">
            <label htmlFor="name"> Name: </label>
            <input 
                name="newStudentName"
                type="text"
                placeholder=" Enter Student Name"
                onChange = {this.handleNameChange}
            />
            </div>
            <div className = "form-group">
            <label htmlFor="email"> Email: </label>
            <input 
                name="newStudentEmail"
                type="text"
                placeholder=" Enter Student Email"
                onChange = {this.handleEmailChange}
            />
            </div>
            <div>
            <label htmlFor="campus"> Campus:  
                <select onChange = {this.handleCampusChange}> 
                    {campuses.map(campus=>(
                        <option value= {campus.name}> {campus.name} </option>
                    ))}
                    
                </select>
            </label>
            <input 
                type="submit" 
                name= "campusSelect"
            />
            </div>
        </form> 
        </div>
      )
    }

}

const mapStateToProps = function(state){
    return {
        campuses: state.campuses 
    }
}


const mapDispatchToProps = function(dispatch){
    return {
        postStudent(credentials){
            dispatch(postStudentThunk(credentials))
        } 
    }
}

// 
// const mapDispatchToProps = {postStudent: postStudentThunk}

    
    

 export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm)