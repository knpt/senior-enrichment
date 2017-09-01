import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Students from './Students'
import {fetchStudents} from '../reducers/students'




class Home extends Component {

    componentDidMount(){
        this.props.fetchStudents();
    }

    render(){
        const students = this.props.students
       
        return (
            <Students students = {students}/>
        )
    }
}

const mapStateToProps = function(state, ownProps){
    return {
        students: state.students
    }
}

// const mapDispatchToProps = {fetchStudents}

const mapDispatchToProps = function(dispatch){
    return {
        fetchStudents: function(){
            const action = fetchStudents()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// class Home extends Component {

//     componentDidMount(){
//         this.props.fetchStudents()
//     }

//     render(){
//         console.log("THIS.PROPS WITHIN HOME: ", this.props)
//         return (
//             <Students students = {this.props.students}/>
//         )
//     }
// }

// const mapState = function(state){
//     return {
//         students: state.students 
//     }
// }

// const mapDispatch = {fetchStudents}

// export default connect(mapState, mapDispatch)(Home)