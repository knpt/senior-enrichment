import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchCampus} from '../reducers/currentCampus'
import AllStudents from './AllStudents'
import Students from './Students'
import {fetchStudents} from '../reducers/students'
import axios from 'axios';

 class SingleCampus extends Component {
    constructor(props){
        super(props)
    }


    componentDidMount(){
        console.log("COMPONENT DID MOUNT FOR SINGLE")
        console.log("PROPS FOR SINGLE CAMPUS: ", this.props)
        const campusId = this.props.match.params.campusId;
        console.log(campusId)
        this.props.fetchCampus(campusId)
        this.props.fetchStudents()
    }


    render(){
       const currentCampus = this.props.currentCampus
       const students = this.props.students

       const filteredStudents = students.filter(student=> student.campusId === currentCampus.id)

       console.log("IM THIS.PROPS" , this.props)
        return(
            <div className = "container">
                
                <h1><span id= "campusname" >{currentCampus.name} {currentCampus.id}</span></h1>
                <img src = {currentCampus.image} width = {150} height = {150}/>
                
                <Students students = {filteredStudents} currentCampus = {currentCampus}/>
            </div>
        )
    }

}

const mapState = function(state){
    return{
       currentCampus: state.currentCampus,
       students: state.students
    }
}


const mapDispatch = {fetchCampus, fetchStudents}
// const mapDispatch = function(dispatch){
//     return {
//         fetchCampus: function(id){
//             const action = fetchCampus(id)
//             dispatch(action);
//         }
//     }
// }

export default connect(mapState, mapDispatch)(SingleCampus)