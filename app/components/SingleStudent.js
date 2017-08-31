import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import {fetchStudent} from '../reducers/currentStudent'

class SingleStudent extends Component {



    componentDidMount(){
        const studentId = this.props.match.params.id;
        this.props.fetchStudent(studentId)
    }
    
    render(){
        const currentStudent = this.props.currentStudent
        return (
            <div className = "container">
                <h4>
                <div>
                Name: {currentStudent.name}
                </div>
                <br/>
                <div>
                Email: {currentStudent.email}
                </div>
                </h4>
            </div>
        )
    }
}


const mapState = function(state){
    return {
        currentStudent: state.currentStudent 
    }
}

const mapDispatch = {fetchStudent}

export default connect(mapState, mapDispatch)(SingleStudent)