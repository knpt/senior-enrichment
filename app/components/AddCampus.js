import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postCampusThunk } from '../reducers/campuses'


class AddCampus extends Component {
    constructor(props){
        super(props)
        this.state = {
            newCampus: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const value = event.target.value
        this.setState({
            newCampus: value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const campusInfo = {name: this.state.newCampus}
        this.props.postCampus(campusInfo)
    }

    render(){
        return(
            <div className = "container">
                <h3> ADD A BEAUTIFUL NEW CAMPUS </h3>
                <form onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <label htmlFor="campusname"> Campus Name: </label>
                    <input 
                        name="newCampusName"
                        type="text"
                        placeholder="Enter Campus Name"
                        onChange = {this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="submit" 
                        name= "submit"
                    />
                </div>
                </form> 
        </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        
    }
}

const mapDispatchToProps = function(dispatch){
    return{
        postCampus(campusInfo){
            dispatch(postCampusThunk(campusInfo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)